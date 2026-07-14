import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-bone text-ink">
      <div className="container-editorial pt-32 md:pt-40 pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl font-light leading-[1.02] text-balance">
            Quietly made jewelry,{" "}
            <span className="italic text-gold-deep">worn loudly</span>.
          </h1>
          <p className="mt-8 font-sans text-base md:text-lg text-muted-light leading-relaxed max-w-2xl">
            Velmora began at a kitchen table with a single sketch of a huggie
            that felt right — substantial, sculptural, made to wear every
            day. Today, each piece is hand-finished by a small team of
            artisans in our atelier, in 18K gold plating over a brass base
            that weathers into the patina of a life well lived.
          </p>
          <p className="mt-4 font-sans text-base md:text-lg text-muted-light leading-relaxed max-w-2xl">
            We design for the women who build quietly, give generously, and
            buy for themselves without apology.
          </p>
          <Link to="/shop" className="mt-10 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-editorial font-medium hover:text-gold transition-colors">
            Shop the Collection
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
