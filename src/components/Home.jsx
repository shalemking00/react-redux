import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../features/products/productSlice'
import Card from './Card'
import Spinner from './Spinner'


const Home = () => {

  const dispatch = useDispatch()
  const { products, isError, isLoading, isSuccess, message } = useSelector((state) => state.product)


  useEffect(() => {
    dispatch(getAllProducts())


  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className=''>
        <div className='row m-5 p-5'>
          {products &&
            products.map((product) => {
              return (
                <div className='col m-5 child col-lg-4 col-md-6 mb-5'>
                  <Card url={product.url}
                    name={product.productName}
                    description={product.description}
                    features={product.features} price={product.price} id={product._id} />

                </div>
              )
            })
          }
        </div>
     
    </div>

  )
}

export default Home