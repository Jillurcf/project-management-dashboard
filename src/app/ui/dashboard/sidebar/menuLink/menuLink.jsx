"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const MenuLink = ({item}) => {
    const pathname = usePathname()
    return (
        <div>
            <Link className='px-6 py-4 flex items-center gap-2 hover:bg-gray-400' href={item.path}>
            {item.icon}
            {item.title}
            </Link>
            
        </div>
    );
};

export default MenuLink;