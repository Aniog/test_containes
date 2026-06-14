import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Calendar, Clock, User, Search, FileText, 
  TrendingUp, CheckCircle, MessageSquare
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Questions to Ask Before Choosing a China Sourcing Agent',
    excerpt: 'Finding the right sourcing partner is crucial for your China operations. Here are the key questions that will help you evaluate potential agents.',
    category: 'Sourcing Tips',
    date: '2024-01-15',
    readTime: '8 min read',
    author: 'SSourcing China Team',
    imageId: 'blog-sourcing-tips',
  },
  {
    id: 2,
    title: 'Understanding AQL: A Practical Guide to Quality Inspection Standards',
    excerpt: 'AQL (Acceptable Quality Level) is a critical concept in quality control. Learn how to set the right AQL levels for your products.',
    category: 'Quality Control',
    date: '2024-01-10',
    readTime: '6 min read',
    author: 'SSourcing China Team',
    imageId: 'blog-quality-control',
  },
  {
    id: 3,
    title: 'Factory Verification: How to Spot Red Flags in Supplier Documentation',
    excerpt: 'Not all suppliers are who they claim to be. Learn the warning signs that indicate a potential scam or fraudulent supplier.',
    category: 'Supplier Verification',
    date: '2024-01-05',
    readTime: '10 min read',
    author: 'SSourcing China Team',
    imageId: 'blog-factory-verification',
  },
  {
    id: 4,
    title: 'Shipping from China: FOB, CIF, and Other Incoterms Explained',
    excerpt: 'Understanding shipping terms is essential for accurate cost calculation. We break down the most common Incoterms used in China trade.',
    category: 'Shipping & Logistics',
    date: '2023-12-28',
    readTime: '7 min read',
    author: 'SSourcing China Team',
    imageId: 'blog-shipping',
  },
  {
    id: 5,
    title: 'Sample Ordering Guide: How to Evaluate Samples from Chinese Suppliers',
    excerpt: 'Samples are your first glimpse into product quality. Here\'s how to effectively evaluate and compare samples from multiple suppliers.',
    category: 'Sourcing Tips',
    date: '2023-12-20',
    readTime: '5 min read',
    author: 'SSourcing China Team',
    imageId: 'blog-samples',
  },
  {
    id: 6,
    title: 'Protecting Your Intellectual Property When Manufacturing in China',
    excerpt: 'IP protection is a major concern for many buyers. Learn practical strategies to safeguard your designs and innovations.',
    category: 'IP Protection',
    date: '2023-12-15',
    readTime: '9 min read',
    author: 'SSourcing China Team',
    imageId: 'blog-ip-protection',
  },
];

const categories = [
  { name: 'All Posts', count: 24 },
  { name: 'Sourcing Tips', count: 8 },
  { name: 'Quality Control', count: 6 },
  { name: 'Supplier Verification', count: 5 },
  { name: 'Shipping & Logistics', count: 4 },
  { name: 'IP Protection', count: 3 },
];

const featuredPost = {
  id: 0,
  title: 'The Complete Guide to China Sourcing in 2024: Everything You Need to Know',
  excerpt: 'A comprehensive overview of the China sourcing landscape, including market trends, best practices, and common pitfalls to avoid.',
  category: 'Guide',
  date: '2024-01-20',
  readTime: '15 min read',
  author: 'SSourcing China Team',
  imageId: 'blog-complete-guide',
};

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg lg:text-xl text-blue-100">
              Expert insights, practical tips, and industry knowledge to help you succeed in China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <Link to={`/blog/${featuredPost.id}`} className="block">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-6 lg:p-10 text-white hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                  Featured
                </span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-blue-200 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
                <h3 className="font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        index === 0 
                          ? 'bg-blue-50 text-blue-700 font-medium' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}>
                        <span className="flex justify-between">
                          <span>{category.name}</span>
                          <span className="text-slate-400">{category.count}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h3 className="font-semibold mb-4">Need Help?</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Have specific questions about China sourcing? We're here to help.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-blue-700 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-slate-600 mb-6">
              Subscribe to our newsletter for the latest China sourcing insights, tips, and industry updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-4">
              No spam, unsubscribe anytime. Read our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
