import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier Before Placing Orders',
      excerpt: 'Learn the essential steps to verify supplier legitimacy, including business license checks, factory visits, and red flags to watch for.',
      category: 'Supplier Verification',
      author: 'James Chen',
      date: '2024-01-15',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Understanding Quality Inspection Standards for Importers',
      excerpt: 'A comprehensive guide to quality inspection protocols, from pre-production checks to pre-shipment inspections and acceptance criteria.',
      category: 'Quality Control',
      author: 'Sarah Zhang',
      date: '2024-01-10',
      readTime: '10 min read',
    },
    {
      id: 3,
      title: 'Navigating Chinese Manufacturing: A Complete Timeline Guide',
      excerpt: 'Understand the typical timeline for sourcing from China, from supplier selection to final delivery, and how to plan your project.',
      category: 'Sourcing Guide',
      author: 'Michael Liu',
      date: '2024-01-05',
      readTime: '12 min read',
    },
    {
      id: 4,
      title: 'Incoterms Explained: FOB, CIF, EXW, and More',
      excerpt: 'Demystifying international trade terms - what they mean, who pays what, and how to choose the right Incoterm for your order.',
      category: 'Logistics',
      author: 'David Wang',
      date: '2023-12-28',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'How to Negotiate with Chinese Suppliers Effectively',
      excerpt: 'Proven negotiation strategies for getting the best prices and terms from Chinese manufacturers without damaging relationships.',
      category: 'Negotiation',
      author: 'Emily Wu',
      date: '2023-12-20',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Common Mistakes First-Time Importers Make',
      excerpt: 'Learn from the experiences of others to avoid costly mistakes when sourcing products from China for the first time.',
      category: 'Sourcing Guide',
      author: 'James Chen',
      date: '2023-12-15',
      readTime: '11 min read',
    },
    {
      id: 7,
      title: 'Understanding Minimum Order Quantities (MOQ)',
      excerpt: 'How MOQs work, strategies for negotiating lower MOQs, and when it makes sense to pay more for smaller orders.',
      category: 'Sourcing Guide',
      author: 'Sarah Zhang',
      date: '2023-12-10',
      readTime: '6 min read',
    },
    {
      id: 8,
      title: 'Shipping Methods Compared: Air vs Sea vs Express',
      excerpt: 'A detailed comparison of shipping methods from China, including costs, transit times, and when to use each option.',
      category: 'Logistics',
      author: 'Michael Liu',
      date: '2023-12-05',
      readTime: '8 min read',
    },
    {
      id: 9,
      title: 'Protecting Your Intellectual Property When Sourcing from China',
      excerpt: 'Essential strategies for protecting your product designs, trademarks, and trade secrets when manufacturing in China.',
      category: 'Legal',
      author: 'David Wang',
      date: '2023-11-28',
      readTime: '10 min read',
    },
  ];

  const categories = ['All', 'Sourcing Guide', 'Quality Control', 'Supplier Verification', 'Logistics', 'Negotiation', 'Legal'];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        padding: '160px 0 80px',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '16px' }}>
            Blog
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Insights and guides on China sourcing, quality control, and international trade.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '32px' }}>
            {blogPosts.map((post) => (
              <article key={post.id} className="card" style={{ textAlign: 'left', padding: 0, overflow: 'hidden' }}>
                <div style={{ 
                  height: '200px', 
                  backgroundColor: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Tag size={32} style={{ color: 'white', opacity: 0.8 }} />
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: 'var(--background)',
                    color: 'var(--primary)',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                  }}>
                    {post.category}
                  </div>
                  <h3 style={{ marginBottom: '12px', fontSize: '1.25rem', lineHeight: '1.4' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {post.excerpt}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <User size={14} /> {post.author}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ marginBottom: '16px' }}>Stay Updated</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Subscribe to our newsletter for the latest insights on China sourcing and international trade.
          </p>
          <form style={{ display: 'flex', gap: '12px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '14px 16px',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '14px 24px' }}>
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '80px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Need Personalized Help?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Our team of sourcing experts is ready to assist you with your specific requirements.
          </p>
          <Link to="/contact" className="btn btn-accent" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;