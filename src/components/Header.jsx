import React, { useEffect, useState, useCallback } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { productList, productSearch } from '../redux/productAction';
import useDebounce from '../hooks/useDebounce';

const Header = () => {
  const result = useSelector((state)=>state.cartData);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(productSearch(debouncedSearchTerm));
    }
    else if (debouncedSearchTerm.trim() === "") {
      dispatch(productList())
    }
  }, [debouncedSearchTerm]);


  console.warn("data in header: ", result);

  return (
    <div className='shadow-lg text-black h-[80px] flex items-center justify-between px-12'>
      <Link to="/" className='uppercase text-xl tracking-widest'>React Saga Example</Link>
      <div className='flex items-center justify-center'>
        <input 
        onChange={(e)=>setSearchTerm(e.target.value)}
        className='w-[500px] py-2 px-3 text-black border outline-none rounded-lg focus:border-gray-400 transition-all' type="text" placeholder='Search product' />
      </div>
      <Link to="/cart">
        <div className='cart-div relative flex items-center justify-center border rounded-full p-2'>
              <span className='bg-blue-500 flex items-center justify-center text-white rounded-full absolute -top-[10px] -right-[8px] w-[20px] h-[20px] text-base '>{result.length}</span>
              <FaShoppingCart className='w-[22px] h-[22px] text-gray-500'/>
        </div>
      </Link>
    </div>
  )
}

export default Header
