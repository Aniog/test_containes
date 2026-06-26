import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Clock } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";
import CTA from "@/components/shared/CTA";
import { BLOG_POSTS } from "@/data/site";

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section className="border-b border-ink-200 bg-ink-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Blog"
            title={<span id="blog-section-title">Practical guides for sourcing from China</span>}
            description="Articles cover supplier verification, quality control, Incoterms, common pitfalls, and how to structure a first order. Written by our sourcing team."
          />
        </div>
      </section>

      <section ref={containerRef} className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white transition-colors hover:border-accent-300 hover:shadow-md"
              >
                <div
                  className="aspect-[16/9] w-full bg-ink-100"
                  data-strk-bg-id={`blog-${post.id}-bg`}
                  data-strk-bg={`[blog-${post.id}-title] [blog-${post.id}-excerpt] [blog-section-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)",
                  }}
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-ink-500">
                    <span className="font-semibold uppercase tracking-wider text-accent-700">
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    id={`blog-${post.id}-title`}
                    className="mt-3 text-lg font-semibold text-brand-900"
                  >
                    {post.title}
                  </h3>
                  <p
                    id={`blog-${post.id}-excerpt`}
                    className="mt-2 flex-1 text-sm text-ink-600"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-200 pt-4">
                    <span className="text-xs text-ink-500">By {post.author}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Newsletter"
            title="A sourcing brief in your inbox, once a month"
            description="One short email a month. New guides, supplier tips, and a short list of common mistakes we see buyers make. No spam, unsubscribe anytime."
          />
          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 flex flex-col gap-3 rounded-2xl border border-ink-200 bg-white p-4 sm:flex-row sm:items-center sm:p-3"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-md border border-ink-200 bg-white px-3.5 py-3 text-sm text-brand-900 placeholder:text-ink-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-ink-500">
            Demo form. No emails are sent or stored in this build.
          </p>
        </div>
      </section>

      <CTA
        title="Have a topic you'd like us to cover?"
        description="Send us a question or topic suggestion. We publish new articles monthly and prioritise questions we hear repeatedly from buyers."
        primary={{ to: "/contact", label: "Suggest a topic" }}
        secondary={{ to: "/services", label: "See services" }}
      />
    </>
  );
}