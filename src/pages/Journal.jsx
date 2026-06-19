import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import StockImage from "@/components/ui/StockImage";

const ARTICLES = [
  {
    id: "art-1",
    tag: "Style Notes",
    title: "How to layer like a stylist — without trying.",
    excerpt: "Three rules, five pieces, and one quiet formula for a stack that always feels like you.",
    date: "May 12, 2026",
    readMins: 6,
    imgQuery: "velmora layered necklaces editorial close up portrait warm",
    featured: true,
  },
  {
    id: "art-2",
    tag: "Behind the Scenes",
    title: "Inside the Lisbon atelier.",
    excerpt: "A morning at the bench with our lead jeweler — from wax model to finished cuff.",
    date: "Apr 28, 2026",
    readMins: 9,
    imgQuery: "velmora atelier hands bench polishing editorial warm",
  },
  {
    id: "art-3",
    tag: "Material Story",
    title: "Why we plate at 1.2 microns (and not less).",
    excerpt: "The math behind a finish that outlasts trends — and the one thing to never put on your jewelry.",
    date: "Apr 11, 2026",
    readMins: 5,
    imgQuery: "velmora gold plating thickness editorial detail macro",
  },
  {
    id: "art-4",
    tag: "Gifting",
    title: "A guide to gifting, quietly.",
    excerpt: "How to choose a piece that feels personal — for a friend, a mother, or yourself.",
    date: "Mar 30, 2026",
    readMins: 7,
    imgQuery: "velmora gift box velvet cream jewelry editorial warm",
  },
  {
    id: "art-5",
    tag: "Travel",
    title: "What we wore in Marrakech.",
    excerpt: "A packing list, three looks, and the cuff that came home sunburned (it's fine).",
    date: "Mar 14, 2026",
    readMins: 8,
    imgQuery: "velmora jewelry marrakech travel editorial gold warm",
  },
  {
    id: "art-6",
    tag: "Q&A",
    title: "Five questions, every jeweler should answer.",
    excerpt: "What to ask, what to look for, and the quiet red flags you should never ignore.",
    date: "Feb 22, 2026",
    readMins: 4,
    imgQuery: "velmora editorial gold jewelry flat lay cream warm",
  },
];

const TAGS = ["All", "Style Notes", "Behind the Scenes", "Material Story", "Gifting", "Travel", "Q&A"];

export default function Journal() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [tag, setTag] = useState("All");

  const filtered = useMemo(() => {
    if (tag === "All") return ARTICLES;
    return ARTICLES.filter((a) => a.tag === tag);
  }, [tag]);

  const [hero, ...rest] = ARTICLES;

  return (
    <div className="vm-page">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-cream-50 border-b border-ink/8">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <Reveal>
            <p className="vm-eyebrow text-ink-muted">The Journal</p>
            <h1 className="vm-display text-ink mt-4 text-5xl md:text-7xl leading-[1.02] max-w-4xl">
              Notes from the atelier,{" "}
              <span className="italic font-light">slowly written.</span>
            </h1>
            <p className="mt-6 max-w-xl text-ink-muted text-base md:text-lg leading-relaxed">
              Behind-the-scenes essays, styling notes, and the occasional recipe for a slow Sunday.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar">
              {TAGS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTag(t)}
                  className={
                    "px-4 py-2 text-[11px] tracking-[0.18em] uppercase border transition-colors " +
                    (t === tag
                      ? "bg-ink text-cream border-ink"
                      : "border-ink/20 text-ink hover:border-ink")
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <Reveal>
            <Link to="/journal" className="group block grid md:grid-cols-2 gap-8 md:gap-14 items-center">
              <div className="aspect-[4/3] md:aspect-[5/4] bg-cream-200 overflow-hidden">
                <StockImage
                  imgId={hero.id}
                  query={hero.imgQuery}
                  ratio="5x4"
                  width="1100"
                  alt={hero.title}
                  eager
                  className="w-full h-full object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.04]"
                />
              </div>
              <div className="md:pl-4 max-w-xl">
                <p className="vm-eyebrow text-gold-dark">Featured · {hero.tag}</p>
                <h2 className="vm-display text-ink mt-4 text-3xl md:text-5xl leading-[1.05]">{hero.title}</h2>
                <p className="mt-5 text-ink-soft text-base md:text-lg leading-relaxed">{hero.excerpt}</p>
                <p className="mt-5 text-xs text-ink-muted flex items-center gap-3">
                  <span>{hero.date}</span>
                  <span className="w-1 h-1 rounded-full bg-ink-muted" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3 h-3" strokeWidth={1.4} />
                    {hero.readMins} min read
                  </span>
                </p>
                <span className="mt-6 inline-flex items-center gap-2 vm-link">
                  Read essay
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.6} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream-50 pb-20 md:pb-28 border-t border-ink/8">
        <div className="mx-auto max-w-page px-5 md:px-10 pt-16 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
            {filtered.filter((a) => !a.featured).map((a, i) => (
              <Reveal key={a.id} delay={i * 80}>
                <Link to="/journal" className="group block">
                  <div className="aspect-[4/5] bg-cream-200 overflow-hidden">
                    <StockImage
                      imgId={a.id}
                      query={a.imgQuery}
                      ratio="4x5"
                      width="700"
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="vm-eyebrow text-gold-dark mt-6">{a.tag}</p>
                  <h3 className="vm-serif text-2xl md:text-[26px] text-ink mt-3 leading-snug font-light">{a.title}</h3>
                  <p className="text-sm text-ink-muted mt-3 leading-relaxed">{a.excerpt}</p>
                  <p className="mt-4 text-[11px] tracking-[0.18em] uppercase text-ink-muted flex items-center gap-3">
                    {a.date}
                    <span className="w-1 h-1 rounded-full bg-ink-muted" />
                    {a.readMins} min read
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
