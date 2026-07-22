import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-lg">
            <p className="text-velmora-gold text-sm tracking-widest uppercase mb-4">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-velmora-light leading-tight">
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="text-velmora-light/80 text-base md:text-lg mt-6 max-w-md leading-relaxed">
              Demi-fine gold jewelry designed for the woman who values quiet
              luxury — each piece made to be worn, loved, and passed down.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/collection" className="btn-primary">
                Shop the Collection
              </Link>
              <Link
                to="/collection"
                className="btn-outline text-velmora-light border-velmora-light hover:bg-velmora-light/10"
              >
                View Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}