import React, { useEffect, useRef, useState } from 'react';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';

const Blog = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      const config = strkImgConfig;
      // Use requestAnimationFrame to ensure DOM is committed after filter changes
      const frameId = window.requestAnimationFrame(() => {
        window.ImageHelper.loadImages(config, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [selectedCategory]);

  const categories = ['All', 'Sourcing Tips', 'Quality Control', 'Logistics', 'Supplier Relations', 'Industry Insights'];

  const posts = [
    {
      id: 1,
      title: 'How to Evaluate a Chinese Factory Before Placing Your First Order',
      excerpt: 'A practical checklist for verifying supplier legitimacy, production capability, and quality systems before you commit.',
      category: 'Sourcing Tips',
      date: 'July 15, 2026',
      readTime: '8 min',
      content: 'Before placing your first order with a new Chinese supplier, thorough evaluation is essential. This guide covers business verification, facility inspection, and reference checks.',
    },
    {
      id: 2,
      title: 'Understanding AQL: Setting Acceptable Quality Limits for Your Products',
      excerpt: 'Learn how to define quality standards that protect your brand without making inspection costs prohibitive.',
      category: 'Quality Control',
      date: 'July 8, 2026',
      readTime: '6 min',
      content: 'AQL (Acceptable Quality Limit) is the standard for determining whether a production lot passes inspection. Choosing the right AQL level depends on your product, market, and risk tolerance.',
    },
    {
      id: 3,
      title: 'Sea Freight vs Air Freight: When to Choose Each for China Shipments',
      excerpt: 'A cost and timeline comparison to help you decide the most appropriate shipping method for different order types.',
      category: 'Logistics',
      date: 'June 28, 2026',
      readTime: '5 min',
      content: 'Most importers default to sea freight for cost reasons, but air freight can make sense for high-value, time-sensitive, or low-volume shipments. Here is how to decide.',
    },
    {
      id: 4,
      title: 'Why Your Samples Passed but Production Failed: Common Causes and Prevention',
      excerpt: 'Sample approval does not guarantee production quality. Here are the gaps that cause problems and how to close them.',
      category: 'Quality Control',
      date: 'June 20, 2026',
      readTime: '7 min',
      content: 'It is frustrating when approved samples do not match production output. This article explains why it happens and what steps reduce the risk.',
    },
    {
      id: 5,
      title: 'Building Long-Term Supplier Relationships That Actually Work',
      excerpt: 'Treating suppliers as partners rather than vendors leads to better pricing, priority, and quality over time.',
      category: 'Supplier Relations',
      date: 'June 12, 2026',
      readTime: '6 min',
      content: 'The best sourcing outcomes come from stable, mutually beneficial relationships. We share practices that help build trust and performance.',
    },
    {
      id: 6,
      title: 'Navigating Tariffs and Trade Compliance When Importing from China',
      excerpt: 'A practical overview of current trade requirements, documentation, and strategies for managing duties.',
      category: 'Logistics',
      date: 'June 5, 2026',
      readTime: '9 min',
      content: 'Tariff classifications, country of origin rules, and documentation requirements continue to evolve. Staying compliant protects your margins and avoids delays.',
    },
    {
      id: 7,
      title: 'MOQ Realities: How to Work with Factories When Your Volumes Are Modest',
      excerpt: 'Many factories prefer large orders, but smaller quantities are possible with the right approach and product selection.',
      category: 'Sourcing Tips',
      date: 'May 28, 2026',
      readTime: '5 min',
      content: 'Minimum order quantities are negotiable. Understanding what drives them helps you find workable solutions even with modest volumes.',
    },
    {
      id: 8,
      title: 'The Real Cost of Cheap Quotes: Hidden Expenses That Erode Savings',
      excerpt: 'A low unit price does not always mean lower total cost. Here are the hidden factors that often surprise first-time importers.',
      category: 'Industry Insights',
      date: 'May 20, 2026',
      readTime: '7 min',
      content: 'We regularly see buyers choose the lowest quote only to discover that total landed cost is higher than a slightly more expensive alternative.',
    },
    {
      id: 9,
      title: 'What to Do When a Supplier Stops Responding',
      excerpt: 'Communication breakdowns happen. Here is a practical approach to re-engage or transition without losing your production schedule.',
      category: 'Supplier Relations',
      date: 'May 12, 2026',
      readTime: '4 min',
      content: 'When a supplier goes silent, quick action matters. We outline steps to diagnose the issue and protect your timeline.',
    },
    {
      id: 10,
      title: 'Preparing for Your First China Sourcing Trip',
      excerpt: 'If you plan to visit suppliers in person, preparation makes the difference between a productive trip and a wasted one.',
      category: 'Sourcing Tips',
      date: 'May 5, 2026',
      readTime: '8 min',
      content: 'Visiting factories can accelerate relationships and reveal issues that are invisible from a distance. Here is how to make the most of your time.',
    },
    {
      id: 11,
      title: 'Consolidation Strategies: Combining Multiple Orders to Reduce Freight Cost',
      excerpt: 'Shipping small orders separately is expensive. Consolidation can cut per-unit logistics costs significantly.',
      category: 'Logistics',
      date: 'April 28, 2026',
      readTime: '6 min',
      content: 'Many importers ship multiple small orders separately and pay premium rates. A consolidation strategy requires planning but pays off quickly.',
    },
    {
      id: 12,
      title: 'How Certification Requirements Vary by Market and Product',
      excerpt: 'CE, FCC, UKCA, RoHS, and other marks are not interchangeable. Understanding requirements prevents costly mistakes.',
      category: 'Industry Insights',
      date: 'April 20, 2026',
      readTime: '7 min',
      content: 'Different markets have different compliance rules. We explain the most common certifications and when each applies.',
    },
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  return (
    <div ref={containerRef}>
      <div className="page-header">
        <div className="page-header-container">
          <h1>Blog</h1>
          <p>Practical guidance for sourcing from China</p>
        </div>
      </div>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card blog-card">
                <div className="blog-image">
                  <img
                    data-strk-img-id={`blog-${post.id}`}
                    data-strk-img={`[blog-title-${post.id}] [blog-excerpt-${post.id}] sourcing factory quality`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={post.title}
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    {post.date} • {post.readTime} • {post.category}
                  </div>
                  <h3 id={`blog-title-${post.id}`}>{post.title}</h3>
                  <p id={`blog-excerpt-${post.id}`}>{post.excerpt}</p>
                  <span className="blog-link">Read more →</span>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6 text-center">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Have a Specific Question?</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
            Our team is available to discuss your sourcing challenges directly.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;