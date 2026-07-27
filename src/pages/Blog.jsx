import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Calendar, Clock, User, Search, Tag,
  CheckCircle, FileText, MessageSquare, Users
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';



const Blog = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  


  const featuredPost = {
    id: 'navigating-china-supplier-quality',
    title: 'Navigating China Supplier Quality: A Practical Guide',
    excerpt: 'Understanding quality standards and inspection protocols is essential for successful China sourcing. Learn the key factors that differentiate reliable suppliers.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'January 15, 2026',
    readTime: '8 min read',
    image: 'blog-quality-guide'
  };

  const posts = [
    {
      id: 'factory-verification-checklist',
      title: 'Factory Verification Checklist: 15 Points Every Buyer Should Check',
      excerpt: 'Before placing orders, ensure your potential supplier passes these critical verification checkpoints.',
      category: 'Factory Verification',
      author: 'SSourcing China Team',
      date: 'January 10, 2026',
      readTime: '6 min read',
      image: 'blog-factory-checklist'
    },
    {
      id: 'shipping-from-china-2026',
      title: 'Shipping from China in 2026: Costs, Timelines, and Best Practices',
      excerpt: 'A comprehensive overview of shipping options, current freight rates, and tips for optimizing your logistics.',
      category: 'Logistics',
      author: 'SSourcing China Team',
      date: 'January 5, 2026',
      readTime: '10 min read',
      image: 'blog-shipping-guide'
    },
    {
      id: 'negotiating-with-chinese-suppliers',
      title: 'Negotiation Strategies for Working with Chinese Suppliers',
      excerpt: 'Effective negotiation tactics that respect cultural differences while protecting your business interests.',
      category: 'Negotiation',
      author: 'SSourcing China Team',
      date: 'December 28, 2025',
      readTime: '7 min read',
      image: 'blog-negotiation'
    },
    {
      id: 'common-sourcing-mistakes',
      title: '7 Common China Sourcing Mistakes and How to Avoid Them',
      excerpt: 'Learn from the experiences of other buyers to sidestep these frequent pitfalls in your sourcing journey.',
      category: 'Best Practices',
      author: 'SSourcing China Team',
      date: 'December 20, 2025',
      readTime: '5 min read',
      image: 'blog-mistakes'
    },
    {
      id: 'sample-management-guide',
      title: 'Sample Management: Getting What You Need Before Mass Production',
      excerpt: 'A systematic approach to requesting, evaluating, and approving samples from Chinese manufacturers.',
      category: 'Quality Control',
      author: 'SSourcing China Team',
      date: 'December 15, 2025',
      readTime: '6 min read',
      image: 'blog-samples'
    },
    {
      id: 'payment-terms-china',
      title: 'Payment Terms When Sourcing from China: A Practical Guide',
      excerpt: 'Understanding common payment methods, terms, and how to protect yourself from risks.',
      category: 'Best Practices',
      author: 'SSourcing China Team',
      date: 'December 10, 2025',
      readTime: '8 min read',
      image: 'blog-payment'
    }
  ];

  const categories = [
    'All Categories',
    'Quality Control',
    'Factory Verification',
    'Logistics',
    'Negotiation',
    'Best Practices',
    'Industry Insights'
  ];

  const popularTopics = [
    { name: 'Supplier Verification', count: 12 },
    { name: 'Quality Control', count: 15 },
    { name: 'Shipping & Logistics', count: 10 },
    { name: 'Negotiation Tips', count: 8 },
    { name: 'Production Management', count: 11 },
    { name: 'Cost Reduction', count: 7 }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Practical insights, expert advice, and best practices for successful China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
                Get Expert Help
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-200 bg-white/20 px-3 py-1 rounded-full w-fit mb-4">
                  <FileText className="w-3 h-3" />
                  Featured Article
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-blue-100 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-blue-200 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-fit"
                >
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gray-200 border-2 border-dashed h-64 lg:h-auto">
                <img
                 
                 
                 
                 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%231e40af' width='800' height='450'/%3E%3Ctext x='400' y='200' font-family='system-ui' font-size='20' fill='%239ca3af' text-anchor='middle'%3EFeatured Article%3C/text%3E%3C/svg%3E"
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                    <div className="h-48 bg-gray-200 border-2 border-dashed">
                      <img
                       
                       
                       
                       
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300'%3E%3Crect fill='%23e5e7eb' width='600' height='300'/%3E%3Ctext x='300' y='150' font-family='system-ui' font-size='16' fill='%239ca3af' text-anchor='middle'%3E{post.title.substring(0, 30)}...%3C/text%3E%3C/svg%3E"
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-blue-600" />
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        index === 0 ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                      }`}>
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Topics */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  Popular Topics
                </h3>
                <ul className="space-y-3">
                  {popularTopics.map((topic, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                        {topic.name}
                      </span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                        {topic.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Stay Updated
                </h3>
                <p className="text-sm text-blue-100 mb-4">
                  Get the latest China sourcing tips and insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm mb-3"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* CTA */}
              <div className="bg-slate-900 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-2">Need Expert Help?</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Get personalized sourcing advice from our team.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Want to Learn More About China Sourcing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is ready to provide personalized advice for your specific sourcing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
