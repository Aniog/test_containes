import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[#2D2A26]"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting elegant"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center max-w-4xl mx-auto">
        <h1 
          id="hero-title"
          className="font-serif tracking-wide text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-sm"
        >
          Crafted to be Treasured
        </h1>
        <p className="font-sans font-light tracking-wide text-lg md:text-xl text-[#E5E0D8] mb-10 max-w-2xl">
          Quiet luxury designed for everyday elegance. Discover our collection of fine gold jewelry.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-[#A68D47] text-white hover:bg-[#Cbb26A] transition-colors duration-300 font-sans tracking-widest uppercase text-sm font-medium py-4 px-10 rounded-sm"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
