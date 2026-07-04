import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { JOURNAL_POSTS } from "@/data/content";
import { useStrkImages } from "@/hooks/useStrkImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function Journal() {
  const ref = useRef(null);
  useStrkImages(ref);

  const [feature, ...rest] = JOURNAL_POSTS;

  return (
    <div ref={ref} className="pt-24 md:pt-28 bg-cream min-h-screen">
      <div className="container-editorial py-10 md:py-14 border-b border-hairline">
        <p className="eyebrow">The Journal</p>
        <h1 className="font-serif text-5xl md:text-7xl text-ink mt-3 tracking-[-0.01em]">
          Notes from the Atelier
        </h1>
        <p className="mt-4 text-taupe text-sm md:text-base max-w-lg">
          Slow letters on the craft, the pieces, and the small choices behind them.
        </p>
      </div>

      <div className="container-editorial py-12 md:py-20">
        {/* Feature */}
        <Link to="#" className="group block">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 aspect-[4/3] overflow-hidden bg-ink">
              <img
                alt={feature.title}
                data-strk-img-id="journal-feature"
                data-strk-img="[journal-feature-excerpt] [journal-feature-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src={PLACEHOLDER}
                className="w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-[1.03]"
              />
            </div>
            <div className="md:col-span-5">
              <p className="eyebrow">Featured · {feature.readTime}</p>
              <h2
                id="journal-feature-title"
                className="font-serif text-3xl md:text-5xl text-ink mt-3 leading-[1.05] tracking-[-0.01em] text-balance"
              >
                {feature.title}
              </h2>
              <p
                id="journal-feature-excerpt"
                className="mt-5 text-ink-soft leading-relaxed"
              >
                {feature.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 mt-8 text-[12px] uppercase tracking-[0.22em] text-ink group-hover:text-gold-deep transition-colors">
                Read the essay
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </div>
          </div>
        </Link>

        <div className="hairline my-16 md:my-20" />

        {/* Rest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {rest.map((post) => (
            <Link
              key={post.id}
              to="#"
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink">
                <img
                  alt={post.title}
                  data-strk-img-id={`journal-${post.id}`}
                  data-strk-img={`[journal-${post.id}-excerpt] [journal-${post.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src={PLACEHOLDER}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-[1.03]"
                />
              </div>
              <p className="eyebrow mt-6">{post.readTime}</p>
              <h3
                id={`journal-${post.id}-title`}
                className="font-serif text-2xl md:text-3xl text-ink mt-3 leading-[1.15] tracking-[-0.01em] text-balance"
              >
                {post.title}
              </h3>
              <p
                id={`journal-${post.id}-excerpt`}
                className="mt-3 text-ink-soft leading-relaxed"
              >
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 mt-6 text-[12px] uppercase tracking-[0.22em] text-ink group-hover:text-gold-deep transition-colors">
                Read more
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
