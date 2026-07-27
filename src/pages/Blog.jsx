import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featuredPost = {
    slug: 'complete-guide-china-sourcing-2024',
    title: 'The Complete Guide to China Sourcing in 2024',
    excerpt: 'Everything you need to know about sourcing products from China, from finding suppliers to shipping your first order.',
    category: 'Sourcing Guide',
    author: 'SSourcing China Team',
    date: 'January 15, 2024',
    readTime: '15 min read',
    image: 'china-sourcing-guide',
  };

  const posts = [
    {
      slug: 'factory-audit-checklist',
      title: 'Factory Audit Checklist: 20 Points to Verify Before Working with a Supplier',
      excerpt: 'Use this comprehensive checklist to evaluate Chinese factories and protect your business from unreliable suppliers.',
      category: 'Quality Control',
      author: 'QC Team',
      date: 'January 10, 2024',
      readTime: '8 min read',
      image: 'factory-audit-checklist',
    },
    {
      slug: 'incoterms-explained',
      title: 'Incoterms Explained: Choosing the Right Terms for Your Order',
      excerpt: 'Understanding Incoterms is essential for international trade. Learn which terms best suit your sourcing needs.',
      category: 'Shipping',
      author: 'Logistics Team',
      date: 'January 5, 2024',
      readTime: '6 min read',
      image: 'incoterms-shipping',
    },
    {
      slug: 'sample-process-guide',
      title: 'How to Request and Evaluate Samples from Chinese Suppliers',
      excerpt: 'Samples are crucial for quality assurance. Learn the best practices for requesting, evaluating, and approving samples.',
      category: 'Best Practices',
      author: 'Sourcing Team',
      date: 'December 28, 2023',
      readTime: '10 min read',
      image: 'sample-evaluation',
    },
    {
      slug: 'payment-terms-china',
      title: 'Safe Payment Terms for China Sourcing: A Practical Guide',
      excerpt: 'Protecting your money while building supplier relationships. Explore payment methods and terms that minimize risk.',
      category: 'Finance',
      author: 'SSourcing China Team',
      date: 'December 20, 2023',
      readTime: '7 min read',
      image: 'payment-terms',
    },
    {
      slug: 'aql-inspection',
      title: 'Understanding AQL: The Standard for Product Inspection',
      excerpt: 'AQL (Acceptable Quality Limit) is the foundation of professional quality control. Here\'s what you need to know.',
      category: 'Quality Control',
      author: 'QC Team',
      date: 'December 15, 2023',
      readTime: '9 min read',
      image: 'aql-inspection',
    },
    {
      slug: 'negotiation-tips',
      title: 'Price Negotiation Strategies with Chinese Suppliers',
      excerpt: 'Effective negotiation can save you 20-40% on your orders. Learn proven techniques from industry experts.',
      category: 'Best Practices',
      author: 'Sourcing Team',
      date: 'December 10, 2023',
      readTime: '11 min read',
      image: 'supplier-negotiation',
    },
  ];

  const categories = [
    { name: 'Sourcing Guide', count: 12 },
    { name: 'Quality Control', count: 8 },
    { name: 'Shipping', count: 6 },
    { name: 'Best Practices', count: 10 },
    { name: 'Finance', count: 4 },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Expert insights, practical guides, and industry news to help you master China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-slate-50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full mb-4">
                  Featured
                </span>
                <h2 className="heading-2 mb-4">{featuredPost.title}</h2>
                <p className="text-body mb-6">{featuredPost.excerpt}</p>
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
                <Link to={`/blog/${featuredPost.slug}`} className="btn-primary">
                  Read Full Guide
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="bg-slate-200">
                <img
                  alt={featuredPost.title}
                  data-strk-img-id="blog-featured-001"
                  data-strk-img="[blog-featured-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <h3 id="blog-featured-title" className="sr-only">{featuredPost.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <h2 className="heading-2 mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <article key={post.slug} className="card overflow-hidden">
                    <div className="relative h-48">
                      <img
                        alt={post.title}
                        data-strk-img-id={`blog-${post.slug}-001`}
                        data-strk-img={`${post.title} [blog-${post.slug}-title] ${post.category}`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 left-4 px-2 py-1 bg-white/90 text-primary-600 text-xs font-medium rounded">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 id={`blog-${post.slug}-title`} className="font-semibold text-lg mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="text-primary-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="font-semibold text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <Link 
                        to={`/blog?category=${cat.name.toLowerCase()}`}
                        className="flex justify-between items-center py-2 text-slate-600 hover:text-primary-600 transition-colors"
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs bg-slate-100 px-2 py-1 rounded">{cat.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-primary-600 text-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
                <p className="text-primary-100 text-sm mb-4">
                  Get the latest sourcing tips and industry insights delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-primary-200 focus:outline-none focus:border-white"
                  />
                  <button type="submit" className="w-full bg-white text-primary-600 font-semibold py-3 rounded-lg hover:bg-primary-50 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Quick Contact */}
              <div className="bg-slate-100 rounded-xl p-6 mt-8">
                <h3 className="font-semibold text-lg mb-4">Need Help?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Get personalized advice from our sourcing experts.
                </p>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
