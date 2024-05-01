import { MdDashboard } from "react-icons/md";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Page",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard></MdDashboard>,
      },
      {
        title: "Users",
        path: "dashboard/users",
        icon: "",
      },
      {
        title: "Projects",
        path: "dashboard/projects",
        icon: "",
      },
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "",
      },
    ],
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
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: "",
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: "",
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className="px-4 bg-[#182237] h-screen">
      <div className="flex gap-2 items-center mb-4">
      <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                height={"50"}
                width={"50"}
                alt=""
                src="/profile-03-12-23.png"
              />
            </div>
          </div>
        <div className="flex flex-col">
          <span>Jillur Rahman</span>
          <span className="">Admin</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-xs">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title}></MenuLink>
            ))}
          </li>
        ))}
      </ul>
      <button className=" ">Logout</button>
    </div>
  );
};

export default Sidebar;
