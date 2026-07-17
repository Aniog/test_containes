import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-xl">
          {/* Pre-heading */}
          <p className="text-xs uppercase tracking-ultra-wide text-taupe mb-4 animate-fade-in">
            Demi-Fine Collection
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-6 animate-slide-up">
            Crafted to be<br />
            <span className="italic">Treasured</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed max-w-md animate-slide-up delay-100">
            18K gold-plated jewelry designed for the modern woman. 
            Timeless elegance at an accessible price.
          </p>

          {/* CTA */}
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 btn-primary group animate-slide-up delay-200"
          >
            Shop the Collection
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
        <span className="text-[10px] uppercase tracking-widest text-taupe">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-taupe to-transparent" />
      </div>
    </section>
  );
}
