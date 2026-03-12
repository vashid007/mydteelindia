import React from "react";
import { FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 sm:px-10 lg:px-16 pt-14 pb-6">

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        <div className="-mt-8">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="MySteel Logo"
              width={140}
              height={10}
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:contents">

          <div className="space-y-3">
            <h3 className="text-white font-semibold">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>DRS</li>
              <li>Sustainability Suite</li>
              <li>Marketplace</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-semibold">At a Glance</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Work With Us</li>
              <li>Brand Kit</li>
            </ul>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-8 lg:contents">
          <div className="space-y-3">
            <h3 className="text-white font-semibold">Legal</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms-conditions" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-semibold">Contact Us</h3>
            <p className="text-gray-300">+91 9895122441</p>
            <p className="text-gray-300">Info@mysteelindia.in</p>
          </div>

        </div>

      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 py-10 border-b border-white/10 text-white">

        <div className="w-full">
          <h3 className="text-white text-lg mb-4 ">
            {/* Join our newsletter */}
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-[#0b0b0b] text-white placeholder-gray-500 px-6 py-3 rounded-2xl border border-white/10 outline-none focus:border-red-600/50 w-full"
            />
            <Link href="/contact">
              <button className="cursor-pointer bg-red-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-red-700 transition whitespace-nowrap">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto text-center lg:text-center">

          <p className="text-white mb-5">
            Socials
          </p>

          <div className="flex justify-center lg:justify-end gap-5 "
          >
            <div className="border border-border p-4 rounded-2xl hover:bg-red-700 hover:text-white transition cursor-pointer">
              <FaYoutube size={18} />
            </div>

            <div className="border border-border p-4 rounded-2xl hover:bg-red-700 hover:text-white transition cursor-pointer">
              <FaLinkedinIn size={18} />
            </div>

            <div className="border border-border p-4 rounded-2xl hover:bg-red-700 hover:text-white transition cursor-pointer">
              <FaInstagram size={18} />
            </div>
          </div>

        </div>
      </div>

      <div className="text-center pt-6 text-sm text-gray-500">
        © MySteelIndia All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;