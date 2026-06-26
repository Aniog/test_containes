import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search,
  Building2,
  ClipboardCheck,
  Truck,
  FileText,
  ArrowRight,
  Calendar,
  Clock,
  User,
  ChevronRight,
  Tag
} from 'lucide-react';

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify supplier legitimacy, including factory visits, license checks, and background research before placing orders.',
    category: 'Supplier Verification',
    author: 'SSourcing China Team',
    date: 'June 15, 2026',
    readTime: '8 min read',
    featured: true,
    image: 'factory verification inspection'
  },
  {
    id: 'quality-control-aql',
    title: 'Understanding AQL Sampling: A Practical Guide',
    excerpt: 'AQL (Acceptable Quality Limit) is a key concept in quality control. Learn how to set appropriate sampling plans and defect thresholds.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'June 8, 2026',
    readTime: '6 min read',
    featured: false,
    image: 'quality inspection checklist'
  },
  {
    id: 'shipping-options-china',
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare shipping options from China including costs, transit times, and when to use each method for your business.',
    category: 'Logistics',
    author: 'SSourcing China Team',
    date: 'May 28, 2026',
    readTime: '7 min read',
    featured: false,
    image: 'container shipping port'
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiating with Chinese Suppliers: Tips and Strategies',
    excerpt: 'Effective negotiation can save costs and build lasting supplier relationships. Learn proven strategies for successful negotiations.',
    category: 'Best Practices',
    author: 'SSourcing China Team',
    date: 'May 15, 2026',
    readTime: '5 min read',
    featured: false,
    image: 'business negotiation meeting'
  },
  {
    id: 'sample-management',
    title: 'Managing Samples: Best Practices for Product Development',
    excerpt: 'The sample phase is critical for ensuring product quality. Learn how to request, evaluate, and approve samples effectively.',
    category: 'Product Development',
    author: 'SSourcing China Team',
    date: 'May 1, 2026',
    readTime: '6 min read',
    featured: false,
    image: 'product sample review'
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms When Sourcing from China: What You Need to Know',
    excerpt: 'Understand common payment terms like T/T, L/C, and PayPal, including risks, protections, and recommended approaches.',
    category: 'Best Practices',
    author: 'SSourcing China Team',
    date: 'April 20, 2026',
    readTime: '7 min read',
    featured: false,
    image: 'payment documentation'
  }
];

const categories = [
  { name: 'All Posts', count: 6 },
  { name: 'Supplier Verification', count: 1 },
  { name: 'Quality Control', count: 1 },
  { name: 'Logistics', count: 1 },
  { name: 'Best Practices', count: 2 },
  { name: 'Product Development', count: 1 }
];

const featuredPost = blogPosts.find(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 relative"
        data-strk-bg-id={`blog-${post.id}-img-p7q8r9`}
        data-strk-bg={`[blog-${post.id}-title]`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="600"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <FileText className="w-16 h-16 text-neutral-300" />
        </div>
        <span className="absolute top-4 left-4 bg-primary-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h3 id={`blog-${post.id}-title`} className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <button className="w-full text-center text-primary-600 font-semibold hover:text-primary-800 text-sm py-2 border-t border-neutral-100 transition-colors">
          Read Article
        </button>
      </div>
    </article>
  );
};

const FeaturedPost = ({ post }) => {
  return (
    <article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="grid lg:grid-cols-2">
        <div 
          className="aspect-video lg:aspect-auto bg-gradient-to-br from-neutral-100 to-neutral-200 relative"
          data-strk-bg-id={`blog-featured-${post.id}-img-s1t2u3`}
          data-strk-bg={`[blog-featured-${post.id}-title]`}
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-24 h-24 text-neutral-300" />
          </div>
        </div>
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <span className="inline-block bg-primary-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
            {post.category}
          </span>
          <h2 id={`blog-featured-${post.id}-title`} className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
            {post.title}
          </h2>
          <p className="text-neutral-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          <button className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-fit">
            Read Full Guide
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');

  const filteredPosts = activeCategory === 'All Posts' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Practical insights, guides, and best practices for successful China sourcing. Learn from our expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
              <Tag className="w-6 h-6 text-accent-500" />
              Featured Article
            </h2>
          </div>
          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      {/* Filter & Posts */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.name
                      ? 'bg-primary-800 text-white'
                      : 'bg-white border border-neutral-200 text-neutral-600 hover:border-primary-300 hover:text-primary-800'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Get Sourcing Insights Delivered
            </h2>
            <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter for practical tips, industry updates, and best practices for China sourcing.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <button
                type="submit"
                className="bg-primary-800 hover:bg-primary-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Explore Related Topics
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
              <Building2 className="w-8 h-8 text-primary-600 mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Supplier Verification</h3>
            </div>
            <div className="bg-white rounded-lg p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
              <ClipboardCheck className="w-8 h-8 text-primary-600 mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Quality Control</h3>
            </div>
            <div className="bg-white rounded-lg p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
              <Truck className="w-8 h-8 text-primary-600 mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Shipping & Logistics</h3>
            </div>
            <div className="bg-white rounded-lg p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
              <Search className="w-8 h-8 text-primary-600 mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Factory Audits</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Put our expertise to work. Get a free consultation and quote today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
