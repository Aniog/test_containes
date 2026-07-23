import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop', path: '/shop?category=Earrings' },
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=400&fit=crop', path: '/shop?category=Necklaces' },
    { name: 'Huggies', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop', path: '/shop?category=Huggies' },
  ];

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl mb-4">Shop by Category</h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="relative group overflow-hidden cursor-pointer block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="category-overlay absolute inset-0 flex items-end">
                <div className="p-8 w-full">
                  <h3 className="font-serif text-3xl text-white tracking-wider uppercase">
                    {category.name}
                  </h3>
                  <div className="hairline bg-white bg-opacity-50 mt-4 w-0 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
