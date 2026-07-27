import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, User, Clock, Search, Shield, ClipboardCheck, Factory, Ship, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-verify-china-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a China Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, conducting factory audits, and avoiding common verification mistakes when sourcing from China.',
    author: 'SSourcing China Team',
    date: '2026-07-15',
    readTime: '8 min read',
    icon: Shield,
  },
  {
    id: 'quality-control-checklist',
    category: 'Quality Control',
    title: 'Quality Control Checklist for China Manufacturing',
    excerpt: 'Essential quality checkpoints to monitor during production — from raw materials to final packaging — to ensure your products meet specifications.',
    author: 'SSourcing China Team',
    date: '2026-07-08',
    readTime: '6 min read',
    icon: ClipboardCheck,
  },
  {
    id: 'shipping-from-china-guide',
    category: 'Logistics',
    title: 'Complete Guide to Shipping from China in 2026',
    excerpt: 'Everything you need to know about freight options, customs documentation, Incoterms, and how to choose the right shipping method for your order.',
    author: 'SSourcing China Team',
    date: '2026-06-28',
    readTime: '10 min read',
    icon: Ship,
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    category: 'Sourcing Tips',
    title: 'Negotiating with Chinese Suppliers: Best Practices',
    excerpt: 'Practical tips for negotiating price, MOQ, payment terms, and lead times with Chinese manufacturers while building long-term relationships.',
    author: 'SSourcing China Team',
    date: '2026-06-20',
    readTime: '7 min read',
    icon: Search,
  },
  {
    id: 'understanding-moq-china',
    category: 'Sourcing Tips',
    title: 'Understanding MOQ: Minimum Order Quantities in China',
    excerpt: 'What MOQ means, why factories set them, and strategies for negotiating lower minimums when you are starting out or testing a new product.',
    author: 'SSourcing China Team',
    date: '2026-06-12',
    readTime: '5 min read',
    icon: Factory,
  },
  {
    id: 'china-sourcing-trends-2026',
    category: 'Industry Insights',
    title: 'China Sourcing Trends to Watch in 2026',
    excerpt: 'Key trends shaping China manufacturing — from automation and sustainability to supply chain diversification and digital transformation.',
    author: 'SSourcing China Team',
    date: '2026-06-01',
    readTime: '9 min read',
    icon: TrendingUp,
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
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="container-main section-padding">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-600/50 px-4 py-1.5 text-sm font-medium">
              Blog & Resources
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Sourcing Insights & Guides
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Practical advice, industry insights, and step-by-step guides to help you source
              from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="card flex flex-col">
                <div
                  className="rounded-lg bg-slate-100 aspect-[16/9]"
                />
                <div className="mt-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <span className="badge">{post.category}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 flex-1">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-main max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Stay Updated on China Sourcing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Get practical sourcing tips, industry updates, and supplier insights delivered to your inbox.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
