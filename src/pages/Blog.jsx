import { ArrowRight, Search, Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const categories = [
  'All Posts',
  'Sourcing Tips',
  'Quality Control',
  'Supplier Management',
  'Industry Insights',
  'Logistics & Shipping',
];

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing Orders',
    excerpt: 'A comprehensive guide to verifying supplier credentials, conducting factory visits, and avoiding common scams in China sourcing.',
    category: 'Supplier Management',
    date: '2024-01-15',
    readTime: '8 min read',
    author: 'David Chen',
    image: 'supplier-verification',
  },
  {
    id: 2,
    title: 'Understanding Quality Control Inspections in China',
    excerpt: 'Learn about different types of QC inspections, when to conduct them, and how to interpret inspection reports for better decision-making.',
    category: 'Quality Control',
    date: '2024-01-10',
    readTime: '6 min read',
    author: 'Sarah Liu',
    image: 'quality-inspection',
  },
  {
    id: 3,
    title: 'Navigating Chinese Manufacturing Costs in 2024',
    excerpt: 'An analysis of current manufacturing costs in China, factors affecting pricing, and strategies for cost optimization.',
    category: 'Sourcing Tips',
    date: '2024-01-05',
    readTime: '10 min read',
    author: 'Michael Zhang',
    image: 'manufacturing-costs',
  },
  {
    id: 4,
    title: 'Shipping from China: FOB, CIF, and EXW Explained',
    excerpt: 'Understanding different incoterms and shipping methods to choose the right logistics solution for your business.',
    category: 'Logistics & Shipping',
    date: '2023-12-28',
    readTime: '7 min read',
    author: 'James Wang',
    image: 'shipping-methods',
  },
  {
    id: 5,
    title: 'Building Long-Term Relationships with Chinese Suppliers',
    excerpt: 'Strategies for developing strong, mutually beneficial partnerships with manufacturers in China.',
    category: 'Supplier Management',
    date: '2023-12-20',
    readTime: '5 min read',
    author: 'Emma Liu',
    image: 'supplier-relationships',
  },
  {
    id: 6,
    title: 'Common Mistakes to Avoid When Sourcing from China',
    excerpt: 'Learn from the experiences of other businesses and avoid these frequent pitfalls in international sourcing.',
    category: 'Sourcing Tips',
    date: '2023-12-15',
    readTime: '6 min read',
    author: 'David Chen',
    image: 'sourcing-mistakes',
  },
  {
    id: 7,
    title: 'The Role of Quality Inspections in Risk Management',
    excerpt: 'How quality control inspections help mitigate risks and protect your brand reputation when sourcing from China.',
    category: 'Quality Control',
    date: '2023-12-10',
    readTime: '7 min read',
    author: 'Sarah Liu',
    image: 'risk-management',
  },
  {
    id: 8,
    title: 'China Manufacturing Trends to Watch in 2024',
    excerpt: 'An overview of emerging trends in Chinese manufacturing, including automation, sustainability, and smart factory initiatives.',
    category: 'Industry Insights',
    date: '2023-12-05',
    readTime: '8 min read',
    author: 'Michael Zhang',
    image: 'manufacturing-trends',
  },
  {
    id: 9,
    title: 'How to Handle Quality Disputes with Chinese Suppliers',
    excerpt: 'A practical guide to resolving quality issues professionally and maintaining good supplier relationships.',
    category: 'Quality Control',
    date: '2023-11-28',
    readTime: '6 min read',
    author: 'James Wang',
    image: 'quality-disputes',
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-white/80">
              Expert insights, tips, and guides on China sourcing, supplier management, quality control, and international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-[var(--primary)] text-white'
                      : 'bg-[var(--bg-light)] text-[var(--text-secondary)] hover:bg-[var(--border)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid-3">
            {filteredPosts.map((post) => (
              <div key={post.id} className="card group">
                <div className="h-48 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg mb-4 flex items-center justify-center group-hover:from-[var(--accent)] group-hover:to-[var(--accent-hover)] transition-colors">
                  <span className="text-white/30 text-4xl font-bold">{post.category.charAt(0)}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge">{post.category}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--text-secondary)]">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-[var(--bg-light)]">
        <div className="container">
          <div className="card bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest China sourcing insights and industry updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
                required
              />
              <button type="submit" className="btn btn-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;