import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
      link: '/shop?category=earrings'
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=600&fit=crop',
      link: '/shop?category=necklaces'
    },
    {
      id: 'huggies',
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop',
      link: '/shop?category=huggies'
    }
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 
          className="font-serif text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          Shop by Category
        </h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="category-tile group relative overflow-hidden aspect-[4/3] md:aspect-[3/4]"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            
            <div className="category-tile-overlay">
              <h3 
                className="text-white font-serif text-2xl lg:text-3xl"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {category.name}
              </h3>
            </div>

            {/* Label for mobile */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
              <h3 
                className="text-white font-serif text-xl"
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
};

export default CategoryTiles;
