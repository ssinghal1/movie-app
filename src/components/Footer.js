import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2 ' > 
      <div className=' flex items-center justify-center gap-2 '>
        <Link to={"/"}> About</Link> 
        <Link to={"/"} >Contact </Link>
      </div>
      <p className='text-sm'>Developed By Shashank Singhal</p>
   </footer>
  );
};
 export default Footer
