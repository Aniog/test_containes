import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  Search,
  Factory,
  Shield,
  Truck,
  FileText,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Verify a Chinese Factory Before Placing Orders",
      excerpt: "A comprehensive guide to conducting factory audits and verification in China. Learn what to look for and how to protect your business.",
      category: "Factory Verification",
      date: "June 15, 2026",
      readTime: "8 min read",
      author: "Michael Zhang"
    },
    {
      id: 2,
      title: "Understanding Quality Inspection Standards for China Sourcing",
      excerpt: "Learn about different types of quality inspections (DUPONT, PSI, CLI) and when to use each for optimal quality control.",
      category: "Quality Control",
      date: "June 8, 2026",
      readTime: "6 min read",
      author: "Lisa Wang"
    },
    {
      id: 3,
      title: "Navigating Chinese Business Culture: Tips for Successful Negotiations",
      excerpt: "Understanding Chinese business etiquette and negotiation tactics can significantly improve your sourcing outcomes.",
      category: "Business Culture",
      date: "June 1, 2026",
      readTime: "7 min read",
      author: "David Chen"
    },
    {
      id: 4,
      title: "Shipping Options from China: Sea Freight vs Air Freight",
      excerpt: "Compare shipping methods and learn how to choose the right logistics solution for your business needs and budget.",
      category: "Logistics",
      date: "May 25, 2026",
      readTime: "5 min read",
      author: "Tom Liu"
    },
    {
      id: 5,
      title: "Common Mistakes to Avoid When Sourcing from China",
      excerpt: "Learn about the most common pitfalls in China sourcing and how to avoid them to ensure successful partnerships.",
      category: "Sourcing Tips",
      date: "May 18, 2026",
      readTime: "6 min read",
      author: "Sarah Johnson"
    },
    {
      id: 6,
      title: "Understanding MOQ (Minimum Order Quantity) in China Manufacturing",
      excerpt: "Everything you need to know about MOQs, how to negotiate them, and strategies for testing products before large orders.",
      category: "Manufacturing",
      date: "May 11, 2026",
      readTime: "5 min read",
      author: "Michael Zhang"
    }
  ];

  const categories = [
    { name: "All Posts", count: 24 },
    { name: "Factory Verification", count: 8 },
    { name: "Quality Control", count: 6 },
    { name: "Logistics", count: 5 },
    { name: "Sourcing Tips", count: 7 },
    { name: "Business Culture", count: 4 }
  ];

  const featuredPost = {
    title: "The Complete Guide to China Sourcing in 2026",
    excerpt: "Everything you need to know about sourcing products from China, from finding suppliers to shipping your goods. Updated for 2026 regulations and best practices.",
    category: "Comprehensive Guide",
    date: "June 20, 2026",
    readTime: "15 min read",
    author: "SSourcing China Team"
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Expert guidance on China sourcing, supplier verification, quality control, and international trade. Stay informed with our latest articles and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-4">
                Featured
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-slate-300 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                <span>{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <button className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300">
                Read the Guide
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                        <span className="text-blue-600 font-medium">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex justify-between items-center py-2 text-slate-600 hover:text-blue-600 transition-colors">
                        <span>{category.name}</span>
                        <span className="text-sm text-slate-400">({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  <a href="#" className="block">
                    <h4 className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      10 Questions to Ask Before Choosing a Supplier
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">May 5, 2026</p>
                  </a>
                  <a href="#" className="block">
                    <h4 className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      How to Read a Chinese Factory Audit Report
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">April 28, 2026</p>
                  </a>
                  <a href="#" className="block">
                    <h4 className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      Payment Terms: What Western Buyers Should Know
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">April 20, 2026</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Subscribe to our newsletter for the latest China sourcing insights, tips, and industry news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;