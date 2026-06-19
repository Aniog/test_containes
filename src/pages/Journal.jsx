import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import JewelryImage from "@/components/ui/JewelryImage";

const POSTS = [
  {
    id: "how-to-wear-gold-every-day",
    title: "How to wear gold every day (without overdoing it).",
    excerpt:
      "A short field guide from our studio — when to layer, when to let one piece speak, and how to care for your gold in between.",
    date: "May 12, 2026",
    image: "golden-sphere-2",
    tag: "Style Notes",
  },
  {
    id: "behind-the-finish",
    title: "Behind the finish: how our 18K gold plate is made.",
    excerpt:
      "A walk through the atelier in Jaipur where every Velmora piece is hand-finished — the casting, the plating, the polishing.",
    date: "April 28, 2026",
    image: "majestic-flora-2",
    tag: "Atelier",
  },
  {
    id: "gifting-without-the-guesswork",
    title: "Gifting without the guesswork.",
    excerpt:
      "A small, opinionated guide to choosing jewelry for the people you love — by relationship, by personal style, by moment.",
    date: "April 04, 2026",
    image: "royal-heirloom-2",
    tag: "Gifting",
  },
  {
    id: "the-anatomy-of-an-ear-stack",
    title: "The anatomy of an ear stack.",
    excerpt:
      "Three pieces, four looks, one quiet formula. How to combine huggies, cuffs, and drops without going over.",
    date: "March 21, 2026",
    image: "amber-lace-2",
    tag: "Style Notes",
  },
];

export default function Journal() {
  return (
    <>
      <Navbar transparent={false} />
      <CartDrawer />
      <main className="bg-cream">
        <header className="container-page pt-32 md:pt-40 pb-12 md:pb-16">
          <p className="eyebrow">Journal</p>
          <h1 className="mt-3 font-serif font-light text-5xl md:text-7xl text-ink leading-[1] text-balance">
            Notes from the studio.
          </h1>
          <p className="mt-5 font-serif text-lg md:text-xl text-mushroom-dark italic max-w-xl">
            Style notes, atelier visits, and quiet observations on the pieces we
            make and the people who wear them.
          </p>
        </header>

        <section className="container-page pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="group block bg-ivory border border-line hover:shadow-soft transition-shadow duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cream-warm">
                  <JewelryImage
                    id={post.image}
                    className="w-full h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[10px] uppercase tracking-widest2 text-gold-deep">
                      {post.tag}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-widest2 text-mushroom">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="mt-3 font-serif text-2xl md:text-3xl text-ink leading-snug text-balance group-hover:text-gold-deep transition-colors duration-500">
                    {post.title}
                  </h2>
                  <p className="mt-3 font-sans text-base text-mushroom-dark leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-block link-underline text-ink">
                    Read the piece
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
