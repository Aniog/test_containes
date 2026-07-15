import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const POSTS = [
  {
    id: "stack-the-spheres",
    title: "How to stack the spheres",
    excerpt: "A short guide to layering huggies, cuffs, and chains without ever feeling loud.",
    category: "Styling",
  },
  {
    id: "care-guide",
    title: "Caring for gold-plated jewelry",
    excerpt: "Six quiet habits that keep demi-fine jewelry looking new for years.",
    category: "Materials",
  },
  {
    id: "gifting",
    title: "Gifting, considered",
    excerpt: "A few notes on choosing jewelry as a gift — for the person who already has everything.",
    category: "Gifting",
  },
  {
    id: "behind-the-set",
    title: "Behind the Royal Heirloom Set",
    excerpt: "A look inside the design process for our most-loved gift set.",
    category: "Behind the scenes",
  },
];

export default function Journal() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-ivory">
      <section className="container-page pt-32 sm:pt-40 pb-14 text-center max-w-2xl mx-auto">
        <span className="eyebrow">The Journal</span>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light mt-4 text-sable leading-[1.05]">
          Notes on{" "}
          <span className="italic text-gold">quiet</span> style.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-sable/80 font-sans font-light leading-relaxed">
          Styling notes, material stories, and the occasional letter from our
          studio in Lisbon.
        </p>
      </section>

      <section className="container-page pb-24 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {POSTS.map((p, i) => (
            <article
              key={p.id}
              className="group"
            >
              <Link to="#" className="block">
                <div className="aspect-[4/3] overflow-hidden bg-ivory-200">
                  <img
                    alt={p.title}
                    data-strk-img-id={`journal-${p.id}`}
                    data-strk-img={`[journal-${p.id}-title] [journal-${p.id}-excerpt] ${p.category} jewelry editorial`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-6">
                  <span className="eyebrow">{p.category}</span>
                  <h2
                    id={`journal-${p.id}-title`}
                    className="font-serif text-3xl sm:text-4xl font-light mt-3 text-sable group-hover:text-gold transition-colors leading-tight"
                  >
                    {p.title}
                  </h2>
                  <p
                    id={`journal-${p.id}-excerpt`}
                    className="mt-3 text-sable/70 font-sans text-sm sm:text-base font-light"
                  >
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] tracking-widest2 uppercase text-sable font-sans font-medium group-hover:text-gold transition-colors">
                    Read More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
