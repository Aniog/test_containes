import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2000&q=85')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-espresso/35" aria-hidden="true" />
      <div className="relative z-10 text-center text-cream px-6 max-w-3xl mx-auto">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] mb-5 text-cream/90">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="text-base md:text-lg text-cream/85 max-w-md mx-auto mb-10 font-light">
          Timeless silhouettes in 18k gold plating, designed for everyday
          elegance and moments worth remembering.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-xs uppercase tracking-widest animate-bounce">
        Scroll
      </div>
    </section>
  );
}
