import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Section, SectionHeader } from "../components/ui/Primitives.jsx";
import CTABanner from "../components/sections/CTABanner.jsx";
import { blogPosts } from "../data/site.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const categories = ["All", "Sourcing Basics", "Quality Control", "Logistics", "Private Label"];

export default function Blog() {
  const containerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const initial = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("category") || "All";
  }, [location.search]);
  const [active, setActive] = useState(initial);

  useEffect(() => {
    setActive(initial);
  }, [initial]);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [active]);

  const filtered = useMemo(() => {
    if (active === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === active);
  }, [active]);

  const onSelectCategory = (cat) => {
    setActive(cat);
    const params = new URLSearchParams(location.search);
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    navigate({ pathname: "/blog", search: params.toString() }, { replace: true });
  };

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-content py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="kicker text-accent mb-3">Resources</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Practical guides for buying from China
            </h1>
            <p className="mt-5 text-lg text-white/80">
              No fluff, no recycled advice. Notes from real sourcing work, written for
              buyers who want to understand the details.
            </p>
          </div>
        </div>
      </section>

      <Section ref={undefined}>
        <SectionHeader
          kicker="Featured"
          title="Most recent article"
        />
        <Link
          to={`/blog/${featured.slug}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 group"
        >
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden border border-hairline">
              <img
                alt={featured.title}
                data-strk-img-id={`blog-featured-img-${featured.slug}-a1b2c3`}
                data-strk-img={`[blog-featured-title-${featured.slug}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="badge-accent w-fit mb-3">{featured.category}</span>
            <h2
              id={`blog-featured-title-${featured.slug}`}
              className="text-navy text-2xl md:text-3xl font-bold leading-snug group-hover:text-accent transition"
            >
              {featured.title}
            </h2>
            <p className="mt-3 text-ink/80 leading-relaxed">{featured.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {featured.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {featured.readTime}
              </span>
            </div>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-accent">
              Read article <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Link>
      </Section>

      <Section className="surface-steel">
        <div ref={containerRef}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <SectionHeader
              kicker="All articles"
              title="Filter by category"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const isActive = active === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => onSelectCategory(c)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition ${
                      isActive
                        ? "bg-navy text-white"
                        : "bg-white border border-hairline text-navy hover:border-navy"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-lg border border-hairline bg-white p-8 text-center text-muted">
              No articles in this category yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="card card-hover flex flex-col h-full group !p-0 overflow-hidden"
                >
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-card-img-${post.slug}-d4e5f6`}
                    data-strk-img={`[blog-card-title-${post.slug}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <span className="badge-accent w-fit mb-3">{post.category}</span>
                    <h3
                      id={`blog-card-title-${post.slug}`}
                      className="text-navy font-semibold leading-snug group-hover:text-accent transition"
                    >
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/75 leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
