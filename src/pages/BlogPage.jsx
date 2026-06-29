import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "How to Verify a Chinese Supplier Before Placing an Order",
    excerpt: "A practical guide to conducting supplier due diligence including license verification, factory visits, and background checks.",
    date: "June 20, 2026",
    readTime: "6 min read",
    category: "Supplier Verification",
  },
  {
    title: "Understanding Quality Inspection Standards for Imports from China",
    excerpt: "Learn about AQL standards, inspection types, and how to set up an effective quality control process for your imports.",
    date: "June 12, 2026",
    readTime: "8 min read",
    category: "Quality Control",
  },
  {
    title: "Top 10 Mistakes to Avoid When Sourcing Products from China",
    excerpt: "Common pitfalls that importers face and how to avoid them — from communication issues to quality misunderstandings.",
    date: "June 5, 2026",
    readTime: "7 min read",
    category: "Sourcing Tips",
  },
  {
    title: "A Complete Guide to Factory Audits in China",
    excerpt: "What to expect during a factory audit, how to prepare, and how to evaluate audit results for informed decision-making.",
    date: "May 28, 2026",
    readTime: "10 min read",
    category: "Factory Audit",
  },
  {
    title: "Shipping from China: Sea vs Air vs Rail vs Express",
    excerpt: "Compare shipping methods, costs, transit times, and best use cases for importing goods from China to your country.",
    date: "May 20, 2026",
    readTime: "7 min read",
    category: "Logistics",
  },
  {
    title: "Negotiating with Chinese Suppliers: Best Practices",
    excerpt: "Cultural insights and practical tips for successful price negotiation, payment terms, and long-term supplier relationships.",
    date: "May 14, 2026",
    readTime: "5 min read",
    category: "Sourcing Tips",
  },
];

export default function BlogPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-gray-900 to-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Insights, tips, and practical guides for sourcing products from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-surface rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="text-primary text-sm font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-1"
                    >
                      Read More <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest sourcing insights and guides.
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}