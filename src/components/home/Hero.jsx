import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-ivory">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="home-hero-bg-9f3a2c"
        data-strk-bg="[home-hero-sub] [home-hero-title] warm gold jewelry on model dark velvet editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
      />
      {/* Tonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/45 via-onyx/30 to-onyx/70" />

      <div className="relative h-full max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block font-sans text-[11px] uppercase tracking-[0.32em] text-champagne mb-6">
            The New Heirloom
          </span>
          <h1
            id="home-hero-title"
            className="font-serif font-light text-5xl sm:text-6xl md:text-7xl leading-[1.04] tracking-tight"
          >
            Crafted to be<br />
            <em className="not-italic text-champagne">Treasured.</em>
          </h1>
          <p
            id="home-hero-sub"
            className="mt-6 font-sans text-base md:text-lg text-ivory/85 max-w-lg leading-relaxed"
          >
            Demi-fine 18K gold-plated jewelry, designed to be worn every day and
            saved for every moment.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/shop" variant="accent" size="lg">
              Shop the Collection
            </Button>
            <Button as={Link} to="/about" variant="outlineLight" size="lg">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
