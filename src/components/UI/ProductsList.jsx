import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({products}) => {
  return (
    <>

    {
        products?.map((product, index) => (
            <ProductCard product={product} key={index}/>
        ))
    }
    </>
  )
}

export default ProductsList