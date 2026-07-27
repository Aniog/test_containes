import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Calendar,
  Clock,
  User,
  Search,
  FileCheck,
  Truck,
  Package,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'The Complete Guide to Supplier Verification in China',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before committing to an order. Our comprehensive guide covers business license checks, factory visits, and red flags to watch for.',
    category: 'Supplier Management',
    author: 'SSourcing Team',
    date: '2024-01-15',
    readTime: '8 min read',
    imageId: 'blog-verification',
  },
  {
    id: 'quality-inspection-checklist',
    title: 'Quality Inspection Checklist: What to Check Before Shipment',
    excerpt: 'A detailed checklist for pre-shipment inspections. Ensure your products meet specifications and avoid costly returns with our expert guidance.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: '2024-01-08',
    readTime: '6 min read',
    imageId: 'blog-inspection',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: Sea vs Air vs Rail - A Cost Comparison',
    excerpt: 'Understanding the pros and cons of different shipping methods from China. We break down costs, transit times, and when to use each option.',
    category: 'Logistics',
    author: 'SSourcing Team',
    date: '2023-12-28',
    readTime: '7 min read',
    imageId: 'blog-shipping',
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiation Tips When Sourcing from Chinese Manufacturers',
    excerpt: 'Effective negotiation strategies for working with Chinese suppliers. Learn how to get better prices while maintaining quality relationships.',
    category: 'Best Practices',
    author: 'SSourcing Team',
    date: '2023-12-20',
    readTime: '5 min read',
    imageId: 'blog-negotiation',
  },
  {
    id: 'production-monitoring',
    title: 'Why Production Monitoring Matters for Your China Orders',
    excerpt: 'Regular production follow-up can prevent issues before they become costly problems. Discover why on-site monitoring makes a difference.',
    category: 'Production',
    author: 'SSourcing Team',
    date: '2023-12-12',
    readTime: '6 min read',
    imageId: 'blog-monitoring',
  },
  {
    id: 'incoterms-guide',
    title: 'Understanding Incoterms: A Practical Guide for Importers',
    excerpt: 'Demystifying international trade terms. Learn what EXW, FOB, CIF, and DDP mean for your China sourcing operations.',
    category: 'Logistics',
    author: 'SSourcing Team',
    date: '2023-12-05',
    readTime: '9 min read',
    imageId: 'blog-incoterms',
  },
];

const categories = [
  { name: 'All Posts', icon: Package, count: 12 },
  { name: 'Supplier Management', icon: Building2, count: 4 },
  { name: 'Quality Control', icon: FileCheck, count: 3 },
  { name: 'Logistics', icon: Truck, count: 3 },
  { name: 'Best Practices', icon: Search, count: 2 },
];

const featuredPost = {
  id: 'start-sourcing-china',
  title: 'How to Start Sourcing from China: A Step-by-Step Guide',
  excerpt: 'Everything you need to know to begin sourcing products from China. This comprehensive guide covers finding suppliers, verifying factories, managing quality, and shipping your goods.',
  category: 'Getting Started',
  author: 'SSourcing Team',
  date: '2024-01-20',
  readTime: '12 min read',
  imageId: 'blog-start',
};

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Expert insights, practical guides, and industry knowledge to help you succeed 
              in sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Article</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2">
              <div className="bg-slate-200 min-h-[300px] lg:min-h-[400px]">
                <img
                  alt={featuredPost.title}
                  data-strk-img-id={`blog-featured-${featuredPost.imageId}`}
                  data-strk-img={`[blog-featured-title]`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h3 id="blog-featured-title" className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Button asChild>
                  <Link to={`/blog/${featuredPost.id}`}>
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="text-slate-400">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="bg-slate-200 h-48">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-${post.imageId}`}
                    data-strk-img={`[blog-${post.id}-title]`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 id={`blog-${post.id}-title`} className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 font-medium text-sm hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Subscribe to our newsletter for the latest China sourcing insights and tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get expert help with your China sourcing needs. Contact us today for a free consultation.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
