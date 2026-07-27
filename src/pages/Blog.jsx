import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const posts = [
  {
    title: "How to Verify a Chinese Factory Before You Pay",
    excerpt:
      "A practical checklist for buyers who want to confirm a supplier is legitimate before sending a deposit.",
    date: "July 15, 2026",
    readTime: "6 min read",
    category: "Factory Verification",
    id: "blog-verify-factory",
  },
  {
    title: "Understanding AQL Sampling for Quality Control",
    excerpt:
      "What AQL levels mean, how inspectors use them, and what you should specify in your purchase agreement.",
    date: "July 8, 2026",
    readTime: "5 min read",
    category: "Quality Control",
    id: "blog-aql-sampling",
  },
  {
    title: "FOB vs CIF: Which Incoterm Should You Choose?",
    excerpt:
      "A clear breakdown of the most common shipping terms when importing from China, with cost and risk comparisons.",
    date: "June 28, 2026",
    readTime: "4 min read",
    category: "Shipping",
    id: "blog-incoterms",
  },
  {
    title: "Red Flags When Sourcing on Alibaba",
    excerpt:
      "Common warning signs that a supplier may not be reliable, and how to spot them before you waste time.",
    date: "June 20, 2026",
    readTime: "7 min read",
    category: "Supplier Sourcing",
    id: "blog-alibaba-redflags",
  },
  {
    title: "How We Helped a Startup Save $45,000 on Their First Order",
    excerpt:
      "A detailed look at how direct factory sourcing and negotiation strategy delivered major cost savings.",
    date: "June 12, 2026",
    readTime: "8 min read",
    category: "Case Study",
    id: "blog-startup-savings",
  },
  {
    title: "CE Marking for Products Imported from China",
    excerpt:
      "What EU importers need to know about CE compliance, testing requirements, and documentation.",
    date: "June 5, 2026",
    readTime: "6 min read",
    category: "Compliance",
    id: "blog-ce-marking",
  },
];

export default function Blog() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Practical guides, industry insights, and lessons learned from
              sourcing projects in China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/10] bg-slate-100 relative">
                  <img
                    data-strk-img-id={`blog-thumb-${post.id}`}
                    data-strk-img={`[${post.id}-title] [${post.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="inline-block rounded-full bg-blue-50 text-brand-800 px-2 py-0.5 font-medium">
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
                    id={`${post.id}-title`}
                    className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-800 transition-colors"
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
