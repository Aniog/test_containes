import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/site/PageHeader";
import ContactStrip from "@/components/site/ContactStrip";
import { blogPosts } from "@/data/site";

const categories = [
  "All",
  "Sourcing",
  "Quality control",
  "Logistics",
];

const Blog = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active, query]);

  const filtered = blogPosts.filter((p) => {
    const cat = active === "All" || p.category === active;
    const q = query.trim().toLowerCase();
    const matchQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return cat && matchQ;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Blog"
        title="Practical notes on sourcing, QC and shipping from China."
        subtitle="Written by our project managers — not ghost-written. No affiliate links, no SEO filler."
        primaryCtaLabel="Get a Free Sourcing Quote"
        primaryCtaTo="/contact"
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col items-stretch justify-between gap-4 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const isActive = active === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActive(c)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium transition-colors ${
                      isActive
                        ? "border-ink-900 bg-ink-900 text-white"
                        : "border-surface-200 bg-white text-ink-700 hover:border-ink-900"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles"
                className="input pl-9"
                aria-label="Search articles"
              />
            </div>
          </div>

          {featured && (
            <article
              key={featured.id}
              id={`blog-${featured.id}`}
              className="card mt-8 grid items-stretch overflow-hidden md:grid-cols-12"
            >
              <div className="md:col-span-5">
                <div className="overflow-hidden">
                  <img
                    data-strk-img-id="blog-featured-aql-img-7b1c3a"
                    data-strk-img="[blog-featured-aql-excerpt] [blog-featured-aql-title]"
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="900"
                    src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221%22%20height%3D%221%22%20viewBox%3D%220%200%201%201%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23e5e7eb%22%2F%3E%3C%2Fsvg%3E"
                    alt={featured.title}
                    className="aspect-[3/2] h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:col-span-7 md:p-10">
                <div className="flex flex-wrap items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                  <span className="text-accent-600">{featured.category}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2
                  id="blog-featured-aql-title"
                  className="mt-3 text-[26px] font-semibold leading-snug text-ink-900 md:text-[30px]"
                >
                  {featured.title}
                </h2>
                <p
                  id="blog-featured-aql-excerpt"
                  className="mt-3 text-[16px] leading-relaxed text-ink-600"
                >
                  {featured.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-ink-900 hover:text-accent-600"
                >
                  Read the article
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          )}

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.id} id={`blog-${p.id}`} className="card p-6">
                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                  {p.category}
                </div>
                <h3
                  id={`blog-${p.id}-title`}
                  className="mt-2 text-[19px] font-semibold leading-snug text-ink-900"
                >
                  {p.title}
                </h3>
                <p
                  id={`blog-${p.id}-excerpt`}
                  className="mt-2 text-[14.5px] leading-relaxed text-ink-600"
                >
                  {p.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-surface-200 pt-4 text-[12.5px] text-ink-500">
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 rounded-xl border border-surface-200 bg-white p-8 text-center">
              <p className="text-[16px] font-semibold text-ink-900">
                No articles match this search yet.
              </p>
              <p className="mt-2 text-[14.5px] text-ink-600">
                Try a different keyword, or browse the full list.
              </p>
            </div>
          )}
        </div>
      </section>

      <ContactStrip
        title="Have a specific question we should answer on the blog?"
        subtitle="Send us the question and a project manager will reply. If we get it often, we will write the article."
      />
    </div>
  );
};

export default Blog;
