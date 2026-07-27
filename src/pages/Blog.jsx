import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Checklist',
      excerpt: 'Learn the essential steps to verify Chinese suppliers and avoid costly mistakes. Our comprehensive checklist covers everything from business license verification to factory audits.',
      date: '2026-07-20',
      readTime: '8 min read',
      category: 'Supplier Verification',
      image: 'supplier-verification',
    },
    {
      id: 2,
      title: 'Quality Control in China: What You Need to Know',
      excerpt: 'Understanding quality control processes in China is crucial for successful sourcing. Learn about inspection types, common issues, and how to ensure product quality.',
      date: '2026-07-15',
      readTime: '10 min read',
      category: 'Quality Control',
      image: 'quality-control',
    },
    {
      id: 3,
      title: 'Navigating Chinese Business Culture: Tips for International Buyers',
      excerpt: 'Success in China requires understanding local business culture. Learn about relationship building, negotiation styles, and communication preferences.',
      date: '2026-07-10',
      readTime: '6 min read',
      category: 'Business Culture',
      image: 'business-culture',
    },
    {
      id: 4,
      title: 'The Complete Guide to China Shipping and Logistics',
      excerpt: 'From factory to your warehouse, understand the shipping process, incoterms, customs clearance, and how to avoid common shipping pitfalls.',
      date: '2026-07-05',
      readTime: '12 min read',
      category: 'Shipping',
      image: 'shipping-logistics',
    },
    {
      id: 5,
      title: 'Common Sourcing Mistakes and How to Avoid Them',
      excerpt: "Learn from others' mistakes. We outline the most common sourcing errors and provide practical advice on how to avoid them.",
      date: '2026-06-28',
      readTime: '7 min read',
      category: 'Sourcing Tips',
      image: 'sourcing-mistakes',
    },
    {
      id: 6,
      title: 'Understanding MOQ and Price Negotiation in China',
      excerpt: 'Master the art of negotiation in China. Learn about MOQ, pricing structures, and strategies to get the best deals from suppliers.',
      date: '2026-06-20',
      readTime: '9 min read',
      category: 'Negotiation',
      image: 'price-negotiation',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Blog & Insights
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Expert insights, tips, and guides to help you succeed with China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4 w-fit">
                  Featured Article
                </div>
                <h2 id="blog-featured-title" className="text-3xl font-bold text-slate-900 mb-4">
                  {posts[0].title}
                </h2>
                <p id="blog-featured-excerpt" className="text-slate-600 mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="mr-1.5 h-4 w-4" />
                    {format(new Date(posts[0].date), 'MMM d, yyyy')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1.5 h-4 w-4" />
                    {posts[0].readTime}
                  </div>
                </div>
                <Button asChild>
                  <Link to={`/blog/${posts[0].id}`}>
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="aspect-video lg:aspect-auto">
                <img
                  alt={posts[0].title}
                  data-strk-img-id={`blog-featured-img-${posts[0].id}`}
                  data-strk-img={`[blog-featured-title] [blog-featured-excerpt]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-title-${post.id}] [blog-excerpt-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                      {post.category}
                    </span>
                  </div>
                  <h3 id={`blog-title-${post.id}`} className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={`blog-excerpt-${post.id}`} className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Calendar className="mr-1.5 h-4 w-4" />
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1.5 h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Subscribe to our newsletter for the latest insights on China sourcing, industry trends, and expert tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
