import Link from 'next/link';
import { infoData } from '../Data/infoData';
import SponsorDekstop from '../Components/SponsorImageSinglePost/SponsorDekstop';
import SponsorMobile from '../Components/SponsorImageSinglePost/SponsorMobile';

const HomeNews = () => {

  const data = infoData;

  return (
    <div className="flex items-start justify-between gap-4 bg-white">

      {/* Sponsor Image  */}
      <img src="https://tpc.googlesyndication.com/simgad/6156007675779332244"
        className="sticky top-0 z-50 hidden lg:block"
      />

      <div className="max-w-5xl mx-auto p-4 font-sans bg-white">
        {/* --- Top Main News Section --- */}
        {data.slice(0, 1).map((news) => (
          <Link href={`/info/${news.id}`} key={news.id} className="group cursor-pointer">
            <div className="flex flex-col items-center md:flex-row gap-6 mb-10 max-sm:mb-6 max-sm:pb-6 pb-10">
              {/* Text Content */}
              <div className="md:w-1/3 order-2 md:order-1">
                <h1 className="text-2xl text-[#1a1a1a] md:text-3xl font-bold leading-tight mb-4 hover:text-red-600 cursor-pointer transition">
                  {news?.title}
                </h1>
                <p className="text-gray-600 max-sm:text-sm text-lg leading-relaxed">
                  {news?.desc1}
                </p>
              </div>

              {/* Main Image */}
              <div className="md:w-2/3 order-1 md:order-2">
                <img
                  src={news?.image}
                  alt="Main News"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </Link>
        ))}


        {/* --- Bottom Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.slice(1).map((news) => (
            <Link href={`/info/${news.id}`} key={news.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-3">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl text-[#1a1a1a] font-bold leading-snug mb-2 group-hover:text-red-600 transition">
                {news.isRedDot && <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2"></span>}
                {news.title}
              </h2>
              <p className="text-gray-500 text-sm leading-normal">
                {news.desc1}
              </p>
            </Link>
          ))}
        </div>

        {/* Sponsor Image */}
        <SponsorDekstop />
        <SponsorMobile />

      </div>

      {/* Sponsor Image  */}
      <img src="https://tpc.googlesyndication.com/simgad/6156007675779332244"
        className="sticky top-0 z-50 hidden lg:block"
      />

    </div>
  );
};

export default HomeNews;