import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { StrkBackground } from '@/components/ui/StrkImage';

export function HeroSection() {
  return (
    <StrkBackground
      id="hero-bg-velmora"
      query="[hero-subtitle] [hero-title]"
      ratio="16x9"
      width={1600}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-ivory">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl"
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-ivory/85 md:text-lg"
        >
          Elegant, wearable pieces designed for the modern woman — made to layer,
          love, and live in.
        </p>
        <div className="mt-9">
          <Link to="/shop">
            <Button size="lg">Shop the Collection</Button>
          </Link>
        </div>
      </div>
    </StrkBackground>
  );
}
