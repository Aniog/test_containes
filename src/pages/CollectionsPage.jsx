import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { collectionsContent } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";

export default function CollectionsPage() {
  const ref = useReveal();
  return (
    <main className="bg-bone">
      <div className="pt-28 md:pt-36 pb-12 md:pb-20 bg-cream">
        <Container size="wide">
          <p className="text-label text-muted">Curated</p>
          <h1 className="mt-3 font-serif text-5xl md:text-7xl text-espresso leading-[1.05]">
            Collections
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-espresso-soft leading-relaxed">
            Each collection is a quiet thesis — a mood, a season, a way of wearing. Discover the stories behind your next piece.
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-24" ref={ref}>
        <Container size="wide">
          <div className="space-y-16 md:space-y-24">
            {collectionsContent.map((c, i) => (
              <Link
                key={c.id}
                to={c.href}
                className="reveal group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                <div
                  className={cn(
                    "md:col-span-7 relative aspect-[4/5] overflow-hidden bg-taupe",
                    i % 2 === 1 && "md:order-2"
                  )}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={cn("md:col-span-5", i % 2 === 1 && "md:order-1")}>
                  <p className="text-label text-muted">{c.count} pieces</p>
                  <h2 className="mt-4 font-serif text-4xl md:text-5xl text-espresso leading-[1.1]">
                    {c.name}
                  </h2>
                  <div className="mt-4 w-10 hairline-gold" />
                  <p className="mt-6 text-base text-espresso-soft italic font-serif">
                    {c.tagline}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-label text-espresso link-underline pb-1">
                    Explore the collection
                    <ArrowUpRight strokeWidth={1.25} className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}