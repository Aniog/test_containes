import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const posts = [
  {
    id: "china-sourcing-guide-2026",
    title: "The Complete Guide to Sourcing from China in 2026",
    excerpt:
      "Everything you need to know about sourcing products from China in 2026 — from finding suppliers to managing quality control and logistics.",
    category: "Sourcing Guide",
    date: "July 15, 2026",
    readTime: "12 min read",
    imgId: "blog-guide-1a2b3c",
  },
  {
    id: "factory-audit-checklist",
    title: "Factory Audit Checklist: What to Look for During a Supplier Visit",
    excerpt:
      "A comprehensive checklist for conducting effective factory audits. Learn what to evaluate during on-site supplier visits.",
    category: "Quality Control",
    date: "July 8, 2026",
    readTime: "8 min read",
    imgId: "blog-audit-4d5e6f",
  },
  {
    id: "reduce-sourcing-costs",
    title: "10 Proven Strategies to Reduce Your China Sourcing Costs",
    excerpt:
      "Practical strategies to optimize your sourcing costs without compromising on quality or delivery timelines.",
    category: "Cost Optimization",
    date: "June 28, 2026",
    readTime: "10 min read",
    imgId: "blog-costs-7g8h9i",
  },
  {
    id: "quality-inspection-types",
    title: "Understanding Different Types of Product Inspections",
    excerpt:
      "An overview of pre-production, during-production, and pre-shipment inspections — and when to use each one.",
    category: "Quality Control",
    date: "June 20, 2026",
    readTime: "7 min read",
    imgId: "blog-inspection-0j1k2l",
  },
  {
    id: "shipping-from-china",
    title: "Shipping from China: A Complete Guide to Freight Options",
    excerpt:
      "Compare sea freight, air freight, and express shipping options. Learn which method is best for your products and budget.",
    category: "Logistics",
    date: "June 12, 2026",
    readTime: "9 min read",
    imgId: "blog-shipping-3m4n5o",
  },
  {
    id: "supplier-negotiation-tips",
    title: "How to Negotiate with Chinese Suppliers: Tips from Experts",
    excerpt:
      "Effective negotiation strategies that work with Chinese manufacturers. Build better supplier relationships and get better pricing.",
    category: "Supplier Management",
    date: "June 5, 2026",
    readTime: "11 min read",
    imgId: "blog-negotiation-6p7q8r",
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="border-b bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Insights, guides, and best practices for sourcing products from
              China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-desc-${post.id}] [blog-title-${post.id}] [blog-heading]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {post.category}
                  </div>
                  <h2
                    id={`blog-title-${post.id}`}
                    className="text-lg font-semibold leading-snug"
                  >
                    <span className="cursor-pointer hover:text-primary">
                      {post.title}
                    </span>
                  </h2>
                  <p
                    id={`blog-desc-${post.id}`}
                    className="mt-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <span id="blog-heading" className="hidden">
            Blog
          </span>
        </div>
      </section>

      <section className="border-t bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Get the latest sourcing tips and insights delivered to your inbox.
            </p>
            <form className="mt-6 flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}