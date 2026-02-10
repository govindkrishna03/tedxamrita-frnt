"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SpeakerProps {
  name: string;
  role: string;
  image: string;
}

export default function SpeakerCard({ name, role, image }: SpeakerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Red Accent Bar */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500" />
      </div>
      
      <div className="mt-4">
        <h4 className="text-xl font-bold uppercase tracking-tight">{name}</h4>
        <p className="text-red-600 text-xs font-bold uppercase tracking-widest mt-1">{role}</p>
      </div>
    </motion.div>
  );
}