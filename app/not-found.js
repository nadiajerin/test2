'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {

    const pathname = usePathname();
  
    return (
       <div className='__container mx-auto min-h-screen p-4 bg-white text-black'>
        <p className='mt-20 text-center'>Home {pathname}</p>
         <div className=' flex items-center justify-center my-4 max-sm:my-18'>
            <div className='text-center w-full h-full'>
                <h2 className='inter-bold text-[100px] max-sm:text-[45px] max-sm:leading-tight'>404 Not Found </h2>
                <p className='max-sm:text-[12px] py-2'>আপনার ভিজিট করা পেজটি খুঁজে পাওয়া যায়নি। অনুগ্রহ করে হোম পেজে ফিরে যান।</p>
                <div className='mt-14 max-sm:mt-10'>
                    <Link href="/" className='mx-auto max-sm:px-10 max-sm:py-3 px-10 py-4 bg-[#DB4444] max-sm:text-[14px] text-[16px] text-white rounded-sm hover:bg-gray-900'>Back to home page</Link>
                </div>
            </div>
        </div>
       </div>
    )
}