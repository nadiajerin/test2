
import NewsMarquee from "./Components/NewsMarquee";
import HomeNews from "./Home/HomeNews";
import SportsNews from "./Home/SportsNews";
import WorldNews from "./Home/WorldNews";

export default function Home() {
  return (
    <div className="">
      <NewsMarquee />
      <div className="flex items-start justify-between gap-4 bg-white">

        {/* Sponsor Image  */}
        <img src="https://tpc.googlesyndication.com/simgad/6156007675779332244"
         className="sticky top-0 z-50 hidden lg:block"
        />

        <div className="">
          <HomeNews />
          <SportsNews />
          <WorldNews />
        </div>

         {/* Sponsor Image  */}
        <img src="https://tpc.googlesyndication.com/simgad/6156007675779332244"
         className="sticky top-0 z-50 hidden lg:block"/>
      </div>
    </div>
  );
}

