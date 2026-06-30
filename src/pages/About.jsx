import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Artwork from "@/components/ui/Artwork";

const PILLARS = [
  {
    title: "Designed in-house",
    body: "Every Velmora piece starts as a sketch in our studio. We design for the everyday — pieces that layer, that travel, that get better with age.",
  },
  {
    title: "Demi-fine, not fine-print",
    body: "Solid brass cores, thick 18K gold plating, hypoallergenic by default. The kind of jewelry that lives in your bathroom, not your safe.",
  },
  {
    title: "Priced without pretense",
    body: "$30–$120. Quality that feels three times the price, never the other way around. We work directly with our atelier to keep it that way.",
  },
];

export default function About() {
  return (
    <article className="bg-ivory">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[640px] w-full overflow-hidden">
        <Artwork variant="story" tone="deep" className="absolute inset-0 w-full h-full" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,26,23,0.4) 0%, rgba(31,26,23,0.1) 40%, rgba(31,26,23,0.45) 100%)",
          }}
        />
        <div className="relative h-full container-editorial flex flex-col justify-end pb-12 md:pb-16 text-ivory">
          <div className="label-eyebrow text-ivory/70 mb-3">Our Story</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            Jewelry, made to be <em className="italic text-gold-light">worn</em>.
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="container-editorial py-20 md:py-28 max-w-3xl mx-auto text-center">
        <p className="font-display text-2xl md:text-3xl leading-snug text-ink">
          We started Velmora because the jewelry we wanted didn't exist.
        </p>
        <p className="mt-6 text-charcoal leading-relaxed">
          Quality you could feel, without the fine-jewelry markup. Pieces that looked like an heirloom and wore like a T-shirt. Designed in our studio, made by an atelier we've worked with for years, and priced so you can build a collection, not a single moment.
        </p>
        <div className="hairline mx-auto mt-12 max-w-xs" />
      </section>

      {/* Pillars */}
      <section className="container-editorial pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <div className="label-eyebrow text-gold-dark mb-4">
                {String(PILLARS.indexOf(p) + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-3xl text-ink leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-charcoal leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-bone">
        <div className="container-editorial py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
            Find your forever piece.
          </h2>
          <Link to="/shop" className="mt-8 inline-flex btn-primary">
            Shop the Collection
            <ArrowRight className="ml-3 w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </article>
  );
}
