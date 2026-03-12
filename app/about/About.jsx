"use client";
import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import { motion } from "motion/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const About = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <div id="smooth-wrapper" ref={mainRef}>
      <div id="smooth-content">
        <section className="relative overflow-hidden bg-background py-24 px-6 md:px-12 lg:px-24">
          {/* Decorative Background Pattern */}
          <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-5">
            <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>

          <motion.div
            className="mx-auto max-w-7xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Header Section: Centered */}
            <div className="text-center mb-20 space-y-6">
              <motion.div
                variants={itemVariants}
                className="inline-block rounded-full bg-primary/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary"
              >
                Who We Are
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-3xl font-black leading-tight text-foreground md:text-5xl tracking-tight"
              >
                Building Stronger Industries with <br />
                <span className="text-primary">Reliable Scrap Trading</span>
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mt-6"
              />
            </div>

            <div className="flex flex-col items-center gap-16 lg:flex-row">

              {/* Left Column: Visuals */}
              <motion.div
                variants={itemVariants}
                className="relative w-full lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]">
                  <img
                    src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Steel Industry"
                    className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Red Accent Frame */}
                <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border-4 border-red-600/10"></div>
              </motion.div>

              {/* Right Column: Content */}
              <motion.div
                variants={itemVariants}
                className="space-y-10 lg:w-1/2"
              >
                <div className="space-y-6 text-xl leading-relaxed text-muted-foreground">
                  <p className="font-medium text-foreground/80 border-l-4 border-primary pl-6">
                    <span className="font-black text-foreground uppercase tracking-tighter">My Steel</span> is a premier metal and plastic scrap trading enterprise based in INDIA. We bridge the gap between waste and production through expert recycling.
                  </p>

                  <div className="flex items-start gap-5 group pl-7">
                    <div className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-primary shadow-[0_0_15px_-2px_rgba(192,32,47,0.5)]" />
                    <p>Specializing in <span className="font-bold text-foreground">Iron Scrap</span> as a vital raw material for steel production and industrial applications.</p>                  </div>

                  <div className="flex items-start gap-5 group pl-7">
                    <div className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-primary shadow-[0_0_15px_-2px_rgba(192,32,47,0.5)]" />
                    <p>Vast network ensuring consistent quality standards across domestic and international markets.</p>                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 pl-7">
                  <button className="group relative overflow-hidden rounded-xl bg-primary px-10 py-5 font-black text-white shadow-xl transition-all hover:bg-neutral-900 dark:hover:bg-white dark:hover:text-black hover:shadow-2xl active:scale-95">
                    <span className="relative z-10">Learn More About Us</span>
                    <div className="absolute inset-0 -translate-x-full bg-neutral-900 dark:bg-white transition-transform duration-300 group-hover:translate-x-0"></div>
                  </button>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default About;
