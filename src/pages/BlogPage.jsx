import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Search, Tag } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier Before You Commit',
      excerpt: 'Learn the essential steps to verify a supplier\'s legitimacy, including business license checks, factory visits, and red flags to watch out for.',
      category: 'Supplier Verification',
      author: 'James Liu',
      date: '2024-12-15',
      readTime: '8 min read',
      image: 'factory inspection verification',
    },
    {
      id: 2,
      title: 'Understanding Incoterms: A Guide for Importers',
      excerpt: 'Navigate the world of international trade terms. We explain EXW, FOB, CIF, and other Incoterms you need to know when sourcing from China.',
      category: 'Shipping & Logistics',
      author: 'Sarah Chen',
      date: '2024-12-10',
      readTime: '10 min read',
      image: 'shipping container logistics',
    },
    {
      id: 3,
      title: 'Quality Control Inspection Checklist: What to Look For',
      excerpt: 'A comprehensive checklist for product inspections. Learn what to examine, how to use AQL sampling, and common defects to watch for.',
      category: 'Quality Control',
      author: 'Michael Zhang',
      date: '2024-12-05',
      readTime: '12 min read',
      image: 'quality inspection factory',
    },
    {
      id: 4,
      title: 'How to Negotiate with Chinese Suppliers',
      excerpt: 'Master the art of negotiation with Chinese manufacturers. Learn cultural nuances, pricing strategies, and how to get the best terms.',
      category: 'Negotiation',
      author: 'David Wang',
      date: '2024-11-28',
      readTime: '9 min read',
      image: 'business meeting negotiation',
    },
    {
      id: 5,
      title: 'Understanding Minimum Order Quantities (MOQ)',
      excerpt: 'Everything you need to know about MOQs. How to negotiate lower minimums, when to pay premiums, and strategies for small businesses.',
      category: 'Sourcing Basics',
      author: 'Emily Liu',
      date: '2024-11-20',
      readTime: '7 min read',
      image: 'warehouse products manufacturing',
    },
    {
      id: 6,
      title: 'Shipping from China: Air vs Sea Freight',
      excerpt: 'Compare air and sea freight options for your imports. We break down costs, transit times, and when to choose each method.',
      category: 'Shipping & Logistics',
      author: 'James Liu',
      date: '2024-11-12',
      readTime: '11 min read',
      image: 'cargo ship port',
    },
    {
      id: 7,
      title: 'Common Scams When Sourcing from China and How to Avoid Them',
      excerpt: 'Protect yourself from fraud. We outline the most common supplier scams and practical steps to verify legitimacy.',
      category: 'Supplier Verification',
      author: 'Sarah Chen',
      date: '2024-11-05',
      readTime: '10 min read',
      image: 'document verification security',
    },
    {
      id: 8,
      title: 'Sample Management: Getting What You Need Before Production',
      excerpt: 'Learn how to effectively manage sample requests, evaluate quality, and use samples to secure better production terms.',
      category: 'Quality Control',
      author: 'Michael Zhang',
      date: '2024-10-28',
      readTime: '8 min read',
      image: 'product samples inspection',
    },
    {
      id: 9,
      title: 'Payment Terms: Understanding TT, LC, and Trade Assurance',
      excerpt: 'Navigate payment options for China sourcing. Compare Telegraphic Transfer, Letter of Credit, and platform trade assurance.',
      category: 'Finance',
      author: 'David Wang',
      date: '2024-10-20',
      readTime: '9 min read',
      image: 'business finance documents',
    },
  ];

  const categories = [
    'All Categories',
    'Supplier Verification',
    'Quality Control',
    'Shipping & Logistics',
    'Negotiation',
    'Sourcing Basics',
    'Finance',
  ];

  const featuredPost = {
    title: 'The Complete Guide to Sourcing from China in 2025',
    excerpt: 'Everything you need to know about sourcing products from China, from finding suppliers to shipping your first order. Updated for 2025.',
    category: 'Sourcing Basics',
    author: 'James Liu',
    date: '2024-12-20',
    readTime: '25 min read',
    image: 'china manufacturing overview',
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-200">
              Expert insights, tips, and guides on sourcing from China. Stay informed with the latest industry knowledge and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-white">
        <div className="container">
          <div className="card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div 
                className="aspect-[16/9] lg:aspect-auto lg:h-full bg-gray-200"
                data-strk-bg-id="featured-blog"
                data-strk-bg={`${featuredPost.image} manufacturing`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="800"
              ></div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium rounded-full w-fit mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-[var(--color-text-secondary)] mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link
                  to="/blog/complete-guide-sourcing-china-2025"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold"
                >
                  Read Full Article <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card overflow-hidden group">
                <div 
                  className="aspect-[16/9] bg-gray-200"
                  data-strk-bg-id={`blog-${post.id}`}
                  data-strk-bg={`${post.image} manufacturing`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                ></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="card p-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-200 mb-8">
                Subscribe to our newsletter for the latest insights on China sourcing, industry trends, and practical tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded text-[var(--color-text-primary)]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[var(--color-secondary)] text-white rounded font-semibold hover:bg-[#9b2c2c] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help with Sourcing?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              Our team of experts is ready to help you find reliable suppliers in China. Get personalized assistance for your sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-secondary)] text-white px-10 py-4 rounded font-semibold text-lg hover:bg-[#9b2c2c] transition-colors"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;