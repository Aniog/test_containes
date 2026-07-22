import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/lib/use-strk-images.js";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const posts = [
  {
    id: "layering-guide",
    title: "The Art of Layering Gold",
    excerpt: "How to build a neck stack that feels collected, not crowded.",
    date: "July 2026",
    query: "layered gold necklaces styling editorial warm tones",
  },
  {
    id: "gift-guide",
    title: "Gifting, Made Meaningful",
    excerpt: "Our edit of heirloom-ready pieces for the people you love most.",
    date: "June 2026",
    query: "luxury jewelry gift box gold ribbon elegant",
  },
  {
    id: "care-ritual",
    title: "The Two-Minute Care Ritual",
    excerpt: "Keep 18k gold glowing for years with this simple routine.",
    date: "May 2026",
    query: "gold jewelry care polishing cloth soft light flat lay",
  },
];

export default function Journal() {
  const containerRef = useStrkImages();

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-10 md:pt-36">
      <header className="mb-12 border-b border-ink/10 pb-8">
        <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
          The Journal
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl">
          Notes on <span className="italic">Adornment</span>
        </h1>
      </header>

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="overflow-hidden bg-cream">
              <img
                alt={post.title}
                data-strk-img-id={`journal-${post.id}`}
                data-strk-img={post.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src={SVG_PLACEHOLDER}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
              />
            </div>
            <p className="mt-5 text-[11px] uppercase tracking-luxe text-taupe">
              {post.date}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-ink transition-colors group-hover:text-gold">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-taupe">{post.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-2 border-b border-gold pb-0.5 text-xs font-semibold uppercase tracking-luxe text-espresso">
              Read More
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/shop"
          className="inline-block border border-ink px-10 py-4 text-xs font-semibold uppercase tracking-luxe text-ink transition-colors hover:bg-ink hover:text-ivory"
        >
          Back to the Collection
        </Link>
      </div>
    </div>
  );
}
