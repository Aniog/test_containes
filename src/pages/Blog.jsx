import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, FileText, Package, Truck, CheckCircle } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Common Mistakes to Avoid When Sourcing from China',
    excerpt: 'Learn about the most frequent errors buyers make when sourcing products from China and how to avoid them.',
    category: 'Sourcing Guide',
    date: '2024-01-15',
    readTime: '8 min read',
    author: 'David Chen',
  },
  {
    id: 2,
    title: 'Understanding Quality Control Standards: AQL Explained',
    excerpt: 'A comprehensive guide to Acceptable Quality Level (AQL) and how it applies to your product inspections.',
    category: 'Quality Control',
    date: '2024-01-10',
    readTime: '6 min read',
    author: 'Sarah Zhang',
  },
  {
    id: 3,
    title: 'How to Choose the Right Shipping Method for Your China Orders',
    excerpt: 'Compare sea freight, air freight, and express shipping options to find the best solution for your business.',
    category: 'Logistics',
    date: '2024-01-05',
    readTime: '7 min read',
    author: 'Michael Liu',
  },
  {
    id: 4,
    title: 'Factory Audits: What to Look For and How to Prepare',
    excerpt: 'Essential checklist for conducting or commissioning factory audits in China.',
    category: 'Factory Verification',
    date: '2023-12-28',
    readTime: '10 min read',
    author: 'David Chen',
  },
  {
    id: 5,
    title: 'Navigating Chinese Business Culture: Tips for Western Buyers',
    excerpt: 'Understanding business etiquette and communication styles when working with Chinese suppliers.',
    category: 'Business Culture',
    date: '2023-12-20',
    readTime: '5 min read',
    author: 'Lisa Wang',
  },
  {
    id: 6,
    title: 'Managing Product Samples: From Request to Approval',
    excerpt: 'Best practices for requesting, evaluating, and approving product samples from Chinese manufacturers.',
    category: 'Sourcing Guide',
    date: '2023-12-15',
    readTime: '6 min read',
    author: 'Sarah Zhang',
  },
];

const categories = [
  { name: 'Sourcing Guide', icon: <Package className="w-5 h-5" />, count: 12 },
  { name: 'Quality Control', icon: <CheckCircle className="w-5 h-5" />, count: 8 },
  { name: 'Logistics', icon: <Truck className="w-5 h-5" />, count: 6 },
  { name: 'Business Culture', icon: <User className="w-5 h-5" />, count: 4 },
];

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert insights, guides, and tips to help you source products from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-[var(--color-primary)] opacity-50" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-[var(--color-primary)] rounded-full text-xs font-medium mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-lg font-semibold mb-2 text-[var(--color-text)] leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button
                  type="button"
                  className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                >
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-[var(--color-text)]">
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-50 text-[var(--color-primary)] rounded-lg flex items-center justify-center">
                          {category.icon}
                        </div>
                        <span className="font-medium text-[var(--color-text)]">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        ({category.count})
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-blue-700 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">
                  Stay Updated
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest China sourcing tips delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-[var(--color-text)] placeholder-gray-400 outline-none"
                  />
                  <button
                    type="button"
                    className="w-full bg-white text-[var(--color-primary)] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-[var(--color-text)]">
                  Need Help Now?
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  Get personalized advice for your sourcing project.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors w-full justify-center"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
