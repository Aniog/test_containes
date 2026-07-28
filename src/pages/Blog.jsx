import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { BLOG_POSTS } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";
import InquiryForm from "@/components/ui/InquiryForm";
import CtaBanner from "@/components/sections/CtaBanner";

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ArticleModal({ post, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!post) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={post.title}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-cardHover max-w-3xl w-full my-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-semibold tracking-[0.16em] uppercase text-brand-red">
              {post.category}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md text-brand-slate hover:bg-brand-surface"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-brand-ink tracking-tight leading-snug">
            {post.title}
          </h2>
          <div className="mt-3 flex items-center gap-4 text-xs text-brand-slate">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <div className="mt-6 space-y-4 text-base text-brand-ink leading-relaxed">
            {post.body.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0 ? "text-brand-slate text-base leading-relaxed" : ""
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const [active, setActive] = useState(null);
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Blog"
        title="Notes from the factory floor, the QC lab, and the freight desk"
        description="Practical, no-fluff articles on China sourcing, quality control, and shipping — written by the team that runs the projects."
      />

      <section className="section">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="card card-hover flex flex-col overflow-hidden cursor-pointer"
                onClick={() => setActive(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setActive(p);
                }}
              >
                <div className="aspect-[16/9] bg-brand-surface overflow-hidden">
                  <img
                    alt={p.title}
                    data-strk-img-id={`blog-${p.slug}-img-5a1e7c`}
                    data-strk-img={`[blog-${p.slug}-title] [blog-${p.slug}-category] [blog-eyebrow]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-brand-slate">
                    <span
                      id={`blog-${p.slug}-category`}
                      className="font-semibold text-brand-navy uppercase tracking-wide"
                    >
                      {p.category}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {p.readTime}
                    </span>
                  </div>
                  <h3
                    id={`blog-${p.slug}-title`}
                    className="mt-2 text-lg font-semibold text-brand-ink leading-snug"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-slate leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-navy">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <span id="blog-eyebrow" className="sr-only">Blog</span>
        </div>
      </section>

      <section className="section section-muted">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow">Have a project in mind?</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-brand-ink tracking-tight">
                Skip the research and send us your brief
              </h2>
              <p className="mt-4 text-brand-slate leading-relaxed">
                The same team that writes these articles runs the projects.
                Tell us what you are sourcing and we will come back with a
                short-list.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />

      <ArticleModal post={active} onClose={() => setActive(null)} />
    </div>
  );
}
