import { Link } from "react-router-dom";
import { useStrkImages } from "@/lib/useStrkImages";

export default function About() {
  const containerRef = useStrkImages([]);

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-text] gold jewelry atelier studio warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <p className="font-sans text-[11px] uppercase tracking-widest3 text-champagne">Est. 2024</p>
          <h1 id="about-hero-text" className="mt-4 font-serif text-5xl text-cream md:text-7xl">
            Our Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="font-sans text-[11px] uppercase tracking-widest3 text-gold">The Velmora Philosophy</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
          Beautiful, lasting gold jewelry should be part of every day.
        </h2>
        <div className="mt-6 h-px w-12 bg-gold" />
        <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-stone">
          <p>
            Velmora was founded on a simple belief: that beautiful, lasting gold
            jewelry should be part of every day, not reserved for special occasions.
            We design demi-fine pieces that glow against the skin and endure the
            rhythm of real life.
          </p>
          <p>
            Each piece is hand-finished in our studio using 18K gold plating over a
            durable brass core. We obsess over the details — the weight of a huggie,
            the catch of light on a crystal, the way a chain falls at the collarbone.
          </p>
          <p>
            From the first sketch to the final polish, every Velmora piece is made to
            be treasured. Worn, layered, gifted, and lived in.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-hairline pt-10 text-center">
          <div>
            <p className="font-serif text-3xl text-gold">18K</p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-stone">Gold Plated</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-gold">100%</p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-stone">Hypoallergenic</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-gold">30</p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-stone">Day Returns</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-gold px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
