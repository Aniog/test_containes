import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-verify-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking supplier credentials, verifying factory capabilities, and avoiding common scams when sourcing from China.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-j1k2l3',
  },
  {
    id: 'quality-control-checklist',
    title: 'Quality Control Checklist for Importing from China',
    excerpt: 'Essential quality control steps every buyer should follow when importing products from Chinese manufacturers.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
    imgId: 'blog-qc-checklist-m4n5o6',
  },
  {
    id: 'shipping-guide',
    title: 'Complete Guide to Shipping from China: FOB, CIF, and DDP Explained',
    excerpt: 'Understanding international shipping terms, choosing the right incoterms, and calculating total landed costs for your imports.',
    category: 'Shipping & Logistics',
    date: '2026-06-28',
    readTime: '10 min read',
    imgId: 'blog-shipping-guide-p7q8r9',
  },
  {
    id: 'negotiation-tips',
    title: '5 Negotiation Tips for Getting Better Prices from Chinese Suppliers',
    excerpt: 'Practical negotiation strategies that work with Chinese manufacturers, based on our 10+ years of sourcing experience.',
    category: 'Negotiation',
    date: '2026-06-20',
    readTime: '7 min read',
    imgId: 'blog-negotiation-s1t2u3',
  },
  {
    id: 'manufacturing-regions',
    title: 'China Manufacturing Regions: Where to Source What',
    excerpt: 'A guide to China\'s major manufacturing hubs and which regions specialize in which product categories.',
    category: 'Market Insights',
    date: '2026-06-12',
    readTime: '9 min read',
    imgId: 'blog-regions-v4w5x6',
  },
  {
    id: 'avoid-quality-issues',
    title: 'How to Avoid Quality Issues When Ordering from China',
    excerpt: 'Common quality problems in Chinese manufacturing and practical steps to prevent them before they affect your business.',
    category: 'Quality Control',
    date: '2026-06-05',
    readTime: '8 min read',
    imgId: 'blog-quality-y7z8a9',
  },
];

export default function BlogPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-lg text-slate-300">
              Practical guides, industry insights, and sourcing tips to help you buy from China with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card group overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden mb-6">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.id}] [blog-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-sm text-blue-600 font-medium mb-2">{post.category}</div>
                <h2 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm">
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="section-title">Need Help with Your Sourcing Project?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Our team is ready to answer your questions and help you get started.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
