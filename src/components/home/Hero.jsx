import { Link } from 'react-router-dom';
import { useImageLoader } from '@/hooks/useImageLoader';

export function Hero() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-ink/30"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] velmora fine jewelry"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/50" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-cream">
            <p
              id="hero-subtitle"
              className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cream/90"
            >
              Demi-Fine Gold Jewelry
            </p>
            <h1 id="hero-title" className="heading-xl mb-6 text-balance">
              Crafted to be Treasured
            </h1>
            <p className="mb-10 max-w-md text-base leading-relaxed text-cream/90 sm:text-lg">
              Timeless silhouettes in 18K gold plate. Designed for the women who wear elegance effortlessly.
            </p>
            <Link to="/shop" className="btn-gold">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
