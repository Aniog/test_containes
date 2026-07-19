import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const POSTS = [
  {
    id: "stacking-ritual",
    eyebrow: "Styling",
    title: "The art of the ear stack",
    excerpt:
      "Three small rules for building an ear stack that looks like it happened by accident.",
    img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000&q=80&auto=format&fit=crop",
  },
  {
    id: "behind-the-bench",
    eyebrow: "Atelier",
    title: "Notes from the bench",
    excerpt:
      "A morning with our goldsmith — on hand-finishing, polishing, and what we leave to the eye.",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80&auto=format&fit=crop",
  },
  {
    id: "gold-plating",
    eyebrow: "Materials",
    title: "On plating, honestly",
    excerpt:
      "Why our plating is thicker than the industry norm — and what that means for the wearer.",
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80&auto=format&fit=crop",
  },
  {
    id: "first-heirloom",
    eyebrow: "Gifting",
    title: "Choosing your first heirloom",
    excerpt:
      "A short guide to buying demi-fine jewelry that ages with you — and stays on the ear.",
    img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1000&q=80&auto=format&fit=crop",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="bg-bone">
      <div className="pt-24 sm:pt-28 lg:pt-32">
        <div className="container-page pb-12 sm:pb-16 border-b border-line">
          <p className="eyebrow">The Journal</p>
          <h1 className="mt-3 font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.02] text-ink max-w-3xl">
            Slow notes from
            <br />
            <em className="italic">the studio.</em>
          </h1>
        </div>
      </div>

      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <Link to="#" className="block">
                <div className="relative aspect-[4/3] bg-cream overflow-hidden">
                  <img
                    alt={post.title}
                    src={post.img}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-velvet group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <p className="eyebrow">{post.eyebrow}</p>
                  <span className="text-taupe">·</span>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-taupe">
                    5 min read
                  </p>
                </div>
                <h2
                  id={`journal-${post.id}-title`}
                  className="mt-2 font-serif text-2xl sm:text-3xl font-light text-ink group-hover:text-gold-deep transition-colors duration-300"
                >
                  {post.title}
                </h2>
                <p
                  id={`journal-${post.id}-excerpt`}
                  className="mt-3 text-ink/70 text-sm sm:text-[15px] leading-relaxed"
                >
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center text-[11px] uppercase tracking-[0.18em] text-ink link-underline">
                  Read essay
                  <ArrowRight
                    className="w-3.5 h-3.5 ml-2 -mt-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
