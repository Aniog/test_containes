import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const collections = [
  {
    id: 'everyday-essentials',
    name: 'Everyday Essentials',
    description: 'Pieces designed to be worn every day, from morning to night.',
    productIds: ['golden-sphere-huggies', 'vivid-aura-jewels'],
  },
  {
    id: 'statement-pieces',
    name: 'Statement Pieces',
    description: 'Bold designs that make an impression wherever you go.',
    productIds: ['majestic-flora-nectar', 'amber-lace-earrings'],
  },
  {
    id: 'gift-worthy',
    name: 'Gift-Worthy',
    description: 'Curated sets and standout pieces, perfect for gifting.',
    productIds: ['royal-heirloom-set', 'majestic-flora-nectar'],
  },
];

export default function Collections() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-cream-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">Collections</h1>
          <p className="font-sans text-sm text-charcoal-muted mt-3">
            Curated selections for every occasion
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
        {collections.map((collection) => {
          const collectionProducts = products.filter((p) =>
            collection.productIds.includes(p.id)
          );
          return (
            <section key={collection.id}>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
                  {collection.name}
                </h2>
                <p className="font-sans text-sm text-charcoal-muted mt-2">
                  {collection.description}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {collectionProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
