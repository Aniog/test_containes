import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen overflow-hidden bg-espresso">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-6d34fa"
        data-strk-bg="warm-lit close-up of a woman wearing [hero-sub] [hero-cta] in soft candle light, dark moody editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/25 to-espresso/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/45 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] md:min-h-screen max-w-[1440px] items-end md:items-center px-6 md:px-10 pb-16 md:pb-0 pt-28">
        <div className="max-w-2xl">
          <p
            className="animate-fade-up text-[11px] font-medium uppercase tracking-luxe text-bronze [animation-delay:150ms]"
          >
            Demi-Fine · 18K Gold Plated
          </p>
          <h1
            className="mt-5 animate-fade-up font-serif text-5xl font-light leading-[1.05] text-cream md:text-7xl [animation-delay:300ms]"
          >
            Crafted to be
            <span className="block italic text-bronze/90">Treasured</span>
          </h1>
          <p
            id="hero-sub"
            className="mt-6 max-w-md animate-fade-up text-sm leading-relaxed text-cream/80 md:text-base [animation-delay:450ms]"
          >
            Earrings, necklaces and huggies in warm 18k gold — designed for the everyday,
            priced to be lived in, made to last.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:600ms]">
            <Link to="/shop" id="hero-cta">
              <Button variant="accent" size="lg">Shop the Collection</Button>
            </Link>
            <Link to="/about">
              <Button variant="outlineLight" size="lg">Our Story</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-cream/60 to-transparent" />
      </div>
    </section>
  );
}
