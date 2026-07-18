import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      id: 'earrings',
      label: 'Earrings',
      image: 'https://picsum.photos/id/1005/800/600',
      link: '/shop?category=earrings'
    },
    {
      id: 'necklaces',
      label: 'Necklaces',
      image: 'https://picsum.photos/id/201/800/600',
      link: '/shop?category=necklaces'
    },
    {
      id: 'huggies',
      label: 'Huggies',
      image: 'https://picsum.photos/id/180/800/600',
      link: '/shop?category=huggies'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Shop by Category</h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1rem' 
        }}>
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.link} className="category-tile">
              <img src={cat.image} alt={cat.label} loading="lazy" />
              <div className="category-tile-label">
                <span>{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
