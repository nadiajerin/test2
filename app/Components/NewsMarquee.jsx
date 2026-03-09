import React from 'react';
import Marquee from 'react-fast-marquee';

const NewsMarquee = () => {
  // Sample data based on your image
  const newsItems = [
    "ইরানে নিহত বেড়ে ১২৩০",
    "ট্রাম্পের যুদ্ধের লাগাম নিতে আনা প্রস্তাব সেনেটে আটকাল রিপাবলিকানরা",
    "দ্বিতীয় আরেক ইরানি জাহাজের নাবিকদের রক্ষার চেষ্টা করছে"
  ];

  return (
    <div className="w-full font-sans">
      <div className="flex items-center bg-gradient-to-r from-[#1e293b] via-[#2d3a4f] to-[#1e293b] text-white overflow-hidden h-8 md:h-8 shadow-lg">
        
        {/* 'Latest' Label (Fixed) */}
        <div className="relative z-10 bg-[#1e293b] px-4 py-1 h-full flex items-center border-r border-gray-600 shadow-xl">
          <span className="text-sm md:text-base font-bold whitespace-nowrap text-[#38bdf8] border-b-2 border-[#38bdf8]">
            সর্বশেষ
          </span>
        </div>

        {/* Marquee Section */}
        <Marquee 
          gradient={false} 
          speed={50} 
          pauseOnHover={true}
          className="flex-grow"
        >
          {newsItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm md:text-base px-4 font-medium tracking-wide">
                {item}
              </span>
              {/* Dot Separator */}
              <span className="text-[#38bdf8] text-xl px-2">•</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default NewsMarquee;