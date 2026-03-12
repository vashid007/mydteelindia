"use client"
import React, { useLayoutEffect, useRef } from 'react';
import KeyHighlights from './homepage/keyhighlights';
import AboutUs from './homepage/aboutus';
import ServiceOverview from './homepage/serviceOverview';
import ContactTeaser from './ContactTeaser';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Link from 'next/link';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Initialize ScrollSmoother
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9895122441?text=Hello%20MySteel%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-tooltip">Chat with us!</span>
        <span className="whatsapp-pulse" />
        <FaWhatsapp size={30} />
      </a>
      <div id="smooth-wrapper" ref={mainRef}>
        <div id="smooth-content">
          <div className="relative h-[100vh] w-full overflow-hidden flex items-center">
            {/* Background Image with Dark Overlay */}
            <div
              className="absolute inset-0 z-0 bg-black bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/img/iron-scrap-img.jpg")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-[#C0202F]/50 z-10"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-24">
              <div className="max-w-3xl text-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in">
                  Building Materials & Scrap Trading Co
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                  <span className="font-bold text-white">MySteel</span> is a
                  trusted buyer and supplier of{" "}
                  <strong className="text-white-900 font-bold">
                    HMS (Heavy Melting Scrap)
                  </strong>
                  , iron, copper, aluminium, brass, and all types of steel scrap
                  across India. As a leading{" "}
                  <strong className="text-white-900 font-bold">
                    HMS scrap trader
                  </strong>
                  , we provide competitive pricing, reliable logistics, and
                  consistent quality, backed by a strong network of partners and
                  a commitment to transparent and reliable business practices.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <button className="cursor-pointer bg-[#C0202F] hover:bg-[#A01B27] text-white font-bold py-3 px-8 rounded-4xl shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 text-center">
                      Get a Quote
                    </button>
                  </Link>
                  <Link href="/services">
                    <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-4xl border-2 border-[#C0202F]/50 backdrop-blur-sm transition duration-300 transform hover:scale-105 active:scale-95 text-center cursor-pointer">
                      View Our Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <KeyHighlights />
          <AboutUs />
          <ServiceOverview />
          <ContactTeaser />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
