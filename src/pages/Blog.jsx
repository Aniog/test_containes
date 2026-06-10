import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    id: 'how-to-find-suppliers',
    title: 'How to Find Reliable Suppliers in China: A Complete Guide',
    excerpt: 'Learn the proven methods for identifying trustworthy Chinese manufacturers, from online platforms to trade shows and sourcing agents.',
    category: 'Sourcing Tips',
    date: '2026-05-28',
    readTime: '8 min read',
    titleId: 'blog-find-suppliers-title',
    descId: 'blog-find-suppliers-desc',
    imgId: 'blog-find-suppliers-img-k2l3',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Verify Before Placing an Order',
    excerpt: 'A practical checklist covering the key areas to inspect during a factory audit — from business licenses to production capacity and quality systems.',
    category: 'Quality Control',
    date: '2026-05-15',
    readTime: '6 min read',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
    imgId: 'blog-audit-img-m4n5',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: Sea Freight vs. Air Freight Comparison',
    excerpt: 'Understand the cost, timeline, and practical differences between sea and air freight when importing goods from China.',
    category: 'Logistics',
    date: '2026-05-02',
    readTime: '5 min read',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
    imgId: 'blog-shipping-img-o6p7',
  },
  {
    id: 'avoid-sourcing-scams',
    title: '7 Red Flags to Avoid Sourcing Scams in China',
    excerpt: 'Protect your business by learning to recognize common scam tactics used by fraudulent suppliers and trading companies.',
    category: 'Risk Management',
    date: '2026-04-20',
    readTime: '7 min read',
    titleId: 'blog-scams-title',
    descId: 'blog-scams-desc',
    imgId: 'blog-scams-img-q8r9',
  },
  {
    id: 'negotiate-with-chinese-suppliers',
    title: 'How to Negotiate with Chinese Suppliers: Practical Strategies',
    excerpt: 'Effective negotiation techniques that work in the Chinese business context — from pricing discussions to payment terms and MOQ flexibility.',
    category: 'Sourcing Tips',
    date: '2026-04-08',
    readTime: '6 min read',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
    imgId: 'blog-negotiate-img-s0t1',
  },
  {
    id: 'quality-inspection-guide',
    title: 'Pre-Shipment Inspection: What It Is and Why You Need It',
    excerpt: 'A detailed guide to pre-shipment quality inspections — what gets checked, how AQL sampling works, and when to schedule one.',
    category: 'Quality Control',
    date: '2026-03-25',
    readTime: '5 min read',
    titleId: 'blog-inspection-title',
    descId: 'blog-inspection-desc',
    imgId: 'blog-inspection-img-u2v3',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Blog</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              China Sourcing Insights
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Practical guides, tips, and industry knowledge to help you source smarter from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-neutral-500">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-neutral-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Our team is happy to answer your questions about sourcing from China. Reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
