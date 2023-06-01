import { useState } from "react";
import { CartContext } from "../Context/CartContext";
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    let isValid = true;

    if (name.trim() === '') {
      setNameError('Por favor, ingresa tu nombre');
      isValid = false;
    } else {
      setNameError('');
    }

    if (phone.trim() === '') {
      setPhoneError('Por favor, ingresa tu número de teléfono');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (email.trim() === '') {
      setEmailError('Por favor, ingresa tu correo electrónico');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      const userData = {
        name,
        phone,
        email,
      };

      onConfirm(userData);
    }
  };

  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Nombre
          <input
            className='Input'
            type='text'
            value={name}
            onChange={({ target }) => {
              setName(target.value);
              setNameError('');
            }}
          />
          {nameError && <p className='Error'>{nameError}</p>}
        </label>
        <label className="Label">
          Telefono
          <input
            className='Input'
            type='text'
            value={phone}
            onChange={({ target }) => {
              setPhone(target.value);
              setPhoneError('');
            }}
          />
          {phoneError && <p className='Error'>{phoneError}</p>}
        </label>
        <label className="Label">
          Email
          <input
            className='Input'
            type='email'
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
              setEmailError('');
            }}
          />
          {emailError && <p className='Error'>{emailError}</p>}
        </label>
        <div className='Label'>
          <button type='submit' className='Button' disabled={nameError || phoneError || emailError}>
            Crear orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;