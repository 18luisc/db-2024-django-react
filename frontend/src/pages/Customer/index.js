import React, { useState, useEffect } from 'react';
import './styles.css';
import { useNavigate} from "react-router-dom";
import CustomerCard from '../../components/customer.card'

import { fetchCustomer, createCustomer } from '../../api/customerApi';

const Customer = () => {
  let navigate = useNavigate();
  
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const getCustomers = async () => {
      const data = await fetchCustomer();
      setCustomers(data);
    };
    getCustomers();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      // Add the new customer to the list
      const newCustomer = {
        name,
        email,
        phone,
        address,
        created_at: new Date().toISOString(),
      };
      await createCustomer(newCustomer);
      const updatedCustomer = await fetchCustomer();
      setCustomers(updatedCustomer);
      // setCustomers([...customers, newCustomer]);
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="home-container">      
      <div className="content">
        
        <div className="form-container">
        <form onSubmit={handleSubmit} className="customer-form">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            
            <label htmlFor="email">Correo:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <label htmlFor="phone">Telefono:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            
            <label htmlFor="address">Dirrección:</label>
            <input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            
            <div style={{flexDirection: 'row'}}>
              <button onClick={() => navigate(-1)}> Regresar </button> 
              <button type="submit">Agregar + </button>
            </div>
          </form>
        </div>

        <div className="list-container">
          <ul>
            {customers.map((customer, index) => (
              <CustomerCard 
                key={index}
                customer={customer}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customer;
