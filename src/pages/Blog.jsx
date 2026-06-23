import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Search, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, including business license checks, facility audits, and red flags to watch for.',
    category: 'Sourcing Guide',
    date: '2024-01-15',
    readTime: '8 min read',
    author: 'Michael Chen',
    image: 'factory inspection',
  },
  {
    id: 2,
    title: 'Understanding Quality Control Inspections: A Complete Guide',
    excerpt: 'Everything you need to know about QC inspections - types, standards, and how to interpret inspection reports for better decision-making.',
    category: 'Quality Control',
    date: '2024-01-10',
    readTime: '10 min read',
    author: 'Sarah Zhang',
    image: 'quality inspection',
  },
  {
    id: 3,
    title: 'Shipping from China: FOB, CIF, and EXW Explained',
    excerpt: 'Navigate the complexities of international shipping terms. Learn the differences between FOB, CIF, EXW and choose the right option for your business.',
    category: 'Logistics',
    date: '2024-01-05',
    readTime: '7 min read',
    author: 'David Liu',
    image: 'shipping container',
  },
  {
    id: 4,
    title: 'How to Negotiate with Chinese Suppliers',
    excerpt: 'Master the art of negotiation with Chinese factories. Learn cultural insights, pricing strategies, and tactics to get the best deals.',
    category: 'Negotiation',
    date: '2023-12-28',
    readTime: '9 min read',
    author: 'Michael Chen',
    image: 'business meeting',
  },
  {
    id: 5,
    title: 'Common Mistakes When Sourcing from China',
    excerpt: 'Avoid these frequent pitfalls that cost businesses time and money. Learn from real examples and protect your sourcing investment.',
    category: 'Sourcing Guide',
    date: '2023-12-20',
    readTime: '6 min read',
    author: 'Sarah Zhang',
    image: 'warehouse',
  },
  {
    id: 6,
    title: 'Understanding MOQ: Minimum Order Quantities Explained',
    excerpt: 'Everything about MOQs - what they mean, how to negotiate them, and strategies for testing products before committing to large orders.',
    category: 'Sourcing Guide',
    date: '2023-12-15',
    readTime: '5 min read',
    author: 'David Liu',
    image: 'products warehouse',
  },
  {
    id: 7,
    title: 'Protecting Your Intellectual Property When Sourcing from China',
    excerpt: 'Learn essential strategies to protect your designs, trademarks, and patents when working with Chinese manufacturers.',
    category: 'Legal',
    date: '2023-12-10',
    readTime: '8 min read',
    author: 'James Wong',
    image: 'patent documents',
  },
  {
    id: 8,
    title: 'Sample Development Process: From Idea to Production',
    excerpt: 'A step-by-step guide to developing product samples with Chinese factories, including feedback loops and approval processes.',
    category: 'Production',
    date: '2023-12-05',
    readTime: '7 min read',
    author: 'Sarah Zhang',
    image: 'product sample',
  },
  {
    id: 9,
    title: 'Payment Terms with Chinese Suppliers: Best Practices',
    excerpt: 'Understand common payment terms, risks, and safe practices for paying your Chinese suppliers. Protect your business from fraud.',
    category: 'Finance',
    date: '2023-11-28',
    readTime: '6 min read',
    author: 'Michael Chen',
    image: 'payment',
  },
];

const categories = [
  'All',
  'Sourcing Guide',
  'Quality Control',
  'Logistics',
  'Negotiation',
  'Production',
  'Legal',
  'Finance',
];

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] py-20 lg:py-28">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Blog & Resources
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Expert insights, guides, and tips for successful China sourcing. 
              Stay informed with the latest industry knowledge.
            </p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#1E3A5F]/10 to-[#1E3A5F]/5 flex items-center justify-center">
                <span className="text-[#1E3A5F]/30 text-6xl font-bold">Featured</span>
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-[#F97316]/10 text-[#F97316] text-sm font-medium rounded-full mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {blogPosts[0].title}
                </h2>
                <p className="mt-4 text-gray-600">
                  {blogPosts[0].excerpt}
                </p>
                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  to="/blog/how-to-verify-chinese-factory"
                  className="mt-6 inline-flex items-center text-[#F97316] font-medium hover:underline"
                >
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-[#1E3A5F] text-white'
                    : 'bg-white text-gray-600 hover:bg-[#1E3A5F] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-[#1E3A5F]/10 to-[#1E3A5F]/5 flex items-center justify-center">
                  <span className="text-[#1E3A5F]/30 text-4xl font-bold">{post.category[0]}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1E3A5F] rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Stay Updated
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest China sourcing insights, 
              tips, and industry updates delivered to your inbox.
            </p>
            <form className="mt-8 max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#F97316] text-white font-medium rounded-lg hover:bg-[#EA580C] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Need Help With Sourcing?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our team of experts is ready to assist you. Get personalized guidance 
            for your China sourcing needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2D5A8A] transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;