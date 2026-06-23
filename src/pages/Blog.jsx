import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Clock, User, Tag, Search, ChevronRight
} from 'lucide-react';

const Blog = () => {
  const categories = [
    'All Posts',
    'Sourcing Tips',
    'Quality Control',
    'Factory Verification',
    'Shipping & Logistics',
    'Industry News'
  ];

  const posts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Factory Before Placing an Order',
      excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, production capacity, and quality standards before committing to a large order.',
      category: 'Factory Verification',
      date: 'June 15, 2024',
      readTime: '8 min read',
      image: 'factory-verification'
    },
    {
      id: 2,
      title: 'Understanding Quality Control Inspections: A Complete Guide',
      excerpt: 'Everything you need to know about pre-shipment inspections, AQL standards, and how to ensure product quality when sourcing from China.',
      category: 'Quality Control',
      date: 'June 8, 2024',
      readTime: '12 min read',
      image: 'quality-control'
    },
    {
      id: 3,
      title: 'Top 10 Mistakes to Avoid When Sourcing from China',
      excerpt: 'Common pitfalls that overseas buyers face when sourcing from China and how to avoid them to ensure a successful partnership.',
      category: 'Sourcing Tips',
      date: 'June 1, 2024',
      readTime: '10 min read',
      image: 'sourcing-tips'
    },
    {
      id: 4,
      title: 'Shipping Options from China: FOB, CIF, and EXW Explained',
      excerpt: 'A comprehensive comparison of different shipping terms and Incoterms to help you choose the best option for your business.',
      category: 'Shipping & Logistics',
      date: 'May 25, 2024',
      readTime: '9 min read',
      image: 'shipping'
    },
    {
      id: 5,
      title: 'How to Negotiate with Chinese Suppliers',
      excerpt: 'Proven negotiation strategies and cultural tips to help you get the best prices and terms when dealing with Chinese manufacturers.',
      category: 'Sourcing Tips',
      date: 'May 18, 2024',
      readTime: '7 min read',
      image: 'negotiation'
    },
    {
      id: 6,
      title: 'Understanding Chinese Manufacturing Certifications',
      excerpt: 'A guide to the various certifications your Chinese suppliers should have, including CE, FCC, FDA, and industry-specific standards.',
      category: 'Factory Verification',
      date: 'May 10, 2024',
      readTime: '11 min read',
      image: 'certifications'
    },
    {
      id: 7,
      title: 'Managing Quality Issues with Chinese Suppliers',
      excerpt: 'How to handle quality problems, communicate effectively, and resolve issues without damaging the business relationship.',
      category: 'Quality Control',
      date: 'May 3, 2024',
      readTime: '8 min read',
      image: 'quality-issues'
    },
    {
      id: 8,
      title: 'The Future of Manufacturing in China: Trends for 2024',
      excerpt: 'An analysis of emerging trends in Chinese manufacturing, including automation, sustainability, and shifting production patterns.',
      category: 'Industry News',
      date: 'April 26, 2024',
      readTime: '6 min read',
      image: 'trends'
    },
    {
      id: 9,
      title: 'Sample Ordering: Best Practices for Product Development',
      excerpt: 'How to effectively use samples to develop your product, communicate specifications, and ensure quality before mass production.',
      category: 'Sourcing Tips',
      date: 'April 19, 2024',
      readTime: '9 min read',
      image: 'samples'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '100px 0'
      }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              fontWeight: '700', 
              color: 'white',
              marginBottom: '20px'
            }}>
              Blog
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.9)', 
              lineHeight: '1.7'
            }}>
              Expert insights, tips, and guides for successful China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-light">
        <div className="container">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: index === 0 ? 'none' : '1px solid var(--border)',
                  backgroundColor: index === 0 ? 'var(--primary)' : 'white',
                  color: index === 0 ? 'white' : 'var(--text-secondary)',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="card p-4 mb-8" style={{ maxWidth: '400px' }}>
            <div className="flex items-center gap-3">
              <Search size={20} style={{ color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '16px',
                  width: '100%',
                  backgroundColor: 'transparent'
                }}
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid-3">
            {posts.map((post) => (
              <div key={post.id} className="card" style={{ overflow: 'hidden' }}>
                {/* Image Placeholder */}
                <div style={{ 
                  height: '200px', 
                  backgroundColor: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.1
                }}>
                  <span style={{ color: 'white', fontSize: '48px', fontWeight: 'bold' }}>
                    {post.title.charAt(0)}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ 
                      fontSize: '12px', 
                      fontWeight: '600', 
                      color: 'var(--secondary)',
                      backgroundColor: 'rgba(197, 48, 48, 0.1)',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    marginBottom: '12px', 
                    color: 'var(--text-primary)',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h3>
                  
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '14px', 
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between" style={{ 
                    borderTop: '1px solid var(--border)', 
                    paddingTop: '16px' 
                  }}>
                    <div className="flex items-center gap-2">
                      <Clock size={14} style={{ color: 'var(--text-muted)' }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                        {post.readTime}
                      </span>
                    </div>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="btn btn-primary">
              Load More Articles
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="card p-8" style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: '700', 
              color: 'white',
              marginBottom: '16px'
            }}>
              Subscribe to Our Newsletter
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'rgba(255,255,255,0.9)', 
              marginBottom: '24px',
              maxWidth: '500px',
              margin: '0 auto 24px',
              lineHeight: '1.7'
            }}>
              Get the latest China sourcing insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3" style={{ maxWidth: '450px', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '4px',
                  border: 'none',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
              <button className="btn btn-cta" style={{ whiteSpace: 'nowrap' }}>
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
