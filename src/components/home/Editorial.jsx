import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import Reveal from "@/components/ui/Reveal";

const POSTS = [
  {
    id: "post-1",
    title: "Why demi-fine is the smartest fine jewelry buy of 2026.",
    excerpt:
      "A short case for slow, considered, daily-wear gold — without the four-figure price tag.",
    img: "Still life of gold jewelry on linen and a book of poems editorial warm light",
    imgId: "journal-1-3f4d2e",
    to: "/journal/demi-fine-2026",
    minutes: "4 min read",
  },
  {
    id: "post-2",
    title: "How to layer necklaces without it looking like 2014.",
    excerpt:
      "Three rules our designers swear by — and the one mistake everyone makes.",
    img: "Layered gold necklaces on linen editorial still life warm soft light",
    imgId: "journal-2-7c1a8b",
    to: "/journal/how-to-layer-necklaces",
    minutes: "3 min read",
  },
  {
    id: "post-3",
    title: "Care: making your gold-plated jewelry last a decade.",
    excerpt:
      "The four habits that keep demi-fine looking brand new, from our atelier manager.",
    img: "Hands polishing gold jewelry with soft cloth on wooden surface warm editorial",
    imgId: "journal-3-9e6c5b",
    to: "/journal/care-for-gold-plated",
    minutes: "5 min read",
  },
];

export default function Editorial() {
  return (
    <section className="py-20 sm:py-28 bg-cream-200">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 sm:mb-16">
            <div>
              <p className="eyebrow mb-3">The Journal</p>
              <h2 className="font-display text-[40px] sm:text-[56px] leading-[1.05] text-onyx-800">
                Quiet letters from the studio.
              </h2>
            </div>
            <Link
              to="/journal"
              className="font-sans uppercase tracking-widest-2 text-[11px] text-onyx-800 border-b border-onyx-800 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors inline-flex items-center gap-2"
            >
              All stories <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {POSTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <Link to={p.to} className="group block">
                <div className="overflow-hidden">
                  <StockImage
                    query={p.img}
                    ratio="4x3"
                    width={800}
                    imgId={p.imgId}
                    className="w-full transition-transform duration-1200 group-hover:scale-[1.04]"
                    alt={p.title}
                  />
                </div>
                <div className="pt-5">
                  <p className="font-sans uppercase tracking-widest-2 text-[10px] text-mocha-500 mb-3">
                    {p.minutes}
                  </p>
                  <h3 className="font-display text-[26px] sm:text-[28px] leading-[1.2] text-onyx-800 group-hover:text-gold-500 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-mocha-600 leading-relaxed">
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
