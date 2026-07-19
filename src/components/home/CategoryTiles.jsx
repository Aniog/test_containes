import React from 'react';
import { Link } from 'react-router-dom';
import { BackgroundImage } from '@/components/ProductImage';

const categories = [
  { id: 'earrings', label: 'Earrings', bgId: 'category-bg-earrings', titleId: 'cat-title-earrings' },
  { id: 'necklaces', label: 'Necklaces', bgId: 'category-bg-necklaces', titleId: 'cat-title-necklaces' },
  { id: 'huggies', label: 'Huggies', bgId: 'category-bg-huggies', titleId: 'cat-title-huggies' },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Shop by Category
          </p>
          <h2
            id="categories-title"
            className="font-serif text-3xl md:text-5xl font-medium"
          >
            Find Your Finish
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-ink-light"
            >
              <BackgroundImage
                bgId={category.bgId}
                query={`[${category.titleId}] [categories-title] gold jewelry`}
                ratio="3x4"
                width={800}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={category.titleId}
                  className="font-serif text-2xl md:text-3xl text-cream-50 tracking-wide border-b border-transparent group-hover:border-cream-50 transition-all duration-300 pb-1"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
