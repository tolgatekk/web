import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductCard from '../components/ProductCard/ProductCard'

const Productpage = () => {
    const {products}= useContext(ProductContext);
   // console.log(products);
  
  return (
    <>
     <div>
      <h2>Tüm Ürünler</h2>
      <div className="product-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
   
    <div>
       
    {products.map(product => (<ProductCard key={product.id} product={product}></ProductCard>))}
      
    </div>
    </>
    
  )
}

export default Productpage