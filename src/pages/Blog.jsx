import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    id: "bp-1",
    title: "How to Verify a Chinese Factory: A Complete Guide",
    excerpt:
      "Factory verification is the most critical step in sourcing from China. Learn the key checks you need to make before placing any orders.",
    category: "Factory Verification",
    readTime: "8 min read",
    date: "June 5, 2026",
    imgId: "blog-verify-img",
    titleId: "blog-verify-title",
  },
  {
    id: "bp-2",
    title: "Understanding AQL Quality Inspection Standards",
    excerpt:
      "Acceptable Quality Level (AQL) is the industry standard for product inspections. Here is how to use it effectively for your orders.",
    category: "Quality Control",
    readTime: "6 min read",
    date: "May 28, 2026",
    imgId: "blog-aql-img",
    titleId: "blog-aql-title",
  },
  {
    id: "bp-3",
    title: "Top 10 Manufacturing Cities in China for Importers",
    excerpt:
      "Each Chinese manufacturing hub specializes in different industries. Learn which city is right for your product category.",
    category: "Sourcing Tips",
    readTime: "10 min read",
    date: "May 20, 2026",
    imgId: "blog-cities-img",
    titleId: "blog-cities-title",
  },
  {
    id: "bp-4",
    title: "How to Negotiate Better Prices with Chinese Suppliers",
    excerpt:
      "Effective price negotiation requires understanding Chinese business culture and market dynamics. Here are proven strategies.",
    category: "Negotiation",
    readTime: "7 min read",
    date: "May 12, 2026",
    imgId: "blog-negotiate-img",
    titleId: "blog-negotiate-title",
  },
  {
    id: "bp-5",
    title: "Shipping from China: Sea vs. Air Freight Explained",
    excerpt:
      "Choosing the right shipping method can make or break your margins. We break down the costs, timelines, and tradeoffs.",
    category: "Logistics",
    readTime: "5 min read",
    date: "May 4, 2026",
    imgId: "blog-shipping-img",
    titleId: "blog-shipping-title",
  },
  {
    id: "bp-6",
    title: "Common Product Defects and How to Prevent Them",
    excerpt:
      "From color variations to structural issues, learn the most common defects and how our inspection process catches them before shipping.",
    category: "Quality Control",
    readTime: "6 min read",
    date: "April 25, 2026",
    imgId: "blog-defects-img",
    titleId: "blog-defects-title",
  },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | SSourcing China";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/90 via-brand/85 to-brand-dark/90" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Sourcing Blog
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              Practical guides, industry insights, and expert tips to help you
              source better from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-xl border border-border bg-white overflow-hidden hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden bg-surface">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.titleId}] China sourcing blog`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-brand bg-brand/5 px-2 py-0.5 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    id={post.titleId}
                    className="text-base font-bold text-text-primary mb-2 leading-snug group-hover:text-brand transition-colors"
                  >
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <span className="text-text-muted text-xs">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
