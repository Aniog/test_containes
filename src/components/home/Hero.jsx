import { Link } from "react-router-dom";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg="[velmora-hero-subtitle] [velmora-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        style={{
          backgroundColor: "#2A1F18",
          backgroundImage:
            "linear-gradient(180deg, rgba(26,22,18,0.05) 0%, rgba(26,22,18,0.35) 55%, rgba(26,22,18,0.75) 100%)",
        }}
      />
      {/* Fallback subtle texture in case strk image is delayed */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-mocha/40 via-mocha/30 to-mocha/80 pointer-events-none"
      />

      {/* Content */}
      <div className="relative h-full max-w-[1400px] mx-auto px-5 md:px-10 flex items-end pb-20 md:pb-28">
        <div className="max-w-2xl fade-up">
          <p
            className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-5 md:mb-7"
          >
            The New Heirloom Collection
          </p>
          <h1
            id="velmora-hero-title"
            className="font-serif font-light text-ivory text-5xl md:text-7xl leading-[1.05] tracking-tight"
          >
            Crafted to be
            <br />
            <span className="italic text-gold-soft">Treasured</span>.
          </h1>
          <p
            id="velmora-hero-subtitle"
            className="mt-6 md:mt-7 text-ivory/80 text-base md:text-lg leading-relaxed max-w-lg"
          >
            Demi-fine gold jewelry, made in small batches and designed to be worn,
            layered, gifted, and passed on. From $30.
          </p>
          <div className="mt-9 md:mt-10 flex flex-wrap gap-3">
            <Button as={Link} to="/shop" variant="primary" size="lg">
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
