import { useDispatch } from 'react-redux'
import { addToCart, emptyCart, removeFromCart } from '../redux/action'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();  
  let data = useSelector((state)=>state.productData)
  console.warn("data in the main component: ", data);

  useEffect(()=>{
      dispatch(productList())
  }, [])

  return (
    <div className='px-12 py-5'>

      <div className='product-container grid grid-cols-12 gap-12'>
        {
          data.map((item)=><div className='product-item col-span-4 2xl:col-span-3 border rounded flex flex-col items-start justify-center'>
              <img src={item.photo} className='h-[370px] aspect-auto' alt='img'/>
              <div className='px-5 py-5 text-[#484848] text-sm w-full'>
                <p className='text-sm'><span className='font-bold'>{item.brand} -</span> {item.color[0].toUpperCase() + item.color.slice(1,)} {item.name} ({item.category})</p>
                <p className='font-bold text-base mt-3'>{item.price} TL</p>
              <div className='w-full  mt-5'>
                <button className='border transition-all hover:bg-gray-300 font-semibold text-black rounded-xl px-2 py-2 w-full' onClick={()=> dispatch(addToCart(item))}>Add to Cart</button>
                {/* <button className='bg-red-500 text-white rounded px-2 py-1' onClick={()=>dispatch(removeFromCart(item.id))}>Remove From Cart</button> */}
              </div>
              </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Main
