import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Clock, Calendar, User, Search, Share2, 
  FileText, BookOpen, Lightbulb, TrendingUp
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 'guide-to-china-sourcing',
    title: 'The Complete Guide to China Sourcing in 2024',
    excerpt: 'Everything you need to know about sourcing products from China, from finding suppliers to managing quality and logistics.',
    category: 'Sourcing Guide',
    readTime: '15 min read',
    date: 'January 15, 2024',
    author: 'SSourcing China Team',
  };

  const blogPosts = [
    {
      id: 'supplier-verification-checklist',
      title: 'Supplier Verification Checklist: 10 Things You Must Check',
      excerpt: 'Protect your business from fraud and bad suppliers with this comprehensive verification checklist.',
      category: 'Quality Control',
      readTime: '8 min read',
      date: 'January 10, 2024',
      author: 'SSourcing China Team',
    },
    {
      id: 'qc-inspection-types',
      title: 'Understanding Different Types of QC Inspections',
      excerpt: 'Learn about pre-shipment, during production, and first article inspections and when to use each.',
      category: 'Quality Control',
      readTime: '10 min read',
      date: 'January 5, 2024',
      author: 'SSourcing China Team',
    },
    {
      id: 'shipping-from-china',
      title: 'Shipping from China: Sea Freight vs Air Freight',
      excerpt: 'Compare shipping methods and find the best option for your business based on cost, speed, and volume.',
      category: 'Logistics',
      readTime: '7 min read',
      date: 'December 28, 2023',
      author: 'SSourcing China Team',
    },
    {
      id: 'negotiation-tips',
      title: 'Effective Negotiation Strategies with Chinese Suppliers',
      excerpt: 'Tips and techniques for negotiating favorable terms with Chinese manufacturers.',
      category: 'Business Tips',
      readTime: '9 min read',
      date: 'December 20, 2023',
      author: 'SSourcing China Team',
    },
    {
      id: 'sample-management',
      title: 'How to Effectively Manage Product Samples from China',
      excerpt: 'Best practices for requesting, evaluating, and approving samples from Chinese suppliers.',
      category: 'Sourcing Guide',
      readTime: '6 min read',
      date: 'December 15, 2023',
      author: 'SSourcing China Team',
    },
    {
      id: 'common-mistakes',
      title: 'Top 10 Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn from others mistakes to save time, money, and headaches in your China sourcing journey.',
      category: 'Business Tips',
      readTime: '11 min read',
      date: 'December 10, 2023',
      author: 'SSourcing China Team',
    },
  ];

  const categories = [
    { name: 'Sourcing Guide', count: 12, icon: FileText },
    { name: 'Quality Control', count: 8, icon: BookOpen },
    { name: 'Logistics', count: 6, icon: TrendingUp },
    { name: 'Business Tips', count: 10, icon: Lightbulb },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Expert insights, practical guides, and industry knowledge to help you 
              succeed with China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="text-blue-200 text-sm">{featuredPost.category}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-blue-100 mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-blue-200">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{featuredPost.readTime}</span>
                </div>
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Read Full Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="badge-blue">{post.category}</span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.author}</span>
                        </div>
                        <button className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <category.icon className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest China sourcing tips and insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 mb-3 outline-none focus:bg-white/20"
                />
                <button className="w-full px-4 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/contact" className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Free Quote Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/services" className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Our Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/how-it-works" className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>How It Works</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/case-studies" className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Case Studies</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Personalized Help?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of China sourcing experts is ready to assist you with your specific requirements.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
