import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  User,
  Search,
  ArrowUpRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier Before Placing Orders',
      excerpt: 'Learn the essential steps to verify supplier legitimacy, including business license checks, factory visits, and red flags to watch for.',
      category: 'Supplier Verification',
      date: 'June 15, 2024',
      author: 'Michael Chen',
      readTime: '8 min read',
      image: 'factory inspection',
    },
    {
      id: 2,
      title: 'Understanding Quality Control Inspections in China',
      excerpt: 'A comprehensive guide to QC inspections: types of inspections, AQL standards, and how to interpret inspection reports.',
      category: 'Quality Control',
      date: 'June 8, 2024',
      author: 'Sarah Zhang',
      readTime: '10 min read',
      image: 'quality inspection',
    },
    {
      id: 3,
      title: 'Navigating China Shipping: Air vs Sea vs Express',
      excerpt: 'Compare shipping methods from China: costs, transit times, customs clearance, and tips for choosing the right option.',
      category: 'Logistics',
      date: 'June 1, 2024',
      author: 'David Liu',
      readTime: '7 min read',
      image: 'shipping container',
    },
    {
      id: 4,
      title: 'Common Mistakes When Sourcing from China',
      excerpt: 'Avoid these frequent pitfalls that cost buyers time and money. Learn from real examples and best practices.',
      category: 'Sourcing Tips',
      date: 'May 25, 2024',
      author: 'Michael Chen',
      readTime: '6 min read',
      image: 'business meeting',
    },
    {
      id: 5,
      title: 'Understanding Chinese Manufacturing Certifications',
      excerpt: 'A guide to essential Chinese certifications: CE, FCC, RoHS, ISO, and what they mean for your product compliance.',
      category: 'Compliance',
      date: 'May 18, 2024',
      author: 'Sarah Zhang',
      readTime: '9 min read',
      image: 'certification documents',
    },
    {
      id: 6,
      title: 'How to Negotiate with Chinese Suppliers',
      excerpt: 'Proven negotiation strategies for getting the best prices and terms from Chinese manufacturers.',
      category: 'Sourcing Tips',
      date: 'May 11, 2024',
      author: 'David Liu',
      readTime: '8 min read',
      image: 'negotiation business',
    },
  ];

  const categories = [
    'All Posts',
    'Supplier Verification',
    'Quality Control',
    'Logistics',
    'Sourcing Tips',
    'Compliance',
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Insights and expertise on China sourcing, supplier management, and global trade.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-[#1E3A5F] text-white'
                      : 'bg-white text-[#64748B] hover:bg-[#1E3A5F] hover:text-white border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E3A5F] w-64"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] flex items-center justify-center">
                  <span className="text-white/50 text-sm">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#E67E22] bg-[#E67E22]/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1E3A5F] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#64748B] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-[#64748B]">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <button className="text-[#E67E22] font-semibold text-sm flex items-center hover:underline">
                      Read More
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-outline inline-flex items-center">
              Load More Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-[#64748B] mb-8">
            Subscribe to our newsletter for the latest insights on China sourcing.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;