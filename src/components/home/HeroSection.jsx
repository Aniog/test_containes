import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-0001"
        data-strk-bg="[hero-subtitle-0001] [hero-title-0001]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-black/50 via-soft-black/30 to-soft-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-gold-light/90 text-xs md:text-sm tracking-[0.25em] uppercase mb-6 animate-[fadeInUp_1s_ease]">
          Demi-Fine Jewelry · 18K Gold Plated
        </p>
        <h1
          id="hero-title-0001"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-normal leading-[1.15] mb-6 tracking-tight"
          style={{ animation: 'fadeInUp 1s ease 0.1s both' }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle-0001"
          className="text-sand/80 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-10"
          style={{ animation: 'fadeInUp 1s ease 0.2s both' }}
        >
          Quietly luxurious pieces for the woman who knows that true elegance
          whispers — it never shouts.
        </p>
        <Link
          to="/shop"
          className="btn-primary"
          style={{ animation: 'fadeInUp 1s ease 0.3s both', display: 'inline-flex' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50"
        style={{ animation: 'fadeInUp 1s ease 0.5s both' }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-cream/30" />
      </div>
    </section>
  );
}
