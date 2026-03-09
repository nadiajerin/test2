import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "নির্ভীক টাইমস - Nirvik Times",
  description: "আপনার চারপাশের খবরের নির্ভীক কণ্ঠস্বর।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         {/* Sponsor Image  */}
        <img src="https://tpc.googlesyndication.com/simgad/13225723445217380621"
         className=" mx-auto "/>
         
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
