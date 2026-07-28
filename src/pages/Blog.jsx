import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Clock, User } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Supplier verification is the most important step in sourcing from China. Learn the key checks you should perform before committing to any factory, from business license verification to on-site audits.',
    category: 'Sourcing Tips',
    date: '2026-07-15',
    author: 'SSourcing Team',
    readTime: '6 min read',
    imgId: 'blog-verify-y1z2',
  },
  {
    title: 'Understanding AQL Standards for Quality Inspection',
    excerpt: 'AQL (Acceptable Quality Level) is the international standard for quality inspection sampling. This guide explains how AQL works, what levels to choose, and how to interpret inspection results.',
    category: 'Quality Control',
    date: '2026-07-08',
    author: 'SSourcing Team',
    readTime: '8 min read',
    imgId: 'blog-aql-a3b4',
  },
  {
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Shipping from China involves multiple options. This article compares sea freight, air freight, and rail in terms of cost, speed, and suitability for different product types and order sizes.',
    category: 'Shipping & Logistics',
    date: '2026-06-28',
    author: 'SSourcing Team',
    readTime: '5 min read',
    imgId: 'blog-shipping-c5d6',
  },
  {
    title: '5 Common Mistakes When Sourcing from China for the First Time',
    excerpt: 'First-time buyers often make avoidable mistakes that cost time and money. From skipping factory verification to underestimating lead times, learn what to watch out for.',
    category: 'Sourcing Tips',
    date: '2026-06-20',
    author: 'SSourcing Team',
    readTime: '7 min read',
    imgId: 'blog-mistakes-e7f8',
  },
  {
    title: 'How to Negotiate Pricing with Chinese Suppliers',
    excerpt: 'Effective negotiation with Chinese suppliers requires understanding their cost structure, building relationships, and knowing when to push and when to compromise. Here are practical strategies that work.',
    category: 'Sourcing Tips',
    date: '2026-06-10',
    author: 'SSourcing Team',
    readTime: '6 min read',
    imgId: 'blog-negotiate-g9h1',
  },
  {
    title: 'Product Compliance: What You Need to Know Before Importing',
    excerpt: 'Different markets have different compliance requirements. This guide covers CE, FCC, FDA, and other common certifications you may need when importing products from China.',
    category: 'Compliance',
    date: '2026-05-30',
    author: 'SSourcing Team',
    readTime: '9 min read',
    imgId: 'blog-compliance-i2j3',
  },
];

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div>
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Blog</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Practical insights on sourcing from China — supplier verification, quality control, shipping, and more.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.imgId}-excerpt] [blog-${post.imgId}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">{post.category}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs text-body flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={`blog-${post.imgId}-title`} className="text-lg font-semibold text-charcoal mb-2 group-hover:text-navy transition-colors">
                    {post.title}
                  </h3>
                  <p id={`blog-${post.imgId}-excerpt`} className="text-sm text-body leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-body">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Need Expert Sourcing Advice?"
            subtitle="Our team is ready to help you navigate the complexities of sourcing from China."
          />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
