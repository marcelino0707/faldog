"use client"

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/app/data/navigation";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();

    const isActive = (href) => {
        return href === "/"
            ? pathname === "/"
            : pathname.startsWith(href);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsAtTop(currentScrollY === 0);

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
                setIsMenuOpen(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (isVisible && !isAtTop || isMenuOpen && !isAtTop) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                setIsMenuOpen(false);
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [isVisible, isAtTop, isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`transition-transform duration-500 ${isAtTop ? "h-0" : "h-[91px]"}`}></div>
            <nav
                className={`
                    ${isAtTop && !isMenuOpen ? "relative bg-transparent" : "fixed bg-[#0a1c29]"} 
                    ${!isAtTop && !isMenuOpen ? "before:content-[''] before:relative before:inset-0)] before:brightness-50 before:opacity-80 before:z-[-1]" : ""}
                    top-0 left-0 w-full py-2 px-6 text-white shadow-md transition-transform duration-500 z-50 
                    ${isVisible ? "translate-y-0" : "-translate-y-full"}
                `}
            >
                <div className="container mx-auto flex justify-between items-stretch">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/Logo.png"
                            alt="Logo"
                            width={180}
                            height={110}
                            priority
                        />
                    </Link>
                    <div className="hidden md:flex space-x-4 text-l gap-5 font-bold relative items-center">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group h-full flex items-center">
                                {item.children ? (
                                    <span
                                        className={`${isActive(item.href) ? "text-[#30323D]" : "text-[#808384]"} cursor-default pointer-events-none`}
                                    >
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`hover:underline ${isActive(item.href) ? "text-[#30323D]" : "text-[#808384]"}`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                                {item.children && (
                                    <div className="absolute top-full left-0 w-56 bg-[#0a1c29] text-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={`${item.href}${child.href}`} // ex: /about#history
                                                className="block px-4 py-2 hover:bg-gray-800 text-sm border-b border-gray-700 last:border-none"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button onClick={toggleMenu} className="md:hidden">
                        <i className="fa-solid fa-bars text-[#808384]"></i>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col text-center pt-2 mt-2 border-t border-gray-300">
                        {navigation.map((item) => {
                            const isActiveDropdown = activeDropdown === item.name;
                            return (
                                <div key={item.name} className="relative border-b border-gray-700">
                                    <div className="w-full text-left px-4 py-3 flex justify-between items-center font-semibold hover:bg-gray-900 transition">
                                        {item.children ? (
                                            <span
                                                className={`block w-full text-left ${isActive(item.href) ? "text-green-500" : ""} cursor-default pointer-events-none`}
                                            >
                                                {item.name}
                                            </span>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`block w-full text-left ${isActive(item.href) ? "text-green-500" : ""}`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                        {item.children && (
                                            <button
                                                onClick={() => setActiveDropdown(isActiveDropdown ? null : item.name)}
                                                className="ml-2"
                                            >
                                                <i className={`fas ${isActiveDropdown ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                            </button>
                                        )}
                                    </div>
                                    {item.children && (
                                        <div
                                            className={`overflow-hidden transition-all duration-500 bg-black text-white flex flex-col text-left
                                                ${isActiveDropdown ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                                            `}
                                            style={{ transitionProperty: "max-height, opacity, padding" }}
                                        >
                                            {item.children.map((child, index) => (
                                                <Link
                                                    key={child.name}
                                                    href={`${item.href}${child.href}`}
                                                    className={`px-6 py-2 text-sm border-t border-gray-700 hover:bg-gray-800 ${index === 0 ? "border-t" : ""}`}
                                                    onClick={() => setIsMenuOpen(false)} 
                                                >
                                                    {child.name}
                                                </Link>

                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

            </nav>
        </>
    )
}