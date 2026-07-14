import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10 pt-20">
        <div className="max-w-2xl animate-fade-in">
          {/* Eyebrow */}
          <p className="text-[var(--color-accent)] text-sm tracking-[0.3em] uppercase mb-4">
            Demi-Fine Jewelry
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-text)] leading-tight text-balance mb-6">
            Crafted to be<br />
            <span className="italic text-[var(--color-accent-light)]">Treasured</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-md mb-8 leading-relaxed">
            Handcrafted in 18K gold vermeil. Designed for the moments that matter.
          </p>

          {/* CTA Button */}
          <Link
            to="/collection"
            className="inline-block btn-primary"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent" />
      </div>
    </section>
  );
}
