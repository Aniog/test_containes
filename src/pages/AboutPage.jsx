import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Hand, Heart } from "lucide-react";
import { StoryArt } from "@/components/decor/JewelryArt";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";

const VALUES = [
  {
    icon: Hand,
    title: "Slow, by hand",
    text: "Every piece is plated and finished in small batches — never mass, never rushed.",
  },
  {
    icon: Sparkles,
    title: "Demi-fine, real gold",
    text: "18K gold plating over a brass core, at a price you can actually wear every day.",
  },
  {
    icon: Heart,
    title: "Made to keep",
    text: "Hypoallergenic, nickel-free, and designed to be passed down — not retired.",
  },
];

export default function AboutPage() {
  const ref = useReveal();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-bone pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <p className="text-[10px] font-medium tracking-wide-4 uppercase text-gold reveal">
            Our Story
          </p>
          <h1 className="mt-4 font-serif font-light text-4xl md:text-6xl lg:text-7xl text-ink leading-[1.05] reveal">
            We make <em className="italic text-gold">quiet</em> gold,
            <br className="hidden md:block" /> for every day.
          </h1>
          <p className="mt-6 text-[15px] md:text-base font-light text-cocoa max-w-xl mx-auto reveal">
            Velmora is a small studio making demi-fine gold jewelry for the women who don't want to wait for "special" to wear something beautiful.
          </p>
        </div>
      </section>

      {/* Editorial image */}
      <section className="bg-bone">
        <div className="mx-auto max-w-5xl px-5 md:px-8 reveal">
          <div className="aspect-[4/3] overflow-hidden bg-ink">
            <StoryArt />
          </div>
        </div>
      </section>

      {/* Story body */}
      <section className="bg-bone py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <div className="space-y-6 text-[15px] md:text-base font-light text-cocoa leading-relaxed reveal">
            <p>
              It started at a kitchen table in Lisbon. There was a single brass ear wire, a borrowed polishing cloth, and a small, persistent thought: <em className="italic text-ink">why does gold have to be reserved for "special"?</em>
            </p>
            <p>
              Every piece we make begins with that question. We plate by hand, in small batches, in a studio with one good window and a stubborn espresso machine. We use brass cores — substantial, weighty, made to keep — finished in 18K gold so the things you reach for every morning can be the things that last.
            </p>
            <p>
              We don't believe in seasonal drops. We don't believe in "investment pieces." We believe in the necklace you forget you're wearing — until a stranger in a coffee shop asks where it's from.
            </p>
            <p>
              Thank you for being here.
            </p>
            <p className="font-serif italic text-2xl text-ink pt-4">
              — Mariana & the Velmora studio
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="border-t border-hairline pt-8 reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <v.icon className="w-5 h-5 text-gold" strokeWidth={1.4} />
                <h3 className="mt-5 font-serif text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm font-light text-cocoa leading-relaxed max-w-xs">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone py-20 md:py-28 text-center">
        <div className="reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">
            Ready to find your everyday piece?
          </h2>
          <Button as={Link} to="/shop" size="lg" className="mt-8">
            Shop the Collection
            <ArrowRight className="w-3.5 h-3.5 ml-2" strokeWidth={1.5} />
          </Button>
        </div>
      </section>
    </div>
  );
}
