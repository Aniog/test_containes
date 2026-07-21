import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const PILLARS = [
  {
    title: "Designed in-house",
    body: "Every Velmora piece starts as a sketch on paper, then becomes a wax, then a cast — refined by hand until it feels like ours and only ours.",
  },
  {
    title: "Demi-fine, not costume",
    body: "We plate over a solid brass core with thick 18K gold — heavier than the industry standard, designed to last for years, not seasons.",
  },
  {
    title: "Honest pricing",
    body: "Sold direct, never marked up for a middleman. The price you see is the price of the piece — and a fair wage for the people who made it.",
  },
];

export default function About() {
  return (
    <main className="page-fade pt-24 md:pt-32 bg-cream min-h-screen">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 mb-20 md:mb-28">
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="eyebrow text-champagne-dark">Our Story</span>
            <h1 className="font-display text-5xl md:text-7xl text-ink mt-4 leading-[1.02]">
              We make jewelry to be lived in.
            </h1>
            <p className="mt-6 text-muted text-base md:text-lg max-w-md leading-relaxed">
              Velmora started on a single shared bench in 2021 — a search for the warmth of fine gold at a price you can wear every day. Five years later, we still finish every piece by hand, in small batches, with the same patience a jeweler brings to an heirloom.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/shop" className="btn-base btn-primary">
                Shop the Collection
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-ink relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ink-soft via-ink to-ink-deep" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-cream">
                  <p className="font-display text-6xl">2021</p>
                  <p className="eyebrow text-champagne mt-3">Established</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mb-20 md:mb-28">
          <SectionTitle eyebrow="What we believe" title="Three quiet standards" align="center" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {PILLARS.map((p, i) => (
              <article key={p.title} className="flex flex-col gap-3 p-8 border-t border-hairline">
                <span className="eyebrow text-champagne">No. {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl text-ink">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-ink text-cream rounded-sm p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Begin your collection.</h2>
          <p className="mt-3 text-cream/70 text-sm md:text-base max-w-md mx-auto">
            From the everyday huggie to the once-in-a-lifetime gift.
          </p>
          <Link to="/shop" className="btn-base bg-cream text-ink border-cream hover:bg-champagne hover:border-champagne mt-7">
            Shop Now
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </main>
  );
}
