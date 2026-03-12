"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Anvil,
  Wind,
  Recycle,
  Truck,
  PackageSearch,
  Building2,
  Globe,
  Factory,
} from "lucide-react";

const shortServices = [
  {
    id: "iron",
    title: "Iron Scrap Trading",
    description:
      "HMS, shredded steel, and industrial iron scrap supplied for steel manufacturing and construction industries.",
    image: "/img/iron_serviceOverview.png",
    icon: Anvil,
    gradient: "from-gray-100 to-gray-50",
    iconColor: "text-gray-800",
  },
  {
    id: "copper",
    title: "Copper Scrap Trading",
    description:
      "Copper scrap supplied for electrical and mechanical manufacturing needs.",
    image: "/img/copper-serviceOverview.png",
    icon: Wind,
    gradient: "from-orange-50 to-orange-100/50",
    iconColor: "text-orange-600",
  },
  {
    id: "aluminium",
    title: "Aluminium Scrap Trading",
    description:
      "Aluminium scrap including sheets, extrusion, and casting grades for industrial supply.",
    image: "/img/aluminium-serviceOverview.png",
    icon: PackageSearch,
    gradient: "from-blue-50 to-blue-100/50",
    iconColor: "text-blue-600",
  },
  {
  id: "brass",
  title: "Brass Scrap Trading",
  description:
    "Brass scrap including sheets, rods, and fittings supplied for industrial use.",
  image: "/img/brass.png",
  icon: PackageSearch,
  gradient: "from-yellow-50 to-yellow-100/50",
  iconColor: "text-yellow-600",
},
  {
    id: "plastic",
    title: "Plastic Scrap Trading",
    description:
      "Supply of sorted plastic scrap for manufacturing and industrial applications.",
    image: "/img/plastic-serviceOverview.png",
    icon: Recycle,
    gradient: "from-green-50 to-green-100/50",
    iconColor: "text-green-600",
  },
  {
    id: "collection",
    title: "Scrap Collection & Processing",
    description:
      "Bulk scrap pickup and logistics coordination for industrial supply.",
    image: "/img/scrapCollection-serviceOverview.png",
    icon: Factory,
    gradient: "from-red-50 to-red-100/50",
    iconColor: "text-red-600",
  },

  // {
  //   id: "supply",
  //   title: "Supply & Distribution",
  //   description:
  //     "Supplying metal and plastic scrap to trusted companies and industries all over India.",
  //   image: "/img/truck-metal-scrap.webp",
  //   icon: Truck,
  //   gradient: "from-gray-50 to-gray-100/50",
  //   iconColor: "text-gray-600",
  // },

];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 },
  },
};

export default function ServiceOverview() {
  return (
    <section className="py-16 bg-background px-4">
      {/* Background decoration */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            Our Scrap Trading Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer reliable scrap trading and supply solutions tailored to steel mills, foundries, and manufacturing industries.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {shortServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group p-8 rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-transparent flex flex-col h-full"
              >
                <div className="relative h-48 w-full mb-6">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}
                    >
                      <Icon className={`h-12 w-12 ${service.iconColor}`} />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-1 text-[15px]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Services Section for Home Page */}
        <div className="mt-20 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-4">
              Additional Services
            </h3>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          </div>

          <motion.div
            className="group flex flex-col md:flex-row overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-xl transition-all duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            {/* Image side */}
            <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden">
              <Image
                src="/img/bars&cement.png"
                alt="Construction Materials Supply"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <Building2 className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold tracking-wide">
                  B2B Supply
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-card to-muted/30">
              <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                Construction Materials Supply
              </h4>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                We supply high-quality{" "}
                <strong className="text-foreground">
                  cement and iron bars (TMT)
                </strong>{" "}
                to trusted companies for construction projects. Materials are available on order to meet project requirements with reliable supply and delivery.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-auto">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-background py-2 px-4 rounded-full border border-border">
                  <Truck className="w-4 h-4 text-primary" />
                  On-order Delivery
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-background py-2 px-4 rounded-full border border-border">
                  <Globe className="w-4 h-4 text-primary" />
                  Nationwide Network
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5"
          >
            View All Service Details
            <svg
              className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
