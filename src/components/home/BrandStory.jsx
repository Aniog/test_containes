import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section
      className="bg-ivory-50 border-y border-hairline"
      aria-labelledby="story-title"
    >
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden bg-espresso order-1 lg:order-1">
          <img
            alt="A jewelry maker's hands shaping a piece of 18K gold-plated brass at a workbench"
            data-strk-img-id="story-img-3f1b22"
            data-strk-img="[story-body] [story-title] [velmora-tagline]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-28 order-2 lg:order-2">
          <p className="eyebrow text-taupe-500">Our story</p>
          <h2
            id="story-title"
            className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-espresso text-balance"
          >
            Jewelry made to be lived in.
          </h2>
          <p
            id="story-body"
            className="mt-6 text-sm sm:text-base text-taupe-500 leading-relaxed max-w-md"
          >
            Velmora began at a kitchen table in Brooklyn, with a single cuff and
            the belief that the best jewelry is the kind you forget you're
            wearing — until someone stops you to ask. Each piece is designed
            in small batches, plated in 18K gold, and finished by hand.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-espresso">
            {[
              "Designed in Brooklyn, made in small batches",
              "Hypoallergenic, lead- and nickel-free",
              "Recyclable packaging, made for keeps",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 pb-3 border-b border-hairline"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso border-b border-espresso pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors"
            >
              Read our story
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
