import React, { useEffect, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Section } from "../components/ui/Primitives.jsx";
import InquiryForm from "../components/ui/InquiryForm.jsx";
import CTABanner from "../components/sections/CTABanner.jsx";
import { blogPosts } from "../data/site.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

export default function BlogPost() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    if (post) document.title = `${post.title} | SSourcing China`;
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div ref={containerRef}>
      <section className="bg-navy text-white">
        <div className="container-content py-12 md:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-accent mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> All articles
          </Link>
          <div className="max-w-3xl">
            <span className="badge-accent mb-3">{post.category}</span>
            <h1
              id={`blog-post-title-${post.slug}`}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg overflow-hidden border border-hairline mb-8">
            <img
              alt={post.title}
              data-strk-img-id={`blog-post-img-${post.slug}-g7h8i9`}
              data-strk-img={`[blog-post-title-${post.slug}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose-content">
            {post.body.map((para, i) => (
              <p key={i} className="mb-5 text-ink/85 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </article>

          <div className="mt-10 pt-6 border-t border-hairline">
            <p className="kicker mb-2">Need help with this?</p>
            <h3 className="text-navy text-xl font-semibold">
              Want us to apply this to your specific product?
            </h3>
            <p className="mt-2 text-ink/80">
              Send us a brief. We'll get back within 1 business day.
            </p>
            <Link to="/contact" className="btn-primary mt-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="surface-steel">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-navy text-2xl md:text-3xl font-bold">More articles</h2>
          <Link to="/blog" className="btn-ghost text-sm font-semibold">
            All articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={`/blog/${r.slug}`}
              className="card card-hover flex flex-col group"
            >
              <span className="badge-accent w-fit mb-3">{r.category}</span>
              <h3 className="text-navy font-semibold leading-snug group-hover:text-accent">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-ink/75 leading-relaxed line-clamp-3">
                {r.excerpt}
              </p>
              <div className="mt-4 text-xs text-muted">{r.readTime}</div>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="kicker mb-3">Get a quote</p>
            <h2 className="text-navy text-3xl md:text-4xl font-bold leading-tight">
              Ready to brief us on your product?
            </h2>
            <p className="mt-3 text-ink/80">
              We respond within 1 business day with a written scope and quote.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>

      <CTABanner />
    </div>
  );
}
