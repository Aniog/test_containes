import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'How to Verify a Chinese Supplier Before Placing Orders',
      excerpt: 'Learn the essential steps to verify supplier legitimacy, including business license checks, factory visits, and red flags to watch for.',
      category: 'Supplier Verification',
      date: 'June 10, 2026',
      author: 'SSourcing China Team',
      readTime: '8 min read',
    },
    {
      title: 'Understanding Quality Control Inspections in China',
      excerpt: 'A comprehensive guide to different types of QC inspections - pre-shipment, during production, and final random inspection.',
      category: 'Quality Control',
      date: 'June 3, 2026',
      author: 'SSourcing China Team',
      readTime: '10 min read',
    },
    {
      title: 'Navigating Chinese Business Culture: Tips for Successful Negotiations',
      excerpt: 'Understanding Chinese business customs and negotiation tactics to build strong supplier relationships.',
      category: 'Business Culture',
      date: 'May 27, 2026',
      author: 'SSourcing China Team',
      readTime: '7 min read',
    },
    {
      title: 'Shipping Options from China: FOB, EXW, CIF, and DDP Explained',
      excerpt: 'Compare different shipping terms and learn which is best for your business based on your experience and capabilities.',
      category: 'Shipping & Logistics',
      date: 'May 20, 2026',
      author: 'SSourcing China Team',
      readTime: '12 min read',
    },
    {
      title: 'Common Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn from the experiences of other businesses and avoid these frequent pitfalls in international sourcing.',
      category: 'Sourcing Tips',
      date: 'May 13, 2026',
      author: 'SSourcing China Team',
      readTime: '6 min read',
    },
    {
      title: 'How to Read and Verify Chinese Factory Certifications',
      excerpt: 'Understanding ISO, CE, FCC, and other certifications - what they mean and how to verify their authenticity.',
      category: 'Supplier Verification',
      date: 'May 6, 2026',
      author: 'SSourcing China Team',
      readTime: '9 min read',
    },
  ];

  const categories = [
    'All Categories',
    'Supplier Verification',
    'Quality Control',
    'Business Culture',
    'Shipping & Logistics',
    'Sourcing Tips',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Blog & Insights</h1>
            <p className="text-xl text-white/90">
              Expert guidance on China sourcing, supplier management, and international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[var(--background)] text-[var(--text-secondary)] hover:bg-[var(--primary)]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-[var(--border)] overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-xl mb-3 hover:text-[var(--accent)] transition-colors">
                    <Link to="#">{article.title}</Link>
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Subscribe to our newsletter for the latest insights on China sourcing and international trade.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--primary)] text-white rounded font-medium hover:bg-[var(--primary-light)] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Need Personalized Sourcing Help?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Our team of experts is ready to assist you with your specific sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;