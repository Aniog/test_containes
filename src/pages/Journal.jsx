import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProductImage from "@/components/product/ProductImage";

const posts = [
  {
    id: "care-guide",
    title: "How to care for gold-plated jewelry",
    excerpt:
      "Five small habits that keep demi-fine pieces looking new for years.",
    readTime: "4 min read",
    imgId: "journal-care-img",
    titleId: "journal-care-title",
    excerptId: "journal-care-excerpt",
  },
  {
    id: "layering",
    title: "The art of layering necklaces",
    excerpt:
      "Three lengths, two metals, one quietly personal combination.",
    readTime: "3 min read",
    imgId: "journal-layering-img",
    titleId: "journal-layering-title",
    excerptId: "journal-layering-excerpt",
  },
  {
    id: "gifting",
    title: "Gifting, considered",
    excerpt:
      "What to give the woman who already has everything — and what to write inside the card.",
    readTime: "5 min read",
    imgId: "journal-gifting-img",
    titleId: "journal-gifting-title",
    excerptId: "journal-gifting-excerpt",
  },
];

export default function Journal() {
  return (
    <>
      <section className="bg-ivory border-b border-hairline">
        <div className="container-wide py-20 md:py-28 text-center">
          <p className="eyebrow mb-3">Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">
            Notes from the studio
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((p) => (
            <article key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-sand overflow-hidden">
                <ProductImage
                  imgId={p.imgId}
                  query={`[${p.excerptId}] [${p.titleId}] Notes from the studio Journal`}
                  ratio="4x5"
                  width={600}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="pt-6">
                <p className="font-sans text-[10px] uppercase tracking-widest2 text-taupe mb-2">
                  {p.readTime}
                </p>
                <h2
                  id={p.titleId}
                  className="font-serif text-2xl md:text-3xl leading-snug group-hover:text-goldHover transition-colors"
                >
                  {p.title}
                </h2>
                <p
                  id={p.excerptId}
                  className="mt-2 text-sm text-espresso/70 font-light leading-relaxed"
                >
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest2 text-espresso">
                  Read <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="container-wide mt-20 text-center">
          <Link to="/shop" className="btn-secondary inline-flex">
            Browse the Collection
          </Link>
        </div>
      </section>
    </>
  );
}
