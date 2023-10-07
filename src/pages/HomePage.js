import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const url ="https://fakestoreapi.com/products/";
  let [products,setProducts] = useState([]);
  let [loading,setLoading] = useState(true);

  async function getAllProducts(){
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
    setLoading(false)
  }

  useEffect(()=>{
    getAllProducts()
  },[])
  return (
    <div className='max-w-7xl mx-auto flex flex-wrap justify-between'>
      {loading ? "Fetching all Products":(
        products.map((product)=>{
          return(
           <ProductCard product={product}/>
          )
        })
      )}
    </div>
  )
}
