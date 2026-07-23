import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    { 
      name: 'Earrings', 
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
      link: '/shop?category=Earrings'
    },
    { 
      name: 'Necklaces', 
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop',
      link: '/shop?category=Necklaces'
    },
    { 
      name: 'Huggies', 
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
      link: '/shop?category=Huggies'
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 
          className="font-serif text-charcoal mb-3"
          style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)' }}
        >
          Shop by Category
        </h2>
        <div className="hairline w-16 mx-auto my-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((category, index) => (
          <Link 
            key={index} 
            to={category.link}
            className="category-tile group"
            style={{ textDecoration: 'none' }}
          >
            <div style={{ aspectRatio: '4/5' }} className="bg-cream-100">
              <div 
                className="w-full h-full bg-cream-200 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, #fae8c4 0%, #f4e2c9 100%)`,
                }}
              >
                <span 
                  className="font-serif text-charcoal"
                  style={{ fontSize: '3rem', fontStyle: 'italic' }}
                >
                  {category.name.charAt(0)}
                </span>
              </div>
            </div>
            
            <div className="overlay">
              <h3 
                className="text-cream-50 font-serif text-2xl"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
