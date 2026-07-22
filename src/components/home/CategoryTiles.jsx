import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";
import { strkSrc } from "@/lib/strkSrc";

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="reveal text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
          Shop by Category
        </p>
        <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.08] text-espresso md:text-5xl">
          Find Your Signature
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-8">
        {categories.map((cat, index) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group reveal relative block overflow-hidden bg-espresso"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="aspect-[3/4] md:aspect-[4/5]">
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={strkSrc(cat.imgId)}
                alt={`${cat.name} — ${cat.desc}`}
                loading="lazy"
                className="h-full w-full object-cover opacity-95 transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-75"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

            {/* Hidden descriptor feeding the image query */}
            <span id={cat.descId} className="sr-only">
              {cat.desc} — elegant gold {cat.id} photography
            </span>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-7">
              <div>
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl font-semibold uppercase tracking-[0.16em] text-ivory md:text-[1.7rem]"
                >
                  {cat.name}
                </h3>
                <p className="mt-2 max-w-[26ch] text-xs leading-relaxed text-ivory/0 transition-all duration-500 group-hover:text-ivory/85">
                  {cat.desc}
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ivory/40 text-ivory transition-all duration-500 group-hover:border-gold-soft group-hover:bg-gold-soft group-hover:text-espresso">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
