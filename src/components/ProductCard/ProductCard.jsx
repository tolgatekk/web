import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct } from '../../redux/Actions'
import styles from './product.module.css';

const ProductsCard = ({product}) => {
const cart =useSelector(state => state.cart)
const dispatch = useDispatch()
console.log(cart);
  return (
    <>
   
    <nav className={styles["product-card"]}>
    
      <img src={product.thumbnail} alt="{product.title}"/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={()=> dispatch(addProduct(product))}>+</button>
      <button onClick={() => dispatch(deleteProduct(product))}>-</button>

    </nav>
    </>
  )
}

export default ProductsCard