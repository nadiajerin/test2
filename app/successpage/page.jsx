import React from 'react';
import Link from 'next/link';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";

const SuccessPage = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            {/* Landscape Container */}
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
                
                {/* Left Side: Icon Section (Brand Color Background) */}
                <div className="bg-[#DB4444] md:w-1/3 flex flex-col items-center justify-center p-10 text-white animate-fadeIn">
                    <IoCheckmarkCircleSharp className="text-8xl mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold tracking-wide">সফল হয়েছে!</h3>
                </div>

                {/* Right Side: Content Section */}
                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                        ধন্যবাদ আমাদের সাথে যোগাযোগ করার জন্য!
                    </h2>
                    
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        আপনার বার্তাটি আমরা পেয়েছি। আমাদের একজন প্রতিনিধি আগামী <span className="font-bold text-[#DB4444]">২৪ ঘণ্টার</span> মধ্যে আপনার দেওয়া ইমেইলে যোগাযোগ করবেন। ততক্ষণ আমাদের সাথেই থাকুন।
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/" 
                            className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg hover:bg-[#DB4444] transition-all duration-300 shadow-lg font-medium"
                        >
                            <AiOutlineHome size={20} />
                            হোম পেজে ফিরে যান
                        </Link>

                        <Link href="/contact" 
                            className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:border-[#DB4444] hover:text-[#DB4444] transition-all duration-300 font-medium"
                        >
                            <HiOutlineArrowNarrowLeft size={20} />
                            আবার মেসেজ পাঠান
                        </Link>
                    </div>

                    {/* Simple Bottom Link */}
                    <p className="mt-8 text-sm text-gray-400 italic">
                        * একটি কনফার্মেশন মেইল আপনার ইনবক্সে পাঠানো হয়েছে।
                    </p>
                </div>
            </div>
        </div>
    );
};


export default SuccessPage;

