import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import StockImage from "@/components/StockImage";

const POSTS = [
  {
    id: "care-guide",
    title: "How to Care for Demi-Fine Jewelry",
    excerpt:
      "Five small rituals that keep 18K gold plate glowing for years — from the last-on, first-off rule to the pouch test.",
    date: "July 2026",
    tag: "Care",
    query: "gold jewelry being gently polished with a soft cloth on warm neutral linen, editorial still life",
  },
  {
    id: "stacking-guide",
    title: "The Art of the Ear Stack",
    excerpt:
      "Huggies first, cuffs high, drops last — our stylists' formula for a balanced ear, no matter how many piercings you have.",
    date: "June 2026",
    tag: "Styling",
    query: "woman's ear with multiple layered gold earrings, huggies and ear cuff stack, warm editorial close-up",
  },
  {
    id: "gifting-guide",
    title: "A Gifting Guide for People Who Overthink",
    excerpt:
      "Earrings for sisters, necklaces for milestones, sets for the impossible-to-shop-for. A calm guide to getting it right.",
    date: "May 2026",
    tag: "Gifting",
    query: "elegant jewelry gift box with ribbon and gold necklace, warm soft light, editorial photography",
  },
];

export default function Journal() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
      <header className="border-b border-hairline py-12 text-center md:py-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">
          Notes from the Atelier
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium uppercase tracking-[0.06em] text-espresso md:text-5xl">
          The Journal
        </h1>
      </header>

      <div className="grid gap-x-6 gap-y-14 pt-12 md:grid-cols-3">
        {POSTS.map((post, i) => (
          <Reveal key={post.id} delay={i * 100}>
            <article className="group">
              <div className="relative overflow-hidden bg-sand aspect-[4/3]">
                <StockImage
                  imgId={`journal-${post.id}`}
                  query={post.query}
                  ratio="4x3"
                  width={700}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pt-6">
                <p className="text-[11px] tracking-[0.25em] uppercase text-gold">
                  {post.tag} · {post.date}
                </p>
                <h2 className="mt-3 font-serif text-2xl leading-snug text-espresso transition-colors duration-300 group-hover:text-gold">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-taupe">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-espresso">
                  Read
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20 text-center">
        <p className="text-sm text-taupe">
          More stories arriving with the next collection.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-block border border-espresso/30 px-10 py-4 text-xs tracking-[0.3em] uppercase text-espresso transition-all duration-300 hover:border-gold hover:text-gold"
        >
          Shop the Collection
        </Link>
      </Reveal>
    </div>
  );
}
