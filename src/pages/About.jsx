import React from "react";
import { Link } from "react-router-dom";
import { useStrkImages } from "@/hooks/useStrkImages";
import { useReveal } from "@/hooks/useReveal";
import { Gem, Heart, Leaf, ShieldCheck } from "lucide-react";

const values = [
  { icon: Gem, title: "Hand-Finished", body: "Every piece is polished and finished by hand for a warm, lasting glow." },
  { icon: ShieldCheck, title: "Hypoallergenic", body: "18K gold over sterling silver, nickel-free and gentle on sensitive skin." },
  { icon: Heart, title: "Made to Gift", body: "Signature gift-boxed presentation for the moments worth marking." },
  { icon: Leaf, title: "Considered", body: "Small-batch production and recyclable packaging, by design." },
];

export default function About() {
  const ref = useStrkImages([]);
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="pt-16 md:pt-20 bg-cream">
      {/* Hero */}
      <section ref={ref} className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-2b7e4f"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full max-w-content mx-auto px-5 md:px-8 flex flex-col justify-end pb-14">
          <p className="text-cream/80 text-xs uppercase tracking-[0.24em] mb-4">Our Story</p>
          <h1 id="about-hero-title" className="font-serif text-cream text-5xl md:text-6xl leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="about-hero-subtitle" className="mt-4 text-cream/85 max-w-lg">
            Demi-fine gold jewelry, designed in studio and made for everyday wear.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
          <p className="text-xs uppercase tracking-[0.24em] text-gold mb-4">Est. with intention</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Fine gold jewelry shouldn't wait for special occasions.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            Velmora began with a simple belief: that the warmth of real gold
            belongs to the everyday. We hand-finish each piece in 18K gold over
            sterling silver, balancing heirloom detail with a weight you forget
            you're wearing. From the first sketch to the final polish, every
            piece is made to be treasured — and lived in.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center reveal">
                <Icon className="w-7 h-7 text-gold mx-auto mb-4" strokeWidth={1.4} />
                <h3 className="font-serif text-xl text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-content mx-auto px-5 md:px-8 reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Find your everyday piece.</h2>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-cream text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-deep transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
