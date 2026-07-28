import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { format, parseISO } from "date-fns";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/content";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/sections/InquiryForm";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

export default function Blog() {
  const ref = useRef(null);
  const [active, setActive] = useState("All");

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [active]);

  const filtered =
    active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);

  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical notes on sourcing from China"
        subtitle="Short, practical reads for importers, brand owners, and procurement teams — written by people who do the work in China every week."
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Blog" },
        ]}
      />

      <section ref={ref} className="section bg-white">
        <div className="container-x">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-8 md:mb-10">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors",
                  active === c
                    ? "bg-primary text-white"
                    : "bg-surface-muted text-ink-soft hover:bg-primary-light hover:text-primary"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <article className="card p-6 md:p-8 mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center">
              <div className="lg:col-span-5">
                <div
                  className="aspect-[4/3] w-full rounded-md bg-surface-muted overflow-hidden"
                  data-strk-bg-id={`blog-bg-${featured.id}-e7f8a9`}
                  data-strk-bg={`[${featured.id}-title] [${featured.id}-excerpt] blog`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3 text-xs text-ink-muted">
                  <span className="badge">{featured.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featured.readTime}
                  </span>
                  <span>{format(parseISO(featured.date), "MMM d, yyyy")}</span>
                </div>
                <h2
                  id={`${featured.id}-title`}
                  className="text-2xl md:text-3xl font-bold text-ink mb-3 text-balance"
                >
                  {featured.title}
                </h2>
                <p
                  id={`${featured.id}-excerpt`}
                  className="text-base text-ink-soft leading-relaxed mb-4"
                >
                  {featured.excerpt}
                </p>
                <Link
                  to={`/blog#${featured.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Read article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <article
                key={p.id}
                className="card overflow-hidden flex flex-col hover:shadow-elevated transition-shadow"
              >
                <div
                  className="aspect-[3/2] w-full bg-surface-muted"
                  data-strk-bg-id={`blog-bg-${p.id}-b1c2d3`}
                  data-strk-bg={`[${p.id}-title] [${p.id}-excerpt] blog`}
                  data-strk-bg-ratio="3x2"
                  data-strk-bg-width="600"
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2 text-xs text-ink-muted">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {p.category}
                    </span>
                    <span>·</span>
                    <span>{format(parseISO(p.date), "MMM d, yyyy")}</span>
                  </div>
                  <h3
                    id={`${p.id}-title`}
                    className="text-base font-semibold text-ink mb-2 leading-snug"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={`${p.id}-excerpt`}
                    className="text-sm text-ink-soft leading-relaxed mb-3 flex-1"
                  >
                    {p.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-ink-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {p.readTime}
                    </span>
                    <Link
                      to={`/blog#${p.id}`}
                      className="font-semibold text-primary hover:underline"
                    >
                      Read
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
                Get new articles by email
              </h2>
              <p className="text-base text-ink-soft leading-relaxed">
                Practical guides for buyers sourcing from China. One short email
                per month, no marketing fluff.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
