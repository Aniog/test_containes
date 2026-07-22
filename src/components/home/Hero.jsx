import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for quiet luxury. Warm 18K gold plating, thoughtful details, and pieces meant to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-white text-stone-900 px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-amber-50 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
