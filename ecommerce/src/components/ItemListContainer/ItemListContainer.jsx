import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../Data/asyncMock'
import { doc, getDoc, getDocs, collection, query, where, getFirestore } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { db } from '../../firebase/config'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState (true)

  const { categoryId } = useParams()
  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId
    ? query(collection(db,'Products'),where('category','==',categoryId))
    : collection(db,'Products')

    getDocs (collectionRef)
    .then(response =>{
      const productsAdapted = response.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id,...data}
      })
      setProducts(productsAdapted)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
    
  }, [categoryId])

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer