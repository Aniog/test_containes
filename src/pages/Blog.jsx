import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User,
  Search,
  FileText,
  TrendingUp,
  Shield,
  Truck
} from 'lucide-react';

const Blog = () => {
  const categories = [
    { name: "All Posts", count: 12 },
    { name: "Sourcing Guide", count: 5 },
    { name: "Quality Control", count: 3 },
    { name: "Industry Insights", count: 4 }
  ];

  const posts = [
    {
      id: 1,
      title: "How to Verify a Chinese Factory Before Working With Them",
      excerpt: "A comprehensive guide to conducting factory audits and verifying supplier legitimacy in China. Learn the key checks to perform and red flags to watch for.",
      category: "Sourcing Guide",
      date: "July 15, 2026",
      readTime: "8 min read",
      author: "James Wilson",
      image: "factory-verification"
    },
    {
      id: 2,
      title: "Understanding Quality Control Inspections: AQL Explained",
      excerpt: "Learn about Acceptable Quality Level (AQL) standards and how they apply to product inspections. Essential reading for importers new to QC processes.",
      category: "Quality Control",
      date: "July 8, 2026",
      readTime: "6 min read",
      author: "Lisa Chen",
      image: "quality-control"
    },
    {
      id: 3,
      title: "Navigating Chinese New Year: Sourcing Implications",
      excerpt: "Chinese New Year affects manufacturing timelines significantly. Here's how to plan your orders and avoid delays during this critical period.",
      category: "Sourcing Guide",
      date: "June 28, 2026",
      readTime: "5 min read",
      author: "Michael Zhang",
      image: "chinese-new-year"
    },
    {
      id: 4,
      title: "Incoterms 101: A Guide for China Importers",
      excerpt: "Understanding Incoterms is crucial for international trade. We break down the most common terms used in China sourcing and what they mean for you.",
      category: "Industry Insights",
      date: "June 20, 2026",
      readTime: "7 min read",
      author: "Sarah Johnson",
      image: "incoterms"
    },
    {
      id: 5,
      title: "Common Mistakes to Avoid When Sourcing from China",
      excerpt: "Learn from the experiences of other importers. We highlight the most common pitfalls and provide practical advice on how to avoid them.",
      category: "Sourcing Guide",
      date: "June 12, 2026",
      readTime: "6 min read",
      author: "James Wilson",
      image: "sourcing-mistakes"
    },
    {
      id: 6,
      title: "Shipping Options from China: Air vs Sea vs Express",
      excerpt: "Compare shipping methods for your China imports. We analyze the pros and cons of each option to help you make informed decisions.",
      category: "Industry Insights",
      date: "June 5, 2026",
      readTime: "5 min read",
      author: "David Liu",
      image: "shipping-options"
    }
  ];

  const featuredPost = {
    title: "The Complete Guide to China Sourcing in 2026",
    excerpt: "Everything you need to know about sourcing products from China, from finding suppliers to shipping your goods. Updated for 2026 with the latest industry practices.",
    category: "Sourcing Guide",
    date: "July 20, 2026",
    readTime: "15 min read",
    author: "James Wilson"
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert guidance on China sourcing, quality control, and international trade. 
              Stay informed with the latest industry insights and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-slate-400 text-sm mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {featuredPost.date}
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPost.readTime}
                  <span className="mx-2">•</span>
                  <User className="w-4 h-4 mr-2" />
                  {featuredPost.author}
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="bg-slate-800 flex items-center justify-center min-h-[300px]">
                <FileText className="w-24 h-24 text-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-slate-400">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Search */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 rounded-xl p-6 shadow-sm text-white">
                <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest China sourcing insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg text-slate-900 mb-2"
                />
                <button className="w-full py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-slate-100 h-48 flex items-center justify-center">
                      {post.category.includes("Quality") ? (
                        <Shield className="w-16 h-16 text-slate-300" />
                      ) : post.category.includes("Industry") ? (
                        <TrendingUp className="w-16 h-16 text-slate-300" />
                      ) : (
                        <FileText className="w-16 h-16 text-slate-300" />
                      )}
                    </div>
                    <div className="p-6">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700 mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600">
                        <Link to="#">{post.title}</Link>
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-slate-400 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                        <span className="mx-2">•</span>
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="inline-flex items-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                  Load More Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Need Personalized Sourcing Help?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Our team of experts is ready to assist you with your China sourcing needs. 
            Get professional guidance tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;