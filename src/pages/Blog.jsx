import { useEffect, useRef } from 'react';
import { ArrowRight, Clock, User, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Making Payment',
    excerpt: 'Learn the essential steps to verify that a Chinese supplier is legitimate, including license checks, factory audits, and third-party verification services.',
    author: 'SSourcing China Team',
    date: 'June 8, 2026',
    readTime: '6 min read',
  },
  {
    category: 'Quality Control',
    title: 'The Complete Guide to Pre-Shipment Inspections in China',
    excerpt: 'Pre-shipment inspections are your last line of defense against defective goods. Here is what every buyer needs to know about AQL standards and inspection procedures.',
    author: 'SSourcing China Team',
    date: 'May 25, 2026',
    readTime: '8 min read',
  },
  {
    category: 'Sourcing Tips',
    title: '10 Common Mistakes Buyers Make When Sourcing from China',
    excerpt: 'Avoid these common pitfalls that cost importers time and money. From insufficient specifications to ignoring IP protection, learn from others mistakes.',
    author: 'SSourcing China Team',
    date: 'May 12, 2026',
    readTime: '7 min read',
  },
  {
    category: 'Shipping & Logistics',
    title: 'Understanding Incoterms: Which Shipping Term Is Right for Your Import?',
    excerpt: 'A practical breakdown of Incoterms 2026 and how to choose the right shipping terms for your China import transactions.',
    author: 'SSourcing China Team',
    date: 'April 28, 2026',
    readTime: '5 min read',
  },
  {
    category: 'Supplier Verification',
    title: 'Trading Company vs Manufacturer: How to Tell the Difference',
    excerpt: 'Many companies claiming to be manufacturers are actually trading companies. Here are practical ways to identify who you are really dealing with.',
    author: 'SSourcing China Team',
    date: 'April 15, 2026',
    readTime: '6 min read',
  },
  {
    category: 'Sourcing Tips',
    title: 'How to Write Product Specifications That Chinese Suppliers Understand',
    excerpt: 'Clear specifications are the foundation of successful sourcing. Learn how to document your requirements in a way that manufacturers can follow precisely.',
    author: 'SSourcing China Team',
    date: 'March 30, 2026',
    readTime: '7 min read',
  },
];

export default function Blog() {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) ImageHelper.loadImages(strkImgConfig, bannerRef.current);
  }, []);

  return (
    <div>
      {/* Banner */}
      <section ref={bannerRef} className="relative bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="blog-banner-bg"
          data-strk-bg="[blog-subtitle] [blog-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p id="blog-subtitle" className="text-brand-400 font-semibold text-sm mb-3">Insights</p>
          <h1 id="blog-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sourcing Blog
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Practical guides, tips, and insights for successful sourcing from China.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 rounded-full px-2.5 py-1">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mt-3 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author.replace('SSourcing China Team', 'Team')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-sm text-slate-400">{post.date}</span>
                </div>
                <div className="px-6 pb-5">
                  <span className="inline-flex items-center text-brand-600 hover:text-brand-700 text-sm font-medium cursor-pointer">
                    Read More
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-sm text-slate-500 bg-slate-50 rounded-lg px-5 py-3">
              <span>More articles coming soon.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Stay Updated
            </h2>
            <p className="text-slate-500 mb-6">
              Get the latest sourcing tips and guides delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}