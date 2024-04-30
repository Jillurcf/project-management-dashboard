
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";


const menuItems = [
    {
        title: "Page",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: "",
            },
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: "",
            },
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: "",
            },
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: "",
            },
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: "",
            },
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: "",
            },
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: "",
            },
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: "",
            },
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: ""
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: ""
            }
        ]
    }
]
const Sidebar = () => {
    return (
        <div className='px-4'>
            <div className='rounded-full'>
                <Image src={"/public/profile-03-12-23.jpg"} alt="" width={50} height={50} />
            </div>
            <ul>
                {menuItems.map(cat => (
                    <li key={cat.title}>{cat.title}
                    <span>{cat.title}</span>
                    {
                        cat.list.map(item => (
                            <MenuLink item={item} key={item.title}></MenuLink>
                        ))
                    }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;