import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <p>Elige una opción para continuar</p>
      <div className="menu">
        <ul className="menu-list">
          <li>
              <Link to="/pos" className="menu-link">Sistema POS</Link>
            </li>
            <li>
              <Link to="/facturas" className="menu-link">Gestión de facturas</Link>
            </li>
          </ul>
      </div>
      <hr styles="width:100%"/>
      <div className="menu">
        <ul className="menu-list">
            <li>
              <Link to="/customer" className="menu-link">Gestión de clientes</Link>
            </li>
            <li>
              <Link to="/manufacturers" className="menu-link">Gestión de fabricantes</Link>
            </li>
            <li>
              <Link to="/products" className="menu-link">Gestión de productos</Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Home;
