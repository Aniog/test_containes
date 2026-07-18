import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "The Art of Layering",
      excerpt: "How to build a jewelry collection that tells your story, one piece at a time.",
      date: "July 12, 2026",
      image: "https://picsum.photos/id/160/800/600"
    },
    {
      id: 2,
      title: "Caring for Gold",
      excerpt: "Simple rituals to keep your demi-fine pieces radiant for years to come.",
      date: "July 5, 2026",
      image: "https://picsum.photos/id/201/800/600"
    },
    {
      id: 3,
      title: "Behind the Design",
      excerpt: "A conversation with our founder on the quiet luxury of restraint.",
      date: "June 28, 2026",
      image: "https://picsum.photos/id/106/800/600"
    }
  ];

  return (
    <div style={{ paddingTop: '5rem', minHeight: '70vh' }}>
      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>The Journal</h1>
          <p className="text-muted mt-2">Stories, rituals, and quiet inspiration</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {articles.map((article) => (
            <article key={article.id} style={{ background: '#fff' }}>
              <img 
                src={article.image} 
                alt={article.title}
                style={{ width: '100%', display: 'block' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.75rem', color: '#9a9087', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  {article.date}
                </p>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{article.title}</h3>
                <p style={{ color: '#6b635c', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  {article.excerpt}
                </p>
                <Link 
                  to="/journal" 
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '1rem', 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#8c6f52'
                  }}
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
