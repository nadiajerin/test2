"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaHome, FaSearch, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // আপনার অরিজিনাল navLinks
  const navLinks = [
    { name: "সমগ্র বাংলাদেশ", color: "text-gray-800", link: "/bangladesh" },
    { name: "বিশ্ব", color: "text-gray-800", link: "/world" },
    { name: "ফুটবল", color: "text-gray-800", link: "/football" },
    { name: "খেলা", color: "text-gray-800", link: "/sports" },
    { name: "বাণিজ্য", color: "text-gray-800", link: "/business" },
    { name: "বিজ্ঞপ্তি", color: "text-gray-800", link: "/info" },
    { name: "লাইফস্টাইল", color: "text-gray-800", link: "/lifestyle" },
    { name: "টেক", color: "text-gray-800", link: "/tech" },
    { name: "অন্যান্য", color: "text-gray-800", link: "/other" },
    { name: "যোগাযোগ", color: "text-gray-800", link: "/contact" }
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">

        {/* --- Mobile View Top Row (Image Style) --- */}
        <div className="flex md:hidden items-center justify-center px-4 h-14 ">

          <div className="text-2xl font-bold text-[#bd2424]">
            নির্ভীক টাইমস
          </div>

        </div>

        {/* --- Desktop View Header (Unchanged) --- */}
        <div className="hidden md:flex items-center justify-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-5xl font-bold text-[#bd2424] tracking-tighter cursor-pointer mt-2">
              নির্ভীক টাইমস
            </h1>
          </div>
        </div>

        {/* --- Links Row --- */}
        <div className="flex items-center border-t md:border-t-0 h-12 md:h-auto overflow-hidden">

          {/* Mobile Only: Menu & Home Icons */}
          <div className="flex items-center md:hidden pl-3 pr-2 space-x-3 border-r border-gray-200 h-full">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            <Link href="/" className="text-gray-800">
              <FaHome size={20} />
            </Link>
          </div>

          {/* Scrollable Container */}
          <div className="flex flex-1 items-center md:justify-center space-x-6 overflow-x-auto no-scrollbar py-3 px-4 md:px-0">
            {/* Desktop Home Icon */}
            <Link href="/" className="hidden md:block text-black"><FaHome size={18} /></Link>

            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link?.link || "#"}
                className={`text-[15px] whitespace-nowrap hover:underline ${link.color}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t absolute w-full left-0 shadow-lg z-50`}>
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link || "#"}
              className={`block py-2.5 border-b border-gray-50 text-[16px] ${link.color}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
};

export default Navbar;