import React from 'react';
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cart = useSelector(state => state.cart)

  return (
    <nav className={styles["navigation-bar"]}>
      <div className={styles["menu"]}>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/products">Ürünler</Link>
      </div>
      <div className="logo"><i className="fa-solid fa-cart-shopping"></i> {cart.length}</div>
    </nav>
  );
};

export default NavBar;