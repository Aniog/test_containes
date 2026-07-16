import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { 
      name: "Earrings", 
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      link: "/shop?category=Earrings"
    },
    { 
      name: "Necklaces", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      link: "/shop?category=Necklaces"
    },
    { 
      name: "Huggies", 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      link: "/shop?category=Huggies"
    },
  ];

  return (
    <section style={{ padding: '3rem 1.5rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Shop by Category
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '1.5rem' 
      }}>
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.link} className="category-tile">
            <img src={cat.image} alt={cat.name} />
            <div className="category-tile-label">
              <span>{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;