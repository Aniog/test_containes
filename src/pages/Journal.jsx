import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const posts = [
  {
    id: "p1",
    title: "How to layer necklaces without tangles",
    excerpt: "A few quiet rules for stacking chains so they sit beautifully — and stay untangled through the day.",
    query: "layered gold necklaces woman model",
  },
  {
    id: "p2",
    title: "The case for demi-fine",
    excerpt: "Why we believe in 18K gold plating over solid gold — and what that means for everyday wear.",
    query: "close up gold plated jewelry",
  },
  {
    id: "p3",
    title: "A morning with our founder",
    excerpt: "Coffee, polishing cloth, and a stack of brass on the bench. A look inside the studio.",
    query: "founder atelier morning coffee jewelry",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory text-espresso">
      <section className="max-w-8xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16 text-center">
        <p className="eyebrow mb-4">The Journal</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
          Stories from the studio
        </h1>
        <p className="mt-5 text-sm md:text-base text-espresso/65 max-w-md mx-auto">
          Quiet essays on craft, layering, and the small luxuries of every day.
        </p>
      </section>

      <section className="max-w-8xl mx-auto px-5 md:px-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((p) => (
            <article key={p.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[4/5] overflow-hidden bg-sand">
                  <img
                    data-strk-img-id={`journal-${p.id}`}
                    data-strk-img={`[journal-title-${p.id}] [journal-excerpt-${p.id}] ${p.query}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="800"
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <h2
                  id={`journal-title-${p.id}`}
                  className="font-serif text-2xl md:text-3xl mt-5 leading-snug"
                >
                  {p.title}
                </h2>
                <p
                  id={`journal-excerpt-${p.id}`}
                  className="mt-2 text-sm text-espresso/65 leading-relaxed"
                >
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] link-underline">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
