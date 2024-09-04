"use client"

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

type RouteInfo = {
    path: string;
    displayName: string;
};
  
type Navigation = Record<string, RouteInfo>;

interface NavbarProps {
  // Record of string keys and string values where each value is a path starting with a slash
  navigation: Navigation;
}

const Navbar: FC<NavbarProps> = ({ navigation }) => {
    const currentPath = usePathname();

    return(   
        <nav className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto divide-y divide-gray-700">
                <div className="mb-4 flex justify-between gap-4">
                    <Logo />

                    <div className="flex-initial place-self-center overflow-hidden relative">
                        <input className="w-96 px-3 py-2 pl-10 text-base font-medium bg-gray-700 text-gray-300 placeholder-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="search" placeholder="Search..." />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    <div><ThemeSwitch/></div>
                </div>
  
                <div className="flex justify-between pt-4">
                    <div className="space-x-4">
                        {Object.keys(navigation).map((key) => {
                            const { path, displayName } = navigation[key];
                            return (
                                <Link key={key} href={path}
                                    className={`rounded-md px-3 py-2 text-base font-medium ${currentPath === path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                                        {displayName}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
export type { Navigation };