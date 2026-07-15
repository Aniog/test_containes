import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-velmora-charcoal"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/70 via-velmora-ink/40 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl animate-slide-up">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold-light">
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
            >
              Timeless designs in 18k gold plate, made for the moments worth
              remembering — and the everyday in between.
            </p>
            <div className="mt-8">
              <Link to="/shop">
                <Button variant="accent" className="min-w-[220px]">
                  Shop the Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
