"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          // --- SIZING & SCALE ---
          scale: 1.00,
          scaleMobile: 1.00,
          points: 20.00,        // Increase for a denser, smaller-looking net
          maxDistance: 15.00,   // Lower this to make lines shorter/smaller
          spacing: 20.00,       // Adjust for dot density
          // --- COLORS ---
          color: 0xe62b1e,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl border border-white/10" 
      /* Change h-[400px] to whatever size you want. 
         'relative' makes it stay inside your layout instead of floating over everything.
      */
    />
  );
}