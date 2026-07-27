import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Clock, 
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier Before Placing an Order',
      excerpt: 'Learn the essential steps to verify a supplier\'s legitimacy, including business license checks, factory visits, and background verification.',
      category: 'Supplier Verification',
      date: 'January 15, 2026',
      readTime: '8 min read',
      image: 'supplier-verification',
    },
    {
      id: 2,
      title: 'Understanding Quality Control Inspections in China',
      excerpt: 'A comprehensive guide to different types of QC inspections - pre-production, during production, and pre-shipment inspections.',
      category: 'Quality Control',
      date: 'January 8, 2026',
      readTime: '10 min read',
      image: 'quality-inspection',
    },
    {
      id: 3,
      title: 'Navigating Chinese Manufacturing MOQs',
      excerpt: 'Everything you need to know about Minimum Order Quantities and how to negotiate favorable terms with Chinese factories.',
      category: 'Sourcing Tips',
      date: 'December 28, 2025',
      readTime: '6 min read',
      image: 'moq-negotiation',
    },
    {
      id: 4,
      title: 'Shipping from China: FOB, CIF, and EXW Explained',
      excerpt: 'Understanding different Incoterms and which shipping terms are best for your business when sourcing from China.',
      category: 'Logistics',
      date: 'December 20, 2025',
      readTime: '7 min read',
      image: 'shipping-terms',
    },
    {
      id: 5,
      title: 'Common Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn about the most common pitfalls in China sourcing and how to avoid them to ensure successful orders.',
      category: 'Sourcing Tips',
      date: 'December 12, 2025',
      readTime: '9 min read',
      image: 'sourcing-mistakes',
    },
    {
      id: 6,
      title: 'How to Protect Your Intellectual Property in China',
      excerpt: 'Essential strategies for protecting your designs, trademarks, and patents when manufacturing in China.',
      category: 'Legal & Compliance',
      date: 'December 5, 2025',
      readTime: '8 min read',
      image: 'ip-protection',
    },
    {
      id: 7,
      title: 'The Role of a Sourcing Agent in China Trade',
      excerpt: 'Discover how working with a sourcing agent can help you navigate the complexities of importing from China.',
      category: 'Sourcing Tips',
      date: 'November 28, 2025',
      readTime: '6 min read',
      image: 'sourcing-agent',
    },
    {
      id: 8,
      title: 'Understanding Chinese Factory Certifications',
      excerpt: 'A guide to various Chinese factory certifications including ISO, CE, UL, and what they mean for your products.',
      category: 'Quality Control',
      date: 'November 20, 2025',
      readTime: '7 min read',
      image: 'factory-certifications',
    },
    {
      id: 9,
      title: 'Managing Quality Issues with Chinese Suppliers',
      excerpt: 'How to effectively handle and resolve quality issues with your Chinese suppliers while maintaining good relationships.',
      category: 'Quality Control',
      date: 'November 12, 2025',
      readTime: '8 min read',
      image: 'quality-issues',
    },
  ];

  const categories = [
    'All Posts',
    'Supplier Verification',
    'Quality Control',
    'Sourcing Tips',
    'Logistics',
    'Legal & Compliance',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Expert guidance on China sourcing, supplier verification, quality control, 
              and international trade. Stay informed with the latest insights from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-[#1E3A5F] text-white'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="card overflow-hidden p-0 group">
                <div className="h-48 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] flex items-center justify-center relative">
                  <FileText className="w-16 h-16 text-white/30" />
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#64748B] mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3 group-hover:text-[#F97316] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-[#64748B] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to="#" 
                    className="inline-flex items-center text-sm font-medium text-[#F97316] hover:text-[#EA580C]"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="bg-[#1E3A5F] rounded-xl p-8 md:p-12 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated on China Sourcing
              </h2>
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights on sourcing from China, 
                supplier management, and international trade.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
            Need Help with Your China Sourcing?
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto mb-8">
            Our team of experts is ready to assist you with supplier verification, quality control, 
            and end-to-end sourcing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;