import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoShareSocialSharp } from 'react-icons/io5';

const SocialSharePost = () => {
    const icons = [
        { id: 1, icon: <FaFacebookF />, bgColor: 'bg-[#5b7abd]', label: 'Facebook', Link: "https://www.facebook.com/share/18GsaB3crj/?mibextid=wwXIfr" },
        { id: 2, icon: <FaWhatsapp />, bgColor: 'bg-[#25d366]', label: 'WhatsApp', Link: "" },
        { id: 3, icon: <IoShareSocialSharp />, bgColor: 'bg-[#91d13d]', label: 'Share', Link: "" },
    ];

    return (
        <div className="flex items-center gap-4 ">
            {icons.map((item) => (
                <Link
                    href={item?.Link}
                    key={item.id}
                    className={`${item.bgColor} max-sm:w-10 max-sm:h-10 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl transition-transform hover:scale-110 active:scale-95 shadow-sm`}
                    aria-label={item.label}
                >
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default SocialSharePost;