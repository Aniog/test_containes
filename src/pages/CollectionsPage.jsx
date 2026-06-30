import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 'essential-daily',
    title: 'The Essential Daily',
    description: 'Clean, minimalist pieces designed to be worn every single day. Build your signature stack.',
    items: '12 pieces',
  },
  {
    id: 'evening-glow',
    title: 'Evening Glow',
    description: 'Statement pieces with crystal accents for when the sun goes down. Understated glamour.',
    items: '8 pieces',
  },
  {
    id: 'gift-edit',
    title: 'The Gift Edit',
    description: 'Thoughtfully curated gift sets and presentation-ready pieces. Perfect for someone special.',
    items: '6 pieces',
  },
  {
    id: 'bridal-capsule',
    title: 'The Bridal Capsule',
    description: 'Something borrowed, something gold. Elegant pieces for the bride and her party.',
    items: '10 pieces',
  },
];

export default function CollectionsPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-page">
        <div className="mb-14">
          <p className="text-stone text-xs tracking-widest uppercase mb-3">Curated</p>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal font-medium">Collections</h1>
          <p className="text-stone mt-4 max-w-[500px] leading-relaxed">
            Each collection tells a story. Explore our carefully edited capsules for every moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {collections.map((col) => (
            <Link
              key={col.id}
              to="/shop"
              className="group relative aspect-[4/5] md:aspect-[3/2] bg-warm-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-warm-200/40 via-warm-100 to-warm-50" />
              <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/15 transition-colors duration-500" />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <p className="text-stone text-[10px] tracking-widest uppercase mb-2">{col.items}</p>
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-medium mb-3">
                  {col.title}
                </h2>
                <p className="text-stone text-sm leading-relaxed max-w-[360px] mb-4">
                  {col.description}
                </p>
                <span className="text-xs tracking-widest uppercase text-warm-600 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
