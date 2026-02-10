"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero({ scrolled }: { scrolled: boolean }) {
  const [showHeroLogo, setShowHeroLogo] = useState(!scrolled);

  useEffect(() => {
    if (!scrolled) {
      // wait one frame so navbar logo fully unmounts
      const id = requestAnimationFrame(() => setShowHeroLogo(true));
      return () => cancelAnimationFrame(id);
    } else {
      setShowHeroLogo(false);
    }
  }, [scrolled]);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AnimatePresence mode="wait">
        {showHeroLogo && (
          <motion.div
            key="hero-logo"
            layout
            layoutId="tedx-logo"
            className="w-full max-w-[820px] px-4 flex flex-col items-center"
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 22,
              mass: 0.8,
            }}
          >
            <motion.div layout>
              <Image
                src="/logo-white.png"
                alt="TEDxAmritapuri Logo"
                width={1000}
                height={300}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
              className="mt-14 px-12 py-4 bg-red-600 hover:bg-white hover:text-black font-bold uppercase tracking-[0.25em] transition-all duration-300"
            >
              Get Tickets
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
