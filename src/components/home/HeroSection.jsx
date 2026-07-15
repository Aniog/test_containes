import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-velmora-charcoal">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://placehold.co/1600x1000/1C1C1C/BFA06B?text=Velmora+Fine+Jewelry"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/60 via-transparent to-velmora-ink/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white section-padding">
        <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/70 mb-5 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] max-w-4xl mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-md mb-10 leading-relaxed">
          Timeless pieces designed for everyday elegance. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="btn-primary bg-white text-velmora-ink hover:bg-velmora-cream">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
