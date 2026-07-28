import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, production capacity, and quality standards before committing to a large order.',
    category: 'Supplier Verification',
    date: 'July 15, 2024',
    readTime: '8 min read',
    author: 'James Chen'
  },
  {
    id: 2,
    title: 'Understanding MOQ: Minimum Order Quantities in China',
    excerpt: 'Everything you need to know about minimum order quantities, how to negotiate MOQs, and strategies for testing new products.',
    category: 'Sourcing Tips',
    date: 'July 8, 2024',
    readTime: '6 min read',
    author: 'Sarah Zhang'
  },
  {
    id: 3,
    title: 'Quality Control Inspections: A Complete Guide',
    excerpt: 'Learn about different types of quality inspections, when to conduct them, and how to interpret inspection reports.',
    category: 'Quality Control',
    date: 'June 28, 2024',
    readTime: '10 min read',
    author: 'Michael Liu'
  },
  {
    id: 4,
    title: 'Shipping from China: FOB, CIF, and EXW Explained',
    excerpt: 'Understanding shipping terms is crucial. We break down FOB, CIF, EXW, and other Incoterms for China imports.',
    category: 'Logistics',
    date: 'June 20, 2024',
    readTime: '7 min read',
    author: 'David Wang'
  },
  {
    id: 5,
    title: 'How to Protect Your IP When Sourcing from China',
    excerpt: 'Practical steps to protect your intellectual property when working with Chinese manufacturers.',
    category: 'Legal & Compliance',
    date: 'June 12, 2024',
    readTime: '9 min read',
    author: 'Jennifer Lee'
  },
  {
    id: 6,
    title: 'Sample Management: Getting What You Need',
    excerpt: 'Best practices for requesting, evaluating, and approving samples from Chinese suppliers.',
    category: 'Sourcing Tips',
    date: 'June 5, 2024',
    readTime: '5 min read',
    author: 'James Chen'
  },
  {
    id: 7,
    title: 'Payment Terms: How to Pay Chinese Suppliers Safely',
    excerpt: 'Understanding payment options, common terms, and how to protect yourself when paying suppliers.',
    category: 'Finance',
    date: 'May 28, 2024',
    readTime: '8 min read',
    author: 'Sarah Zhang'
  },
  {
    id: 8,
    title: 'China Trade Shows: A Buyer\'s Guide',
    excerpt: 'Planning to visit a trade show in China? Here\'s everything you need to know to make the most of your visit.',
    category: 'Events',
    date: 'May 20, 2024',
    readTime: '6 min read',
    author: 'Michael Liu'
  },
  {
    id: 9,
    title: 'Dealing with Quality Issues: A Practical Approach',
    excerpt: 'What to do when products don\'t meet specifications. Steps for resolution and prevention.',
    category: 'Quality Control',
    date: 'May 12, 2024',
    readTime: '7 min read',
    author: 'David Wang'
  }
];

const categories = [
  'All Posts',
  'Supplier Verification',
  'Sourcing Tips',
  'Quality Control',
  'Logistics',
  'Legal & Compliance',
  'Finance',
  'Events'
];

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
        padding: '100px 0 80px',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: 'white', marginBottom: '20px', fontSize: '44px' }}>
              Blog
            </h1>
            <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.7' }}>
              Insights, tips, and guides for successful China sourcing. 
              Learn from our years of experience helping businesses import from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section">
        <div className="container">
          {/* Featured Post */}
          <div className="card" style={{ 
            padding: 0, 
            overflow: 'hidden', 
            marginBottom: '48px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
              padding: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>📚</div>
                <p style={{ opacity: 0.9 }}>China Sourcing Insights</p>
              </div>
            </div>
            <div style={{ padding: '48px' }}>
              <span style={{
                background: '#F0FDF4',
                color: '#10B981',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                Featured
              </span>
              <h2 style={{ marginTop: '16px', marginBottom: '16px', fontSize: '24px' }}>
                The Complete Guide to China Sourcing
              </h2>
              <p style={{ color: '#64748B', marginBottom: '24px', lineHeight: '1.6' }}>
                Everything you need to know about sourcing from China, from finding suppliers to shipping your products. This comprehensive guide covers the entire process.
              </p>
              <div className="flex items-center gap-4" style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px' }}>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>July 20, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>15 min read</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Get the Guide
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2" style={{ flexWrap: 'wrap', marginBottom: '32px' }}>
            {categories.map((category, index) => (
              <button
                key={index}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: index === 0 ? 'none' : '1px solid #E2E8F0',
                  background: index === 0 ? '#1E3A5F' : 'white',
                  color: index === 0 ? 'white' : '#475569',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  background: '#F1F5F9',
                  color: '#475569',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  alignSelf: 'flex-start',
                  marginBottom: '16px'
                }}>
                  {post.category}
                </span>
                
                <h3 style={{ marginBottom: '12px', fontSize: '18px', lineHeight: '1.4' }}>
                  {post.title}
                </h3>
                
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px', flex: 1 }}>
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4" style={{ color: '#64748B', fontSize: '13px', marginBottom: '16px' }}>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2" style={{ paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span style={{ color: '#475569', fontSize: '14px' }}>{post.author}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="btn btn-secondary">
              Load More Articles
              <ChevronRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
            borderRadius: '16px',
            padding: '60px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ color: 'white', marginBottom: '16px' }}>Stay Updated</h2>
            <p style={{ opacity: 0.9, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
              Subscribe to our newsletter for the latest China sourcing insights, tips, and industry updates.
            </p>
            <div className="flex gap-3" style={{ maxWidth: '450px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '14px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '15px'
                }}
              />
              <button className="btn btn-white" style={{ padding: '14px 28px' }}>
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
