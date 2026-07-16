import React from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Like a Stylist",
      excerpt: "The art of mixing lengths, textures, and metals for an effortlessly curated look.",
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    {
      id: 2,
      title: "The Meaning Behind Our Heirloom Pieces",
      excerpt: "Why we design jewelry meant to be passed down through generations.",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    },
    {
      id: 3,
      title: "Caring for Gold-Plated Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years to come.",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    }
  ];

  return (
    <div>
      <Navigation />
      
      <div style={{ paddingTop: '6rem', maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          The Journal
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
          Stories, rituals, and the quiet beauty of everyday adornment.
        </p>

        <div style={{ display: 'grid', gap: '3rem' }}>
          {articles.map((article) => (
            <article key={article.id} style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1.5fr', 
              gap: '2rem',
              alignItems: 'center'
            }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-bg-alt)' }}>
                <img 
                  src={article.image} 
                  alt={article.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ 
                  fontSize: '0.6875rem', 
                  letterSpacing: '0.1em', 
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '0.5rem'
                }}>
                  {article.date}
                </div>
                <h2 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.5rem', 
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>
                  {article.title}
                </h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                  {article.excerpt}
                </p>
                <Link 
                  to="/about" 
                  style={{ 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.08em', 
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)'
                  }}
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ 
          marginTop: '4rem', 
          padding: '2rem', 
          background: 'var(--color-bg-alt)',
          textAlign: 'center'
        }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--color-text)' }}>
            More stories coming soon. Follow us on Instagram for daily inspiration.
          </p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;