import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: 'How to Verify a Chinese Factory Before Placing Orders',
    excerpt: 'A comprehensive guide to conducting factory verification in China, including what to look for, questions to ask, and red flags to avoid.',
    category: 'Factory Verification',
    date: 'June 15, 2026',
    author: 'Michael Chen',
    readTime: '8 min read',
    image: 'Factory verification guide'
  };

  const posts = [
    {
      title: 'Understanding MOQ: Minimum Order Quantities in China',
      excerpt: 'Everything you need to know about MOQs, how to negotiate them, and strategies for smaller orders.',
      category: 'Sourcing Tips',
      date: 'June 10, 2026',
      author: 'Sarah Wang',
      readTime: '5 min read',
      image: 'MOQ guide'
    },
    {
      title: 'Quality Inspection Standards: A Complete Overview',
      excerpt: 'Learn about different types of quality inspections, when to conduct them, and what to check.',
      category: 'Quality Control',
      date: 'June 5, 2026',
      author: 'David Liu',
      readTime: '7 min read',
      image: 'Quality inspection'
    },
    {
      title: 'Shipping from China: FOB, CIF, and EXW Explained',
      excerpt: 'Understanding shipping terms and choosing the right Incoterms for your business.',
      category: 'Logistics',
      date: 'May 28, 2026',
      author: 'James Zhang',
      readTime: '6 min read',
      image: 'Shipping logistics'
    },
    {
      title: 'How to Protect Your IP When Manufacturing in China',
      excerpt: 'Essential strategies for protecting your intellectual property when working with Chinese manufacturers.',
      category: 'Legal & Compliance',
      date: 'May 20, 2026',
      author: 'Michael Chen',
      readTime: '9 min read',
      image: 'IP protection'
    },
    {
      title: 'Navigating Chinese Trade Shows: A Buyer\'s Guide',
      excerpt: 'Tips for making the most of Canton Fair and other major trade shows in China.',
      category: 'Trade Shows',
      date: 'May 12, 2026',
      author: 'Sarah Wang',
      readTime: '6 min read',
      image: 'Trade shows'
    },
    {
      title: 'Payment Terms with Chinese Suppliers: Best Practices',
      excerpt: 'Understanding payment terms, T/T advances, and how to protect yourself as a buyer.',
      category: 'Sourcing Tips',
      date: 'May 5, 2026',
      author: 'David Liu',
      readTime: '7 min read',
      image: 'Payment terms'
    }
  ];

  const categories = [
    { name: 'Sourcing Tips', count: 12 },
    { name: 'Factory Verification', count: 8 },
    { name: 'Quality Control', count: 10 },
    { name: 'Logistics', count: 7 },
    { name: 'Legal & Compliance', count: 5 },
    { name: 'Trade Shows', count: 4 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#0F172A', 
        padding: '160px 0 80px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '48px' }}>
              Blog
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '20px', lineHeight: '1.6' }}>
              Insights and expertise on China sourcing, factory verification, quality control, 
              and international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section">
        <div className="container">
          <div style={{ 
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
          }}>
            <div style={{ 
              backgroundColor: '#1E3A5F',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: '#64748B', fontSize: '14px' }}>{featuredPost.image}</span>
            </div>
            <div style={{ padding: '48px' }}>
              <span style={{ 
                backgroundColor: '#FFF5EB',
                color: '#E67E22',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {featuredPost.category}
              </span>
              <h2 style={{ marginTop: '16px', marginBottom: '16px', fontSize: '28px' }}>
                {featuredPost.title}
              </h2>
              <p style={{ fontSize: '16px', marginBottom: '24px', lineHeight: '1.7' }}>
                {featuredPost.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px', fontSize: '14px', color: '#64748B' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} /> {featuredPost.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <User size={16} /> {featuredPost.author}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} /> {featuredPost.readTime}
                </span>
              </div>
              <Link to="#" className="btn btn-primary">
                Read Article <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px' }}>
            {/* Posts Grid */}
            <div>
              <h2 style={{ marginBottom: '32px' }}>Latest Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {posts.map((post, index) => (
                  <div 
                    key={index}
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      display: 'grid',
                      gridTemplateColumns: '200px 1fr',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ 
                      backgroundColor: '#1E3A5F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ color: '#64748B', fontSize: '12px' }}>{post.image}</span>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <span style={{ 
                        color: '#E67E22',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {post.category}
                      </span>
                      <h3 style={{ marginTop: '8px', marginBottom: '8px', fontSize: '18px' }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: '14px', marginBottom: '16px' }}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: '#64748B' }}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories */}
              <div style={{ 
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '24px'
              }}>
                <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Categories</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {categories.map((category, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <Link 
                        to="#"
                        style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          color: '#64748B',
                          fontSize: '14px'
                        }}
                      >
                        <span>{category.name}</span>
                        <span style={{ 
                          backgroundColor: '#F8FAFC',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}>
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div style={{ 
                backgroundColor: '#1E3A5F',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#FFFFFF', marginBottom: '12px', fontSize: '18px' }}>
                  Newsletter
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '20px' }}>
                  Get the latest China sourcing insights delivered to your inbox.
                </p>
                <input 
                  type="email" 
                  placeholder="Your email address"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    marginBottom: '12px'
                  }}
                />
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#0F172A' }}>
        <div className="container text-center">
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Need Help With Sourcing?</h2>
          <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Our team has extensive experience helping businesses source from China. Contact us today.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
            Get in Touch <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;