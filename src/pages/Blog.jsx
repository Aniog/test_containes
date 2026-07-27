import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar, Clock, User, ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Questions to Ask Before Choosing a China Supplier',
    excerpt: 'Due diligence is critical when sourcing from China. Here are the key questions that will help you identify reliable partners and avoid common pitfalls.',
    category: 'Supplier Selection',
    author: 'Sarah Chen',
    date: 'July 15, 2024',
    readTime: '8 min read',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231E3A5F" width="600" height="400"/%3E%3Crect fill="%23ffffff" x="50" y="50" width="200" height="150" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="300" y="80" width="250" height="100" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="300" y="200" width="150" height="150" rx="8" opacity="0.1"/%3E%3Crect fill="%23C9A227" x="80" y="220" width="170" height="130" rx="8" opacity="0.2"/%3E%3C/svg%3E',
    featured: true
  },
  {
    id: 2,
    title: 'Understanding AQL: A Practical Guide to Quality Inspection Standards',
    excerpt: 'Acceptable Quality Limit (AQL) is fundamental to product inspections. Learn how to set the right AQL levels for your products and what the results mean.',
    category: 'Quality Control',
    author: 'Michael Zhang',
    date: 'July 8, 2024',
    readTime: '6 min read',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%232C5282" width="600" height="400"/%3E%3Ccircle fill="%23ffffff" cx="300" cy="200" r="150" opacity="0.1"/%3E%3Ccircle fill="%23ffffff" cx="300" cy="200" r="100" opacity="0.1"/%3E%3Ccircle fill="%23ffffff" cx="300" cy="200" r="50" opacity="0.1"/%3E%3Crect fill="%23C9A227" x="250" y="170" width="100" height="60" rx="8" opacity="0.3"/%3E%3C/svg%3E',
    featured: true
  },
  {
    id: 3,
    title: 'Incoterms Explained: Choosing the Right Shipping Terms for China Imports',
    excerpt: 'Incoterms can significantly impact your total cost and risk. We break down the most common terms for China shipping and when to use each one.',
    category: 'Shipping & Logistics',
    author: 'David Wu',
    date: 'June 28, 2024',
    readTime: '7 min read',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23059669" width="600" height="400"/%3E%3Crect fill="%23ffffff" x="100" y="100" width="400" height="200" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="150" y="150" width="300" height="100" rx="8" opacity="0.15"/%3E%3Crect fill="%23ffffff" x="200" y="200" width="200" height="50" rx="4" opacity="0.2"/%3E%3C/svg%3E',
    featured: false
  },
  {
    id: 4,
    title: 'Factory Audits: What to Look For and How to Verify',
    excerpt: 'Not all factories are created equal. Learn what our auditors check during factory verification visits and why each item matters for your business.',
    category: 'Factory Verification',
    author: 'Sarah Chen',
    date: 'June 20, 2024',
    readTime: '9 min read',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23F59E0B" width="600" height="400"/%3E%3Crect fill="%23ffffff" x="50" y="50" width="150" height="300" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="220" y="50" width="150" height="300" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="390" y="50" width="160" height="300" rx="8" opacity="0.1"/%3E%3Crect fill="%231E3A5F" x="80" y="80" width="90" height="60" rx="4" opacity="0.2"/%3E%3Crect fill="%231E3A5F" x="250" y="80" width="90" height="60" rx="4" opacity="0.2"/%3E%3Crect fill="%231E3A5F" x="420" y="80" width="90" height="60" rx="4" opacity="0.2"/%3E%3C/svg%3E',
    featured: false
  },
  {
    id: 5,
    title: 'Sample Management: Getting What You Need Before Mass Production',
    excerpt: 'Samples are your first line of defense against quality issues. Our guide to requesting, evaluating, and approving samples from Chinese suppliers.',
    category: 'Best Practices',
    author: 'Michael Zhang',
    date: 'June 12, 2024',
    readTime: '5 min read',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%238B5CF6" width="600" height="400"/%3E%3Crect fill="%23ffffff" x="100" y="80" width="120" height="120" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="240" y="80" width="120" height="120" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="380" y="80" width="120" height="120" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="100" y="220" width="120" height="120" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="240" y="220" width="120" height="120" rx="8" opacity="0.1"/%3E%3Crect fill="%23ffffff" x="380" y="220" width="120" height="120" rx="8" opacity="0.1"/%3E%3C/svg%3E',
    featured: false
  },
  {
    id: 6,
    title: 'Common Sourcing Scams and How to Protect Your Business',
    excerpt: 'While most Chinese suppliers are legitimate, scams do exist. Learn to recognize red flags and protect your deposits and business.',
    category: 'Risk Management',
    author: 'David Wu',
    date: 'June 5, 2024',
    readTime: '10 min read',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23EF4444" width="600" height="400"/%3E%3Cpath fill="%23ffffff" d="M300 100 L350 180 L300 160 L250 180 Z" opacity="0.1"/%3E%3Cpath fill="%23ffffff" d="M300 150 L370 260 L300 230 L230 260 Z" opacity="0.15"/%3E%3Cpath fill="%23ffffff" d="M300 200 L400 350 L300 310 L200 350 Z" opacity="0.2"/%3E%3C/svg%3E',
    featured: false
  }
];

const categories = ['All', 'Supplier Selection', 'Quality Control', 'Shipping & Logistics', 'Factory Verification', 'Best Practices', 'Risk Management'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  const filteredRegularPosts = activeCategory === 'All' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            China Sourcing Blog
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Expert insights, practical guides, and industry knowledge to help you source from China with confidence.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group block bg-[#F8FAFC] rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#C9A227]/10 text-[#C9A227] text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#64748B]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-[#1E3A5F] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#64748B] mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#64748B]" />
                      <span className="text-sm text-[#64748B]">{post.author}</span>
                      <span className="text-[#E2E8F0]">·</span>
                      <Calendar className="w-4 h-4 text-[#64748B]" />
                      <span className="text-sm text-[#64748B]">{post.date}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#1E3A5F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#1E3A5F] text-white'
                    : 'bg-white text-[#64748B] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRegularPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#64748B]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1E293B] mb-2 group-hover:text-[#1E3A5F] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#64748B] mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-[#64748B]">
                    <span>{post.author}</span>
                    <span className="text-[#E2E8F0]">·</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated on China Sourcing
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get our latest articles, guides, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-white/20 bg-white text-[#1E293B] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
            <button className="px-6 py-3 bg-[#C9A227] text-white rounded-md font-semibold hover:bg-[#B8922A] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2C5282] to-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Apply the knowledge from our blog to your next project or let us handle the details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B8922A] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+862012345678"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
