import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

const Blog = () => {
  const blogPosts = [
    {
      id: 'supplier-verification-guide',
      title: 'How to Verify a Chinese Factory Before Placing Orders',
      excerpt: 'A comprehensive guide to verifying supplier legitimacy, including on-site visit checklists, red flags to watch for, and verification services.',
      category: 'Sourcing Guide',
      author: 'Michael Chen',
      date: '2024-01-15',
      readTime: '8 min read',
    },
    {
      id: 'quality-control-basics',
      title: 'Understanding AQL and Quality Inspection Standards',
      excerpt: 'Learn about Acceptable Quality Level (AQL), sampling methods, and how to set appropriate quality standards for your products.',
      category: 'Quality Control',
      author: 'Sarah Zhang',
      date: '2024-01-10',
      readTime: '6 min read',
    },
    {
      id: 'shipping-costs-guide',
      title: 'Shipping from China: FCL vs LCL vs Air Freight',
      excerpt: 'Compare shipping methods, understand cost factors, and learn when to choose each option for your imports.',
      category: 'Logistics',
      author: 'David Wang',
      date: '2024-01-05',
      readTime: '7 min read',
    },
    {
      id: 'negotiation-tips',
      title: 'Negotiating with Chinese Suppliers: Best Practices',
      excerpt: 'Tips for effective price negotiations, building relationships, and avoiding common mistakes when working with Chinese manufacturers.',
      category: 'Business Tips',
      author: 'Michael Chen',
      date: '2023-12-28',
      readTime: '5 min read',
    },
    {
      id: 'sample-management',
      title: 'How to Effectively Manage Samples from China',
      excerpt: 'Best practices for requesting, evaluating, and approving samples to ensure product quality before bulk production.',
      category: 'Sourcing Guide',
      author: 'Lisa Liu',
      date: '2023-12-20',
      readTime: '4 min read',
    },
    {
      id: 'incoterms-guide',
      title: 'Incoterms 2020: A Practical Guide for Importers',
      excerpt: 'Understanding shipping terms like FOB, CIF, EXW, and what they mean for your responsibilities and costs.',
      category: 'Logistics',
      author: 'David Wang',
      date: '2023-12-15',
      readTime: '6 min read',
    },
  ];

  const categories = [
    { name: 'All Posts', count: 24 },
    { name: 'Sourcing Guide', count: 8 },
    { name: 'Quality Control', count: 6 },
    { name: 'Logistics', count: 5 },
    { name: 'Business Tips', count: 5 },
  ];

  const featuredPost = blogPosts[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2d4a6f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-xl text-[#94a3b8]">
              Expert insights, guides, and best practices for successful China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/blog/${featuredPost.id}`}
            className="group grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#1e3a5f]/5 to-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] flex items-center justify-center">
              <div className="text-white/20 text-6xl font-bold">Featured</div>
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-medium rounded-full mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-[#1e3a5f] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-[#64748b] mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-[#64748b]">
                  <span className="flex items-center mr-4">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="flex items-center text-[#1e3a5f] font-medium text-sm">
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-semibold text-[#0f172a] mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        index === 0 
                          ? 'bg-[#1e3a5f] text-white' 
                          : 'text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a]'
                      }`}>
                        {category.name} ({category.count})
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl text-white">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-white/70 mb-4">
                    Get personalized sourcing advice from our experts.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-4 py-2 bg-white text-[#1e3a5f] text-sm font-medium rounded-lg hover:bg-[#f1f5f9] transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.slice(1).map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="card group hover:border-[#1e3a5f]/30"
                  >
                    <div className="aspect-video bg-gradient-to-br from-[#1e3a5f]/10 to-[#e2e8f0] rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-[#1e3a5f]/20 text-lg font-bold">
                        {post.category.substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-2 group-hover:text-[#1e3a5f] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#64748b] mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#64748b]">
                      <span>{post.author}</span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 rounded-lg border border-[#e2e8f0] text-[#64748b] hover:bg-[#f1f5f9] transition-colors">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-lg border border-[#e2e8f0] text-[#64748b] hover:bg-[#f1f5f9] transition-colors">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-lg border border-[#e2e8f0] text-[#64748b] hover:bg-[#f1f5f9] transition-colors">
                    3
                  </button>
                  <button className="w-10 h-10 rounded-lg border border-[#1e3a5f] bg-[#1e3a5f] text-white">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
