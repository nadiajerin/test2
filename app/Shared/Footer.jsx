import Link from 'next/link';
import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaPhoneAlt, 
  FaEnvelope 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: "সমগ্র বাংলাদেশ", color: "text-gray-800", link: "/bangladesh" },
    { name: "বিশ্ব", color: "text-gray-800" , link: "/world"},
    { name: "ফুটবল", color: "text-gray-800" , link: "/football"},
    { name: "খেলা", color: "text-gray-800" , link: "/sports"},
    { name: "বাণিজ্য", color: "text-gray-800" , link: "/business"},
    { name: "হ্যালো", color: "text-gray-800" , link: "/hello"},
    { name: "বিজ্ঞপ্তি", color: "text-gray-800" , link: "/info"},
    { name: "লাইফস্টাইল", color: "text-gray-800", link: "/lifestyle"},
    { name: "টেক", color: "text-gray-800", link: "/tech" },
    { name: "যোগাযোগ", color: "text-gray-800" , link: "/contact"},
  ];
  
  return (
    <footer className="bg-[#1a1a1a] text-white pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- Top Section: Logo & Socials --- */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold tracking-tighter">
              নির্ভীক<span className="text-yellow-300">  টাইমস</span>
            </h2>
          </div>
          
          <div className="flex space-x-5">
            <Link href="#" className="hover:text-red-600 transition-colors"><FaFacebookF size={20} /></Link>
            <Link href="#" className="hover:text-red-600 transition-colors"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-red-600 transition-colors"><FaYoutube size={24} /></Link>
            <Link href="#" className="hover:text-red-600 transition-colors"><FaInstagram size={20} /></Link>
          </div>
        </div>

        {/* --- Middle Section: Links & Contact --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Categories Part */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-red-600 pl-3 ">বিভাগসমূহ</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
              {categories.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.link}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Advertisement/Contact Part */}
          <div className="bg-[#262626] p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-4 text-amber-500">বিজ্ঞাপনের জন্য যোগাযোগ</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300 text-sm">
                <FaPhoneAlt className="mr-3 text-gray-300" /> + শীঘ্রই আসছে ###
              </p>
              <p className="flex items-center text-gray-300 text-sm">
                <FaEnvelope className="mr-3 text-gray-300" /> শীঘ্রই আসছে ###
              </p>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                আপনার ব্যবসার প্রসারে আমাদের সাথে যুক্ত হোন। সাশ্রয়ী মূল্যে সঠিক মানুষের কাছে পৌঁছাতে আজই আমাদের সাথে যোগাযোগ করুন।
              </p>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} নিউজ পোর্টাল | সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">গোপনীয়তা নীতি</a>
            <a href="#" className="hover:underline">শর্তাবলী</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;