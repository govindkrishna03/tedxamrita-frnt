"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";
import SpeakerCard from "@/components/SpeakerCard";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const speakers = [
    { name: "Dr. Elena Rossi", role: "AI Ethicist", image: "/api/placeholder/400/500" },
    { name: "Marcus Chen", role: "Climate Activist", image: "/api/placeholder/400/500" },
    { name: "Sarah Jenkins", role: "Neuroscientist", image: "/api/placeholder/400/500" },
    { name: "Julian Thorne", role: "Tech Visionary", image: "/api/placeholder/400/500" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation variants for the speaker grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="relative bg-black text-white selection:bg-red-600 selection:text-white">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      <Navbar scrolled={scrolled} />

      <Hero scrolled={scrolled} />

      <div className="relative z-10">
        
        {/* Section 1: Historic Debut */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-red-600 font-bold uppercase tracking-[0.5em] text-xs mb-8">
              A Historic Debut
            </h2>
            <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] mb-12 tracking-tighter">
              Amrita <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Vishwa Vidyapeetham</span>
            </h1>
            <p className="text-white/50 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              Hosting <span className="text-white font-medium">TEDx</span> for the very first time. 
              Ideas worth spreading, arriving at the heart of Amritapuri.
            </p>
          </motion.div>
        </section>

        {/* Section 2: Speakers Grid */}
        <section className="py-32 px-6 bg-white/[0.01] backdrop-blur-[2px] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-red-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">The Lineup</h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase italic">The Voice of Change</h3>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {speakers.map((speaker, index) => (
                <SpeakerCard key={index} {...speaker} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3: Call to Action / Date */}
        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-neutral-900/50 p-12 md:p-24 border border-white/10 relative overflow-hidden">
              {/* Decorative Red Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full" />
              
              <div>
                <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
                  Be part of <br />the movement.
                </h3>
                <p className="text-white/50 text-lg mb-8 max-w-sm">
                  Limited seats available for the most anticipated event of the year.
                </p>
                <button className="bg-red-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Reserve Spot
                </button>
              </div>

              <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0 md:pl-12">
                <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Save the Date</h4>
                <p className="text-7xl md:text-9xl font-black tracking-tighter">2026</p>
                <p className="text-white/30 uppercase tracking-[0.5em] text-xs mt-4 font-bold">Amritapuri Campus</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-20 text-center border-t border-white/5">
          <p className="text-white/20 text-[10px] uppercase tracking-[1em]">TEDxAmritapuri 2026 • Independently Organized</p>
        </footer>
      </div>
    </main>
  );
}