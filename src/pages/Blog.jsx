import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 'blog-verify-supplier',
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify a Chinese supplier before placing an order, from business license checks to on-site factory audits.',
    category: 'Supplier Verification',
    date: '2026-05-28',
    readTime: '8 min read',
  },
  {
    id: 'blog-qc-mistakes',
    title: '5 Common Quality Control Mistakes When Sourcing from China',
    excerpt: 'Avoid these common QC pitfalls that lead to defective products, delayed shipments, and costly rework.',
    category: 'Quality Control',
    date: '2026-05-15',
    readTime: '6 min read',
  },
  {
    id: 'blog-shipping-options',
    title: 'Sea vs. Air Freight: Choosing the Right Shipping Method from China',
    excerpt: 'A practical comparison of sea and air freight options, including cost, transit time, and when each makes sense for your business.',
    category: 'Shipping & Logistics',
    date: '2026-04-30',
    readTime: '7 min read',
  },
  {
    id: 'blog-negotiation-tips',
    title: 'Negotiating with Chinese Suppliers: What You Need to Know',
    excerpt: 'Practical tips for negotiating pricing, MOQs, and payment terms with Chinese factories — from someone who does it every day.',
    category: 'Sourcing Tips',
    date: '2026-04-18',
    readTime: '9 min read',
  },
  {
    id: 'blog-factory-audit',
    title: 'What Happens During a Factory Audit in China',
    excerpt: 'A behind-the-scenes look at what our team checks during an on-site factory audit, from production lines to quality records.',
    category: 'Supplier Verification',
    date: '2026-04-05',
    readTime: '7 min read',
  },
  {
    id: 'blog-avoid-scams',
    title: 'How to Avoid Sourcing Scams and Fraudulent Suppliers',
    excerpt: 'Red flags to watch for, common scam tactics, and practical steps to protect your business when sourcing from China.',
    category: 'Risk Management',
    date: '2026-03-22',
    readTime: '8 min read',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Sourcing Tips', 'Risk Management'];

export default function Blog() {
  return (
    <div>
      <PageHero
        title="Sourcing Insights & Guides"
        subtitle="Practical advice on sourcing from China — from supplier verification to quality control and shipping."
        breadcrumb="Blog"
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group bg-white rounded-lg border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Tag className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-sm text-slate-400">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium cursor-pointer hover:text-blue-700">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to help. Get in touch for a free consultation."
        buttonText="Contact Us"
      />
    </div>
  );
}
