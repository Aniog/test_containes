import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { StrkImg } from '@/components/ui/StrkImg';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-velmora-base">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-base/40 via-velmora-base/20 to-velmora-base/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <span className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.28em] text-white/80">
          Demi-Fine Gold Jewelry
        </span>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-lg font-sans text-base font-light leading-relaxed text-white/85 sm:text-lg"
        >
          Quiet luxury for everyday rituals. Ethically crafted pieces made to layer,
          gift, and love for years.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-white text-velmora-base hover:bg-velmora-cream"
            asChild
          >
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
