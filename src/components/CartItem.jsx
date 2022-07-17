import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const CartItem = ({ image, name, category, price  }) => {
    const [productCounter, setproductCounter] = useState(1);

    const handelproductCounter = (up, down) => {

        if(up){
            setproductCounter(productCounter + 1)
        }
        else if(down){
            setproductCounter(productCounter - 1)
            if(productCounter <= 1 ){
                setproductCounter(1)
            }
        }
        
    }



  return (

        <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
        <img className="rounded-lg h-80 w-24" src={image} alt="" />
        <div>
            <p className="font-semibold ">{name}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{category}</p>
            <div className="flex gap-4 mt-2 items-center">
            <p className="font-semibold text-lg">{price}</p>
            <div className="flex items-center border-1 border-r-0 border-color rounded">
                <button type='button' onClick={()=> handelproductCounter(false, true)} className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></button>
                <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">{productCounter}</p>
                <button type='button' onClick={()=> handelproductCounter(true, false)} className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></button>
            </div>
            </div>
        </div>
        </div>
  )
}

export default CartItem