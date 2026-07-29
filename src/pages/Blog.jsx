import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Clock, User, Calendar, Search, Tag,
  BookOpen, FileText, Video, Download, CheckCircle
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Complete Guide to China Factory Verification in 2024',
    excerpt: 'Learn how to verify Chinese factories before placing orders. This comprehensive guide covers everything from business licenses to production capacity assessment.',
    category: 'Factory Verification',
    author: 'SSourcing China Team',
    date: 'December 15, 2024',
    readTime: '12 min read',
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Understanding AQL Standards for Product Inspection',
      excerpt: 'AQL (Acceptable Quality Limit) is essential for quality control. Learn how to set the right sampling plans for your products.',
      category: 'Quality Control',
      author: 'QC Team',
      date: 'December 10, 2024',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Sea Freight vs Air Freight: Which Should You Choose?',
      excerpt: 'Compare shipping methods from China based on cost, time, and suitability for different product types.',
      category: 'Shipping & Logistics',
      author: 'Logistics Team',
      date: 'December 5, 2024',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Common Mistakes to Avoid When Sourcing from China',
      excerpt: 'Avoid these frequent pitfalls that cause issues for first-time China importers.',
      category: 'Sourcing Tips',
      author: 'SSourcing China Team',
      date: 'November 28, 2024',
      readTime: '10 min read',
    },
    {
      id: 5,
      title: 'How to Read Chinese Factory Business Licenses',
      excerpt: 'A step-by-step guide to verifying company legitimacy through official documentation.',
      category: 'Factory Verification',
      author: 'Compliance Team',
      date: 'November 20, 2024',
      readTime: '7 min read',
    },
    {
      id: 6,
      title: 'Negotiating with Chinese Suppliers: Best Practices',
      excerpt: 'Effective strategies for getting the best prices and terms from your suppliers.',
      category: 'Negotiation',
      author: 'SSourcing China Team',
      date: 'November 15, 2024',
      readTime: '9 min read',
    },
    {
      id: 7,
      title: 'Incoterms Explained: CIF vs FOB vs EXW',
      excerpt: 'Understanding international trade terms is crucial for accurate costing and risk management.',
      category: 'Shipping & Logistics',
      author: 'Logistics Team',
      date: 'November 8, 2024',
      readTime: '8 min read',
    },
  ];

  const categories = [
    { name: 'Factory Verification', count: 12 },
    { name: 'Quality Control', count: 15 },
    { name: 'Shipping & Logistics', count: 10 },
    { name: 'Sourcing Tips', count: 18 },
    { name: 'Negotiation', count: 8 },
    { name: 'Industry News', count: 6 },
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Supplier Evaluation Checklist',
      description: 'Free downloadable checklist for evaluating Chinese factories',
      type: 'PDF Guide',
    },
    {
      icon: Video,
      title: 'QC Inspection Video Tutorial',
      description: 'Step-by-step guide to conducting product inspections',
      type: 'Video Series',
    },
    {
      icon: Download,
      title: 'Sample Order Template',
      description: 'Ready-to-use template for sample requests',
      type: 'Template',
    },
    {
      icon: BookOpen,
      title: 'China Sourcing E-Book',
      description: 'Complete guide to sourcing from China',
      type: 'E-Book',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Resources & Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-xl text-gray-600">
              Expert advice, industry insights, and practical guides to help you source 
              products from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/blog/${featuredPost.id}`}
            className="block group"
          >
            <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-12 min-h-[300px]">
                <BookOpen className="w-24 h-24 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8 lg:py-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="block group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-full sm:w-48 h-32 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <FileText className="w-10 h-10 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/blog?category=${category.name.toLowerCase().replace(/ & /g, '-')}`}
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Free Resources</h3>
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{resource.title}</p>
                        <p className="text-xs text-gray-500">{resource.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Get the latest China sourcing tips delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 placeholder-blue-200 text-white focus:ring-2 focus:ring-white focus:border-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Sourcing?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get expert help with your China sourcing needs. Our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
