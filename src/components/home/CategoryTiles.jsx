import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { cn } from '@/lib/utils';

const categoryImages = {
  earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  huggies: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
};

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">
            Shop by Category
          </h2>
          <p className="text-velmora-taupe max-w-xl mx-auto">
            Find your perfect piece — from delicate studs to statement necklaces.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.slice(0, 3).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }) {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = categoryImages[category.id] || categoryImages.earrings;

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group block relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/5] bg-velmora-cream">
        <img
          src={imageUrl}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300',
          isHovered ? 'opacity-100' : 'opacity-60'
        )}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
          {category.name}
        </h3>
        <p className="text-white/80 text-sm">{category.description}</p>

        {/* Shop Now Link */}
        <span
          className={cn(
            'mt-4 text-xs font-medium tracking-wider uppercase text-white border-b border-white pb-0.5 transition-all duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          Shop Now
        </span>
      </div>
    </Link>
  );
}
