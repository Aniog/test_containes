import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-verify-china-supplier',
    title: 'How to Verify a Supplier in China: A Step-by-Step Guide',
    excerpt: 'Learn the key steps to verify whether a Chinese supplier is legitimate, including business license checks, factory audits, and certification verification.',
    date: '2026-07-15',
    readTime: '8 min read',
    category: 'Supplier Verification',
  },
  {
    id: 'quality-inspection-checklist',
    title: 'Quality Inspection Checklist for Importers',
    excerpt: 'A practical checklist covering pre-production, during-production, and pre-shipment inspections to help you catch quality issues before goods leave the factory.',
    date: '2026-07-08',
    readTime: '6 min read',
    category: 'Quality Control',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Shipping from China: FOB, CIF, and DDP Explained',
    excerpt: 'Understanding international shipping terms is essential for managing costs and risk. We break down the most common Incoterms used in China sourcing.',
    date: '2026-06-28',
    readTime: '7 min read',
    category: 'Shipping',
  },
  {
    id: 'avoiding-sourcing-scams',
    title: 'Common Sourcing Scams and How to Avoid Them',
    excerpt: 'From fake factories to bait-and-switch quality, we cover the most common sourcing risks and practical steps to protect your business.',
    date: '2026-06-15',
    readTime: '5 min read',
    category: 'Risk Management',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: 'Tips for Negotiating with Chinese Suppliers',
    excerpt: 'Effective negotiation strategies that respect cultural differences while protecting your interests on price, quality, and delivery terms.',
    date: '2026-06-01',
    readTime: '6 min read',
    category: 'Negotiation',
  },
  {
    id: 'china-sourcing-trends-2026',
    title: 'China Sourcing Trends in 2026',
    excerpt: 'An overview of current trends in China manufacturing, including supply chain shifts, quality improvements, and opportunities for international buyers.',
    date: '2026-05-20',
    readTime: '5 min read',
    category: 'Industry Insights',
  },
];

export default function BlogPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Practical guides, industry insights, and tips for sourcing from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-slate-800 mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-blue-700 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm text-blue-700 font-medium hover:text-blue-800"
                >
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your Sourcing?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to assist you with supplier verification, quality control, and shipping coordination.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
