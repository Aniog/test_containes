import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import Reveal from "@/components/ui/Reveal";
import StockImage from "@/components/ui/StockImage";

export default function Collections() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="vm-page">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cream-50 border-b border-ink/8">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <Reveal>
            <p className="vm-eyebrow text-ink-muted">The Collections</p>
            <h1 className="vm-display text-ink mt-4 text-5xl md:text-7xl leading-[1.02] max-w-4xl">
              Three chapters,{" "}
              <span className="italic font-light">one quiet thread.</span>
            </h1>
            <p className="mt-6 max-w-xl text-ink-muted text-base md:text-lg leading-relaxed">
              Each Velmora collection is a short story — a mood, a memory, a moment of the year — designed to be discovered slowly and worn for years.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured collection */}
      <section className="bg-cream">
        <div className="mx-auto max-w-page px-5 md:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="aspect-[4/5] bg-cream-200 overflow-hidden relative">
              <StockImage
                imgId="collection-featured"
                query="velmora spring collection editorial gold jewelry on cream linen warm"
                ratio="4x5"
                width="900"
                alt="Spring '26 featured collection"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-5 left-5 vm-eyebrow text-cream bg-ink/75 px-3 py-1.5">
                New — Spring '26
              </span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="lg:pl-6 max-w-xl">
              <p className="vm-eyebrow text-gold-dark">Featured</p>
              <h2 className="vm-display text-ink mt-3 text-4xl md:text-6xl leading-[1.05]">
                The Aura Edit.
              </h2>
              <p className="mt-5 text-ink-soft leading-relaxed">
                A celebration of light — the new Aura Edit pairs sculptural cuffs with crystal-set drops, finished in our deepest 18K plating. Designed to catch the afternoon sun and hold it through dinner.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-ink-muted">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Twelve pieces, available now
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Limited first run — 250 numbered sets
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Complimentary velvet pouch on orders $80+
                </li>
              </ul>
              <Link to="/shop" className="vm-btn vm-btn--primary mt-9 inline-flex">
                Shop the Aura Edit
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.6} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category index */}
      <section className="bg-cream-50 py-20 md:py-28 border-t border-ink/8">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="vm-eyebrow text-ink-muted">By category</p>
              <h2 className="vm-display text-ink mt-3 text-4xl md:text-6xl leading-[1.05]">
                <span className="italic font-light">Find</span> your ritual.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 120}>
                <Link
                  to={`/shop?category=${cat.slug}`}
                  className="group block relative aspect-[3/4] overflow-hidden bg-cream-200"
                >
                  <StockImage
                    imgId={`collection-cat-${cat.slug}`}
                    query={cat.imgQuery}
                    ratio="3x4"
                    width="700"
                    alt={`${cat.label} collection`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
                  <div className="absolute inset-x-5 md:inset-x-8 bottom-6 md:bottom-8">
                    <p className="vm-eyebrow text-cream/75">The {cat.label} Ritual</p>
                    <h3 className="vm-display text-cream text-3xl mt-2">{cat.label}</h3>
                    <p className="text-cream/75 text-sm mt-3 max-w-xs">{cat.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story cards */}
      <section className="bg-cream py-20 md:py-28 border-t border-ink/8">
        <div className="mx-auto max-w-page px-5 md:px-10 grid md:grid-cols-2 gap-10 md:gap-14">
          {[
            { id: "journal-1", title: "Inside the Atelier",     line: "Meet the makers shaping the new season in Lisbon.", tag: "Behind the Scenes" },
            { id: "journal-2", title: "How to Layer Like a Stylist", line: "Three rules we swear by — and the pieces to start with.", tag: "Style Notes" },
          ].map((c, i) => (
            <Reveal key={c.id} delay={i * 120}>
              <Link to="/journal" className="group block">
                <div className="aspect-[4/3] bg-cream-200 overflow-hidden relative">
                  <StockImage
                    imgId={c.id}
                    query={`velmora ${c.title} editorial`}
                    ratio="4x3"
                    width="800"
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.04]"
                  />
                </div>
                <p className="vm-eyebrow text-gold-dark mt-6">{c.tag}</p>
                <h3 className="vm-display text-ink mt-2 text-3xl md:text-4xl">{c.title}</h3>
                <p className="text-ink-muted mt-3">{c.line}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
