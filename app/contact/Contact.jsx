"use client";
import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    scrapType: 'Steelbar',
    quantity: '',
    contactMethod: 'Email'
  });
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    const data = {
      access_key: "81ad34c6-a04b-4625-81e8-584703e91aae",
      name: formData.name,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      scrapType: formData.scrapType,
      quantity: formData.quantity,
      contactMethod: formData.contactMethod,
      subject: "New Contact Inquiry - MySteel",
      from_name: "MySteel Website",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Inquiry sent successfully!");

        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          scrapType: "Steelbar",
          quantity: "",
          contactMethod: "Email",
        });

      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Network error!");
    }

    setLoading(false);
  };


  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div id="smooth-wrapper" ref={mainRef}>
      <ToastContainer position="top-right" autoClose={3000} />
      <div id="smooth-content">
        <div className="relative overflow-hidden bg-background py-16 px-6 md:px-12 lg:px-24 mt-8">
          {/* Decorative Background Pattern */}
          <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-5">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto">

            {/* 1) Contact Intro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-8 space-y-4"
            >
              <motion.div variants={fadeInUp} className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-Semibold uppercase tracking-widest text-primary m-4">
                Get In Touch
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-2xl font-extrabold leading-tight text-foreground md:text-3xl mt-3">
                <span className="text-primary text-[3rem]">My Steel</span> <br /> Building Materials & Scrap Trading Company
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto  "
              >
                We're more than suppliers — we're your trusted trading partner
              </motion.p>
            </motion.div>

            {/* 2) Contact Details + Form */}
            <div className="max-w-5xl mx-auto px-4">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                {/* Inquiry Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-xl shadow-xl border border-border h-full"
                >
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div whileHover={{ scale: 1.01 }}>
                        <label className="block text-[13px] font-bold uppercase tracking-wide text-foreground mb-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          required
                          onChange={handleChange}
                          className="w-full bg-background border-border rounded-md shadow-sm focus:ring-primary focus:border-primary p-2 border outline-none transition-all text-sm text-foreground"
                        />
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.01 }}>
                        <label className="block text-[13px] font-bold uppercase tracking-wide text-foreground mb-1">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          placeholder="e.g. My Steel Trading"
                          onChange={handleChange}
                          className="w-full bg-background border-border rounded-md shadow-sm focus:ring-primary focus:border-primary p-2 border outline-none transition-all text-sm text-foreground"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div whileHover={{ scale: 1.01 }}>
                        <label className="block text-[13px] font-bold uppercase tracking-wide text-foreground mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="yourname@example.com"
                          value={formData.email}
                          required
                          onChange={handleChange}
                          className="w-full bg-background border-border rounded-md shadow-sm focus:ring-primary focus:border-primary p-2 border outline-none transition-all text-sm text-foreground"
                        />
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.01 }}>
                        <label className="block text-[13px] font-bold uppercase tracking-wide text-foreground mb-1">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="9895122441"
                          value={formData.phone}
                          required
                          maxLength={10}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            setFormData({ ...formData, phone: value });
                          }}
                          className="w-full bg-background border-border rounded-md shadow-sm focus:ring-primary focus:border-primary p-2 border outline-none transition-all text-sm text-foreground"
                        />
                      </motion.div>
                    </div>

                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label className="block text-[13px] font-bold uppercase tracking-wide text-foreground mb-1">Type</label>
                      <select
                        name="scrapType"
                        value={formData.scrapType}
                        onChange={handleChange}
                        className="w-full bg-background border-border rounded-md shadow-sm focus:ring-primary focus:border-primary p-2 border outline-none text-sm text-foreground cursor-pointer"
                      >
                        <option value="Steelbar">Steel Bar</option>
                        <option value="Cement">Cement</option>
                        <option value="Iron">Iron</option>
                        <option value="Copper">Copper</option>
                        <option value="Aluminium">Aluminium</option>
                        <option value="Plastic">Plastic</option>
                        <option value="brass">Brass</option>

                      </select>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label className="block text-[13px] font-bold uppercase tracking-wide text-foreground mb-1">Quantity / Details</label>
                      <textarea
                        name="quantity"
                        rows="3"
                        required
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Specify quantity and details..."
                        className="w-full bg-background border-border rounded-md shadow-sm focus:ring-primary focus:border-primary p-2 border outline-none transition-all text-sm text-foreground"
                      />
                    </motion.div>

                    <div>
                      <label className="block text-[13px] font-bold uppercase tracking-wide text-foreground mb-1">Preferred Contact Method</label>
                      <div className="flex gap-4">
                        {['Email', 'Phone', 'WhatsApp'].map((method) => (
                          <motion.label key={method} whileTap={{ scale: 0.95 }} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method}
                              checked={formData.contactMethod === method}
                              onChange={handleChange}
                              className="w-4 h-4 text-primary focus:ring-primary border-border bg-background"
                            />
                            <span className="ml-1 text-xs font-medium text-muted-foreground hover:text-primary">{method}</span>
                          </motion.label>
                        ))}
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                    />


                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.97 }}
                      className={`w-full rounded-lg py-3 font-bold text-white shadow-md uppercase tracking-wider text-xs transition-all 
                      ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"}`}
                    >
                      {loading ? "Sending..." : "Submit Inquiry"}
                    </motion.button>
                  </form>
                </motion.div>

                {/* Contact Details */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group h-full"
                >
                  <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-xl border-2 border-primary/10 transition-all group-hover:scale-105"></div>

                  <div className="bg-card p-6 rounded-xl shadow-lg border border-border h-full">
                    <h2 className="text-xl font-bold text-foreground mb-4">Contact Details</h2>

                    <div className="space-y-4 text-muted-foreground">
                      {[
                        {
                          label: "Address",
                          val: "Suite No: 326, 2nd Floor, KC Arcade, Near TV Centre, CSEZ P.O, Kakkanad, Ernakulam, Kerala - 682037",
                        },
                        {
                          label: "Phone",
                          val: "+91 9895122441",
                          color: "text-primary font-semibold",
                        },
                        { label: "Email", val: "Info@mysteelindia.in" },
                        { label: "Working Hours", val: "Monday – Saturday, 8:00 AM to 6:00 PM" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <div>
                            <h3 className="font-bold text-foreground uppercase text-[11px] tracking-wide">{item.label}</h3>
                            <p className={`text-sm leading-snug ${item.color || ''}`}>{item.val}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary"
                    >
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-primary font-bold uppercase">Note:</strong> For urgent enquiries, please call us directly.
                        For bulk or general requests, submit the form and our team will respond within 24 hours.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;