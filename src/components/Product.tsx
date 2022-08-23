import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps{
  product: IProduct
}

export function Product(props: ProductProps){
  const [details, setDetails]=useState( false)

  const btnBgClassName = details ? "bg-yellow-400": "bg-blue-400"
  const btnClasses = ['py-2 px-4 border', btnBgClassName]
  return(
    <div
      className='border py-2 px-4 rounded flex flex-col item-center mb-2'
    >
      <img src={props.product.image} className='w-1/6' alt={props.product.title} />
      <p>{props.product.title}</p>
      <span className='font-bolt'>{props.product.price}</span>
      <button className={btnClasses.join( )} onClick={() => setDetails(prev => !prev)}> {details ? 'hide details' :'show details' }</button>
      {/* <button className='py-2 px-4 border bg-blue-400' onClick={() => setDetails(false)}> hide details</button> */}
      { details &&  <div>
        <p>{props.product.description}</p>
          <p>Rate: <span style={{ fontWeight:'bold'}}>{props.product?.rating?.rate}</span></p>
      </div>}

    </div>
  )
}
