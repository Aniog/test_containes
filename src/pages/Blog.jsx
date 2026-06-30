import { useEffect, useRef } from "react";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";

const posts = [
  {
    title: "How to Verify a Chinese Factory: A Complete Guide for Importers",
    excerpt: "Learn the essential steps for verifying Chinese manufacturers, from license checks to on-site audits. Avoid common pitfalls and protect your supply chain.",
    category: "Supplier Verification",
    date: "June 15, 2026",
    readTime: "8 min read",
    slug: "verify-chinese-factory-guide",
  },
  {
    title: "The Complete Guide to Quality Inspection in China",
    excerpt: "Understanding AQL standards, inspection types, and how to implement effective quality control when manufacturing products in China.",
    category: "Quality Control",
    date: "June 1, 2026",
    readTime: "10 min read",
    slug: "quality-inspection-china-guide",
  },
  {
    title: "5 Common Sourcing Mistakes and How to Avoid Them",
    excerpt: "New to sourcing from China? Learn from the most common mistakes importers make and how to structure your sourcing process for success.",
    category: "Sourcing Tips",
    date: "May 18, 2026",
    readTime: "6 min read",
    slug: "common-sourcing-mistakes",
  },
  {
    title: "Shipping from China: FOB vs CIF vs DDP Explained",
    excerpt: "A practical comparison of Incoterms for importing from China. Understand which shipping terms work best for your business and budget.",
    category: "Logistics",
    date: "May 5, 2026",
    readTime: "7 min read",
    slug: "shipping-china-fob-cif-ddp",
  },
  {
    title: "Negotiating with Chinese Suppliers: Strategies That Work",
    excerpt: "Effective negotiation tactics for working with Chinese manufacturers. Build better relationships and secure favorable terms for your orders.",
    category: "Sourcing Tips",
    date: "April 20, 2026",
    readTime: "9 min read",
    slug: "negotiating-chinese-suppliers",
  },
  {
    title: "Understanding Chinese Business Culture for Importers",
    excerpt: "Cultural insights that make a difference when doing business in China. Build trust and communicate effectively with manufacturers.",
    category: "Business Culture",
    date: "April 8, 2026",
    readTime: "7 min read",
    slug: "chinese-business-culture",
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Blog & Resources
            </h1>
            <p className="text-lg md:text-xl text-navy-200">
              Practical insights on sourcing from China. Guides, tips, and industry knowledge from our team of experienced sourcing professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-50 flex items-center justify-center">
                  <div
                    className="w-full h-full"
                    data-strk-img-id={`blog-img-${post.slug}`}
                    data-strk-img={`[blog-title-${post.slug}] [blog-category]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-navy-50 to-gray-100 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-navy-200" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 id={`blog-title-${post.slug}`} className="text-base font-bold text-navy-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-6">
            Get the latest sourcing insights and guides delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}