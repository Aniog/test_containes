import React from "react";
import StrkImageHost from "@/components/ui/StrkImageHost";

const ARTICLES = [
  {
    id: "how-to-layer",
    title: "How to layer gold like an editor",
    excerpt:
      "Three rules our stylists use to build a layered necklace stack that feels considered, not crowded.",
    date: "May 2026",
    tag: "Style",
  },
  {
    id: "care-guide",
    title: "Caring for demi-fine gold",
    excerpt:
      "What to do (and what to never do) so your Velmora pieces look as alive on year three as on day one.",
    date: "April 2026",
    tag: "Guide",
  },
  {
    id: "studio-visit",
    title: "Inside the studio: the lacework process",
    excerpt:
      "A close-up look at how our hand-pierced filigree drops are made — start to finished piece.",
    date: "March 2026",
    tag: "Studio",
  },
  {
    id: "gifting",
    title: "A gifting guide, with no fluff",
    excerpt:
      "Five pieces we recommend most often for partners, mothers, sisters, and yourself.",
    date: "February 2026",
    tag: "Gifting",
  },
];

export default function Journal() {
  return (
    <StrkImageHost>
      <section className="bg-bone border-b border-sand py-12 md:py-16">
        <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 text-center">
          <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">The Velmora Journal</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            Notes on craft, style and care.
          </h1>
          <p className="mt-4 text-sm md:text-base text-espresso/80 max-w-xl mx-auto">
            Quiet dispatches from the studio — once a month, never more.
          </p>
        </div>
      </section>

      <section className="max-w-page mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {ARTICLES.map((a) => (
            <article key={a.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-bone overflow-hidden">
                <img
          data-strk-img-id={`journal-${a.id}-image`}
          data-strk-img={`[journal-${a.id}-excerpt] [journal-${a.id}-title] gold jewelry editorial`}
          data-strk-img-ratio="4x3"
          data-strk-img-width={1000}
          alt={a.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
              </div>
              <div className="pt-5">
                <p className="text-[11px] uppercase tracking-editorial text-muted">
                  {a.tag} · {a.date}
                </p>
                <h2
                  id={`journal-${a.id}-title`}
                  className="font-serif text-2xl md:text-3xl text-ink mt-2 leading-snug group-hover:text-gold transition"
                >
                  {a.title}
                </h2>
                <p
                  id={`journal-${a.id}-excerpt`}
                  className="mt-3 text-sm text-espresso/80 leading-relaxed max-w-md"
                >
                  {a.excerpt}
                </p>
                <span className="inline-block mt-4 text-[11px] uppercase tracking-editorial border-b border-ink pb-0.5 group-hover:text-gold group-hover:border-gold transition">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </StrkImageHost>
  );
}
