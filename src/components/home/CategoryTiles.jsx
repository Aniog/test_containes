import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      slug: 'earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
      description: 'From studs to statement drops'
    },
    {
      name: 'Necklaces',
      slug: 'necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=600&fit=crop',
      description: 'Delicate chains to bold pendants'
    },
    {
      name: 'Huggies',
      slug: 'huggies',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
      description: 'Everyday comfort, effortless style'
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
          Shop by Category
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map(category => (
          <Link
            key={category.slug}
            to={`/shop?category=${category.slug}`}
            className="group relative overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="aspect-[4/3] bg-velmora-cream overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay with Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                            flex items-end justify-center pb-8
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center">
                <h3 className="font-sans text-2xl uppercase tracking-widest text-white mb-2">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-white/80">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Static Label (visible when not hovering) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2
                            group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="font-sans text-2xl uppercase tracking-widest text-white">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
