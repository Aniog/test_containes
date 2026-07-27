import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "How to Verify a Chinese Factory: A Complete Checklist",
    excerpt:
      "Factory verification is one of the most critical steps in sourcing from China. This comprehensive checklist covers everything from business licenses to production floor audits.",
    date: "2026-07-15",
    readTime: "8 min read",
    category: "Factory Verification",
  },
  {
    title: "Understanding AQL Standards for Product Inspection",
    excerpt:
      "Acceptable Quality Limit (AQL) is the global standard for product inspection. Learn how AQL sampling works and what levels you should request for your products.",
    date: "2026-07-08",
    readTime: "6 min read",
    category: "Quality Control",
  },
  {
    title: "5 Common Mistakes When Negotiating with Chinese Suppliers",
    excerpt:
      "Negotiation in China requires understanding cultural nuances and business practices. Avoid these five common mistakes that cost buyers money and relationships.",
    date: "2026-06-28",
    readTime: "7 min read",
    category: "Supplier Management",
  },
  {
    title: "Incoterms 2024: What Buyers Need to Know",
    excerpt:
      "Shipping terms can make or break your landed cost calculations. We break down the most common Incoterms used in China exports and when to use each one.",
    date: "2026-06-20",
    readTime: "5 min read",
    category: "Shipping & Logistics",
  },
  {
    title: "How to Protect Your Intellectual Property in China",
    excerpt:
      "From trademarks to patents and design registrations, here is what overseas buyers should know about IP protection when working with Chinese manufacturers.",
    date: "2026-06-12",
    readTime: "9 min read",
    category: "Legal & Compliance",
  },
  {
    title: "MOQ Negotiation: Strategies for Small Buyers",
    excerpt:
      "Minimum order quantities can be a barrier for startups and small businesses. Here are proven strategies to negotiate lower MOQs without sacrificing terms.",
    date: "2026-06-05",
    readTime: "6 min read",
    category: "Sourcing Strategy",
  },
  {
    title: "The Canton Fair: A Buyer's Guide for First-Timers",
    excerpt:
      "China's largest trade show attracts thousands of buyers every year. Here is how to prepare, what to bring, and how to maximize your visit.",
    date: "2026-05-28",
    readTime: "7 min read",
    category: "Trade Shows",
  },
  {
    title: "Quality Control at Every Stage: DUPRO, PSI, and CLI Explained",
    excerpt:
      "Different inspection types serve different purposes. Learn when to use during-production inspection, pre-shipment inspection, and container loading inspection.",
    date: "2026-05-20",
    readTime: "6 min read",
    category: "Quality Control",
  },
  {
    title: "Sustainable Sourcing from China: Trends and Certifications",
    excerpt:
      "Sustainability is becoming a key differentiator. We explore the certifications, factory practices, and product categories leading the green sourcing movement in China.",
    date: "2026-05-12",
    readTime: "8 min read",
    category: "Industry Trends",
  },
];

export default function Blog() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div>
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Sourcing Insights</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry updates, and expert advice for businesses sourcing from China.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-44 bg-slate-200 relative overflow-hidden">
                  <img
                    data-strk-img-id={`blog-thumb-${i}`}
                    data-strk-img={`[blog-excerpt-${i}] [blog-title-${i}] [blog-cat-${i}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold bg-white/90 backdrop-blur text-navy-800 px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    id={`blog-title-${i}`}
                    className="text-base font-bold text-navy-900 mb-2 leading-snug"
                  >
                    {post.title}
                  </h3>
                  <p id={`blog-excerpt-${i}`} className="text-sm text-slate-600 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span id={`blog-cat-${i}`} className="hidden">{post.category}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 mt-4 hover:text-navy-500 transition-colors cursor-pointer">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Need personalized sourcing advice?
          </h2>
          <p className="text-slate-600 mb-8">
            Our team is happy to discuss your specific sourcing challenges and recommend the best approach.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
