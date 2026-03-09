"use client"

import { useRouter } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";



const Contact = () => {

    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        console.log(name, email, subject, message)


        try {
                // Now post the user data into database
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, subject, message })
                });

                const data = await response.json();
                // console.log('Server Response:', data);

                if (response.ok) {
                    router.push("/successpage")
                    // alert("Thanks for reaching out! We’ll get back to you within 24 hours");
                } else {
                    alert('Failed to save user info:', data.message);
                }
           
        } catch (error) {
            alert('Error :', error.message);
        }
    }

    return (
        <section id="contact" className="max-w-7xl bg-white mx-auto  max-sm:py-14 md:py-20 min-h-screen  max-sm:px-4 ">

            <div className="text-center">
                {/* <p className="uppercase max-sm:text-sm text-md roboto-300 text-gray-500">Get In Touch</p> */}
                {/* <p className="md:w-2/3 mx-auto text-3xl text-[#bd1220] roboto-600 md:py-2">I develop user-friendly, fast, and device-friendly websites that help businesses grow.</p> */}
                <p className="md:w-2/3 mx-auto max-sm:text-2xl max-sm:px-4 text-3xl
                       text-[#DB4444] roboto-600 md:py-2">
                    যোগাযোগ
                </p>

            </div>

            {/* Grid Content */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">

                {/* Grid */}
                <div className=" bg-[#f8f9fa] p-6 col-span-2">
                    <form onSubmit={handleSubmit} action="">
                        <div className="md:flex items-center justify-between gap-6">
                            <input type="text" required placeholder="Your Name" name="name"
                                className="py-2 w-full px-4 border-1 bg-white border-[#dbd9d9] text-black focus:outline-none focus:ring-0 "
                            />
                            <input type="email" required placeholder="Your Email" name="email"
                                className="py-2 max-sm:mt-6 w-full px-4 border-1 bg-white border-[#dbd9d9] text-black focus:outline-none focus:ring-0 "
                            />
                        </div>
                        <input type="text" required placeholder="Subject" name="subject"
                            className="mt-6 py-2 w-full px-4 border-1 bg-white border-[#dbd9d9] text-black focus:outline-none focus:ring-0 "
                        />
                        <textarea name="message" id="" placeholder="Message"  required
                            className="mt-6 py-2 h-48 w-full px-4 border-1 bg-white border-[#dbd9d9] text-black focus:outline-none focus:ring-0 "
                        ></textarea>
                        <input type="submit" required value="Send Message" className="py-3 px-10 bg-[#DB4444]
                             text-white roboto-500 cursor-pointer mt-4 hover:bg-black text-lg max-sm:py-2 max-sm:px-8 max-sm:text-md"/>
                    </form>
                </div>

                {/* Grid */}
                <div className=" p-6 col-span-1">
                    <div className="flex items-center gap-4">
                        <FaLocationDot className="text-4xl p-2 bg-[#DB4444] rounded-full text-white" />
                        <div className="text-black">
                            <p className="roboto-600 font-bold text-lg">Address:</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 my-10">
                        <IoMdCall className="text-4xl p-2 bg-[#DB4444] rounded-full text-white" />
                        <div className="text-black">
                            <p className="roboto-600 font-bold text-lg">Phone::</p>
                            <p>+শীঘ্রই আসছে ###</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 my-10">
                        <MdMail className="text-4xl p-2 bg-[#DB4444] rounded-full text-white" />
                        <div className="text-black">
                            <p className="roboto-600 font-bold text-lg">Email:</p>
                            <p>শীঘ্রই আসছে ###</p>
                        </div>
                    </div>



                </div>

            </div>

        </section>
    )
}

export default Contact
