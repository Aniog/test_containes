import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Collections = () => {
  const collections = [
    {
      id: 'signature',
      name: 'Signature Collection',
      description: 'Our foundational pieces. Timeless designs crafted to become your everyday essentials.',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80',
      count: 12,
    },
    {
      id: 'heritage',
      name: 'Heritage Collection',
      description: 'Inspired by vintage silhouettes. Each piece tells a story of craftsmanship and tradition.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
      count: 8,
    },
    {
      id: 'modern',
      name: 'Modern Minimal',
      description: 'Clean lines and sculptural forms. For those who appreciate understated elegance.',
      image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=80',
      count: 6,
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-3">Curated with Intention</p>
          <h1 className="font-serif text-5xl tracking-[-0.02em]">Collections</h1>
        </div>

        <div className="space-y-8">
          {collections.map((collection, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-8 items-center group">
              <div className={`aspect-[16/10] bg-[#F4F0E9] overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="font-serif text-3xl tracking-[-0.01em] mb-4">{collection.name}</h2>
                <p className="body-text text-[#6B635E] mb-6 max-w-md">{collection.description}</p>
                <p className="text-sm text-[#8B7355] mb-6 tracking-[0.05em]">{collection.count} PIECES</p>
                <Link to="/shop">
                  <Button variant="outline">Explore Collection</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;