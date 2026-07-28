import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, Clock, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'Complete Guide to Verifying Chinese Suppliers Before You Order',
    excerpt: 'Learn the essential steps to verify a Chinese factory is legitimate, capable, and trustworthy before committing to an order.',
    category: 'Supplier Verification',
    author: 'David Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'supplier-verification',
  },
  {
    id: 'quality-inspection-checklist',
    title: 'Quality Inspection Checklist: What to Look For in Your China Order',
    excerpt: 'A comprehensive checklist for conducting effective quality inspections on products manufactured in China.',
    category: 'Quality Control',
    author: 'Sarah Zhang',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'quality-inspection',
  },
  {
    id: 'incoterms-guide',
    title: 'Understanding Incoterms: A Practical Guide for China Importers',
    excerpt: 'Navigate the complexities of international trade terms when importing from China. Learn about FOB, CIF, EXW, and more.',
    category: 'Logistics',
    author: 'Michael Liu',
    date: '2024-01-05',
    readTime: '10 min read',
    image: 'incoterms',
  },
  {
    id: 'avoid-scam',
    title: 'Red Flags: How to Avoid Scams When Sourcing from China',
    excerpt: 'Protect yourself from common scams and fraud in China sourcing. Learn the warning signs and prevention strategies.',
    category: 'Risk Management',
    author: 'James Wong',
    date: '2023-12-28',
    readTime: '7 min read',
    image: 'avoid-scam',
  },
  {
    id: 'factory-audit',
    title: 'What Happens During a Factory Audit: A Behind-the-Scenes Look',
    excerpt: 'Ever wondered what happens during a factory audit? We walk you through the complete process and what to expect.',
    category: 'Supplier Verification',
    author: 'Emily Zhang',
    date: '2023-12-20',
    readTime: '5 min read',
    image: 'factory-audit',
  },
  {
    id: 'shipping-options',
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare the pros and cons of different shipping methods from China. Make informed decisions for your business.',
    category: 'Logistics',
    author: 'David Chen',
    date: '2023-12-15',
    readTime: '6 min read',
    image: 'shipping-options',
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiating with Chinese Suppliers: Tips for Better Deals',
    excerpt: 'Master the art of negotiation when dealing with Chinese manufacturers. Learn cultural insights and practical strategies.',
    category: 'Business Tips',
    author: 'Michael Liu',
    date: '2023-12-10',
    readTime: '8 min read',
    image: 'negotiation',
  },
  {
    id: 'certifications',
    title: 'Essential Certifications for Products Imported from China',
    excerpt: 'Understand the various certifications required for different product categories when importing into your country.',
    category: 'Compliance',
    author: 'Sarah Zhang',
    date: '2023-12-05',
    readTime: '9 min read',
    image: 'certifications',
  },
  {
    id: 'sample-process',
    title: 'The Sample Process: Getting What You Need Before Production',
    excerpt: 'Learn how to effectively request and evaluate samples to ensure your final product meets expectations.',
    category: 'Quality Control',
    author: 'Emily Zhang',
    date: '2023-11-28',
    readTime: '5 min read',
    image: 'sample-process',
  },
  {
    id: 'payment-terms',
    title: 'Safe Payment Terms When Sourcing from China',
    excerpt: 'Understand the risks and best practices for payments to Chinese suppliers. Protect your business from fraud.',
    category: 'Risk Management',
    author: 'James Wong',
    date: '2023-11-20',
    readTime: '7 min read',
    image: 'payment-terms',
  },
];

const categories = [
  'All Posts',
  'Supplier Verification',
  'Quality Control',
  'Logistics',
  'Risk Management',
  'Business Tips',
  'Compliance',
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2D5A8A] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-lg text-[#CBD5E1] mb-8">
              Expert insights, practical guides, and industry knowledge to help you source from China with confidence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Get Expert Help
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#1E3A5F] text-white'
                      : 'bg-white text-[#64748B] border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#1E3A5F]/20 transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] flex items-center justify-center">
                  <span className="text-white/30 text-6xl font-bold">{post.title.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#F97316]/10 text-[#F97316] text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-[#1E293B] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-[#64748B] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[#94A3B8] pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#64748B]">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1E293B] mb-4">
            Stay Updated
          </h2>
          <p className="text-[#64748B] mb-8">
            Subscribe to our newsletter for the latest China sourcing insights and tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Personalized Sourcing Help?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8">
            Our team of experts is ready to assist you with your specific sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;