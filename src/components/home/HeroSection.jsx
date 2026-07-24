import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase opacity-90 mb-4">
          New Collection
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium leading-[1.1] max-w-3xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 sm:mt-6 font-sans text-sm sm:text-base opacity-90 max-w-md leading-relaxed">
          Demi-fine jewelry designed for everyday moments and lasting memories.
        </p>
        <Link
          to="/shop"
          className="mt-8 sm:mt-10 inline-block bg-accent text-white px-8 sm:px-10 py-3.5 sm:py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
