import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    // Remove bg-black from here if it's interfering, or keep it but ensure particles are above it
    <main className="relative min-h-screen w-full bg-black text-white">
      
      {/* Particles Background - ensure it fills the container */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Hero Content - must be z-10 or higher to be clickable */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter uppercase">
          TED<span className="text-red-600">x</span>AMRITAPURI
        </h1>

        <p className="mt-4 text-lg md:text-2xl font-light tracking-widest text-white/70 uppercase">
          Ideas Worth Spreading • 8th March
        </p>

        <button className="mt-10 px-10 py-4 bg-red-600 hover:bg-white hover:text-black font-bold uppercase tracking-widest transition-all duration-300 rounded-none">
          Get tickets
        </button>
      </section>
    </main>
  );
}