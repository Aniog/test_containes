import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { SectionHeading, CTASection } from '@/components/ui/SectionHeading';

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the key steps to verify a Chinese supplier, including business license checks, factory visits, reference calls, and online verification tools.',
    category: 'Supplier Verification',
    date: 'May 15, 2026',
    readTime: '8 min read',
    author: 'SSourcing Team',
    imgQuery: 'supplier verification factory audit China',
  },
  {
    title: 'Understanding AQL Inspection: A Guide for Importers',
    excerpt: 'Acceptance Quality Level (AQL) inspection is the industry standard for product quality checks. This guide explains how it works and how to set the right levels for your products.',
    category: 'Quality Control',
    date: 'May 3, 2026',
    readTime: '10 min read',
    author: 'SSourcing Team',
    imgQuery: 'quality inspection AQL product checking factory',
  },
  {
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare cost, speed, and suitability of sea and air freight for your China imports. Includes a practical decision framework and real cost examples.',
    category: 'Shipping & Logistics',
    date: 'Apr 20, 2026',
    readTime: '7 min read',
    author: 'SSourcing Team',
    imgQuery: 'container shipping freight logistics port',
  },
  {
    title: 'What to Include in Your Product Specification Sheet',
    excerpt: 'A clear product specification sheet is essential for accurate quoting and quality control. Here is exactly what to include, with downloadable templates.',
    category: 'Sourcing Tips',
    date: 'Apr 8, 2026',
    readTime: '6 min read',
    author: 'SSourcing Team',
    imgQuery: 'product specification document engineering drawing',
  },
  {
    title: 'China Tariffs and Duties: What Importers Need to Know in 2026',
    excerpt: 'A practical overview of current tariff rates, trade agreements, and duty calculation methods for common product categories imported from China.',
    category: 'Trade & Compliance',
    date: 'Mar 25, 2026',
    readTime: '9 min read',
    author: 'SSourcing Team',
    imgQuery: 'international trade customs tariff documentation',
  },
  {
    title: 'How to Negotiate Pricing with Chinese Manufacturers',
    excerpt: 'Effective negotiation strategies that build long-term supplier relationships while getting competitive pricing. Covers cultural considerations and common mistakes to avoid.',
    category: 'Sourcing Tips',
    date: 'Mar 12, 2026',
    readTime: '8 min read',
    author: 'SSourcing Team',
    imgQuery: 'business negotiation meeting factory China',
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 py-16 lg:py-20">
        <div className="container-max text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Blog & Resources
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Sourcing Knowledge & Insights
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Practical guides, industry insights, and expert advice to help you make better sourcing decisions when importing from China.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-navy-100 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={`blog-img-${idx}`}
                    data-strk-img={`[blog-${idx}-title] ${post.imgQuery}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-navy-50 text-navy-500 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 id={`blog-${idx}-title`} className="text-lg font-bold text-navy-500 mb-2 group-hover:text-accent-500 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                    <button className="text-sm font-medium text-accent-500 hover:text-accent-600 flex items-center gap-1 transition-colors">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
