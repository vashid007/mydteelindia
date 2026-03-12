"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KeyHighlights() {

    const features = [
        {
            title: "Iron Scrap Supply",
            desc: "Trusted supplier of high-quality iron scrap for industrial and commercial needs.",
            img: "/iron_scrap.png",
        },
        {
            title: "Multi-Metals Supply",
            desc: "Reliable supply of copper, aluminium, and brass scrap.",
            img: "/multi_metal.png",
        },
        {
            title: "Quality & Compliance",
            desc: "Ensuring dependable scrap quality through trusted sourcing.",
            img: "/quality.png",
        },
        {
            title: "Reliable Logistics",
            desc: "Efficient pickup and delivery across India.",
            img: "/logistics.png",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="bg-background py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                        Why <span className="text-primary">MySteel</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Delivering quality scrap materials with trust, efficiency, and industry expertise.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="bg-card border border-border rounded-2xl shadow-sm p-5 text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 min-h-[440px] flex flex-col items-center justify-center cursor-default"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }}
                                className="flex justify-center mb-4"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={280}
                                    height={280}
                                    className="object-contain"
                                />
                            </motion.div>

                            <h3 className="text-xl font-bold text-primary mb-3">
                                {item.title}
                            </h3>

                            <div className="w-12 h-1.5 bg-primary mx-auto mb-4 rounded"></div>

                            <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}   