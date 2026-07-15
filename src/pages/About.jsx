import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useStrkImages } from '@/lib/useStrkImages';

export default function About() {
  const ref = useStrkImages([]);
  return (
    <div ref={ref} className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-01"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-cream/80">
            Est. for the everyday
          </p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl text-cream md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 max-w-xl text-sm text-cream/80"
          >
            Quiet luxury, crafted to be treasured.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">
          The Velmora Philosophy
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
          Fine Craftsmanship, Within Reach
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone md:text-base">
          <p>
            Velmora was founded on a simple belief: that fine craftsmanship
            should not be reserved for special occasions. Each piece is designed
            in our studio and finished in 18K gold plating over sterling silver
            — hypoallergenic, durable, and made to be worn from morning to
            night.
          </p>
          <p>
            We work in small batches, refining every detail until it feels
            right. The result is demi-fine jewelry with the soul of an heirloom
            and the ease of an everyday favorite.
          </p>
          <p>
            From the first sketch to the final polish, every Velmora piece is
            made to be lived in — and to be treasured for years to come.
          </p>
        </div>
        <div className="mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gold px-10 py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
          >
            Shop the Collection
            <ArrowRight width={14} height={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
