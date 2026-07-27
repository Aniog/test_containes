import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionCTA from '@/components/shared/SectionCTA';

const posts = [
  {
    id: 'post-1',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '6 min read',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt:
      'Placing an order with a new Chinese supplier carries real risk. This guide covers the key steps to verify a supplier\'s legitimacy, production capacity, and quality systems before committing.',
    tags: ['Supplier Verification', 'Due Diligence', 'Factory Audit'],
  },
  {
    id: 'post-2',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '5 min read',
    title: 'Understanding AQL Sampling: A Practical Guide for Importers',
    excerpt:
      'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. Here\'s what it means, how it works, and how to use it to protect your orders.',
    tags: ['Quality Control', 'Inspection', 'AQL'],
  },
  {
    id: 'post-3',
    category: 'Shipping',
    date: 'June 28, 2026',
    readTime: '7 min read',
    title: 'FCL vs LCL: Which Shipping Option Is Right for Your China Order?',
    excerpt:
      'Full Container Load or Less than Container Load? The right choice depends on your order volume, timeline, and budget. We break down the key differences and when to use each.',
    tags: ['Shipping', 'Logistics', 'FCL', 'LCL'],
  },
  {
    id: 'post-4',
    category: 'Sourcing Strategy',
    date: 'June 18, 2026',
    readTime: '8 min read',
    title: 'The 5 Most Common Mistakes Importers Make When Sourcing from China',
    excerpt:
      'After working with hundreds of buyers, we\'ve seen the same mistakes come up repeatedly. Here are the five most costly errors and how to avoid them.',
    tags: ['Sourcing Strategy', 'Risk Management', 'Best Practices'],
  },
  {
    id: 'post-5',
    category: 'Compliance',
    date: 'June 5, 2026',
    readTime: '6 min read',
    title: 'CE Certification for Products Sourced from China: What You Need to Know',
    excerpt:
      'If you\'re importing products into the EU, CE marking is often mandatory. This guide explains what CE certification covers, which products need it, and how to get it.',
    tags: ['Compliance', 'CE Certification', 'EU Import'],
  },
  {
    id: 'post-6',
    category: 'Negotiation',
    date: 'May 22, 2026',
    readTime: '5 min read',
    title: 'How to Negotiate Price with Chinese Suppliers Without Sacrificing Quality',
    excerpt:
      'Price negotiation is a normal part of doing business in China — but pushing too hard can backfire. Here\'s how to negotiate effectively while maintaining a good supplier relationship.',
    tags: ['Negotiation', 'Pricing', 'Supplier Relations'],
  },
];

const categoryColors = {
  'Supplier Verification': 'bg-blue-50 text-blue-700',
  'Quality Control': 'bg-amber-50 text-amber-700',
  'Shipping': 'bg-cyan-50 text-cyan-700',
  'Sourcing Strategy': 'bg-purple-50 text-purple-700',
  'Compliance': 'bg-emerald-50 text-emerald-700',
  'Negotiation': 'bg-rose-50 text-rose-700',
};

export default function Blog() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="China Sourcing Insights"
        subtitle="Practical guides, tips, and industry knowledge for importers and global buyers sourcing from China."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-10">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[posts[0].category]}`}>
                  {posts[0].category}
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {posts[0].readTime}
                </span>
                <span className="text-slate-400 text-xs">{posts[0].date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-snug">
                {posts[0].title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">{posts[0].excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {posts[0].tags.map((tag) => (
                  <span key={tag} className="bg-white border border-slate-200 text-slate-500 text-xs px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-card-hover transition-shadow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-slate-100 text-slate-600'}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{post.date}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              More articles coming soon. Subscribe to our newsletter for updates.
            </p>
          </div>
        </div>
      </section>

      <SectionCTA
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer questions about sourcing from China. Contact us anytime."
        buttonLabel="Contact Our Team"
      />
    </>
  );
}
