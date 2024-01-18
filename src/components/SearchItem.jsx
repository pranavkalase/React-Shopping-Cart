// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import items from './Data';
import Product from './Product';



const SearchItem = ({cart , setCart}) => {
  const {term}= useParams();

const [filterdata, setFilterdata] = useState([]);



useEffect(() => {
  
  const filterdData=()=>{

    const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
   
   // console.log(data)
   setFilterdata(data)
  }
filterdData();

}, [term])




  return (
    <Product  cart={cart} setCart={setCart} items={filterdata}/>
  )
}

export default SearchItem