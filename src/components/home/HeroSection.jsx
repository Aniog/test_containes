import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { useImageLoader } from '@/hooks/useImageLoader';

export function HeroSection() {
  const ref = useImageLoader([]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cream"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/35" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm uppercase tracking-extra-wide mb-5 opacity-90"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] max-w-4xl mb-8"
        >
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-white/90 max-w-xl mb-10 leading-relaxed">
          Timeless pieces for everyday luxury. Designed for the women who wear
          confidence like jewelry.
        </p>
        <Button variant="primary" className="min-w-[220px]" asChild>
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce">
        <span className="text-[10px] uppercase tracking-extra-wide mb-2">Scroll</span>
        <div className="w-px h-8 bg-white/60" />
      </div>
    </section>
  );
}
