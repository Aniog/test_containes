import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "How to Verify Chinese Suppliers: A Complete Guide",
    excerpt: "Learn the essential steps to verify Chinese suppliers before placing an order. From business license checks to on-site factory audits, we cover everything you need to know.",
    category: "Supplier Verification",
    author: "SSourcing Team",
    date: "July 15, 2026",
    readTime: "8 min read",
  },
  {
    title: "Quality Control in China: AQL Standards Explained",
    excerpt: "Understanding AQL (Acceptable Quality Limit) standards is crucial for any business sourcing from China. We break down what these standards mean and how they protect your business.",
    category: "Quality Control",
    author: "SSourcing Team",
    date: "July 8, 2026",
    readTime: "6 min read",
  },
  {
    title: "Top 10 Sourcing Mistakes and How to Avoid Them",
    excerpt: "Avoid costly mistakes when sourcing from China. We share the most common pitfalls we've seen in our 12 years of experience and practical tips to avoid them.",
    category: "Sourcing Tips",
    author: "SSourcing Team",
    date: "June 28, 2026",
    readTime: "10 min read",
  },
  {
    title: "Understanding Incoterms for China Imports",
    excerpt: "FOB, CIF, EXW - what do these terms mean and which one is right for your business? A practical guide to Incoterms for importing from China.",
    category: "Shipping & Logistics",
    author: "SSourcing Team",
    date: "June 20, 2026",
    readTime: "7 min read",
  },
  {
    title: "The Factory Audit Process: What to Expect",
    excerpt: "A detailed look at what happens during a factory audit in China. From production capacity assessment to social compliance checks, understand what we evaluate.",
    category: "Factory Audits",
    author: "SSourcing Team",
    date: "June 12, 2026",
    readTime: "9 min read",
  },
  {
    title: "How to Negotiate with Chinese Suppliers",
    excerpt: "Effective negotiation strategies for working with Chinese manufacturers. Learn cultural considerations, pricing tactics, and how to build long-term supplier relationships.",
    category: "Sourcing Tips",
    author: "SSourcing Team",
    date: "June 5, 2026",
    readTime: "7 min read",
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Sourcing Insights & Guides</h1>
            <p className="text-lg text-slate-300 mt-4 max-w-2xl">
              Practical advice, industry insights, and expert guides to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={post.title} className="card flex flex-col">
                <div
                  data-strk-bg-id={`blog-img-${index}`}
                  data-strk-bg={`[blog-title-${index}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                  className="w-full aspect-video rounded-lg bg-slate-200 bg-cover bg-center mb-4"
                />
                <span id={`blog-title-${index}`} className="hidden">{post.title}</span>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{post.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}