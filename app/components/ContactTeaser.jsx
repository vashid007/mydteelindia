"use client";

import React from "react";
import { Phone, MessageSquare, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const ContactTeaser = () => {
  return (
    <section className="relative py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative group">
          {/* Main Card with Glassmorphism - Compact padding */}
          <div className="overflow-hidden relative flex flex-col lg:flex-row items-center justify-between gap-8 bg-card backdrop-blur-xl p-8 md:p-10 rounded-[1.5rem] border border-border shadow-md transition-all duration-500 hover:border-primary/30">

            <div className="flex-1 space-y-6 text-center lg:text-left relative z-20">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase">
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-red-400 animate-text-shimmer">Collaborate?</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Urgent Call Item */}
                <div className="cursor-pointer group/item flex flex-col items-center lg:items-start gap-3 p-4 rounded-2xl transition-colors hover:bg-muted/50">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground tracking-widest mb-0.5">
                      Urgent Enquiries
                    </p>
                    <p className="text-foreground/80 font-semibold">
                      Call +91 9895122441 or email Info@mysteelindia.in
                    </p>
                  </div>
                </div>

                {/* General Requirements Item */}
                <div className="cursor-pointer group/item flex flex-col items-center lg:items-start gap-3 p-4 rounded-2xl transition-colors hover:bg-muted/50">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-foreground/10 text-foreground/60">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground tracking-widest mb-0.5">General Requirements</p>
                    <p className="text-foreground/80 font-semibold">Submit our online enquiry form.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 relative z-20">
              <Link href="/contact">
                <button className="cursor-pointer group relative flex items-center gap-3 px-6 py-4 bg-red-700 text-white rounded-3xl font-bold text-base transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:-translate-y-1 active:scale-95 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;
