"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
import {  MdOutlineMailOutline } from "react-icons/md";
import { GoHome , GoHomeFill } from "react-icons/go";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Button } from "../../components/ui/button";
function Sidebar() {
  const pathName = usePathname();
  const nav = [
    {
      name: "Beranda",
      href: "/",
      current: pathName === "/",
      icon: <GoHome />,
      activeIcon: <GoHomeFill/>
    },
    {
      name: "Jelajahi",
      href: "/notifikasi",
      current: pathName === "/notifikasi",
      icon: <FiSearch />,
    },
    {
      name: "Pesan",
      href: "/message",
      current: pathName === "/message",
      icon: <MdOutlineMailOutline />,
    },
    {
      name: "Profile",
      href: "/profile",
      current: pathName === "/profile",
      icon: <FaRegUser />,
    },
    {
      name: "Lainnya",
      href: "/lainnya",
      current: pathName,
      icon: <PiDotsThreeCircleLight />,
    },
  ];
  return (
    <header className="flex justify-end p-2 w-[400px] border-r-2 bg-black text-white">
      <div className="flex flex-col  w-[250px]">
        <Link
          href={"/"}
          className="py-4 px-4 max-w-max hover:bg-zinc-500/15 hover:rounded-full"
        >
          <BsTwitterX className="text-3xl " />
        </Link>
        <nav>
          {nav.map((item, index) => (
            <ul key={index}>
              <li className="py-1">
                <Link
                  href={item.href}
                  className="flex items-center max-w-max py-2 px-4 gap-x-2 hover:bg-zinc-500/15 hover:rounded-full"
                >
                  <span className="text-3xl mb-1">{ item.icon}</span>
                  <span className={`text-xl ${item.current && 'font-bold'}`}>{item.name}</span>
                </Link>
              </li>
            </ul>
          ))}
        </nav>
        {/* posting button */}
        <Button className="font-bold text-md rounded-full px-32px min-h-[51px] min-w-[51px]">
          Posting
        </Button>
      </div>
    </header>
  );
}

export default Sidebar;
