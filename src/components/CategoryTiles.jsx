import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-luxury">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative overflow-hidden aspect-[4/5] block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
