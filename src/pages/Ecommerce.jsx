import React from 'react';
import { GoPrimitiveDot } from "react-icons/go";

import { Stacked, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData } from '../data/dummy'

import {useStateContext} from '../contexts/ContextProvider'
import Card from '../components/Card';

const Ecommerce = () => {

  const { currentColor } = useStateContext()

  return (
    <div className='my-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center flex-col items-center'>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-72 rounded-xl w-11/12   p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col justify-center">
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400 '>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
          </div>
          
          <div className='mt-6'>
              <Button
                color="white"
                bgColor={currentColor} 
                text="Download"
                borderRadius="10px"
                size="md"
                customclass="px-8"
              />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {
            earningData.map((item, index) => (
              <Card key={index} {...item} />
            ))
          }
        </div>
      </div>

        <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:bg-secondary-dark-bg my-3 p-6 py-8 rounded-2xl md:w-10/12 w-screen'>
            <div className='flex md:justify-between justify-center flex-col md:flex-row items-center'>
              <p className='font-semibold text-xl dark:text-white'>Revenue Updates</p>
              <div className='flex items-center gap-4'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div>
              <div className='mt-10 flex gap-10 flex-wrap justify-around'>
                <div className=' m-4 pr-10'>
                  <div>
                    <p>
                      <span className='text-3xl font-semibold dark:text-white'> $93,438 </span>
                      <span className=' p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'> 23% </span>
                    </p>
                    <p className='text-gray-500 mt-1'>Budget</p>
                  </div>
                  
                  <div className='mt-8'>
                    <p>
                      <span className='text-3xl font-semibold dark:text-white'> $48,438 </span>
                    </p>
                    <p className='text-gray-500 mt-1'>Expense</p>
                  </div>
                  <div className='mt-5 '>
                      <SparkLine
                        currentColor={currentColor} 
                        id="sparkline"
                        type="Line"
                        height="80px"
                        width="250px"
                        data={SparklineAreaData}
                        color={currentColor} 
                      />
                  </div>
                  <div className="mt-10">
                    <Button
                      color="white"
                      bgColor={currentColor} 
                      text="Download Report"
                      borderRadius="10px"
                    />
                  </div>
                </div>
                <div className='mt-12 md:mt-0'>
                  <Stacked
                    width="320px"
                    height="360px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-9 text-gray-500">
          <p>This project have created for portfolio.</p>
          <p>create by <a className='underline' href="https://www.linkedin.com/in/mahadidev7/" target="__blank" style={{color: currentColor}}>@mahadedev7</a></p>
        </div>
    </div>
  )
}

export default Ecommerce