import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User,
  Search,
  ClipboardCheck,
  Truck,
  Shield,
  FileText,
  TrendingUp,
  Building2
} from 'lucide-react';

const BlogPage = () => {
  const categories = [
    { name: 'All Posts', count: 12 },
    { name: 'Sourcing Guides', count: 5 },
    { name: 'Quality Control', count: 3 },
    { name: 'Industry Insights', count: 4 }
  ];

  const posts = [
    {
      id: 'supplier-verification-guide',
      title: 'How to Verify a Chinese Factory Before Placing Orders',
      excerpt: 'A comprehensive guide to conducting factory audits and verifying supplier legitimacy. Learn the key checks to perform and red flags to watch for.',
      category: 'Sourcing Guides',
      date: '2024-01-15',
      readTime: '8 min read',
      author: 'James Chen',
      image: 'factory inspection'
    },
    {
      id: 'quality-inspection-checklist',
      title: 'Quality Inspection Checklist: What to Check Before Shipping',
      excerpt: 'Download our comprehensive QC checklist covering product specifications, packaging, labeling, and compliance requirements for various product categories.',
      category: 'Quality Control',
      date: '2024-01-08',
      readTime: '6 min read',
      author: 'Sarah Zhang',
      image: 'quality inspection'
    },
    {
      id: 'incoterms-guide',
      title: 'Understanding Incoterms: A Guide for Importers',
      excerpt: 'Navigate the world of international trade terms. We explain EXW, FOB, CIF, DDP and other Incoterms to help you choose the right shipping terms.',
      category: 'Sourcing Guides',
      date: '2023-12-20',
      readTime: '10 min read',
      author: 'Michael Liu',
      image: 'shipping containers'
    },
    {
      id: 'supplier-negotiation',
      title: 'Negotiating with Chinese Suppliers: Tips and Strategies',
      excerpt: 'Learn effective negotiation tactics for working with Chinese manufacturers. Discover how to get the best prices while maintaining strong relationships.',
      category: 'Sourcing Guides',
      date: '2023-12-10',
      readTime: '7 min read',
      author: 'James Chen',
      image: 'business meeting'
    },
    {
      id: 'quality-issues',
      title: 'Common Quality Issues When Sourcing from China and How to Prevent Them',
      excerpt: 'Identify the most frequent quality problems encountered in China sourcing and learn practical solutions to prevent them in your supply chain.',
      category: 'Quality Control',
      date: '2023-11-28',
      readTime: '9 min read',
      author: 'Sarah Zhang',
      image: 'product quality'
    },
    {
      id: 'china-manufacturing-trends',
      title: 'China Manufacturing Trends 2024: What Buyers Need to Know',
      excerpt: 'Stay ahead of the curve with our analysis of emerging trends in Chinese manufacturing, including automation, sustainability, and shifting production costs.',
      category: 'Industry Insights',
      date: '2023-11-15',
      readTime: '6 min read',
      author: 'David Wang',
      image: 'manufacturing plant'
    },
    {
      id: 'shipping-options',
      title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
      excerpt: 'Compare the pros and cons of different shipping methods. We help you calculate costs, transit times, and choose the best option for your business.',
      category: 'Sourcing Guides',
      date: '2023-10-25',
      readTime: '8 min read',
      author: 'Michael Liu',
      image: 'cargo ship'
    },
    {
      id: 'supplier-contracts',
      title: 'Essential Contract Clauses When Sourcing from China',
      excerpt: 'Protect your business with proper contract terms. Learn about payment terms, quality guarantees, IP protection, and dispute resolution clauses.',
      category: 'Sourcing Guides',
      date: '2023-10-10',
      readTime: '7 min read',
      author: 'James Chen',
      image: 'contract signing'
    }
  ];

  const featuredPost = posts[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert insights, guides, and tips for successful China sourcing. 
              Stay informed with the latest industry knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-slate-200 to-slate-300 h-64 lg:h-auto flex items-center justify-center">
                <Building2 className="w-20 h-20 text-slate-400" />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-slate-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  <span className="mx-3">|</span>
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPost.readTime}
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h2>
              <div className="space-y-8">
                {posts.slice(1).map((post) => (
                  <article key={post.id} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    <div className="grid sm:grid-cols-3">
                      <div className="bg-gradient-to-br from-slate-200 to-slate-300 h-48 sm:h-auto flex items-center justify-center">
                        <FileText className="w-12 h-12 text-slate-400" />
                      </div>
                      <div className="sm:col-span-2 p-6">
                        <div className="flex items-center mb-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-xs text-slate-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          <span className="mx-2">|</span>
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories */}
              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white transition-colors flex justify-between items-center">
                        <span className="text-slate-600 hover:text-slate-900">{category.name}</span>
                        <span className="text-sm text-slate-400">{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Popular Posts</h3>
                <ul className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <li key={post.id}>
                      <Link to={`/blog/${post.id}`} className="group">
                        <h4 className="text-sm font-medium text-slate-700 group-hover:text-blue-600 line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">{post.readTime}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Subscribe to our newsletter for the latest China sourcing insights and tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;