import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    id: "how-to-verify-chinese-supplier",
    category: "Supplier Verification",
    title: "How to Verify a Chinese Supplier Before Placing an Order",
    excerpt: "Placing an order with an unverified supplier is one of the most common mistakes importers make. Here's a practical checklist for verifying a Chinese manufacturer before you commit.",
    date: "2026-05-20",
    readTime: "7 min read",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
    imgId: "blog-verify-img-a1b2c3",
  },
  {
    id: "aql-inspection-guide",
    category: "Quality Control",
    title: "AQL Sampling Explained: A Practical Guide for Importers",
    excerpt: "AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. This guide explains how it works and how to use it to protect your orders.",
    date: "2026-05-06",
    readTime: "9 min read",
    titleId: "blog-aql-title",
    descId: "blog-aql-desc",
    imgId: "blog-aql-img-d4e5f6",
  },
  {
    id: "sea-freight-vs-air-freight",
    category: "Shipping",
    title: "Sea Freight vs Air Freight from China: How to Choose",
    excerpt: "The choice between sea and air freight affects your cost, lead time, and cash flow. Here's how to decide which option makes sense for your shipment.",
    date: "2026-04-22",
    readTime: "6 min read",
    titleId: "blog-freight-title",
    descId: "blog-freight-desc",
    imgId: "blog-freight-img-g7h8i9",
  },
  {
    id: "private-label-china-guide",
    category: "Sourcing Strategy",
    title: "Private Label Manufacturing in China: A Step-by-Step Guide",
    excerpt: "Private labeling in China can be highly profitable — but only if you approach it correctly. This guide covers everything from finding a factory to launching your product.",
    date: "2026-04-08",
    readTime: "11 min read",
    titleId: "blog-private-label-title",
    descId: "blog-private-label-desc",
    imgId: "blog-private-label-img-j1k2l3",
  },
  {
    id: "factory-audit-checklist",
    category: "Factory Audit",
    title: "Factory Audit Checklist: What to Look for When Visiting a Chinese Factory",
    excerpt: "A factory audit is your best tool for assessing a supplier before committing to an order. Here's what our team checks during every on-site visit.",
    date: "2026-03-25",
    readTime: "8 min read",
    titleId: "blog-audit-title",
    descId: "blog-audit-desc",
    imgId: "blog-audit-img-m4n5o6",
  },
  {
    id: "incoterms-guide-importers",
    category: "Trade & Shipping",
    title: "Incoterms Explained: Which Trade Terms Should You Use When Buying from China?",
    excerpt: "FOB, CIF, EXW, DDP — Incoterms define who is responsible for what in an international shipment. Here's a plain-English guide for importers.",
    date: "2026-03-11",
    readTime: "7 min read",
    titleId: "blog-incoterms-title",
    descId: "blog-incoterms-desc",
    imgId: "blog-incoterms-img-p7q8r9",
  },
];

const categories = ["All", "Supplier Verification", "Quality Control", "Shipping", "Sourcing Strategy", "Factory Audit", "Trade & Shipping"];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-[#0D2545] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Sourcing Insights & Guides</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers working with Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-slate-200 py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-[#1A4B8C] text-white"
                    : "bg-[#F4F6FA] text-gray-600 hover:bg-[#1A4B8C]/10 hover:text-[#1A4B8C] border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-[#E8621A] uppercase tracking-wide mb-2">{post.category}</span>
                  <h2 id={post.titleId} className="text-base font-bold text-[#0D2545] mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0D2545] mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-gray-500 mb-6">
            Practical guides and industry updates for global buyers sourcing from China. No spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C] text-gray-800"
            />
            <button className="bg-[#E8621A] hover:bg-[#C9541A] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
