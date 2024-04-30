import Link from 'next/link';
import React from 'react';

const MenuLink = ({item}) => {
    return (
        <div>
            <Link href={item.path}>
            {item.icon}
            {item.title}
            </Link>
            
        </div>
    );
};

export default MenuLink;