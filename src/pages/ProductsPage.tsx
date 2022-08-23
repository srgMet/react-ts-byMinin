// import { createElement as e, useState} from 'react';
import { useContext, useState } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/loader';
import { Modal } from '../components/modal';
import { Product } from '../components/Product'
import { ModalContext } from '../Context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
// import {products} from './data/products'



export function ProductPage() {
const { loading, error, products, addProduct } = useProducts()

// const [modal, setModal]=useState(false)
const { modal, open, close } = useContext(ModalContext)


const createHandler = (products: IProduct) => {
  // setModal(false)
  close()
  addProduct(products)
}

return (
  <div className="container mx-auto max-w-2xl pt-5">
    {loading && <Loader />}
    {error && <ErrorMessage error={error} />}
    {products.map(product => <Product product={product} key={product.id} />)}

    {/* {modal && <Modal title='Create  new product' onClose={()=>setModal(false)}> */}
    {modal && <Modal title='Create  new product' onClose={close}>
      <CreateProduct onCreate={createHandler} />
    </Modal>}

    {/* <Product product={products[0]}/> */}
    {/* <Product product={products[1]} /> */}
    <button className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-3 py-1"
      //  onClick={()=>setModal(true)}
      onClick={open}
    >+</button>
  </div>
)
  // const[count,setCount]= useState(0)
  // return e('div', { className:'container' },[
  //   e('h1', {className: 'font-bold', key: 1 }, `Hello from js ${count}`),
  //   e('button', {
  //     className: 'py-2 px-4 border',
  //     key: 2 ,
  //     onClick: ()=>setCount( count+1)
  //   }, 'click me!')
  // ])
}