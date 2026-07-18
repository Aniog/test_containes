import React from 'react';
import { Link } from 'react-router-dom';
import { StockBackground } from '@/components/shared/StockImage';

const CATEGORIES = [
  {
    id: 'category-earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    query: ['category-earrings-label'],
  },
  {
    id: 'category-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    query: ['category-necklaces-label'],
  },
  {
    id: 'category-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    query: ['category-huggies-label'],
  },
];

export function CategoryTiles() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12">
        <div className="mb-10 text-center md:mb-14">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Shop by Category
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">
            Find Your Signature
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative aspect-square overflow-hidden bg-stone-800"
            >
              <StockBackground
                id={category.id}
                ratio="1x1"
                width={700}
                queryParts={category.query}
                className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 transition group-hover:bg-ink/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={category.query[0]}
                  className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-cream"
                >
                  {category.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
