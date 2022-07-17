import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar,Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages'


import { useStateContext } from './contexts/ContextProvider';
import './App.css';


const App = () => {
    const {themeSettings, activeMenu, setthemeSettings, currentColor, currentMode } = useStateContext()
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-5 bottom-5' style={{ zIndex: "1000" }}>
                <TooltipComponent content="settings" position="top">
                    <button type='button' className='text-3xl hover:drop-shadow-xl p-3 hover:bg-light-gray text-white'
                    style={{background : currentColor, borderRadius: "50%"}}
                    onClick={()=>setthemeSettings(true)}
                    >
                        <FiSettings />
                    </button>
                </TooltipComponent>
            </div>
            {
                activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'
                    style={{ zIndex: "1000" }}
                    >
                    <Sidebar />
                    </div>
                ):(
                    <div className='w-0 dark:bg-secondary-dark-bg'
                    style={{ zIndex: "1000" }}
                    >
                    <Sidebar />
                    </div>
                )
            }
            <div className={`
            dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : " flex-2"}
            `
            }>
                <div className='fixed md:sticky top-0 bg-white dark:bg-main-dark-bg navbar w-full' style={{ zIndex: "10" }}>
                <Navbar />
                </div>

                <div>
                {
                    themeSettings && <ThemeSettings />
                }
                    
                    <Routes>
                        {/* Deshboard  */}
                        <Route path='/' element={<Ecommerce/>} />
                        <Route path='/ecommerce' element={<Ecommerce/>} />
                        
                        {/* pages */}
                        <Route path='/orders' element={<Orders/>} />
                        <Route path='/employees' element={<Employees/> } />
                        <Route path='/customers' element={<Customers/> } />

                        {/* Apps  */}
                        <Route path='/kanban' element={<Kanban/>} />
                        <Route path='/editor' element={<Editor/>} />
                        <Route path='/calendar' element={<Calendar/>} />
                        <Route path='/color-picker' element={<ColorPicker/>} />

                        {/* Charts */}
                        <Route path='/line' element={<Line/>} />
                        <Route path='/area' element={<Area/>} />
                        <Route path='/bar' element={<Bar/>} />
                        <Route path='/pie' element={<Pie/>} />
                        <Route path='/financial' element={<Financial/>} />
                        <Route path='/color-mapping' element={<ColorMapping/>} />
                        <Route path='/pyramid' element={<Pyramid/>} />
                        <Route path='/stacked' element={<Stacked/>} />

                    </Routes>
                </div>
            
            </div>
        </div>
    </BrowserRouter>
    </div>
  )
}

export default App