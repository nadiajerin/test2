import SocialSharePost from "@/app/Components/SocialSharePost";
import SponsorDekstop from "@/app/Components/SponsorImageSinglePost/SponsorDekstop";
import SponsorMobile from "@/app/Components/SponsorImageSinglePost/SponsorMobile";
import { homeData } from "@/app/Data/homeData";

const page = async ({ params }) => {

    const { id } = await params;
    // console.log(id, 1)
    const newsItem = homeData.find((item) => item.id === Number(id));

    if (!newsItem) {
        return <div>News not found!</div>;
    }

    return (
        <div className="flex items-start justify-between gap-4 bg-white">

            {/* Sponsor Image  */}
            <img src="https://tpc.googlesyndication.com/simgad/6156007675779332244"
                className="sticky top-0 z-50 hidden lg:block"
            />

            <article className="max-w-5xl mx-auto px-4 py-8 md:py-12 bg-white">

                {/* --- Headline --- */}
                <h1 className="text-[#1a1a1a] text-2xl md:text-3xl font-bold leading-[1.2] mb-6 font-serif md:text-center">
                    {newsItem?.title || "মাটির নিচে গড়ে তোলা 'ক্ষেপণাস্ত্র নগরই' এখন ইরানের সর্বনাশা ভুল"}
                </h1>

                {/* --- Sub-headline / Description --- */}
                <p className="text-[#4a4a4a] text-sm md:text-lg leading-relaxed mb-8 italic md:text-center">
                    {newsItem?.desc1 || "ইরানের ভূগর্ভস্থ ঘাঁটি থেকে ক্ষেপণাস্ত্র বহনকারী লাঞ্চার বের হওয়া মাত্র সেগুলোর ওপর হামলা করছে ইসরায়েল ও যুক্তরাষ্ট্রের যুদ্ধবিমান আর ড্রোন।"}
                </p>

                {/* --- Feature Image --- */}
                <div className="w-full overflow-hidden rounded-sm">
                    <img
                        src={newsItem?.image}
                        alt={newsItem?.title}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Date */}
                <p className="lg:text-center my-4 text-sm text-red-500">{newsItem?.date}</p>

                 {/* Social icon */}
                <SocialSharePost />

                {/* --- Additional Content  --- */}
                {/* --- Detailed Content (Second Image context) --- */}
                <div className="text-[#333] text-sm md:text-lg leading-[1.8] font-normal mt-6 text-justify">
                    <p className="mb-6">
                        {newsItem?.desc2}
                    </p>
                    <p className="mb-6">
                        {newsItem?.desc3}
                    </p>

                     {/* Sponsor Image */}
                    <SponsorDekstop />
                    <SponsorMobile />

                    <p className="mb-6">
                        {newsItem?.desc4}
                    </p>
                    <p className="mb-6">
                        {newsItem?.desc5}
                    </p>
                    {/* --- Other Feature Image --- */}
                    <div className="w-full overflow-hidden rounded-sm mb-6 lg:grid grid-cols-2 gap-4 items-start">
                        <img
                            src={newsItem?.image2 ? newsItem?.image2 : ""}
                            alt={newsItem?.image2 ? newsItem?.title : ""}
                            className="w-full h-auto object-cover max-sm:mb-4"
                        />
                        <img
                            src={newsItem?.image3 ? newsItem?.image3 : ""}
                            alt={newsItem?.image3 ? newsItem?.title : ""}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <p className="mb-6">
                        {newsItem?.desc6}
                    </p>
                </div>
            </article>

            {/* Sponsor Image  */}
            <img src="https://tpc.googlesyndication.com/simgad/6156007675779332244"
                className="sticky top-0 z-50 hidden lg:block"
            />

        </div>
    )
}

export default page