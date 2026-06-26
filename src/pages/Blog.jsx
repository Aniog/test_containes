import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Factory Before Placing Orders',
      excerpt: 'Learn the essential steps to verify factory legitimacy, including business license checks, on-site visits, and red flags to watch for.',
      category: 'Supplier Verification',
      date: 'June 15, 2026',
      author: 'James Chen',
      readTime: '8 min read',
      image: 'factory'
    },
    {
      id: 2,
      title: 'Understanding Incoterms for China Imports',
      excerpt: 'A comprehensive guide to Incoterms 2020, helping you choose the right shipping terms and understand your responsibilities.',
      category: 'Shipping & Logistics',
      date: 'June 8, 2026',
      author: 'Sarah Zhang',
      readTime: '12 min read',
      image: 'shipping'
    },
    {
      id: 3,
      title: 'Quality Control Inspection Standards: AQL Explained',
      excerpt: 'What is AQL (Acceptable Quality Level) and how to set up an effective quality inspection protocol for your orders.',
      category: 'Quality Control',
      date: 'June 1, 2026',
      author: 'Michael Liu',
      readTime: '10 min read',
      image: 'quality'
    },
    {
      id: 4,
      title: 'Navigating Chinese Business Culture: Key Etiquette Tips',
      excerpt: 'Build stronger relationships with your Chinese suppliers by understanding business customs, communication styles, and negotiation tactics.',
      category: 'Business Culture',
      date: 'May 25, 2026',
      author: 'Emily Wang',
      readTime: '7 min read',
      image: 'culture'
    },
    {
      id: 5,
      title: 'Payment Terms for China Sourcing: Best Practices',
      excerpt: 'Protect your interests when paying Chinese suppliers. Explore payment methods, milestone structures, and fraud prevention.',
      category: 'Payments & Finance',
      date: 'May 18, 2026',
      author: 'David Lee',
      readTime: '9 min read',
      image: 'payment'
    },
    {
      id: 6,
      title: 'Managing Production Timeline: Tips from the Field',
      excerpt: 'Learn how to effectively manage production schedules, handle delays, and ensure on-time delivery from Chinese manufacturers.',
      category: 'Production Management',
      date: 'May 11, 2026',
      author: 'James Chen',
      readTime: '11 min read',
      image: 'production'
    }
  ];

  const categories = [
    'All Posts',
    'Supplier Verification',
    'Quality Control',
    'Shipping & Logistics',
    'Business Culture',
    'Payments & Finance',
    'Production Management'
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>
            Insights, guides, and best practices for successful China sourcing. 
            Written by our experienced team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: '#f8f9fa', padding: '24px 0', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((category, index) => (
              <button
                key={index}
                style={{
                  padding: '10px 20px',
                  border: index === 0 ? 'none' : '1px solid #e5e7eb',
                  background: index === 0 ? '#1e3a5f' : 'white',
                  color: index === 0 ? 'white' : '#666',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '32px'
          }}>
            {posts.map((post) => (
              <article key={post.id} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '3rem'
                }}>
                  {post.category === 'Supplier Verification' && '🏭'}
                  {post.category === 'Shipping & Logistics' && '🚢'}
                  {post.category === 'Quality Control' && '✓'}
                  {post.category === 'Business Culture' && '🤝'}
                  {post.category === 'Payments & Finance' && '💰'}
                  {post.category === 'Production Management' && '⚙️'}
                </div>
                <div style={{ padding: '24px' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: 'rgba(30, 58, 95, 0.1)',
                    color: '#1e3a5f',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    borderRadius: '4px',
                    marginBottom: '12px'
                  }}>
                    {post.category}
                  </span>
                  <h2 style={{ 
                    fontSize: '1.25rem', 
                    color: '#1e3a5f', 
                    marginBottom: '12px',
                    lineHeight: 1.4
                  }}>
                    {post.title}
                  </h2>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#666', 
                    marginBottom: '20px',
                    lineHeight: 1.6 
                  }}>
                    {post.excerpt}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px',
                    fontSize: '0.8rem',
                    color: '#888',
                    paddingTop: '16px',
                    borderTop: '1px solid #e5e7eb'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ background: '#1e3a5f', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'white' }}>
            Stay Updated
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Subscribe to our newsletter for the latest China sourcing insights and tips.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            maxWidth: '450px', 
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '14px 20px',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '1rem'
              }}
            />
            <button className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;