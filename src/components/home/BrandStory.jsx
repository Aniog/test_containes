import { Link } from "react-router-dom";
import { useStrkImages } from "@/lib/useStrkImages";

export default function BrandStory() {
  const containerRef = useStrkImages([]);

  return (
    <section ref={containerRef} className="bg-sand py-20 md:py-32">
      <div className="mx-auto grid max-w-editorial items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-velmora"
            data-strk-bg="[story-text] gold jewelry craftsmanship atelier hands warm"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>

        {/* Text */}
        <div className="md:pl-6">
          <p className="font-sans text-[11px] uppercase tracking-widest3 text-gold">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Jewelry made to be lived in
          </h2>
          <div className="mt-6 h-px w-12 bg-gold" />
          <p id="story-text" className="mt-6 font-sans text-base leading-relaxed text-stone">
            Velmora was founded on a simple belief: that beautiful, lasting gold
            jewelry should be part of every day, not reserved for special occasions.
            Each piece is hand-finished in our studio using 18K gold plating over a
            durable core — designed to glow against the skin and endure the rhythm of
            real life.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-stone">
            From the first sketch to the final polish, we obsess over the details that
            make a piece feel like yours.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 font-sans text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:text-gold-deep"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
