import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to verifying suppliers in China, including what documents to check, what to look for during factory audits, and red flags to watch out for.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    title: 'Understanding Quality Inspection Standards in China',
    excerpt: 'Learn about AQL sampling, inspection levels, and how to set quality standards that protect your business when manufacturing in China.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
  },
  {
    title: 'The Complete Guide to Shipping from China',
    excerpt: 'Everything you need to know about freight forwarding, customs clearance, Incoterms, and choosing between sea and air shipping.',
    category: 'Shipping',
    date: '2026-06-28',
    readTime: '10 min read',
  },
  {
    title: 'Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'Based on our experience with hundreds of orders, here are the most common mistakes buyers make and practical ways to avoid them.',
    category: 'Sourcing Tips',
    date: '2026-06-15',
    readTime: '7 min read',
  },
  {
    title: 'How to Negotiate with Chinese Manufacturers',
    excerpt: 'Practical negotiation strategies that work with Chinese suppliers, including cultural considerations and pricing approaches.',
    category: 'Negotiation',
    date: '2026-06-01',
    readTime: '5 min read',
  },
  {
    title: 'Understanding MOQs: What They Are and How to Work with Them',
    excerpt: 'Minimum order quantities can be a barrier for new buyers. Here is how to understand MOQs and negotiate them down.',
    category: 'Sourcing Tips',
    date: '2026-05-20',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  const containerRef = useRef(null);

  // useEffect(() => {
    // return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  // }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blog & Resources</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Practical guides and insights to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-full aspect-video"
                  data-strk-bg-id={`blog-bg-${index}-s1t2u3`}
                  data-strk-bg={`[blog-title-${index}] [blog-category-${index}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 id={`blog-title-${index}`} className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={`blog-category-${index}`} className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <button className="mt-4 inline-flex items-center text-blue-800 font-medium text-sm hover:text-blue-900 transition">
                    Read more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Stay Updated</h2>
          <p className="mt-4 text-lg text-slate-600">
            Get practical sourcing tips and industry insights delivered to your inbox.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
