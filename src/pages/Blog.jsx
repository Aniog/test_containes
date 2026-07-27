import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Calendar, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'sourcing', name: 'Sourcing Tips' },
    { id: 'quality', name: 'Quality Control' },
    { id: 'logistics', name: 'Logistics & Shipping' },
    { id: 'suppliers', name: 'Working with Suppliers' },
    { id: 'trends', name: 'Industry Trends' },
  ];

  const posts = [
    {
      id: 'supplier-selection-guide',
      title: 'The Complete Guide to Supplier Selection in China',
      excerpt: 'Learn how to evaluate and select the right suppliers for your products. We cover key criteria, verification methods, and red flags to watch out for.',
      category: 'sourcing',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'supplier verification factory inspection',
      featured: true
    },
    {
      id: 'quality-control-basics',
      title: 'Quality Control 101: What Every Importer Should Know',
      excerpt: 'Understanding AQL, inspection types, and quality standards is essential for any business importing from China. This guide covers the fundamentals.',
      category: 'quality',
      author: 'Michael Zhang',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'quality control inspection product check',
      featured: false
    },
    {
      id: 'shipping-options',
      title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
      excerpt: 'Compare shipping options for your China imports. Learn when to choose sea freight, air freight, or express shipping based on cost, speed, and cargo type.',
      category: 'logistics',
      author: 'David Liu',
      date: '2024-01-05',
      readTime: '5 min read',
      image: 'container shipping logistics freight',
      featured: false
    },
    {
      id: 'negotiation-tips',
      title: '10 Tips for Negotiating with Chinese Suppliers',
      excerpt: 'Effective negotiation can save you money and build stronger supplier relationships. Here are proven strategies from our years of experience.',
      category: 'suppliers',
      author: 'Sarah Chen',
      date: '2023-12-28',
      readTime: '7 min read',
      image: 'business negotiation meeting discussion',
      featured: false
    },
    {
      id: 'payment-terms',
      title: 'Understanding Payment Terms: T/T, L/C, and Other Options',
      excerpt: 'Navigate the complexities of payment terms for China trade. Learn about common payment methods, their risks, and how to protect your interests.',
      category: 'suppliers',
      author: 'Michael Zhang',
      date: '2023-12-20',
      readTime: '6 min read',
      image: 'business contract payment negotiation',
      featured: false
    },
    {
      id: 'sample-management',
      title: 'The Importance of Sample Approval in Product Development',
      excerpt: 'Never skip the sample approval process. This article explains why samples matter and how to manage them effectively for successful production.',
      category: 'quality',
      author: 'David Liu',
      date: '2023-12-15',
      readTime: '5 min read',
      image: 'product samples quality inspection',
      featured: false
    },
    {
      id: 'china-manufacturing-2024',
      title: 'China Manufacturing Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with our analysis of emerging trends in China manufacturing, including automation, sustainability, and shifting supply chains.',
      category: 'trends',
      author: 'Sarah Chen',
      date: '2023-12-10',
      readTime: '10 min read',
      image: 'modern factory manufacturing automation',
      featured: false
    },
    {
      id: 'cultural-differences',
      title: 'Navigating Cultural Differences in China Business',
      excerpt: 'Understanding Chinese business culture can give you an edge in negotiations and relationship building. Learn about key customs and communication styles.',
      category: 'suppliers',
      author: 'Michael Zhang',
      date: '2023-12-05',
      readTime: '8 min read',
      image: 'business meeting cultural exchange',
      featured: false
    },
    {
      id: 'incoterms-guide',
      title: 'Incoterms Explained: FOB, CIF, DDP and More',
      excerpt: 'Understanding Incoterms is crucial for international trade. This guide breaks down the most common terms and what they mean for your shipments.',
      category: 'logistics',
      author: 'David Liu',
      date: '2023-11-28',
      readTime: '7 min read',
      image: 'shipping container logistics warehouse',
      featured: false
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A7B] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge badge-accent mb-4">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Expert insights, practical tips, and industry knowledge to help you 
              navigate China sourcing successfully.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !searchTerm && selectedCategory === 'all' && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <span className="badge badge-accent mb-4">Featured Article</span>
            <Link to={`/blog/${featuredPost.id}`} className="grid lg:grid-cols-2 gap-12 items-center group">
              <div className="aspect-video rounded-xl overflow-hidden bg-[#EFF3F8]">
                <img
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-strk-img-id={`blog-featured`}
                  data-strk-img={`[blog-featured-title] manufacturing sourcing`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <h3 id="blog-featured-title" className="sr-only">{featuredPost.title}</h3>
              </div>
              <div>
                <span className="badge badge-primary mb-4">
                  {categories.find(c => c.id === featuredPost.category)?.name}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#E67E22] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-[#6B7280] mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-6 text-sm text-[#6B7280]">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#1E3A5F] text-white'
                    : 'bg-[#EFF3F8] text-[#1F2937] hover:bg-[#CBD5E1]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#6B7280] text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm || selectedCategory !== 'all' ? filteredPosts : regularPosts).map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="card overflow-hidden p-0 group"
                >
                  <div className="aspect-video overflow-hidden bg-[#EFF3F8]">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-strk-img-id={`blog-${post.id}`}
                      data-strk-img={`[blog-${post.id}-title] sourcing manufacturing`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-6">
                    <span className="badge badge-primary mb-3">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <h3 id={`blog-${post.id}-title`} className="text-lg font-bold mb-3 group-hover:text-[#E67E22] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-[#6B7280]">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="bg-[#EFF3F8] rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Sourcing Insights
            </h2>
            <p className="text-[#6B7280] mb-8">
              Subscribe to our newsletter for weekly tips, industry updates, and expert advice on China sourcing.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Put our expertise to work for your business. Contact us for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
