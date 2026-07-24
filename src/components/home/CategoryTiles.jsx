import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
import StrkImage from "@/components/ui/StrkImage";
import Reveal from "@/components/ui/Reveal";

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="eyebrow">Curated for You</p>
          <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
            Shop by Category
          </h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 120}>
              <Link
                to={`/shop?category=${cat.id}`}
                className="group relative block overflow-hidden bg-sand"
              >
                <div className="aspect-[3/4]">
                  <StrkImage
                    imgId={cat.imgId}
                    query={`[${cat.blurbId}] [${cat.titleId}] gold jewelry editorial still life`}
                    ratio="3x4"
                    width="700"
                    alt={cat.name}
                    className="transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                  <div>
                    <h3
                      id={cat.titleId}
                      className="font-serif text-2xl font-light uppercase tracking-[0.18em] text-ivory md:text-3xl"
                    >
                      {cat.name}
                    </h3>
                    <p
                      id={cat.blurbId}
                      className="mt-1 text-xs font-light uppercase tracking-[0.18em] text-ivory/70 opacity-0 transition-all duration-500 group-hover:opacity-100"
                    >
                      {cat.blurb}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ivory/40 text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
