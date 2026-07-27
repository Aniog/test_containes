import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const blogPosts = [
  {
    slug: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify factory legitimacy, avoid scams, and find reliable manufacturing partners in China.',
    category: 'Supplier Verification',
    author: 'SSourcing China Team',
    date: 'January 15, 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'quality-inspection-checklist',
    title: 'The Ultimate Pre-Shipment Inspection Checklist',
    excerpt: 'Ensure your products meet specifications before they leave China with this comprehensive inspection guide.',
    category: 'Quality Control',
    author: 'QC Department',
    date: 'January 8, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'shipping-from-china-guide',
    title: 'Shipping from China: Sea Freight vs Air Freight',
    excerpt: 'Compare shipping methods, understand costs, and choose the right logistics solution for your business.',
    category: 'Logistics',
    author: 'Logistics Team',
    date: 'December 28, 2024',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'negotiating-with-chinese-factories',
    title: 'Effective Negotiation Strategies with Chinese Factories',
    excerpt: 'Master the art of negotiation to secure better prices, terms, and partnerships with your Chinese suppliers.',
    category: 'Negotiation',
    author: 'SSourcing China Team',
    date: 'December 15, 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'common-sourcing-mistakes',
    title: '5 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Learn from others\' experiences to sidestep pitfalls that could cost your business time and money.',
    category: 'Best Practices',
    author: 'SSourcing China Team',
    date: 'December 1, 2024',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'understanding-moq',
    title: 'Understanding MOQ: Minimum Order Quantities Explained',
    excerpt: 'Navigate MOQ requirements, negotiate terms, and find suppliers that match your business size.',
    category: 'Supplier Relations',
    author: 'Client Services',
    date: 'November 20, 2024',
    readTime: '6 min read',
    featured: false,
  },
];

const categories = [
  'All Posts',
  'Supplier Verification',
  'Quality Control',
  'Logistics',
  'Negotiation',
  'Best Practices',
  'Industry News',
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              China Sourcing Insights
            </h1>
            <p className="text-xl text-slate-300">
              Practical guidance, industry knowledge, and best practices to help you succeed with China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="block bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-slate-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-200 to-slate-300"
                    data-strk-bg-id="blog-featured-bg-1a2b3c"
                    data-strk-bg={`[${featuredPost.title}] [${featuredPost.category}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="aspect-video bg-slate-200 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"
                      data-strk-bg-id={`blog-post-bg-${post.slug}`}
                      data-strk-bg={`[${post.title}] [${post.category}]`}
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="600"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated on China Sourcing
          </h2>
          <p className="text-slate-600 mb-8">
            Get our latest articles, tips, and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you find reliable suppliers for your products.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
