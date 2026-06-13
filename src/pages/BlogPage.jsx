import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese manufacturers before placing orders. From business license checks to factory audits, this guide covers everything you need to know.',
    category: 'Supplier Verification',
    date: '2026-06-01',
    author: 'SSourcing China Team',
    readTime: '8 min read',
    image: '📋'
  },
  {
    id: 2,
    title: 'Understanding MOQs: What Every Buyer Should Know',
    excerpt: 'Minimum Order Quantities can make or break your sourcing strategy. Learn how to negotiate MOQs and find suppliers with flexible requirements.',
    category: 'Sourcing Tips',
    date: '2026-05-25',
    author: 'SSourcing China Team',
    readTime: '6 min read',
    image: '📊'
  },
  {
    id: 3,
    title: 'Quality Control in China: Inspection Types Explained',
    excerpt: 'Pre-production, during-production, and pre-shipment inspections serve different purposes. Understand when to use each type and what to expect.',
    category: 'Quality Control',
    date: '2026-05-18',
    author: 'SSourcing China Team',
    readTime: '10 min read',
    image: '🔍'
  },
  {
    id: 4,
    title: 'Shipping from China: Air vs Sea vs Express',
    excerpt: 'Choosing the right shipping method affects cost, speed, and reliability. Compare your options and learn how to optimize your logistics strategy.',
    category: 'Shipping',
    date: '2026-05-10',
    author: 'SSourcing China Team',
    readTime: '7 min read',
    image: '🚢'
  },
  {
    id: 5,
    title: 'Common Mistakes When Sourcing from China',
    excerpt: 'Avoid these costly mistakes that many first-time buyers make. Learn from others experiences and protect your investment.',
    category: 'Sourcing Tips',
    date: '2026-05-03',
    author: 'SSourcing China Team',
    readTime: '9 min read',
    image: '⚠️'
  },
  {
    id: 6,
    title: 'How to Negotiate Prices with Chinese Suppliers',
    excerpt: 'Effective negotiation strategies for getting the best prices from Chinese manufacturers. Cultural insights and practical tips included.',
    category: 'Negotiation',
    date: '2026-04-26',
    author: 'SSourcing China Team',
    readTime: '8 min read',
    image: '🤝'
  },
  {
    id: 7,
    title: 'Understanding Incoterms for China Imports',
    excerpt: 'FOB, CIF, EXW, DDP - what do these terms mean for your China imports? A practical guide to Incoterms and their impact on your costs.',
    category: 'Shipping',
    date: '2026-04-19',
    author: 'SSourcing China Team',
    readTime: '11 min read',
    image: '📦'
  },
  {
    id: 8,
    title: 'Building Long-Term Relationships with Chinese Factories',
    excerpt: 'Why long-term supplier relationships matter and how to build trust with Chinese manufacturers for better pricing and priority service.',
    category: 'Supplier Management',
    date: '2026-04-12',
    author: 'SSourcing China Team',
    readTime: '7 min read',
    image: '🏭'
  },
  {
    id: 9,
    title: 'Product Certification Requirements for China Exports',
    excerpt: 'CE, FCC, RoHS, and other certifications your products may need. Understand the requirements for your target market before ordering.',
    category: 'Compliance',
    date: '2026-04-05',
    author: 'SSourcing China Team',
    readTime: '9 min read',
    image: '📜'
  }
];

const categories = ['All', 'Sourcing Tips', 'Supplier Verification', 'Quality Control', 'Shipping', 'Negotiation', 'Supplier Management', 'Compliance'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Blog & Insights</h1>
            <p className="text-lg text-slate-300">Expert advice, guides, and industry insights to help you source successfully from China.</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="input-field pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="card group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-slate-200 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-5xl">{post.image}</span>
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">{post.category}</span>
                  <h2 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
              <button
                className="btn-primary mt-4"
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-slate-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay Updated</h2>
            <p className="text-slate-600 text-lg mb-8">Get sourcing tips and industry insights delivered to your inbox every week.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
