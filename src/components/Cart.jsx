import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';
import CartItem from './CartItem';

const Cart = () => {
  const { handleClick, currentColor } = useStateContext()

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button type='button' onClick={()=> handleClick('cart', false) } className="text-xl rounded-full p-3 hover:bg-light-gray block">
              <MdOutlineCancel />
          </button>
        </div>
        {cartData?.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
        <div className="mt-3 mb-3 border-b-1 border-color py-5">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
            countomclass="px-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;