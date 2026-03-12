"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail, MessageSquare, Sun, Moon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling and hide WhatsApp when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("sidebar-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("sidebar-open");
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 w-full  border-border bg-background/95 backdrop-blur-md py-1">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="MySteel Logo"
              width={100}
              height={28}
              priority
              className="object-contain"
            />
          </Link>

          {/* 🔹 Desktop Links (Fixed isActive error) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // Added this declaration
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-md font-bold transition-colors duration-200   
                    ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-[2px] left-0 h-[2px] rounded-t-full bg-primary transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Side / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white transition-transform active:scale-95"
            >
              Get Started
            </Link>
            <ThemeToggle />

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 md:hidden text-foreground focus:outline-none"
              aria-label="Open Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MODERN MOBILE SIDEBAR DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[101] h-[100dvh] w-[70%] max-w-[300px] bg-card/70 backdrop-blur-xl border-l border-border/50 shadow-2xl md:hidden overflow-hidden flex flex-col"
            >
              {/* Fixed Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-6 -mt-2">
                  <div className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt="MySteel Logo"
                      width={100}
                      height={40}
                      className="object-contain"
                      priority
                    />
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground transition-all border border-border/50"
                    aria-label="Close Menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Appearance Switch */}
                <div className="mb-4">
                  <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-muted/20 border border-border/50">
                    <span className="text-sm font-bold text-foreground/80">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto p-6 pt-2 custom-scrollbar">
                {/* Navigation Links */}
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 ${isActive
                            ? "bg-primary/10 text-primary font-bold border border-primary/20"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted/30 font-bold"
                            }`}
                        >
                          <span className="text-md tracking-tight">
                            {link.name}
                          </span>
                          {isActive && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* divider */}
                <div className="h-px w-full bg-border/30 my-6" />

                {/* Contact Info Section */}
                <div className="space-y-6 px-2">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-2">
                    Connect With Us
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+919895122441" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors pl-2">
                      <Phone size={16} className="text-primary" />
                      <span className="text-sm font-bold">+91 98951 22441</span>
                    </a>
                    <a href="mailto:Info@mysteelindia.in" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors pl-2">
                      <Mail size={16} className="text-primary" />
                      <span className="text-sm font-bold">Info@mysteelindia.in</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Fixed Footer CTA */}
              <div className="p-6 pt-2 bg-gradient-to-t from-card/90 via-card/50 to-transparent">
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#C0202F] py-3.5 text-center text-sm font-black text-white shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
                  >
                    <span>Get Started</span>
                    <MessageSquare size={16} />
                  </Link>
                  <p className="text-center text-[10px] text-muted-foreground font-medium">
                    © 2024 MySteel Scrap Trading. <br /> All rights reserved.
                  </p>
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/2 blur-[100px] pointer-events-none rounded-full -z-10" />
              <div className="absolute top-1/2 -left-20 w-40 h-40 bg-foreground/2 blur-[80px] pointer-events-none rounded-full -z-10" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
