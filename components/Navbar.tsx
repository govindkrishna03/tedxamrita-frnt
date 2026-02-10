"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Speakers", href: "/speakers" },
  { name: "Schedule", href: "/event" },
  { name: "Team", href: "/team" },
];

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl py-3 border-b border-white/5"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Slot */}
        <div className="flex-1 flex items-center min-h-[52px]">
          <AnimatePresence mode="popLayout">
            {scrolled && (
              <motion.div
                layout
                layoutId="tedx-logo"
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 0.6,
                }}
                className="origin-left"
              >
                <Link
                  href="/"
                  className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  <Image
                    src="/logo-white.png"
                    alt="TEDxAmritapuri Logo"
                    width={160}
                    height={36}
                    className="h-10 w-auto object-contain"
                    priority={false}
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-[0.22em] transition-colors duration-300 ${
                    active
                      ? "text-red-600"
                      : "text-white/70 hover:text-red-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link
            href="/register"
            className="bg-red-600 hover:bg-white hover:text-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-red-600"
          >
            Get Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
}
