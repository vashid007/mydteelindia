"use client";
import Footer from "../components/Footer";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {
  Anvil,
  Wind,
  Recycle,
  Truck,
  Factory,
  PackageSearch,
  Building2,
} from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const services = [
  {
    id: "iron",
    title: "Iron Scrap Trading",
    description: (
      <>
        We specialize in <strong>ferrous scrap supply</strong>, including HMS,
        shredded steel, and industrial-grade iron scrap sourced for{" "}
        <strong>steel mills</strong> and{" "}
        <strong>manufacturing industries</strong>. Our focus is on reliable
        sourcing and bulk supply to meet the consistent material needs of
        industrial buyers across India.
      </>
    ),
    image: "/img/iron-scrap-img.jpg",
    icon: Anvil,
  },
  {
    id: "copper",
    title: "Copper Scrap Trading",
    description: (
      <>
        We supply <strong>copper scrap</strong> including insulated wire, sheets,
        tubes, and motor scrap sourced from reliable suppliers. Our focus is on
        maintaining <strong>consistent availability</strong> and dependable supply
        for electrical, mechanical, and manufacturing industries across India.
      </>
    ),
    image: "/img/copper-scrap-img.jpeg",
    icon: Wind,
  },
  {
    id: "aluminium",
    title: "Aluminium Scrap Trading",
    description: (
      <>
        We provide <strong>aluminium scrap</strong> including sheets, extrusion,
        and casting scrap to foundries and industrial buyers. Our aluminium scrap
        supply supports various <strong>manufacturing and industrial
        applications</strong> requiring lightweight and durable metal materials.
      </>
    ),
    image: "/img/aluminium-scrap-img.jpg",
    icon: PackageSearch,
  },
  {
    id: "plastic",
    title: "Plastic Scrap Trading",
    description: (
      <>
        We trade <strong>plastic scrap</strong> sourced from industrial and
        commercial sectors, supplying sorted materials suitable for manufacturing
        and recycling industries. Our network ensures reliable availability and
        consistent supply for bulk buyers.
      </>
    ),
    image: "/img/plastic-scrap-img.jpg",
    icon: Recycle,
  },
  {
    id: "collection",
    title: "Scrap Collection & Processing",
    description: (
      <>
        We coordinate <strong>bulk scrap collection</strong> and logistics from
        suppliers and industrial sources. Our network helps ensure efficient
        transportation and reliable delivery of scrap materials to companies that
        require consistent supply.
      </>
    ),
    image: "/img/scrap-collection.jpg",
    icon: Factory,
    gradient: "from-red-600 to-red-500",
  },
  // {
  //   id: "disposal",
  //   title: "Industrial Material Disposal",
  //   description: (
  //     <>
  //       We partner with factories, workshops, and construction sites to manage{" "}
  //       <strong>safe and compliant disposal of metal and plastic scrap</strong>.
  //       Our solutions reduce environmental impact, free up space, and recover
  //       value from materials that would otherwise be discarded.
  //     </>
  //   ),
  //   image: "/img/Material_disposal-img.jpg",
  //   icon: Recycle,
  //   gradient: "from-gray-300 to-gray-200",
  // },
  {
    id: "supply",
    title: "Supply & Distribution",
    description: (
      <>
        We manage <strong>scrap supply and distribution</strong> to trusted
        companies and industries across India. With a strong logistics network, we
        ensure <strong>reliable availability</strong> and timely delivery to meet
        industrial material requirements.
      </>
    ),
    image: "/img/truck-metal-scrap.webp",
    icon: Truck,
    gradient: "from-red-700 to-red-600",
  },
  // {
  //   id: "corporate",
  //   title: "Corporate Scrap Management",
  //   description: (
  //     <>
  //       Comprehensive, <strong>hands-on scrap management contracts</strong> for
  //       manufacturing and industrial businesses. We handle the regular
  //       collection, logistics, and processing of all your production scrap and
  //       by-products.
  //     </>
  //   ),
  //   image: "/img/scrapyard.png", // Reusing a good industrial image
  //   icon: Building2,
  //   gradient: "from-blue-700 to-blue-600",
  // },
];

const additionalServices = [
  {
    id: "construction-materials",
    title: "Construction Materials Supply",
    description: (
      <>
        We supply high-quality <strong>Cement and Iron bars (TMT)</strong> to
        trusted companies for construction purposes. Available on order and as
        required, our materials ensure structural strength and reliability for
        your building projects.
      </>
    ),
    images: [
      "/img/bars&cement.png",
      "/img/bars&cement3.png",
      "/img/bars&cement2.png",
      "/img/bars&cement4.png",
    ],
    icon: Building2,
    gradient: "from-amber-700 to-amber-600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 },
  },
};
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  const mainRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <div id="smooth-wrapper" ref={mainRef}>
      <div id="smooth-content">
        <div id="services" className="min-h-screen bg-background pb-20">
          {/* Hero Section */}
          <section className="relative bg-background  border-border py-24 overflow-hidden">
            <div className="absolute inset-0 " />
            <motion.div
              className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={heroVariants}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
                Comprehensive Metal and Plastic Scrap
                <br className="hidden md:block" /> Trading Solutions
              </h1>
              <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                We specialize in{" "}
                <strong className="text-primary">
                  ferrous scrap supply, including HMS, shredded steel, and industrial-grade iron scrap
                </strong>
                for steel mills and manufacturing industries. Our focus is on reliable sourcing and bulk supply to meet industrial demand.
              </p>
            </motion.div>
          </section>

          {/* Services Grid */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border border-border/50"
                  >
                    {/* Image / Gradient Header */}
                    <div
                      className={`relative h-56 w-full ${service.gradient ? `bg-gradient-to-br ${service.gradient}` : "bg-gray-100"} overflow-hidden`}
                    >
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <Icon className="h-32 w-32 text-white" />
                        </div>
                      )}
                      {/* Floating Icon Badge */}
                      <div className="absolute bottom-4 left-4 rounded-full bg-card p-3 shadow-md border border-border/50 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="flex-1 text-muted-foreground leading-relaxed text-[15px] md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Additional Services Section */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 relative z-10 pb-12">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Additional Services
              </h2>
              <div className="mt-4 h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col gap-12">
              {additionalServices.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="group flex flex-col lg:flex-row overflow-hidden rounded-3xl bg-card shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border border-border/50"
                  >
                    {/* Full width design: Image on left */}
                    <div
                      className={`relative h-72 lg:h-auto lg:w-1/2 ${service.gradient ? `bg-gradient-to-br ${service.gradient}` : "bg-gray-100"} overflow-hidden`}
                    >
                      {service.images ? (
                        <>
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
                                src={service.images[currentImageIndex]}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                              />
                            </motion.div>
                          </AnimatePresence>
                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-20">
                            {service.images.map((_, index) => (
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
                        </>
                      ) : service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <Icon className="h-32 w-32 text-white" />
                        </div>
                      )}

                      {/* Floating Icon Badge */}
                      <div className="absolute bottom-6 left-6 rounded-2xl bg-card p-4 shadow-xl border border-border/50 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Content on right */}
                    <div className="flex flex-1 flex-col p-8 lg:p-14 justify-center bg-gradient-to-br from-card to-card/50">
                      <h3 className="mb-6 text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="mt-auto flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground bg-muted py-2.5 px-5 rounded-full border border-border/50">
                          <Building2 className="w-4 h-4 text-primary" />
                          B2B Supply
                        </div>
                        <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground bg-muted py-2.5 px-5 rounded-full border border-border/50">
                          <Truck className="w-4 h-4 text-primary" />
                          On-order Delivery
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
