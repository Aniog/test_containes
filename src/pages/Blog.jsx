import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

const posts = [
  {
    title: "How to Verify a Chinese Factory Before Placing an Order",
    excerpt:
      "A step-by-step guide to factory audits, license verification, and red flags to watch for when evaluating suppliers in China.",
    category: "Factory Verification",
    date: "July 15, 2026",
    readTime: "8 min read",
    imgId: "blog-verify-1a2b3c",
  },
  {
    title: "Understanding AQL Sampling for Quality Inspections",
    excerpt:
      "What is AQL, how does it work, and why it is the global standard for pre-shipment quality control in manufacturing.",
    category: "Quality Control",
    date: "July 8, 2026",
    readTime: "6 min read",
    imgId: "blog-aql-2b3c4d",
  },
  {
    title: "Incoterms Explained: FOB, CIF, DDP, and More",
    excerpt:
      "A practical breakdown of the most common shipping terms used in China exports and which one is right for your business.",
    category: "Shipping",
    date: "June 28, 2026",
    readTime: "7 min read",
    imgId: "blog-incoterms-3c4d5e",
  },
  {
    title: "How to Negotiate Payment Terms with Chinese Suppliers",
    excerpt:
      "Common payment structures, risk mitigation strategies, and how to build trust with factories when negotiating terms.",
    category: "Sourcing Tips",
    date: "June 20, 2026",
    readTime: "5 min read",
    imgId: "blog-payment-4d5e6f",
  },
  {
    title: "Top Trade Shows in China for Product Sourcing",
    excerpt:
      "The most important exhibitions to attend in Shenzhen, Guangzhou, and Shanghai for finding suppliers across every industry.",
    category: "Industry Insights",
    date: "June 12, 2026",
    readTime: "6 min read",
    imgId: "blog-tradeshow-5e6f7g",
  },
  {
    title: "The Hidden Costs of Sourcing from China",
    excerpt:
      "Beyond unit price: tooling, samples, inspections, shipping, duties, and other costs to factor into your sourcing budget.",
    category: "Sourcing Tips",
    date: "June 5, 2026",
    readTime: "7 min read",
    imgId: "blog-costs-6f7g8h",
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
              Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
              Sourcing Blog
            </h1>
            <p className="text-lg text-slate-600">
              Practical guides, industry insights, and tips for businesses importing from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, idx) => {
              const titleId = `blog-title-${idx}`;
              const excerptId = `blog-excerpt-${idx}`;
              return (
                <article
                  key={idx}
                  className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-all flex flex-col"
                >
                  <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                    <img
                      data-strk-img-id={post.imgId}
                      data-strk-img={`[${excerptId}] [${titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full font-medium">
                        {post.category}
                      </span>
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
                      id={titleId}
                      className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors"
                    >
                      {post.title}
                    </h3>
                    <p
                      id={excerptId}
                      className="text-slate-600 text-sm leading-relaxed flex-1"
                    >
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-colors">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
