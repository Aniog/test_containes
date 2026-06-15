import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'factory-audit-guide',
    title: 'How to Conduct a Factory Audit in China: A Practical Guide for Importers',
    excerpt: 'Before placing a large order with a Chinese manufacturer, a factory audit can save you from costly mistakes. This guide covers what to check, how to prepare, and what red flags to watch for.',
    category: 'Factory Verification',
    date: '2026-05-20',
    readTime: '8 min read',
    tags: ['Factory Audit', 'Supplier Verification', 'Risk Management'],
  },
  {
    id: 'quality-inspection-types',
    title: 'Pre-Shipment vs. During-Production Inspection: Which Do You Need?',
    excerpt: 'Quality inspections in China come in several forms. Understanding the difference between pre-shipment, during-production, and container loading inspections helps you choose the right approach for your order.',
    category: 'Quality Control',
    date: '2026-05-05',
    readTime: '6 min read',
    tags: ['Quality Inspection', 'QC', 'Pre-Shipment'],
  },
  {
    id: 'china-sourcing-mistakes',
    title: '7 Common Mistakes Importers Make When Sourcing from China',
    excerpt: 'Many first-time importers make avoidable mistakes that lead to quality problems, delays, or financial losses. Here are the seven most common errors and how to avoid them.',
    category: 'Sourcing Tips',
    date: '2026-04-18',
    readTime: '7 min read',
    tags: ['Sourcing Tips', 'Importers', 'Risk Management'],
  },
  {
    id: 'supplier-negotiation-tips',
    title: 'How to Negotiate Better Prices with Chinese Suppliers',
    excerpt: 'Price negotiation with Chinese factories requires a different approach than in Western markets. Understanding local business culture, pricing structures, and leverage points can significantly improve your outcomes.',
    category: 'Supplier Relations',
    date: '2026-04-02',
    readTime: '9 min read',
    tags: ['Negotiation', 'Pricing', 'Supplier Relations'],
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: FCL vs. LCL and How to Choose',
    excerpt: 'Full container load (FCL) and less-than-container load (LCL) shipping each have advantages depending on your order size, timeline, and budget. This guide helps you decide which is right for your shipment.',
    category: 'Shipping & Logistics',
    date: '2026-03-15',
    readTime: '5 min read',
    tags: ['Shipping', 'Logistics', 'FCL', 'LCL'],
  },
  {
    id: 'product-certifications-china',
    title: 'CE, FCC, RoHS: Which Product Certifications Do You Need When Importing from China?',
    excerpt: 'Importing products without the right certifications can result in customs delays, fines, or product recalls. This guide explains the most common certifications required for products manufactured in China.',
    category: 'Compliance',
    date: '2026-03-01',
    readTime: '10 min read',
    tags: ['Certifications', 'Compliance', 'CE', 'FCC'],
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-3">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Blog</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, tips, and insights for importers sourcing products from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Featured Article</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-light-bg rounded-2xl overflow-hidden">
              <div className="relative min-h-64">
                <img
                  data-strk-img-id={`blog-featured-${featured.id}`}
                  data-strk-img={`[blog-featured-${featured.id}-excerpt] [blog-featured-${featured.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover min-h-64"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">{featured.category}</span>
                <h2 id={`blog-featured-${featured.id}-title`} className="text-2xl font-bold text-primary-dark mb-3 leading-snug">{featured.title}</h2>
                <p id={`blog-featured-${featured.id}-excerpt`} className="text-gray-600 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-5">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(featured.date)}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <Link to={`/blog/${featured.id}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Rest of Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((post) => (
              <article key={post.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={`blog-post-${post.id}`}
                    data-strk-img={`[blog-post-${post.id}-excerpt] [blog-post-${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mb-3">{post.category}</span>
                  <h3 id={`blog-post-${post.id}-title`} className="text-base font-bold text-primary-dark mb-2 leading-snug">{post.title}</h3>
                  <p id={`blog-post-${post.id}-excerpt`} className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-primary text-xs font-semibold hover:text-primary-dark transition-colors">
                      Read →
                    </Link>
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
