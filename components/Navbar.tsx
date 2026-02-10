"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const navLinks = [
    { name: "About", href: "/about" },
    { name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/event" },
    { name: "Team", href: "/team" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect for a cleaner look on white backgrounds
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="group flex items-center gap-1">
                    <Image
                        src="/logo-white.png" // Replace with your actual filename (e.g., logo.svg, logo.png)
                        alt="TEDxYourCollege Logo"
                        width={260}  // Adjust based on your logo's aspect ratio
                        height={40}  // Adjust based on your logo's aspect ratio
                        priority     // Tells Next.js to load this immediately (no lazy loading for logos)
                        className="h-20 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-red-600 ${pathname === link.href ? "text-red-600" : "text-white/70"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/register"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all hover:tracking-[0.15em] active:scale-95"
                    >
                        Register Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 focus:outline-none"
                >
                    <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 md:hidden z-40"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-bold uppercase tracking-tighter hover:text-red-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/register"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 bg-red-600 text-white px-10 py-4 font-black uppercase tracking-widest"
                        >
                            Get Tickets
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}