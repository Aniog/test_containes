import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock,
  Search,
  Factory,
  Truck,
  FileCheck,
  Shield,
  Package,
  TrendingUp,
  BookOpen
} from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Verify a Chinese Factory Before Placing an Order",
      excerpt: "Learn the essential steps to verify a factory's legitimacy, capabilities, and reliability before committing to a large order. Protect yourself from scams and ensure quality.",
      category: "Factory Verification",
      date: "June 15, 2026",
      readTime: "8 min read",
      icon: Factory
    },
    {
      id: 2,
      title: "Understanding Quality Control Inspections in China",
      excerpt: "A comprehensive guide to QC inspections: pre-production, inline, and pre-shipment. Learn what to look for and how to ensure your products meet specifications.",
      category: "Quality Control",
      date: "June 10, 2026",
      readTime: "10 min read",
      icon: FileCheck
    },
    {
      id: 3,
      title: "Shipping Options from China: Air vs Sea vs Express",
      excerpt: "Compare shipping methods from China including costs, transit times, and best practices. Make informed decisions for your supply chain.",
      category: "Logistics",
      date: "June 5, 2026",
      readTime: "7 min read",
      icon: Truck
    },
    {
      id: 4,
      title: "Protecting Your IP When Manufacturing in China",
      excerpt: "Essential strategies to protect your intellectual property when working with Chinese manufacturers. Learn about NDAs, patents, and security measures.",
      category: "IP Protection",
      date: "May 28, 2026",
      readTime: "9 min read",
      icon: Shield
    },
    {
      id: 5,
      title: "How to Negotiate with Chinese Suppliers",
      excerpt: "Master the art of negotiation with Chinese suppliers. Learn cultural insights, pricing strategies, and tactics to get the best deals.",
      category: "Sourcing Tips",
      date: "May 20, 2026",
      readTime: "6 min read",
      icon: TrendingUp
    },
    {
      id: 6,
      title: "Understanding MOQ and Flexible Manufacturing Options",
      excerpt: "Everything you need to know about Minimum Order Quantities and how to work with factories to get smaller runs or negotiate better terms.",
      category: "Sourcing Tips",
      date: "May 15, 2026",
      readTime: "5 min read",
      icon: Package
    }
  ];

  const categories = [
    { name: "All Posts", count: 6 },
    { name: "Factory Verification", count: 1 },
    { name: "Quality Control", count: 1 },
    { name: "Logistics", count: 1 },
    { name: "IP Protection", count: 1 },
    { name: "Sourcing Tips", count: 2 }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Blog & Insights
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Expert guidance on China sourcing, factory verification, quality control, and international trade. Stay informed with our latest articles and tips.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 sticky top-24">
                <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-slate-600 hover:bg-white hover:text-blue-600 transition-colors flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Posts */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <post.icon className="w-6 h-6 text-slate-600" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 mb-2">
                            {post.title}
                          </h2>
                          <p className="text-slate-600 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {post.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Subscribe to our newsletter for the latest insights on China sourcing, trade news, and practical tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need Help with Your Sourcing?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Get personalized assistance from our team of China sourcing experts.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;