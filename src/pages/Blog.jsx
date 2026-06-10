import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Search, Mail, FileText, TrendingUp, Shield, Truck } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'sourcing', label: 'Sourcing Tips' },
    { id: 'quality', label: 'Quality Control' },
    { id: 'logistics', label: 'Logistics' },
    { id: 'market', label: 'Market Insights' }
  ];

  const posts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier Before Working With Them',
      excerpt: 'A comprehensive guide to conducting due diligence on potential suppliers, including verification checks and red flags to watch for.',
      category: 'sourcing',
      date: 'June 5, 2026',
      author: 'James Liu',
      readTime: '8 min read',
      image: 'supplier-verification'
    },
    {
      id: 2,
      title: 'Understanding Quality Control Inspections: AQL Explained',
      excerpt: 'Learn about Acceptable Quality Level (AQL) standards and how professional inspections help ensure your products meet specifications.',
      category: 'quality',
      date: 'May 28, 2026',
      author: 'Sarah Chen',
      readTime: '6 min read',
      image: 'quality-control'
    },
    {
      id: 3,
      title: 'Shipping from China: FOB, CIF, and EXW Explained',
      excerpt: 'A clear breakdown of Incoterms and shipping options to help you choose the most cost-effective and reliable method for your business.',
      category: 'logistics',
      date: 'May 20, 2026',
      author: 'Michael Zhang',
      readTime: '7 min read',
      image: 'shipping'
    },
    {
      id: 4,
      title: 'Top 10 Product Categories to Source from China in 2026',
      excerpt: 'Discover the most promising product categories for international buyers, with market trends and sourcing recommendations.',
      category: 'market',
      date: 'May 12, 2026',
      author: 'David Wang',
      readTime: '10 min read',
      image: 'market-trends'
    },
    {
      id: 5,
      title: 'How to Negotiate with Chinese Suppliers',
      excerpt: 'Tips and strategies for negotiating favorable terms with Chinese manufacturers, including pricing, payment, and delivery.',
      category: 'sourcing',
      date: 'May 5, 2026',
      author: 'James Liu',
      readTime: '9 min read',
      image: 'negotiation'
    },
    {
      id: 6,
      title: 'Common Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn about the most common pitfalls in China sourcing and how to avoid them to ensure a successful partnership.',
      category: 'sourcing',
      date: 'April 28, 2026',
      author: 'Sarah Chen',
      readTime: '7 min read',
      image: 'mistakes'
    }
  ];

  const featuredPost = posts[0];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && post.id !== featuredPost.id;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              China Sourcing Insights & Tips
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Expert guidance on sourcing from China, quality control, logistics, and building successful supplier relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-button text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-surface-alt text-text-secondary hover:bg-primary/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <FileText className="w-24 h-24 text-white/30" />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-text-secondary mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-accent font-medium hover:text-accent-hover transition-colors"
                >
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-surface-alt rounded-card overflow-hidden hover:shadow-card-hover transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  {post.category === 'sourcing' && <TrendingUp className="w-16 h-16 text-primary/50" />}
                  {post.category === 'quality' && <Shield className="w-16 h-16 text-primary/50" />}
                  {post.category === 'logistics' && <Truck className="w-16 h-16 text-primary/50" />}
                  {post.category === 'market' && <FileText className="w-16 h-16 text-primary/50" />}
                </div>
                <div className="p-6">
                  <span className="text-xs text-accent font-medium uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary mt-2 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-8">
              Get the latest China sourcing insights, tips, and market updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-input text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-button transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Need Personalized Sourcing Advice?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you with your specific sourcing needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-button hover:bg-accent-hover transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;