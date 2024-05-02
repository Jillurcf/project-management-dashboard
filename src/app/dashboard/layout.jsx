import React from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';


const Layout = ({children}) => {
    return (
       <div className='md:flex h-auto '>
        <div className='lg:w-[15vw]'>
            <Sidebar></Sidebar>
        </div>
        <div className='lg:w-[85vw]'>
            <Navbar></Navbar>
         
            {children}
        </div>
       </div>
    );
};

export default Layout;