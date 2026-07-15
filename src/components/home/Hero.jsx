import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow text-white/80">Velmora Fine Jewelry</p>
        <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl md:text-6xl">
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-white/80 sm:text-base">
          Demi-fine jewelry in warm 18K gold plating, designed for everyday elegance and the moments that matter.
        </p>
        <div className="mt-8">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
