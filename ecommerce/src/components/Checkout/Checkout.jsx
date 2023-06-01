import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Timestamp, addDoc, collection, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../firebase/config";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import './Checkout.css'

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        items: cart,
        total: total(),
        date: Timestamp.fromDate(new Date())
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map(prod => prod.id);
      const productRef = collection(db, 'Products');

      const productsAdaptedFromFirestore = await getDocs(query(productRef, where('id', 'in', ids)));
      const { docs } = productsAdaptedFromFirestore;

      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find(prod => prod.id === doc.id);
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error('Hay productos fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : orderId ? (
        <h2>El id de su orden es: {orderId}</h2>
      ) : (
        <CheckoutForm onConfirm={createOrder} />
      )}
    </div>
  );
};

export default Checkout;