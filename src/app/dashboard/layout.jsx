import React from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';

const Layout = ({children}) => {
    return (
       <div className='flex h-screen '>
        <div className='w-[15vw]'>
            <Sidebar></Sidebar>
        </div>
        <div className='w-[85vw]'>
            <Navbar></Navbar>
            {children}
        </div>
       </div>
    );
};

export default Layout;