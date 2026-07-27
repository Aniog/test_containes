import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "How to Find Reliable Suppliers in China: A Complete Guide",
    excerpt: "Learn the step-by-step process for finding, vetting, and verifying Chinese suppliers to ensure quality and reliability for your business.",
    author: "SSourcing Team",
    date: "July 15, 2026",
    readTime: "8 min read",
    category: "Sourcing Guide",
  },
  {
    title: "Factory Audits in China: What to Look For and Why It Matters",
    excerpt: "A detailed overview of what factory audits cover, why they are essential for quality control, and how to interpret audit reports.",
    author: "SSourcing Team",
    date: "July 8, 2026",
    readTime: "6 min read",
    category: "Quality Control",
  },
  {
    title: "Understanding AQL Sampling for Quality Inspections",
    excerpt: "An explanation of Acceptable Quality Limit (AQL) sampling standards and how they are used in pre-shipment inspections for Chinese manufacturing.",
    author: "SSourcing Team",
    date: "June 28, 2026",
    readTime: "5 min read",
    category: "Quality Control",
  },
  {
    title: "Shipping from China: A Guide to Freight Options and Costs",
    excerpt: "Compare sea freight, air freight, and express shipping options for importing goods from China, with cost considerations and transit times.",
    author: "SSourcing Team",
    date: "June 20, 2026",
    readTime: "10 min read",
    category: "Logistics",
  },
  {
    title: "Top 10 Mistakes to Avoid When Sourcing Products from China",
    excerpt: "Common pitfalls that importers face when sourcing from China and practical strategies to avoid them.",
    author: "SSourcing Team",
    date: "June 12, 2026",
    readTime: "7 min read",
    category: "Sourcing Guide",
  },
  {
    title: "The Role of Production Monitoring in Quality Assurance",
    excerpt: "Why ongoing production monitoring is critical for maintaining product quality and preventing costly issues during manufacturing.",
    author: "SSourcing Team",
    date: "June 5, 2026",
    readTime: "5 min read",
    category: "Quality Control",
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
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" id="blog-hero-title">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed" id="blog-hero-subtitle">
              Practical advice, industry insights, and guides to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl border border-neutral-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div
                  className="aspect-[16/9] bg-neutral-100"
                  data-strk-bg-id={`blog-img-${i}`}
                  data-strk-bg={`[blog-hero-title] [blog-title-${i}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-2">
              <span className="px-4 py-2 bg-brand-600 text-white text-sm rounded-lg">1</span>
              <span className="px-4 py-2 text-neutral-600 text-sm rounded-lg hover:bg-neutral-100 cursor-pointer">2</span>
              <span className="px-4 py-2 text-neutral-600 text-sm rounded-lg hover:bg-neutral-100 cursor-pointer">3</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Stay Updated</h2>
          <p className="text-neutral-600 mb-6">
            Get the latest sourcing guides and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}