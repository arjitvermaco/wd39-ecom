import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext/AppContext'
import NavComponent from './NavComponent'

export default function HeaderComponent({setOpenCart,setOpenWishList}) {
  
  let appContext = useContext(AppContext);
  let {appName} = useContext(AppContext);


  console.log("App Context is ", appContext);
  return (
    <div className='h-14 bg-blue-700 fixed w-full shadow-lg'>
        <header className='flex h-14 max-w-7xl mx-auto justify-between items-center'>
        {/* Logo div on the left  */}
        <Link to="/">
        <div className='flex items-center gap-4'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <h3 className='text-white'>{appName}</h3>
        </div>
        </Link>
        {/* navigation div on the right  */}
        <NavComponent setOpenCart={setOpenCart} setOpenWishList={setOpenWishList}/>
        </header>
    </div>
  )
}
