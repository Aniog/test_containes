import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const posts = [
  {
    title: "How to Verify a Chinese Supplier: A Step-by-Step Guide",
    excerpt: "Learn the essential steps to verify potential suppliers in China, from business license checks to on-site factory audits.",
    category: "Supplier Verification",
    date: "July 15, 2026",
    readTime: "8 min read",
    author: "SSourcing Team",
  },
  {
    title: "The Complete Guide to Quality Inspection in China",
    excerpt: "Understanding the different types of quality inspections and how they protect your business when manufacturing in China.",
    category: "Quality Control",
    date: "July 8, 2026",
    readTime: "10 min read",
    author: "SSourcing Team",
  },
  {
    title: "5 Common Mistakes When Sourcing from China (And How to Avoid Them)",
    excerpt: "Avoid these costly mistakes that importers commonly make when sourcing products from Chinese manufacturers.",
    category: "Sourcing Tips",
    date: "June 28, 2026",
    readTime: "6 min read",
    author: "SSourcing Team",
  },
  {
    title: "Understanding Incoterms: A Practical Guide for Importers",
    excerpt: "A clear breakdown of Incoterms 2025 and how they affect your shipping costs, responsibilities, and risk when importing from China.",
    category: "Logistics",
    date: "June 20, 2026",
    readTime: "7 min read",
    author: "SSourcing Team",
  },
  {
    title: "Factory Audits: What to Look For and Why They Matter",
    excerpt: "A comprehensive overview of what a proper factory audit covers and why it's critical for quality assurance.",
    category: "Factory Audits",
    date: "June 12, 2026",
    readTime: "9 min read",
    author: "SSourcing Team",
  },
  {
    title: "How to Negotiate Better Prices with Chinese Suppliers",
    excerpt: "Practical negotiation strategies that work when dealing with Chinese manufacturers, without compromising on quality.",
    category: "Sourcing Tips",
    date: "June 5, 2026",
    readTime: "7 min read",
    author: "SSourcing Team",
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical advice, guides, and industry insights for sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow flex flex-col">
                <div className="rounded-t-xl overflow-hidden bg-slate-100 aspect-[16/9]">
                  <img
                    data-strk-img-id={`blog-img-${i}`}
                    data-strk-img={`[blog-title-${i}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <Badge variant="secondary" className="mb-2 w-fit">{post.category}</Badge>
                  <h2 id={`blog-title-${i}`} className="text-base font-semibold text-slate-800 mb-2 leading-snug">
                    <a href="#" className="hover:text-primary-600 transition-colors">{post.title}</a>
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Stay Updated</h2>
          <p className="text-slate-600 mb-8">
            Get the latest sourcing guides and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}