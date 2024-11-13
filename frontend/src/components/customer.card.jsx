import React from 'react';
import './customer.card.css';

const CustomerCard = ({ customer, onEdit, onDelete }) => {
  return (
    <div className="customer-card">
      <b>{customer.name}</b><br/>
      <small>Email: {customer.email}</small><br/>
      <small>Phone: {customer.phone}</small>
      <small style={{float:'right', fontSize:'9px', color:'#bbb'}}>Created At:{new Date(customer.created_at).toLocaleString()}</small>

      {/* <div style={{flexDirection: 'row'}}>
        <button onClick={() => onEdit(customer)} disabled>Editar</button>
        <button onClick={() => onDelete(customer.id)} disabled>Eliminar</button>
      </div> */}
 
    </div>
  );
};

export default CustomerCard;