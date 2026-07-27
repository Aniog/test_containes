import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Calendar, Clock, User, Search,
  TrendingUp, Shield, Truck, Factory, CheckCircle
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'How to Verify a Chinese Factory Before Placing Orders',
    excerpt: 'A comprehensive guide to conducting factory verification in China, including what to look for, questions to ask, and red flags to avoid.',
    category: 'Factory Verification',
    date: 'July 20, 2026',
    readTime: '8 min read',
    image: 'factory',
  };

  const posts = [
    {
      title: 'Understanding MOQ: Minimum Order Quantities in China',
      excerpt: 'Everything you need to know about MOQ negotiations, including strategies to get lower minimums and build relationships with suppliers.',
      category: 'Sourcing Tips',
      date: 'July 15, 2026',
      readTime: '6 min read',
    },
    {
      title: 'Quality Control Inspection Checklist for Importers',
      excerpt: 'A detailed checklist for conducting pre-shipment inspections, covering product specifications, packaging, and compliance requirements.',
      category: 'Quality Control',
      date: 'July 10, 2026',
      readTime: '10 min read',
    },
    {
      title: 'Shipping from China: Air vs Sea Freight Explained',
      excerpt: 'Compare the pros and cons of different shipping methods to choose the right option for your business based on cost, speed, and volume.',
      category: 'Logistics',
      date: 'July 5, 2026',
      readTime: '7 min read',
    },
    {
      title: 'How to Avoid Common Scams When Sourcing from China',
      excerpt: 'Learn about the most common fraud schemes and how to protect yourself when working with Chinese suppliers.',
      category: 'Risk Management',
      date: 'June 28, 2026',
      readTime: '9 min read',
    },
    {
      title: 'Building Long-Term Relationships with Chinese Suppliers',
      excerpt: 'Strategies for developing strong, mutually beneficial partnerships with your Chinese manufacturing partners.',
      category: 'Business Tips',
      date: 'June 20, 2026',
      readTime: '5 min read',
    },
    {
      title: 'Incoterms Explained: A Guide for Importers',
      excerpt: 'Understanding Incoterms 2020 and how they affect your responsibilities, costs, and risks when importing from China.',
      category: 'Logistics',
      date: 'June 15, 2026',
      readTime: '8 min read',
    },
  ];

  const categories = [
    { name: 'Sourcing Tips', count: 12, icon: Search },
    { name: 'Factory Verification', count: 8, icon: Factory },
    { name: 'Quality Control', count: 10, icon: Shield },
    { name: 'Logistics', count: 9, icon: Truck },
    { name: 'Risk Management', count: 6, icon: TrendingUp },
    { name: 'Business Tips', count: 7, icon: CheckCircle },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '120px 0 80px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '6px 16px',
              backgroundColor: 'rgba(230, 126, 34, 0.2)',
              color: '#FFB347',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
              Blog
            </span>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: '800', 
              color: 'white', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              China Sourcing Insights
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.85)', 
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              Expert guidance on sourcing from China, factory verification, quality control, and international logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ 
            padding: '0', 
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
          }}>
            <div style={{
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '48px'
            }}>
              <Factory size={120} color="rgba(255,255,255,0.2)" />
            </div>
            <div style={{ padding: '48px' }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'rgba(230, 126, 34, 0.1)',
                color: '#E67E22',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                {featuredPost.category}
              </span>
              <h2 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--color-text-primary)' }}>
                {featuredPost.title}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                {featuredPost.excerpt}
              </p>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '24px',
                marginBottom: '24px',
                color: 'var(--color-text-secondary)',
                fontSize: '14px'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} />
                  {featuredPost.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} />
                  {featuredPost.readTime}
                </span>
              </div>
              <Link to="#" className="btn btn-primary">
                Read Article
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px' }}>
            {/* Sidebar - Categories */}
            <div>
              <div className="card" style={{ padding: '24px', position: 'sticky', top: '100px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '20px', color: 'var(--color-text-primary)' }}>
                  Categories
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {categories.map((category, index) => (
                    <Link 
                      key={index}
                      to="#"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 16px',
                        backgroundColor: 'var(--color-bg-light)',
                        borderRadius: '8px',
                        color: 'var(--color-text-primary)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <category.icon size={18} color="var(--color-primary)" />
                        {category.name}
                      </span>
                      <span style={{ 
                        backgroundColor: 'white',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontSize: '12px',
                        color: 'var(--color-text-secondary)'
                      }}>
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - Posts */}
            <div>
              <div className="grid-2" style={{ gap: '24px' }}>
                {posts.map((post, index) => (
                  <div key={index} className="card" style={{ padding: '32px' }}>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(30, 58, 95, 0.1)',
                      color: 'var(--color-primary)',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      marginBottom: '16px'
                    }}>
                      {post.category}
                    </span>
                    <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                      {post.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>
                      {post.excerpt}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '16px',
                        color: 'var(--color-text-secondary)',
                        fontSize: '13px'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <Link 
                        to="#"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--color-accent)',
                          fontWeight: '600',
                          fontSize: '14px'
                        }}
                      >
                        Read more
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center" style={{ marginTop: '48px' }}>
                <button className="btn btn-outline">
                  Load More Articles
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'white', fontSize: '32px', marginBottom: '16px' }}>
                Stay Updated
              </h2>
              <p style={{ 
                color: 'rgba(255,255,255,0.85)', 
                fontSize: '18px',
                lineHeight: '1.7'
              }}>
                Subscribe to our newsletter for the latest China sourcing insights, tips, and industry updates.
              </p>
            </div>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              padding: '8px',
              display: 'flex',
              gap: '8px'
            }}>
              <input 
                type="email" 
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
              <button className="btn btn-primary" style={{ padding: '12px 24px' }}>
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