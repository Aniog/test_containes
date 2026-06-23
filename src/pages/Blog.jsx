import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Eye, Search, FileText, Shield, Truck, CheckCircle } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Factory Before Placing an Order',
      excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, including business license checks, on-site visits, and red flags to watch for.',
      category: 'Supplier Verification',
      date: 'June 10, 2026',
      author: 'Michael Chen',
      readTime: '8 min read',
      image: 'factory-verification'
    },
    {
      id: 2,
      title: 'Understanding Quality Control Inspections in China',
      excerpt: 'A comprehensive guide to QC inspections: types of inspections, what to check, and how to interpret inspection reports.',
      category: 'Quality Control',
      date: 'June 5, 2026',
      author: 'Sarah Zhang',
      readTime: '10 min read',
      image: 'quality-inspection'
    },
    {
      id: 3,
      title: 'Shipping from China: A Complete Guide for Importers',
      excerpt: 'Everything you need to know about shipping from China: freight options, customs clearance, documentation, and cost optimization.',
      category: 'Shipping',
      date: 'May 28, 2026',
      author: 'David Liu',
      readTime: '12 min read',
      image: 'shipping-guide'
    },
    {
      id: 4,
      title: 'Common Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn from the mistakes others have made. We cover communication issues, contract pitfalls, and quality control oversights.',
      category: 'Sourcing Tips',
      date: 'May 20, 2026',
      author: 'Michael Chen',
      readTime: '7 min read',
      image: 'sourcing-mistakes'
    },
    {
      id: 5,
      title: 'How to Negotiate with Chinese Suppliers',
      excerpt: 'Master the art of negotiation with Chinese factories. Learn about pricing, payment terms, and building long-term relationships.',
      category: 'Sourcing Tips',
      date: 'May 12, 2026',
      author: 'Sarah Zhang',
      readTime: '9 min read',
      image: 'negotiation'
    },
    {
      id: 6,
      title: 'Understanding MOQs and How to Work Around Them',
      excerpt: 'Minimum order quantities can be a barrier for small businesses. Learn strategies to negotiate lower MOQs or find flexible suppliers.',
      category: 'Sourcing Tips',
      date: 'May 5, 2026',
      author: 'David Liu',
      readTime: '6 min read',
      image: 'moq-guide'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 12 },
    { name: 'Supplier Verification', count: 3 },
    { name: 'Quality Control', count: 3 },
    { name: 'Shipping', count: 2 },
    { name: 'Sourcing Tips', count: 4 }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Expert insights on China sourcing, supplier verification, quality control, and international trade
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {posts.map((post) => (
                  <article key={post.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      {post.category === 'Supplier Verification' && <Shield className="w-16 h-16 text-blue-300" />}
                      {post.category === 'Quality Control' && <CheckCircle className="w-16 h-16 text-blue-300" />}
                      {post.category === 'Shipping' && <Truck className="w-16 h-16 text-blue-300" />}
                      {post.category === 'Sourcing Tips' && <FileText className="w-16 h-16 text-blue-300" />}
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-900 text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-900">
                        <Link to="/blog">{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to="/blog"
                        className="flex items-center justify-between text-gray-600 hover:text-blue-900"
                      >
                        <span>{category.name}</span>
                        <span className="text-gray-400 text-sm">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-900 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-blue-200 text-sm mb-4">Get the latest China sourcing insights delivered to your inbox.</p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 mb-3"
                />
                <button className="w-full py-3 bg-blue-500 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with Sourcing?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you find reliable suppliers in China
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;