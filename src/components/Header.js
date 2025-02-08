import { logDOM } from '@testing-library/react';
import React, {useEffect, useState } from 'react'
import logo from '../assests/logo.png'
import { Link, NavLink , useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import user from '../assests/user.png'
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../contents/navigation';





const Header = () => {
    const locatiom = useLocation()
    const reducer= locatiom?.search?.slice(3)?.split("%20")?.join(" ")
    const [searchInput, setSearchInput]= useState (reducer)
    const navigate= useNavigate();

    
    useEffect(()=> {
        if(searchInput){
            navigate(`/search?q= ${searchInput}`)
        }
       
    },[searchInput])

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

  return (
   <header  className='fixed top-0 w-full h-16 opacity-75 bg-black z-40'>
            <div className='container mx-auto px-2 flex items-center h-full'>
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt="logo"
                        width={120}
                     />
                </Link>
                <nav className=' hidden lg:flex items-center gap-1 ml-5'>
                    {
                        navigation.map((nav,index)=>{
                            return (
                                <div>
                                    <NavLink key={nav.label} to={nav.href} className={({isActive}) => "px-2 hover:text-neutral-100"}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>
                <div className='ml-auto flex items-center gap-3'>
                    <form className='flex items-center gap-3' onSubmit={handleSubmit}> 
                        <input
                            type='text'
                            placeholder='Search here..'
                            className='bg-transparent px-4 py-1 hidden border-none lg:block'
                            onChange={(e)=> setSearchInput(e.target.value)}
                            value={searchInput}
                        ></input>
                        <button className='text-2xl text-white'>
                         <IoSearchOutline />
                        </button>
                    </form>
                    
                    <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer transition-all active:scale-50 ' >
                        <img 
                            src = {user}
                            width='w-full h-full'
                        />
                    </div>
                </div>

            </div>
    </header>
  );
};

export default Header