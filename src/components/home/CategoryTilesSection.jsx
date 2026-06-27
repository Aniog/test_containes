import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CategoryTilesSection() {
  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop",
      link: '/shop?category=Earrings'
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=600&fit=crop",
      link: '/shop?category=Necklaces'
    },
    {
      id: 'huggies',
      name: 'Huggies',
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop",
      link: '/shop?category=Huggies'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Shop by Category</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <a
            key={category.id}
            href={category.link}
            className="group relative overflow-hidden aspect-[4/5] md:aspect-square fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-velmora-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
            </div>
            
            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-velmora-white">
                <h3 className="product-name text-2xl md:text-3xl mb-2">
                  {category.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm uppercase tracking-wider">Shop Now</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
