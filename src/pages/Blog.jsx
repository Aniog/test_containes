import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "How to Verify a Chinese Factory in 2024",
    excerpt:
      "A step-by-step guide to conducting due diligence on Chinese manufacturers, including red flags to watch for and documentation to request.",
    date: "July 15, 2026",
    readTime: "8 min read",
    category: "Factory Verification",
  },
  {
    title: "Understanding AQL Inspection Standards",
    excerpt:
      "What is AQL, how does it work, and why it matters for your quality control process when importing from China.",
    date: "June 28, 2026",
    readTime: "6 min read",
    category: "Quality Control",
  },
  {
    title: "Sea Freight vs. Air Freight: A Cost Breakdown",
    excerpt:
      "When to choose sea freight, when air freight makes sense, and how to calculate your true landed cost including duties and fees.",
    date: "June 10, 2026",
    readTime: "7 min read",
    category: "Logistics",
  },
  {
    title: "The Hidden Costs of Sourcing from Alibaba",
    excerpt:
      "Why the listed price is rarely the final price — and what additional costs you should budget for when sourcing through B2B platforms.",
    date: "May 22, 2026",
    readTime: "5 min read",
    category: "Sourcing Strategy",
  },
  {
    title: "5 Questions to Ask Before Signing a Factory Contract",
    excerpt:
      "Protect your business by including these key clauses in your manufacturing agreement with Chinese suppliers.",
    date: "May 8, 2026",
    readTime: "6 min read",
    category: "Legal",
  },
  {
    title: "Navigating Chinese New Year Production Shutdowns",
    excerpt:
      "How to plan around the annual factory shutdown period to avoid delays and stockouts during Q1.",
    date: "April 15, 2026",
    readTime: "5 min read",
    category: "Operations",
  },
];

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Blog
          </p>
          <h1 className="text-white mb-4">Sourcing Insights & Guides</h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            Practical advice, industry updates, and actionable tips for
            importing from China.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-surface rounded-lg border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-auto">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
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
