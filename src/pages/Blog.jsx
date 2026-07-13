import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers, from business license checks to on-site factory audits. Protect your business from fraudulent suppliers.',
    category: 'Supplier Verification',
    author: 'SSourcing Team',
    date: '2024-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Quality Control in China: Pre-Shipment Inspection Checklist',
    excerpt: 'A comprehensive checklist for pre-shipment quality inspections. Ensure your products meet specifications before they leave the factory.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: '2024-01-10',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Understanding Minimum Order Quantities (MOQ) in China',
    excerpt: 'Navigate MOQ requirements effectively. Learn negotiation strategies and find suppliers willing to work with smaller order quantities.',
    category: 'Sourcing Tips',
    author: 'SSourcing Team',
    date: '2024-01-05',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare costs, transit times, and considerations for sea and air freight. Make informed decisions for your shipping strategy.',
    category: 'Shipping & Logistics',
    author: 'SSourcing Team',
    date: '2023-12-28',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Top 10 Product Categories Sourced from China in 2024',
    excerpt: 'Discover the most popular product categories for import from China and what makes them attractive for global buyers.',
    category: 'Industry Insights',
    author: 'SSourcing Team',
    date: '2023-12-20',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'How to Negotiate Better Prices with Chinese Manufacturers',
    excerpt: 'Master the art of price negotiation with Chinese suppliers. Practical tips and cultural insights for better deals.',
    category: 'Sourcing Tips',
    author: 'SSourcing Team',
    date: '2023-12-15',
    readTime: '7 min read',
    featured: false,
  },
];

const categories = [
  'All',
  'Supplier Verification',
  'Quality Control',
  'Sourcing Tips',
  'Shipping & Logistics',
  'Industry Insights',
];

const BlogPage = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Sourcing Insights & Guides
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Expert articles and guides to help you navigate the China sourcing landscape. Stay informed and make better decisions.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-bg-light rounded-2xl p-8 md:p-12 border border-border-light">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full text-sm">
                  Featured
                </span>
                <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{featuredPost.title}</h2>
              <p className="text-lg text-text-secondary mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 text-text-light text-sm mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-bg-light text-text-secondary hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-bg-light rounded-xl border border-border-light overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Placeholder image */}
                <div className="aspect-video bg-white flex items-center justify-center border-b border-border-light">
                  <Tag className="w-12 h-12 text-primary/20" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="text-text-light text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text-primary mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-text-light text-xs">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <Link
                      to="#"
                      className="text-primary font-medium text-sm hover:text-accent transition-colors flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter for the latest sourcing tips, industry insights, and market updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-accent focus:border-accent outline-none"
            />
            <button className="bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
