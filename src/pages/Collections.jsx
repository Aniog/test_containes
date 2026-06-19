import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import ProductCard from "@/components/product/ProductCard";
import JewelryImage from "@/components/ui/JewelryImage";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

const STORIES = [
  {
    slug: "the-everyday-edit",
    label: "Story 01",
    title: "The Everyday Edit",
    blurb:
      "Pieces built to live in. The huggies you'll forget you're wearing, the necklace that goes from morning meeting to late dinner.",
    image: "golden-sphere-2",
    category: "huggies",
  },
  {
    slug: "in-bloom",
    label: "Story 02",
    title: "In Bloom",
    blurb:
      "A study in color and stone. Layered florals, hand-set crystals, and a softer palette inspired by the first weeks of spring.",
    image: "majestic-flora-2",
    category: "necklaces",
  },
  {
    slug: "the-gift",
    label: "Story 03",
    title: "The Gift",
    blurb:
      "For the people you love and the moments you remember. Sets designed to be opened, kept, and returned to for years.",
    image: "royal-heirloom-2",
    category: "sets",
  },
];

export default function Collections() {
  return (
    <>
      <Navbar transparent={false} />
      <CartDrawer />
      <main className="bg-cream">
        <header className="container-page pt-32 md:pt-40 pb-12 md:pb-16">
          <p className="eyebrow">Collections</p>
          <h1 className="mt-3 font-serif font-light text-5xl md:text-7xl text-ink leading-[1] text-balance">
            A few quiet edits.
          </h1>
        </header>

        <section className="container-page pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {STORIES.map((story) => {
              const products = PRODUCTS.filter((p) => p.category === story.category).slice(0, 3);
              return (
                <article
                  key={story.slug}
                  className="group bg-ivory border border-line"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-cream-warm relative">
                    <JewelryImage
                      id={story.image}
                      className="w-full h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                    />
                    <div className="absolute left-6 bottom-6 font-sans text-[10px] uppercase tracking-widest2 text-ivory/80">
                      {story.label}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h2 className="font-serif text-3xl md:text-4xl text-ink leading-snug">
                      {story.title}
                    </h2>
                    <p className="mt-3 font-sans text-base text-mushroom-dark leading-relaxed max-w-md">
                      {story.blurb}
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {products.map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.id}`}
                          className="block aspect-square overflow-hidden bg-cream-warm"
                          aria-label={p.name}
                        >
                          <JewelryImage
                            id={p.images[0]}
                            className="w-full h-full"
                          />
                        </Link>
                      ))}
                    </div>
                    <Link
                      to={`/shop?category=${story.category}`}
                      className="mt-7 inline-block link-underline text-ink"
                    >
                      Shop the edit
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-ivory border-y border-line">
          <div className="container-page py-20 md:py-28">
            <div className="mb-10 max-w-xl">
              <p className="eyebrow">Or by category</p>
              <h2 className="mt-3 font-serif font-light text-3xl md:text-4xl text-ink leading-snug">
                Start with what you love.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/shop?category=${cat.slug}`}
                  className="group relative aspect-[3/4] overflow-hidden bg-ink"
                >
                  <div className="absolute inset-0 transition-transform duration-700 ease-editorial group-hover:scale-[1.04]">
                    <JewelryImage
                      id={`category-${cat.slug}`}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                    <h3 className="font-serif text-2xl text-ivory leading-none">
                      {cat.label}
                    </h3>
                    <span className="font-sans text-[11px] uppercase tracking-widest2 text-gold-soft/0 group-hover:text-gold-soft transition-colors duration-500">
                      Shop
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
