import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const ProductContext= createContext();

export const ProductContextProvider = ({children}) =>{

    const [products,setProducts] = useState([]);


    useEffect(() =>{
        const getProducts = async () => {
            const response = await axios('https://dummyjson.com/products')
            setProducts(response.data.products)
        }
        getProducts()
    },[])
    return(
        <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
    )
}