import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, Share2, MessageCircle } from 'lucide-react';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';

const blogPosts = [
  {
    id: 1,
    title: "How to Verify a Chinese Factory Before Placing Orders",
    excerpt: "Learn the essential steps to verify factory legitimacy, assess production capacity, and avoid scams when sourcing from China. Our comprehensive guide covers everything from business license checks to on-site visit protocols.",
    category: "Factory Verification",
    date: "January 15, 2026",
    readTime: "8 min read",
    author: "Michael Chen",
    comments: 12,
    featured: true
  },
  {
    id: 2,
    title: "Understanding AQL Standards for Product Inspection",
    excerpt: "A comprehensive guide to Acceptable Quality Limit standards and how to apply them effectively in your quality control process. Learn about sampling methods, defect classifications, and acceptance criteria.",
    category: "Quality Control",
    date: "January 10, 2026",
    readTime: "6 min read",
    author: "Sarah Liu",
    comments: 8,
    featured: false
  },
  {
    id: 3,
    title: "Shipping from China: FOB vs CIF Explained",
    excerpt: "Clear explanation of shipping terms, cost implications, and recommendations for choosing the right Incoterm for your business. Understand when to use FOB, CIF, and other common terms.",
    category: "Shipping & Logistics",
    date: "January 5, 2026",
    readTime: "5 min read",
    author: "James Zhang",
    comments: 15,
    featured: false
  },
  {
    id: 4,
    title: "The Complete Guide to Sample Orders from China",
    excerpt: "Everything you need to know about requesting samples: costs, shipping methods, evaluation criteria, and negotiation tips. Learn how to make the most of your sample phase.",
    category: "Sourcing Process",
    date: "December 28, 2025",
    readTime: "7 min read",
    author: "Emily Wong",
    comments: 6,
    featured: false
  },
  {
    id: 5,
    title: "Common Payment Terms for China Trade",
    excerpt: "Navigate the world of payment methods: T/T, L/C, PayPal, and more. Understand the risks and benefits of each option and how to protect your business.",
    category: "Trade Finance",
    date: "December 20, 2025",
    readTime: "6 min read",
    author: "Michael Chen",
    comments: 10,
    featured: false
  },
  {
    id: 6,
    title: "How to Negotiate with Chinese Suppliers",
    excerpt: "Cultural insights and practical strategies for effective negotiations. Learn about common practices, expected discounts, and how to build long-term supplier relationships.",
    category: "Negotiation",
    date: "December 15, 2025",
    readTime: "9 min read",
    author: "Sarah Liu",
    comments: 18,
    featured: false
  },
  {
    id: 7,
    title: "Protecting Your Intellectual Property in China",
    excerpt: "Essential strategies for safeguarding your designs, trademarks, and patents when manufacturing in China. Learn about registration, due diligence, and enforcement options.",
    category: "Legal & Compliance",
    date: "December 10, 2025",
    readTime: "8 min read",
    author: "David Wu",
    comments: 14,
    featured: false
  },
  {
    id: 8,
    title: "Understanding Chinese Manufacturing Costs",
    excerpt: "Breakdown of what goes into product pricing: materials, labor, overhead, and margins. Learn to read quotes and identify potential red flags.",
    category: "Cost Analysis",
    date: "December 5, 2025",
    readTime: "7 min read",
    author: "James Zhang",
    comments: 11,
    featured: false
  },
  {
    id: 9,
    title: "Quality Documentation Every Buyer Needs",
    excerpt: "The essential documents for protecting your order: specifications sheets, QC plans, inspection reports, and shipping documents. Templates and examples included.",
    category: "Quality Control",
    date: "November 28, 2025",
    readTime: "6 min read",
    author: "Emily Wong",
    comments: 7,
    featured: false
  }
];

const categories = ["All Categories", "Factory Verification", "Quality Control", "Shipping & Logistics", "Sourcing Process", "Trade Finance", "Negotiation", "Legal & Compliance", "Cost Analysis"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div>
      <Hero
        title="China Sourcing Blog"
        subtitle="Expert insights, practical guides, and industry knowledge to help you succeed in sourcing from China."
        ctaText="Get Expert Help"
        secondaryCta="View Services"
        secondaryLink="/services"
        showTrust={false}
      />
      
      {/* Featured Post */}
      {featuredPost && selectedCategory === "All Categories" && !searchQuery && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary to-secondary p-12 flex flex-col justify-center text-white">
                  <span className="text-accent text-sm font-semibold mb-4">Featured Article</span>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-200 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <button className="btn-primary w-fit">
                    Read Article
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
                <div className="bg-bg-alt p-12 flex items-center justify-center">
                  <div className="text-6xl text-primary/20 font-bold text-center px-8">
                    QC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Search & Filter */}
      <section className="bg-bg-light py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter size={20} className="text-text-muted flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-accent text-white'
                      : 'bg-white text-text-secondary hover:bg-bg-alt'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(searchQuery || selectedCategory !== "All Categories" ? filteredPosts : regularPosts).map((post) => (
              <article key={post.id} className="card overflow-hidden group cursor-pointer">
                {/* Category Badge */}
                <div className="bg-primary px-4 py-2">
                  <span className="text-accent text-sm font-semibold">{post.category}</span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-text-muted text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-text-muted text-sm">By {post.author}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-text-muted text-sm">
                        <MessageCircle size={14} />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="px-6 pb-4">
                  <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with China Sourcing Insights
            </h2>
            <p className="text-gray-300 mb-8">
              Get our latest articles, guides, and industry news delivered to your inbox. No spam, just valuable content.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
