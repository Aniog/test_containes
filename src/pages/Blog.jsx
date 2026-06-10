import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Checklist',
      excerpt: 'Learn the essential steps to verify potential suppliers in China, from business license checks to factory audits. Protect your business from unreliable partners.',
      category: 'Supplier Verification',
      date: '2024-01-15',
      readTime: '8 min read',
      author: 'David Zhang',
      featured: true,
    },
    {
      id: 2,
      title: 'Understanding MOQ: What Buyers Need to Know',
      excerpt: 'Minimum Order Quantity (MOQ) is a critical factor in China sourcing. Learn how to negotiate MOQs and find suppliers that match your business needs.',
      category: 'Sourcing Tips',
      date: '2024-01-10',
      readTime: '6 min read',
      author: 'Sarah Chen',
      featured: true,
    },
    {
      id: 3,
      title: 'Quality Inspection 101: Pre-Production, During Production, and Pre-Shipment',
      excerpt: 'A comprehensive guide to the three critical stages of quality inspection and why each one matters for your sourcing success.',
      category: 'Quality Control',
      date: '2024-01-05',
      readTime: '10 min read',
      author: 'Michael Liu',
      featured: false,
    },
    {
      id: 4,
      title: 'Shipping from China: Sea vs Air vs Express',
      excerpt: 'Compare the different shipping methods available for importing from China. Learn which option is best for your timeline, budget, and product type.',
      category: 'Logistics',
      date: '2023-12-28',
      readTime: '7 min read',
      author: 'Emily Wang',
      featured: false,
    },
    {
      id: 5,
      title: 'Common Mistakes When Sourcing from China (And How to Avoid Them)',
      excerpt: 'Avoid costly mistakes that many first-time importers make. From payment terms to communication issues, learn how to navigate China sourcing successfully.',
      category: 'Sourcing Tips',
      date: '2023-12-20',
      readTime: '9 min read',
      author: 'David Zhang',
      featured: false,
    },
    {
      id: 6,
      title: 'The Rise of Private Label Products: Opportunities for Small Businesses',
      excerpt: 'How private label sourcing from China can help small businesses compete with established brands. Tips for finding the right manufacturer and building your brand.',
      category: 'Business Strategy',
      date: '2023-12-15',
      readTime: '8 min read',
      author: 'Sarah Chen',
      featured: false,
    },
    {
      id: 7,
      title: 'Factory Audits Explained: What to Expect and What to Look For',
      excerpt: 'A detailed look at factory audits in China. Learn what auditors check, how to interpret audit reports, and how to use the findings to make better decisions.',
      category: 'Supplier Verification',
      date: '2023-12-10',
      readTime: '11 min read',
      author: 'Michael Liu',
      featured: false,
    },
    {
      id: 8,
      title: 'Navigating Trade Wars: How to Protect Your Supply Chain',
      excerpt: 'Strategies for mitigating risks from trade tensions between China and other countries. Diversification, local sourcing, and contract considerations.',
      category: 'Industry News',
      date: '2023-12-05',
      readTime: '7 min read',
      author: 'Emily Wang',
      featured: false,
    },
  ];

  const categories = [
    'All',
    'Supplier Verification',
    'Sourcing Tips',
    'Quality Control',
    'Logistics',
    'Business Strategy',
    'Industry News',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sourcing Insights & Resources
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Expert advice, practical tips, and industry insights to help you succeed with China sourcing. Stay informed with our latest articles.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Articles</h2>
            <p className="section-subtitle mx-auto">
              Our most popular and impactful content to help you source better from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">All Articles</h2>
            <p className="section-subtitle mx-auto">
              Browse our complete library of sourcing resources.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-blue-600">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Sourcing Insights
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Subscribe to our newsletter for the latest tips, industry news, and expert advice on China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-blue-300"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
