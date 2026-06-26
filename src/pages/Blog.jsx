import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag, Clock, BookOpen, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Verifying suppliers is one of the most important steps when sourcing from China. This guide covers the key checks you should perform before placing your first order, including business license verification, factory audits, and reference checks.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-p1q3r5',
  },
  {
    id: 2,
    title: 'Understanding AQL Inspection: What Importers Need to Know',
    excerpt: 'Acceptable Quality Level (AQL) inspection is the industry standard for pre-shipment quality checks. Learn how AQL sampling works, how to set the right inspection level, and what to do when products fail inspection.',
    category: 'Quality Control',
    date: '2026-06-01',
    readTime: '10 min read',
    imgId: 'blog-aql-inspection-s7t9u2',
  },
  {
    id: 3,
    title: 'Ocean Freight vs Air Freight: Choosing the Right Shipping Method from China',
    excerpt: 'Choosing between ocean and air freight depends on your budget, timeline, and product type. We break down the costs, transit times, and best use cases for each method to help you make the right decision.',
    category: 'Shipping & Logistics',
    date: '2026-05-20',
    readTime: '7 min read',
    imgId: 'blog-shipping-methods-v4w6x8',
  },
  {
    id: 4,
    title: 'The Complete Guide to Product Sampling from Chinese Suppliers',
    excerpt: 'Getting product samples right is critical before committing to a bulk order. This guide covers the sampling process, what to evaluate, common pitfalls, and how to use samples to negotiate better pricing.',
    category: 'Sourcing Tips',
    date: '2026-05-10',
    readTime: '9 min read',
    imgId: 'blog-product-sampling-y1z3a5',
  },
  {
    id: 5,
    title: 'Top 10 Mistakes to Avoid When Importing from China',
    excerpt: 'New to importing from China? These are the most common and costly mistakes that first-time importers make, and practical advice on how to avoid each one.',
    category: 'Sourcing Tips',
    date: '2026-04-28',
    readTime: '12 min read',
    imgId: 'blog-import-mistakes-b7c9d2',
  },
  {
    id: 6,
    title: 'How to Handle Customs Clearance When Importing from China',
    excerpt: 'Customs clearance can be one of the most confusing parts of importing. We explain the documentation you need, common delays, and how to ensure your goods clear customs smoothly.',
    category: 'Shipping & Logistics',
    date: '2026-04-15',
    readTime: '8 min read',
    imgId: 'blog-customs-clearance-e4f6g8',
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

  const filtered = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/10 text-white/90 text-sm font-semibold rounded-full mb-4">Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">China Sourcing Insights</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Practical guides, tips, and industry knowledge to help you source products from China more effectively.</p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-surface-alt border-b border-border sticky top-18 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border-none cursor-pointer transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-secondary hover:bg-surface-alt border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-text-muted mx-auto mb-4" />
              <p className="text-text-secondary text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((post) => (
                <article key={post.id} className="bg-surface-alt border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                  <div className="aspect-video bg-surface-dark overflow-hidden">
                    <img
                      data-strk-img-id={post.imgId}
                      data-strk-img={`[blog-${post.id}-title] [blog-${post.id}-cat]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span id={`blog-${post.id}-cat`} className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full">{post.category}</span>
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 id={`blog-${post.id}-title`} className="text-base font-bold text-text mb-2 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="text-xs font-semibold text-primary group-hover:text-primary-dark transition-colors cursor-pointer">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-text mb-3">Stay Updated</h2>
          <p className="text-text-secondary mb-6">Get our latest sourcing tips and industry insights delivered to your inbox.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            <button className="px-6 py-3 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-lg border-none cursor-pointer transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
