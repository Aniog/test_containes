import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Calendar,
  User,
  Tag,
  Search
} from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify Chinese Suppliers: A Complete Guide',
      excerpt: 'Learn the essential steps to verify suppliers in China, from business license checks to factory audits. Protect your business from scams and quality issues.',
      date: '2026-06-10',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      readTime: '8 min read',
      image: 'factory audit china sourcing'
    },
    {
      id: 2,
      title: 'Understanding MOQs: How to Negotiate Lower Minimum Order Quantities',
      excerpt: 'Minimum Order Quantities can be a barrier for small businesses. Discover strategies to negotiate lower MOQs with Chinese manufacturers.',
      date: '2026-06-05',
      author: 'SSourcing Team',
      category: 'Negotiation',
      readTime: '6 min read',
      image: 'negotiation manufacturing china'
    },
    {
      id: 3,
      title: 'Quality Inspection Standards: AQL vs. 100% Inspection',
      excerpt: 'Understand the differences between AQL sampling and 100% inspection, and when to use each method for your product quality control.',
      date: '2026-05-28',
      author: 'SSourcing Team',
      category: 'Quality Control',
      readTime: '10 min read',
      image: 'quality inspection manufacturing'
    },
    {
      id: 4,
      title: 'Shipping from China: Sea Freight vs. Air Freight vs. Express',
      excerpt: 'Compare different shipping methods from China, including costs, transit times, and when to use each option for your imports.',
      date: '2026-05-20',
      author: 'SSourcing Team',
      category: 'Logistics',
      readTime: '7 min read',
      image: 'shipping containers china'
    },
    {
      id: 5,
      title: 'Top 10 Product Certification Requirements for US & EU Markets',
      excerpt: 'Ensure your products comply with international standards. A comprehensive guide to certifications needed for exporting to US and European markets.',
      date: '2026-05-15',
      author: 'SSourcing Team',
      category: 'Compliance',
      readTime: '12 min read',
      image: 'product certification testing'
    },
    {
      id: 6,
      title: 'How to Calculate Total Landed Cost for Imported Products',
      excerpt: 'Don\'t forget hidden costs! Learn how to accurately calculate total landed cost including product, shipping, duties, and overhead.',
      date: '2026-05-08',
      author: 'SSourcing Team',
      category: 'Cost Optimization',
      readTime: '9 min read',
      image: 'cost calculation import'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sourcing Insights Blog
            </h1>
            <p className="text-xl text-blue-100">
              Expert advice, tips, and industry insights to help you source smarter from China
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-gray-50 py-8">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Package className="w-16 h-16 text-gray-400" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-blue-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Sourcing Tips in Your Inbox
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest sourcing insights, industry updates, and exclusive tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
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

      {/* Popular Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Sourcing Tips',
              'Quality Control',
              'Negotiation',
              'Logistics',
              'Compliance',
              'Cost Optimization'
            ].map((category, index) => (
              <Link
                key={index}
                to={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <Tag className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <span className="font-semibold">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
