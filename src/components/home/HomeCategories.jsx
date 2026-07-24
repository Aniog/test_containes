import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useStrkImages } from "@/lib/useStrkImages";
import { CATEGORIES } from "@/data/products";

const tiles = [
  {
    slug: "earrings",
    title: "Earrings",
    imgId: "cat-earrings-1a2b",
    query: "Gold earrings collection editorial flat lay warm dark background",
  },
  {
    slug: "necklaces",
    title: "Necklaces",
    imgId: "cat-necklaces-3c4d",
    query: "Gold crystal necklace collection editorial flat lay warm dark background",
  },
  {
    slug: "huggies",
    title: "Huggies",
    imgId: "cat-huggies-5e6f",
    query: "Chunky gold huggie hoop earrings collection flat lay warm dark background",
  },
];

export default function HomeCategories() {
  const ref = useRef(null);
  useStrkImages(ref, [tiles.length]);

  return (
    <section ref={ref} className="bg-ivory-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Shop By</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800">
              Category
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {tiles.map((t) => {
            const cat = CATEGORIES.find((c) => c.slug === t.slug);
            return (
              <Link
                key={t.slug}
                to={`/collections/${t.slug}`}
                className="group relative block overflow-hidden bg-ink-800 aspect-[4/5] sm:aspect-[3/4]"
                aria-label={`Shop ${cat?.label}`}
              >
                <img
                  alt={cat?.label}
                  data-strk-img-id={t.imgId}
                  data-strk-img={t.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  loading="lazy"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-ink-900/0 transition-opacity duration-500 group-hover:from-ink-900/80" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-7">
                  <h3 className="font-serif text-3xl sm:text-4xl text-ivory-50">
                    {cat?.label}
                  </h3>
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-ivory-50/40 text-ivory-50 transition-all duration-500 group-hover:bg-ivory-50 group-hover:text-ink-900 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
