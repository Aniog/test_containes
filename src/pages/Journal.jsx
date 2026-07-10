import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { editorialSVG } from "@/data/placeholders";

const posts = [
  {
    id: "post-1",
    eyebrow: "Style notes",
    title: "Five ways to wear the Golden Sphere Huggie this season.",
    excerpt:
      "The huggie is the hardest-working piece in your jewelry box. Here's how we style it — from the office to the after-hours.",
    image: editorialSVG("editorialEarrings"),
    date: "Vol. 04 · 2026",
  },
  {
    id: "post-2",
    eyebrow: "The Atelier",
    title: "A quiet look at how each Velmora piece is finished by hand.",
    excerpt:
      "We spent a week in the workshop with our plating partner. Some pieces are still assembled at the bench.",
    image: editorialSVG("editorialNecklaces"),
    date: "Vol. 03 · 2026",
  },
  {
    id: "post-3",
    eyebrow: "Gifting",
    title: "The Royal Heirloom Set, and the case for the gift that lasts.",
    excerpt:
      "Why a small piece of well-made jewelry will always be the right gift — for a friend, a sister, or yourself.",
    image: editorialSVG("editorialHuggies"),
    date: "Vol. 02 · 2026",
  },
];

export default function Journal() {
  return (
    <div className="bg-cream pt-24 md:pt-28 pb-24">
      <div className="max-w-editorial mx-auto px-5 sm:px-8 mb-12 md:mb-20">
        <p className="eyebrow mb-4">The Velmora Journal</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.04] max-w-2xl">
          Slow stories on quiet style.
        </h1>
      </div>

      <div className="max-w-editorial mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-14">
        {/* Feature */}
        <article className="md:col-span-2 group">
          <Link to="/journal" className="block">
            <div className="relative aspect-[16/9] overflow-hidden bg-cream-200">
              <img
                src={posts[0].image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 max-w-2xl">
              <p className="eyebrow !text-sand-600 mb-3">{posts[0].eyebrow}</p>
              <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] mb-3 group-hover:text-gold transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-sand-600 text-[15px] font-sans leading-relaxed">{posts[0].excerpt}</p>
            </div>
          </Link>
        </article>

        {/* Side stories */}
        {posts.slice(1).map((p) => (
          <article key={p.id} className="group">
            <Link to="/journal">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                <img
                  src={p.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5">
                <p className="eyebrow !text-sand-600 mb-2">{p.eyebrow}</p>
                <h3 className="font-serif text-xl md:text-2xl leading-[1.1] mb-2 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-sand-600 text-[14px] font-sans leading-relaxed">{p.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link to="/shop" className="btn-outline">
          Browse the collection
          <ArrowRight size={14} strokeWidth={1.6} />
        </Link>
      </div>
    </div>
  );
}
