import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const posts = [
  {
    id: "post-1",
    title: "How to layer necklaces without overthinking it",
    excerpt:
      "Three rules we follow at the studio, and the one combination we keep coming back to.",
    date: "July 14, 2026",
    image:
      "[post-1-excerpt] [post-1-title] editorial still life gold jewelry",
  },
  {
    id: "post-2",
    title: "Demi-fine, explained",
    excerpt:
      "The materials, the micron counts, and why we still plate every piece by hand.",
    date: "June 28, 2026",
    image:
      "[post-2-excerpt] [post-2-title] editorial still life gold jewelry",
  },
  {
    id: "post-3",
    title: "A weekend in the city, in Velmora",
    excerpt:
      "What we wore, what we packed, and the huggies that never came off.",
    date: "June 12, 2026",
    image:
      "[post-3-excerpt] [post-3-title] editorial still life gold jewelry",
  },
  {
    id: "post-4",
    title: "A small guide to gifting jewelry",
    excerpt:
      "How to read a hint without asking. Plus, the pieces that almost always land.",
    date: "May 30, 2026",
    image:
      "[post-4-excerpt] [post-4-title] editorial still life gold jewelry",
  },
];

export default function Journal() {
  const ref = useRef(null);
  useEffect(() => { return ImageHelper.loadImages(strkImgConfig, ref.current); }, []);;

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28 pb-20">
      <section className="container-velmora py-12 md:py-16 text-center max-w-2xl mx-auto">
        <p className="eyebrow">The Journal</p>
        <h1 className="heading-display text-4xl md:text-6xl mt-3">
          Slow reads, on making and wearing.
        </h1>
        <p className="mt-5 font-sans text-base text-ink-soft">
          Studio notes, styling guides, and the occasional love letter to a
          single piece of jewelry.
        </p>
      </section>

      <section className="container-velmora grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link
              to="/journal"
              className="block focus:outline-none"
              aria-labelledby={`${post.id}-title`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-champagne">
                <img
                  alt={post.title}
                  data-strk-img-id={`${post.id}-img`}
                  data-strk-img={post.image}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <p className="font-sans text-[11px] uppercase tracking-widest2 text-ink-soft">
                  {post.date}
                </p>
                <h2
                  id={`${post.id}-title`}
                  className="font-serif text-2xl md:text-3xl text-espresso mt-2 group-hover:text-gold-deep transition-colors duration-300"
                >
                  {post.title}
                </h2>
                <p
                  id={`${post.id}-excerpt`}
                  className="mt-3 font-sans text-sm md:text-base text-ink-soft leading-relaxed"
                >
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso group-hover:text-gold-deep transition-colors duration-300">
                  Read the note
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-500 ease-out-soft group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
