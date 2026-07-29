import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Evaluate a Chinese Factory Before Placing an Order',
      excerpt: 'A practical checklist for buyers conducting due diligence on potential suppliers. Covers documentation, capabilities, and red flags to watch for.',
      date: 'July 15, 2026',
      category: 'Supplier Verification',
      readTime: '8 min',
    },
    {
      id: 2,
      title: 'Understanding AQL Sampling for Quality Inspections',
      excerpt: 'An explanation of Acceptable Quality Limit (AQL) sampling standards and how they are applied during pre-shipment inspections in China.',
      date: 'July 8, 2026',
      category: 'Quality Control',
      readTime: '6 min',
    },
    {
      id: 3,
      title: 'Common Documentation Required for Export from China',
      excerpt: 'A guide to the commercial documents, certificates, and declarations typically needed when shipping goods from China to international destinations.',
      date: 'June 28, 2026',
      category: 'Logistics',
      readTime: '7 min',
    },
    {
      id: 4,
      title: 'Why Sample Approval Matters Before Production',
      excerpt: 'The risks of skipping or rushing sample approval, and how proper sample evaluation protects buyers from costly production mistakes.',
      date: 'June 20, 2026',
      category: 'Sourcing Process',
      readTime: '5 min',
    },
    {
      id: 5,
      title: 'Payment Terms That Protect International Buyers',
      excerpt: 'A review of common payment methods used in China sourcing and strategies for structuring payments to balance risk and supplier requirements.',
      date: 'June 12, 2026',
      category: 'Commercial Terms',
      readTime: '9 min',
    },
    {
      id: 6,
      title: 'Navigating Lead Time Variability in Manufacturing',
      excerpt: 'Why production schedules slip and what buyers can do to improve timeline predictability when sourcing from Chinese manufacturers.',
      date: 'June 5, 2026',
      category: 'Production',
      readTime: '6 min',
    },
  ];

  const categories = ['All', 'Supplier Verification', 'Quality Control', 'Logistics', 'Sourcing Process', 'Commercial Terms', 'Production'];

  return (
    <>
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              RESOURCES
            </div>
            <h1 style={{ marginBottom: '1rem' }}>Sourcing Insights</h1>
            <p className="text-muted" style={{ fontSize: '1.125rem' }}>
              Practical guidance for buyers sourcing from China. Written from our experience working with international companies.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map((cat, index) => (
                <span 
                  key={index} 
                  style={{ 
                    padding: '0.375rem 0.875rem', 
                    fontSize: '0.8125rem', 
                    background: cat === 'All' ? 'var(--color-accent)' : 'var(--color-bg)', 
                    color: cat === 'All' ? 'white' : 'var(--color-text)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    cursor: 'default'
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {articles.map((article) => (
              <div key={article.id} className="blog-card">
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      color: 'var(--color-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {article.category}
                    </span>
                    <span className="blog-meta">{article.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {article.title}
                  </h3>
                  <p className="text-muted" style={{ fontSize: '0.9375rem', marginBottom: '1rem' }}>
                    {article.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8125rem' }}>
                    <span className="blog-meta">{article.date}</span>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>Read more →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p className="text-muted" style={{ fontSize: '0.875rem' }}>
              More articles coming soon. For specific sourcing questions, contact our team directly.
            </p>
          </div>
        </div>
      </section>

      <section className="section container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Need Guidance on Your Project?</h2>
        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
          Our team can provide advice tailored to your specific sourcing situation.
        </p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>
    </>
  );
};

export default Blog;