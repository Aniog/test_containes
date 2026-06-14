import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/components/layout/useStrkImages";
import SectionHeader from "@/components/sections/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import { BLOG_POSTS } from "@/data/content";

export default function Blog() {
  const ref = useStrkImages();
  return (
    <div ref={ref} className="bg-white">
      <section className="bg-navy text-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Blog</p>
            <h1 id="blog-title" className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
              Practical writing for importers sourcing from China
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              No hype, no "10 best products" listicles. Working notes from our sourcing team on verification, quality control, shipping, and pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.map((post, i) => (
              <article key={post.slug} className="card overflow-hidden flex flex-col">
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-img-${post.slug}-${i.toString().padStart(2, "0")}`}
                    data-strk-img={`[blog-card-title-${post.slug}] [blog-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-navy/5 text-navy font-semibold px-2.5 py-1">
                      {post.category}
                    </span>
                    <span className="text-ink-soft">{post.readTime}</span>
                  </div>
                  <h2 id={`blog-card-title-${post.slug}`} className="mt-3 text-lg font-semibold text-ink leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{post.excerpt}</p>
                  <Link
                    to="/contact"
                    className="btn-ghost mt-5 self-start"
                  >
                    Discuss this with us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-x py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow">Newsletter</p>
              <h2 className="section-title mt-3 text-balance">
                One short email per month. New articles only.
              </h2>
              <p className="section-subtitle">
                We send a single roundup at the start of each month. No sales pitches, no "exclusive" content you cannot find on the blog.
              </p>
              <form
                className="mt-6 flex flex-col sm:flex-row gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="field-input flex-1"
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-ink-soft">
                By subscribing you agree to our privacy notice. Unsubscribe with one click.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
