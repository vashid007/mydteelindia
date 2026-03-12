"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/img/iron-scrap.jpeg",
    "/img/scrapyard.png",
    "/img/construction-materials.png",
    "/img/truck-collection.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="relative w-full bg-background py-16 px-4 overflow-hidden">
      {/* Background Texture/Grid */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] -z-0 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header Section: Centered */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-full bg-primary/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary"
          >
            About MySteel
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tight"
          >
            Building Stronger Industries with <br />
            <span className="text-primary">Reliable Scrap Trading</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-6"
          />
        </div>

        {/* Main Body Section: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <p className="text-foreground/90 text-xl leading-relaxed font-medium border-l-4 border-[#C0202F] pl-6">
                <span className="text-primary font-extrabold uppercase tracking-tighter">
                  My Steel
                </span>{" "}
                is a trusted scrap dealer and bulk trader operating across India. We connect scrap suppliers with industries by delivering large-scale loads directly to the companies that need them.
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed pl-7">
                Based in{" "}
                <strong className="text-primary font-bold">India</strong>, we
                specialize in the sourcing and bulk supply of{" "}
                <strong className="text-primary font-bold">
                  HMS (Heavy Melting Scrap), iron, copper, aluminium, brass, plastic,</strong> and various grades of steel scrap. Our primary focus remains on{" "} HMS scrap,
                widely used as a key raw material in steel manufacturing and heavy industrial applications.{" "}
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed pl-7">
                Our strong network of partners across India enables us to deliver bulk loads with competitive pricing, dependable logistics, and consistent quality, while maintaining transparent and reliable business practices.
              </p>
            </div>

            <div className="pt-4 pl-7">
              <Link href="/services">
                <button className="cursor-pointer relative px-8 py-5 bg-primary text-white font-bold rounded-xl shadow-lg overflow-hidden group">
                  <span className="relative z-10">Explore Our Services</span>

                  <span className="absolute top-0 left-[-100%] h-full w-full bg-white/20 skew-x-12 transition-all duration-700 group-hover:left-[120%]"></span>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visuals */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              className="relative z-10 overflow-hidden rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-4 border-card group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              {/* Carousel Container */}
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt="MySteel Scrap Supply"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentImageIndex === index
                          ? "w-8 bg-primary"
                          : "w-2.5 bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Abstract background accents */}
            <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-100/10 blur-3xl"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
