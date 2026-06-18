import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, FileText, Search, Clock, User,
  TrendingUp, Shield, Truck, Package, CheckCircle
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, capabilities, and reliability before committing to a large order.',
    category: 'Quality Control',
    date: '2024-01-15',
    readTime: '8 min read',
    author: 'James Wilson',
    image: 'factory-verification'
  },
  {
    id: 2,
    title: 'Understanding MOQ: Minimum Order Quantities in China Sourcing',
    excerpt: 'Everything you need to know about minimum order quantities, how to negotiate them, and strategies for smaller orders.',
    category: 'Sourcing Tips',
    date: '2024-01-10',
    readTime: '6 min read',
    author: 'Sarah Chen',
    image: 'moq-guide'
  },
  {
    id: 3,
    title: 'AQL Quality Inspection: What Importers Need to Know',
    excerpt: 'A comprehensive guide to Acceptable Quality Level (AQL) inspections and how to set appropriate standards for your products.',
    category: 'Quality Control',
    date: '2024-01-05',
    readTime: '10 min read',
    author: 'Michael Zhang',
    image: 'quality-inspection'
  },
  {
    id: 4,
    title: 'Shipping from China: Sea Freight vs Air Freight',
    excerpt: 'Compare shipping methods, costs, and transit times to choose the best option for your business needs.',
    category: 'Logistics',
    date: '2023-12-28',
    readTime: '7 min read',
    author: 'David Liu',
    image: 'shipping-guide'
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Suppliers',
    excerpt: 'Master the art of negotiation with Chinese manufacturers to get the best prices and terms for your orders.',
    category: 'Sourcing Tips',
    date: '2023-12-20',
    readTime: '9 min read',
    author: 'Emma Wang',
    image: 'negotiation'
  },
  {
    id: 6,
    title: 'Common Mistakes to Avoid When Sourcing from China',
    excerpt: 'Learn about the most common pitfalls that importers face and how to avoid them in your sourcing journey.',
    category: 'Industry Insights',
    date: '2023-12-15',
    readTime: '8 min read',
    author: 'James Wilson',
    image: 'mistakes'
  },
  {
    id: 7,
    title: 'Understanding Chinese Factory Certifications',
    excerpt: 'A guide to the various certifications Chinese factories may hold and what they mean for your product quality.',
    category: 'Quality Control',
    date: '2023-12-10',
    readTime: '6 min read',
    author: 'Sarah Chen',
    image: 'certifications'
  },
  {
    id: 8,
    title: 'Managing Quality Control During Production',
    excerpt: 'Best practices for monitoring and maintaining quality throughout the manufacturing process.',
    category: 'Quality Control',
    date: '2023-12-05',
    readTime: '7 min read',
    author: 'Michael Zhang',
    image: 'production-qc'
  },
  {
    id: 9,
    title: 'China Sourcing in 2024: Trends and Predictions',
    excerpt: 'Stay ahead of the curve with insights into the latest trends shaping China sourcing and e-commerce.',
    category: 'Industry Insights',
    date: '2023-11-28',
    readTime: '5 min read',
    author: 'David Liu',
    image: 'trends'
  }
];

const categories = [
  { name: 'All Posts', count: 9 },
  { name: 'Sourcing Tips', count: 2 },
  { name: 'Quality Control', count: 4 },
  { name: 'Logistics', count: 1 },
  { name: 'Industry Insights', count: 2 }
];

const featuredPost = {
  title: 'The Complete Guide to China Sourcing for Beginners',
  excerpt: 'Everything you need to know to start sourcing from China, from finding suppliers to receiving your first shipment.',
  category: 'Industry Insights',
  date: '2024-01-20',
  readTime: '15 min read',
  author: 'James Wilson',
  image: 'beginner-guide'
};

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-200">
              Expert insights, tips, and guides on China sourcing, quality control, 
              and international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white border-b py-12">
        <div className="container">
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-white">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold mt-4 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-200 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                </div>
                <Link
                  to="/blog/beginner-guide"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Article <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center bg-white/10">
                <FileText className="w-32 h-32 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-gray-50 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card group overflow-hidden p-0">
                <div className="h-48 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <FileText className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest China sourcing insights, 
              tips, and industry news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Explore Topics</h2>
          <p className="section-subtitle">
            Browse our content by category
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <TrendingUp className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-semibold mb-2">Sourcing Tips</h3>
              <p className="text-sm text-gray-600">
                Practical advice for finding and working with suppliers
              </p>
            </div>
            <div className="card text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Shield className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-semibold mb-2">Quality Control</h3>
              <p className="text-sm text-gray-600">
                Best practices for ensuring product quality
              </p>
            </div>
            <div className="card text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Truck className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-semibold mb-2">Logistics</h3>
              <p className="text-sm text-gray-600">
                Shipping, customs, and supply chain management
              </p>
            </div>
            <div className="card text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Package className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-semibold mb-2">Industry Insights</h3>
              <p className="text-sm text-gray-600">
                Market trends and analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Personalized Sourcing Help?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to assist you with your specific sourcing needs.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}