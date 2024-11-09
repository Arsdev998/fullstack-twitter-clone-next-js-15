"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoHome, GoHomeFill } from "react-icons/go";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { FaSearch } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import Image from "next/image";
import himmel from "../../public/img/himmel.jpg";
import { useSession } from "next-auth/react";
function Sidebar() {
  const pathName = usePathname();
  const { data: session, status } = useSession();
  console.log(session);
  const nav = [
    {
      name: "Beranda",
      href: "/",
      current: pathName === "/",
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
    },
    {
      name: "Jelajahi",
      href: "/search",
      current: pathName === "/search",
      icon: <FiSearch />,
      activeIcon: <FaSearch />,
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
    <header className="sticky top-0 flex justify-end p-2 w-[400px] border-r-[1px] border-gray-100 min-h-screen  text-white">
      <div className="">
        <div className="flex flex-col gap-y-2 w-[250px]">
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
                    <span className="text-3xl mb-1">
                      {item.current ? item.activeIcon : item.icon}
                    </span>
                    <span className={`text-xl ${item.current && "font-bold"}`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              </ul>
            ))}
          </nav>
          {/* posting button */}
          <div className="max-w-max mb-5">
            <Button className="font-bold text-md rounded-full px-32px min-h-[51px] min-w-[200px] w-full">
              Posting
            </Button>
          </div>
        </div>
        {/* USER BUTTON */}
        <div className="flex items-center justify-between py-2 px-4 rounded-full hover:bg-zinc-500/15">
          {status === "authenticated" ? (
            <>
              <div className="flex items-center gap-y-2ex gap-x-2">
                <Image
                  src={himmel}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="profile"
                />
                <div className="text-sm">
                  <p>{session?.user?.name}</p>
                  <p className="text-gray-500">{session?.user?.email}</p>
                </div>
              </div>
              <HiDotsHorizontal />
            </>
          ) : (
            <div>Login</div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Sidebar;
