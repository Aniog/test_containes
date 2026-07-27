import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { format, parseISO } from "date-fns";

import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/sections/InquiryForm";
import { BLOG_POSTS } from "@/data/site";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Supplier Verification", "Quality Control", "Sourcing Tips", "Logistics"];

export default function Blog() {
  const containerRef = useRef(null);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [active]);

  const visible = BLOG_POSTS.filter(
    (p) => active === "All" || p.category === active
  );

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="Practical guides for buying from China"
        description="Short, no-fluff articles on supplier verification, quality control, logistics, and the everyday questions that come up when you import from China."
        breadcrumb={[{ label: "Blog" }]}
      />

      <Section bg="white">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                active === c
                  ? "bg-brand-600 border-brand-600 text-white"
                  : "bg-white border-ink-200 text-ink-700 hover:border-brand-400"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-lg border border-ink-200 bg-white overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
            >
              <Link to={`/blog/${p.slug}`} className="block">
                <div className="relative">
                  <img
                    alt={p.title}
                    data-strk-img-id={`blog-${p.slug}-img-4d8e1a`}
                    data-strk-img={`[blog-${p.slug}-title] [blog-${p.slug}-category] [blog-eyebrow] [blog-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-44 object-cover"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
                    {p.category}
                  </span>
                </div>
              </Link>
              <div className="p-5 flex-1 flex flex-col">
                <h3
                  id={`blog-${p.slug}-title`}
                  className="text-[17px] font-bold text-ink-900 leading-snug"
                >
                  <Link
                    to={`/blog/${p.slug}`}
                    className="hover:text-brand-700"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-ink-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(parseISO(p.date), "MMM d, yyyy")}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {p.readTime}
                  </span>
                </div>
                <div className="mt-4">
                  <Link
                    to={`/blog/${p.slug}`}
                    className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-1"
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-ink-500 py-10">No articles in this category yet.</p>
        )}
      </Section>

      <Section bg="brand">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2
              id="blog-cta-title"
              className="text-3xl md:text-4xl font-bold text-white leading-tight balance"
            >
              Have a question we should answer?
            </h2>
            <p id="blog-cta-sub" className="mt-3 text-brand-50/90">
              Send us the topic and we will do our best to cover it in a future
              article. Or, if you have a live project, request a free quote.
            </p>
            <div className="mt-6">
              <Button as="link" to="/contact" variant="accent" icon={ArrowRight}>
                Request a free quote
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm compact />
          </div>
        </div>
      </Section>
    </div>
  );
}
