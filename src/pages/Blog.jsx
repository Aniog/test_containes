import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Clock, Tag } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const featured = {
  tag: "Quality control",
  date: "March 12, 2026",
  readTime: "8 min read",
  title:
    "A practical guide to AQL inspections for first-time importers from China",
  excerpt:
    "What AQL actually means, which standard to pick, and how to decide between pre-production, during-production, and pre-shipment inspections for your first orders.",
  imageId: "blog-featured-2b1c4d",
  imageQuery:
    "[blog-featured-title] [blog-eyebrow] [blog-title]",
};

const posts = [
  {
    tag: "Sourcing strategy",
    date: "February 24, 2026",
    readTime: "6 min",
    title:
      "Trading company vs. factory: how to tell who you are actually paying",
    excerpt:
      "Alibaba listings aren't always factories. Here is how we verify who is on the other end of the email.",
    imageId: "post-trading-1a0f9c",
    imageQuery:
      "[post-trading-title] [blog-eyebrow] [blog-title]",
  },
  {
    tag: "Logistics",
    date: "February 8, 2026",
    readTime: "7 min",
    title: "FOB vs. DDP shipping from China: a clear-eyed comparison",
    excerpt:
      "When DDP makes sense, when it doesn't, and what the actual landed cost difference looks like for a 20' container.",
    imageId: "post-fob-3b8d0e",
    imageQuery:
      "[post-fob-title] [blog-eyebrow] [blog-title]",
  },
  {
    tag: "Cost & negotiation",
    date: "January 21, 2026",
    readTime: "5 min",
    title: "How to read a Chinese factory quotation (and what to push back on)",
    excerpt:
      "A walk through a real BOM, line by line, with the questions that get you a more accurate second quote.",
    imageId: "post-bom-7c2a91",
    imageQuery:
      "[post-bom-title] [blog-eyebrow] [blog-title]",
  },
  {
    tag: "Compliance",
    date: "January 6, 2026",
    readTime: "6 min",
    title:
      "CE, UKCA, FCC, and Prop 65: which certifications do you actually need?",
    excerpt:
      "A short, practical matrix for electronics and consumer goods, plus how to verify a supplier's test report.",
    imageId: "post-compliance-92d8a4",
    imageQuery:
      "[post-compliance-title] [blog-eyebrow] [blog-title]",
  },
  {
    tag: "Operations",
    date: "December 18, 2025",
    readTime: "5 min",
    title: "MOQ, lead time, and the unit-cost math behind a first order",
    excerpt:
      "Why your first order is rarely the cheapest per unit, and how to plan a second order that is.",
    imageId: "post-moq-1a72b6",
    imageQuery:
      "[post-moq-title] [blog-eyebrow] [blog-title]",
  },
  {
    tag: "Industry",
    date: "December 3, 2025",
    readTime: "8 min",
    title: "Canton Fair 2026: what to skip, what to focus on, what to ask",
    excerpt:
      "Trade show prep from people who've been walking the halls for 12 years — including the questions that always get us honest answers.",
    imageId: "post-canton-4d09c1",
    imageQuery:
      "[post-canton-title] [blog-eyebrow] [blog-title]",
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="bg-brand-900 text-white py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            id="blog-eyebrow"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500"
          >
            Blog
          </p>
          <h1
            id="blog-title"
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl"
          >
            Practical notes from a China sourcing team.
          </h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-3xl">
            Short, honest, and specific. We write about what we actually see
            on the ground, not generic "top 10 tips" content.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white border border-ink-200 rounded-2xl overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="aspect-[16/10] lg:aspect-auto lg:h-full bg-ink-100">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imageId}
                  data-strk-img={featured.imageQuery}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-100 text-brand-800 font-medium">
                  <Tag className="w-3 h-3" />
                  {featured.tag}
                </span>
                <span className="text-ink-500">{featured.date}</span>
                <span className="inline-flex items-center gap-1 text-ink-500">
                  <Clock className="w-3 h-3" />
                  {featured.readTime}
                </span>
              </div>
              <h2
                id="blog-featured-title"
                className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-ink-900"
              >
                {featured.title}
              </h2>
              <p className="mt-3 text-base text-ink-700 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800">
                  Read the guide
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </article>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.title}
                className="bg-white border border-ink-200 rounded-lg overflow-hidden shadow-card hover:shadow-cardHover transition flex flex-col"
              >
                <div className="aspect-[16/10] bg-ink-100 overflow-hidden">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imageId}
                    data-strk-img={p.imageQuery}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-100 text-brand-800 font-medium">
                      {p.tag}
                    </span>
                    <span className="text-ink-500">{p.date}</span>
                  </div>
                  <h3
                    id={`post-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30)}-title`}
                    className="mt-3 text-lg font-semibold text-ink-900 leading-snug"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                    Read article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-ink-500">
              New articles every other week. Subscribe by sending us a note.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-sm"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
