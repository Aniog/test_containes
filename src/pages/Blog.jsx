import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Search, TrendingUp, Shield, Truck, FileText, CheckCircle } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Factory Before Placing Orders',
      excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, production capacity, and certifications before committing to large orders.',
      category: 'Factory Verification',
      date: 'June 20, 2026',
      author: 'Michael Chen',
      readTime: '8 min read',
      featured: true,
    },
    {
      id: 2,
      title: 'Understanding Quality Control Inspections: AQL Explained',
      excerpt: 'A comprehensive guide to Acceptable Quality Level (AQL) sampling and how to set appropriate inspection standards for your products.',
      category: 'Quality Control',
      date: 'June 15, 2026',
      author: 'Sarah Zhang',
      readTime: '6 min read',
      featured: false,
    },
    {
      id: 3,
      title: 'Incoterms 2020: A Practical Guide for Importers',
      excerpt: 'Navigate the complexities of international trade terms. Learn about FOB, CIF, DDP, and other Incoterms to avoid costly mistakes.',
      category: 'Shipping & Logistics',
      date: 'June 10, 2026',
      author: 'David Liu',
      readTime: '10 min read',
      featured: false,
    },
    {
      id: 4,
      title: 'Common Scams When Sourcing from China and How to Avoid Them',
      excerpt: 'Protect your business from fraud. We outline the most common scams and provide practical tips to ensure safe transactions.',
      category: 'Sourcing Tips',
      date: 'June 5, 2026',
      author: 'Michael Chen',
      readTime: '7 min read',
      featured: false,
    },
    {
      id: 5,
      title: 'How to Negotiate with Chinese Suppliers',
      excerpt: 'Master the art of negotiation. Learn cultural insights and practical strategies to get the best prices and terms from manufacturers.',
      category: 'Sourcing Tips',
      date: 'May 28, 2026',
      author: 'Jennifer Wang',
      readTime: '9 min read',
      featured: false,
    },
    {
      id: 6,
      title: 'Shipping Methods Compared: Sea Freight vs Air Freight',
      excerpt: 'A detailed comparison of shipping methods to help you choose the most cost-effective option for your business needs.',
      category: 'Shipping & Logistics',
      date: 'May 20, 2026',
      author: 'David Liu',
      readTime: '5 min read',
      featured: false,
    },
    {
      id: 7,
      title: 'Understanding Chinese Factory Certifications',
      excerpt: 'A guide to common Chinese factory certifications including ISO, CE, FCC, and industry-specific standards.',
      category: 'Factory Verification',
      date: 'May 15, 2026',
      author: 'Sarah Zhang',
      readTime: '8 min read',
      featured: false,
    },
    {
      id: 8,
      title: 'Product Development in China: From Prototype to Production',
      excerpt: 'Navigate the product development process in China. Learn how to turn your ideas into market-ready products.',
      category: 'Product Development',
      date: 'May 10, 2026',
      author: 'Jennifer Wang',
      readTime: '11 min read',
      featured: false,
    },
    {
      id: 9,
      title: 'Managing Quality Issues with Chinese Suppliers',
      excerpt: 'Effective strategies for addressing and resolving quality issues while maintaining strong supplier relationships.',
      category: 'Quality Control',
      date: 'May 5, 2026',
      author: 'Michael Chen',
      readTime: '6 min read',
      featured: false,
    },
  ];

  const categories = [
    'All Posts',
    'Factory Verification',
    'Quality Control',
    'Shipping & Logistics',
    'Sourcing Tips',
    'Product Development',
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)',
        padding: '160px 0 100px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: '700', marginBottom: '24px' }}>
              Blog & Insights
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '20px', lineHeight: '1.6' }}>
              Expert guidance on China sourcing, factory verification, quality control, and international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section" style={{ backgroundColor: '#F8FAFC', paddingBottom: '0' }}>
          <div className="container">
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }} className="featured-post">
              <div style={{ 
                backgroundColor: '#1E3A5F', 
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <span style={{ 
                  backgroundColor: '#C9A227', 
                  color: '#1E3A5F', 
                  padding: '4px 12px', 
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: '600',
                  display: 'inline-block',
                  marginBottom: '20px',
                  width: 'fit-content',
                }}>
                  Featured
                </span>
                <h2 style={{ color: '#FFFFFF', fontSize: '28px', marginBottom: '16px', lineHeight: '1.3' }}>
                  {featuredPost.title}
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                    <Calendar size={16} />
                    {featuredPost.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                    <User size={16} />
                    {featuredPost.author}
                  </div>
                </div>
                <Link
                  to="/blog/post-1"
                  style={{
                    backgroundColor: '#C9A227',
                    color: '#1E3A5F',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: 'fit-content',
                  }}
                >
                  Read Article <ArrowRight size={18} />
                </Link>
              </div>
              <div style={{ 
                backgroundColor: '#E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center', padding: '48px' }}>
                  <FileText size={64} color="#1E3A5F" />
                  <p style={{ marginTop: '16px', color: '#4A5568', fontSize: '14px' }}>Article Preview</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          {/* Categories */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((category, index) => (
              <button
                key={index}
                style={{
                  padding: '10px 20px',
                  borderRadius: '999px',
                  border: index === 0 ? 'none' : '1px solid #E2E8F0',
                  backgroundColor: index === 0 ? '#1E3A5F' : '#FFFFFF',
                  color: index === 0 ? '#FFFFFF' : '#4A5568',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="blog-grid">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article
                key={post.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ 
                  height: '180px', 
                  backgroundColor: '#E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <FileText size={48} color="#1E3A5F" />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ 
                      backgroundColor: 'rgba(30, 58, 95, 0.1)', 
                      color: '#1E3A5F', 
                      padding: '4px 10px', 
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}>
                      {post.category}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '12px', lineHeight: '1.4' }}>{post.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4A5568', marginBottom: '16px' }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#718096', fontSize: '12px' }}>
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div style={{ color: '#718096', fontSize: '12px' }}>
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              style={{
                backgroundColor: '#FFFFFF',
                color: '#1E3A5F',
                border: '2px solid #1E3A5F',
                padding: '14px 32px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '15px',
                transition: 'all 0.2s ease',
              }}
            >
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>
              Stay Updated
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px', marginBottom: '32px' }}>
              Subscribe to our newsletter for the latest China sourcing insights and tips.
            </p>
            <div style={{ display: 'flex', gap: '12px', maxWidth: '450px', margin: '0 auto' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  borderRadius: '4px',
                  border: 'none',
                  fontSize: '15px',
                }}
              />
              <button
                style={{
                  backgroundColor: '#C9A227',
                  color: '#1E3A5F',
                  padding: '14px 28px',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '15px',
                  border: 'none',
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .featured-post { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Blog;