import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock,
  Search,
  Tag
} from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier Before Placing an Order',
      excerpt: 'Learn the essential steps to verify supplier legitimacy, including business license checks, factory audits, and background verification.',
      category: 'Supplier Verification',
      author: 'David Chen',
      date: '2024-12-15',
      readTime: '8 min read',
      image: 'supplier-verification',
    },
    {
      id: 2,
      title: 'Understanding Quality Control Inspections in China',
      excerpt: 'A comprehensive guide to QC inspections: pre-production, during production, and pre-shipment inspections. When to do each and what to look for.',
      category: 'Quality Control',
      author: 'Sarah Zhang',
      date: '2024-12-10',
      readTime: '10 min read',
      image: 'quality-control',
    },
    {
      id: 3,
      title: 'Navigating Chinese Factory MOQs: Strategies for Small Orders',
      excerpt: 'How to work with factories when you have low minimum order quantities. Tips for negotiating MOQs and building relationships.',
      category: 'Sourcing Tips',
      author: 'Michael Liu',
      date: '2024-12-05',
      readTime: '6 min read',
      image: 'factory-moq',
    },
    {
      id: 4,
      title: 'Shipping from China: FOB, CIF, EXW - What\'s the Difference?',
      excerpt: 'Understanding incoterms and shipping terms. How to choose the right shipping method for your business needs.',
      category: 'Logistics',
      author: 'James Wang',
      date: '2024-11-28',
      readTime: '7 min read',
      image: 'shipping-terms',
    },
    {
      id: 5,
      title: 'Common Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn from the experiences of other buyers. Top mistakes that can cost you time and money when sourcing from China.',
      category: 'Sourcing Tips',
      author: 'Emily Zhang',
      date: '2024-11-20',
      readTime: '5 min read',
      image: 'sourcing-mistakes',
    },
    {
      id: 6,
      title: 'How to Protect Your Intellectual Property When Manufacturing in China',
      excerpt: 'Essential strategies for protecting your designs, patents, and trademarks when working with Chinese manufacturers.',
      category: 'Legal & Compliance',
      author: 'Robert Chen',
      date: '2024-11-12',
      readTime: '9 min read',
      image: 'ip-protection',
    },
    {
      id: 7,
      title: 'Sample Management: Getting What You Expect',
      excerpt: 'How to effectively manage the sample process to ensure your final products match your specifications.',
      category: 'Quality Control',
      author: 'Lisa Yang',
      date: '2024-11-05',
      readTime: '6 min read',
      image: 'sample-management',
    },
    {
      id: 8,
      title: 'Building Long-Term Relationships with Chinese Suppliers',
      excerpt: 'Tips for developing strong, mutually beneficial relationships with your suppliers in China.',
      category: 'Business Culture',
      author: 'Tom Liu',
      date: '2024-10-28',
      readTime: '7 min read',
      image: 'supplier-relationships',
    },
    {
      id: 9,
      title: 'Understanding Chinese Factory Certifications',
      excerpt: 'A guide to common Chinese factory certifications: ISO, CE, FCC, and what they mean for your product requirements.',
      category: 'Legal & Compliance',
      author: 'Anna Wang',
      date: '2024-10-20',
      readTime: '8 min read',
      image: 'factory-certifications',
    },
  ];

  const categories = [
    'All Posts',
    'Supplier Verification',
    'Quality Control',
    'Sourcing Tips',
    'Logistics',
    'Legal & Compliance',
    'Business Culture',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Expert guidance on sourcing from China. Tips, best practices, and industry insights to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-primary text-white'
                      : 'bg-white text-text-muted hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-background rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-primary/30" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-dark mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-text-muted text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <Link to="/blog" className="absolute inset-0">
                  <span className="sr-only">Read {post.title}</span>
                </Link>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors">
              Load More Articles
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Subscribe to our newsletter for the latest sourcing tips, industry news, and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-text-dark outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;