import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductCard from '../components/ProductCard/ProductCard'

const Homepage = () => {
    const {products}= useContext(ProductContext);
   // console.log(products);
   const populerProducts = products.filter(product => product.rating > 4.5)
   // console.log(populerProducts);
  return (
    <>
     <div>
      <h2>Popüler Ürünler</h2>
      <div className="product-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>

    <div>
    {populerProducts.map(product => (<ProductCard key={product.id} product={product}></ProductCard>))}
    
      
    </div>
    </>
    
  )
}

export default Homepage