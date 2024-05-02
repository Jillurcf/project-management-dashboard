"use client"
import { MdDashboard, MdAssignmentAdd, MdAnalytics } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { GrOverview, GrDocumentPerformance } from "react-icons/gr";
import { IoIosSettings, IoIosHelpCircle, IoMdLogOut, IoIosNotifications } from "react-icons/io";
import { SiInfracost } from "react-icons/si";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import { getAuth, signOut  } from "firebase/auth";
import app from "@/app/firebase/config";
import { useRouter } from "next/navigation";

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
        path: "/dashboard/users",
        icon: <FaUsers></FaUsers>,
      },
      {
        title: "Projects",
        path: "/dashboard/projects",
        icon: <GoProjectSymlink></GoProjectSymlink>,
      },
      {
        title: "Add Project",
        path: "/dashboard/addProject",
        icon: <MdAssignmentAdd></MdAssignmentAdd>,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Project Overview",
        path: "/dashboard",
        icon: <GrOverview ></GrOverview>,
      },
      {
        title: "Task Analytics",
        path: "/dashboard",
        icon: <MdAnalytics></MdAnalytics>,
      },
      {
        title: "Team Performance",
        path: "/dashboard",
        icon: <GrDocumentPerformance></GrDocumentPerformance>,
      },
      {
        title: "Budget and Cost analytics",
        path: "/dashboard",
        icon: <SiInfracost></SiInfracost>,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <IoIosSettings></IoIosSettings>,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <IoIosHelpCircle></IoIosHelpCircle>,
      },
    ],
  },
];



const Sidebar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      router.push('/login'); // Redirect to the login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error
    }
  };



  return (
    <div className="px-4 bg-[#182237] h-auto py-12">
      <div className="flex gap-2 items-center mb-4">
      <div className="dropdown dropdown-end">
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
        
      </div>
       <div className="lg:flex-none lg:gap-0 lg:hidden flex gap-16">
       <div className="flex flex-col">
          <span>Jillur Rahman</span>
          <span className="">Admin</span>
        </div>
        <IoIosNotifications></IoIosNotifications>
        <div>

        </div>
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
      <div className="flex gap-2">
      <IoMdLogOut className=" text-xl"></IoMdLogOut>
      <button onClick={handleLogout} className="font-bold text-gray-400"> Logout</button>
      </div>
     
    </div>
  );
};

export default Sidebar;
