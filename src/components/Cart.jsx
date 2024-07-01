import React, { useState } from "react";
import { FaApple, FaCcAmazonPay, FaCcApplePay, FaCcMastercard, FaCcPaypal, FaPaypal } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeQty, removeFromCart } from "../redux/action";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const amount = cartData.length && cartData.map(item => item.price * item.quantity).reduce((prev, next) => prev + next)
  return (
    <div className="px-12 py-5">
      <h1 className="text-2xl font-bold tracking-wider">Shopping Cart</h1>
      <div className="cart-page-container flex mt-8">
        <div className="border flex-[65%] rounded">
          <table className="w-full h-full ">
            <thead className="uppercase text-left text-gray-400 font-bold text-sm">
              <tr>
                <th scope="col" className="px-6 py-3">Product</th>
                <th scope="col" className="px-6 py-3">Quantity</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
            {
              cartData.map((item)=> (
               <tr>
                <td className="px-6 py-3">
                  <div className="flex gap-6 items-center">
                      <img className="w-20 h-20 rounded" src={item.photo}/>
                      <div className="flex flex-col items-start justify-center gap-2">
                        <h3 className="text-[#484848]">{item.name}</h3>
                        <div className="flex flex-col text-[#48484892]">
                          <h5 className="text-xs">Color: {item.color}</h5>
                          <h5 className="text-xs">Brand: {item.brand}</h5>
                        </div>
                      </div>
                  </div>
                </td> 
                <td className="px-6 py-3">
                  <select onChange={(e)=>{
                    dispatch(changeQty(item.id, e.target.value))
                  }} defaultValue={item.quantity} className="border rounded w-[80%] py-2 px-3">
                    {[1,2,3].map((num)=>(
                      <option>{num}</option>
                    ))}
                    </select>
                </td>
                <td className="text-[#484848] font-bold px-6 py-3 ">
                  {item.price} TL
                </td>
                <td className="px-6 py-3 text-right">
                  <button onClick={()=>dispatch(removeFromCart(item.id))} className="text-sm border rounded py-1 hover:bg-gray-300 transition-all w-full">
                    Remove
                  </button>
                </td>
                </tr>
              ))
            }
            </tbody>
   
          </table>
        </div>
        <div className="price-detail flex-[15%] flex flex-col w-full items-center justify-start ml-24 text-[#484848]">
            <div className="border w-full flex flex-col items-start gap-1 px-5 py-3">
                <p className="text-sm">Have coupon ?</p>
                <div className="w-full flex text-sm"> 
                  <input type="text" className="border w-[80%] py-2 rounded border-r-0 px-3 rounded-r-none" placeholder="Coupon code" />
                  <button className="bg-blue-600 w-[20%] rounded-r text-white">Apply</button>

                </div>
            </div>
            <div className="border w-full flex flex-col items-start gap-1 px-5 py-3 mt-5 text-sm">
              <div className="flex w-full justify-between">
                <p>Total Price:</p>
                <p>
                  {amount + " TL"}
                </p>
              </div>
              <div className="flex w-full justify-between mt-1">
                <p>Discount:</p>
                <p>
                  {amount/10 + " TL"}
                </p>
              </div>
              <div className="flex w-full justify-between mt-1">
                <p>Total:</p>
                <p className="font-bold text-[16px]">
                  {amount - (amount / 10) + " TL"}
                </p>
              </div>

              <div className="w-full h-[.1em] bg-gray-300 mt-3"/>

              <div className="flex items-center justify-center w-full gap-2 mt-3">
                  <FaCcPaypal className="w-[2em] h-[2em] text-blue-900"/>
                 <FaCcMastercard className="w-[2em] h-[2em] text-orange-500"/>
                 <FaCcApplePay className="w-[2em] h-[2em] text-black"/>
                 <FaCcAmazonPay className="w-[2em] h-[2em] text-blue-500"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
