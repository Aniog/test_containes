import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 'essential',
    name: 'The Essentials',
    description: 'Everyday gold pieces designed for effortless layering.',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80',
  },
  {
    id: 'heirloom',
    name: 'The Heirloom Collection',
    description: 'Statement pieces meant to be passed down through generations.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
  },
  {
    id: 'gift',
    name: 'The Gift Suite',
    description: 'Beautifully boxed sets for life\'s most cherished moments.',
    image: 'https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=800&q=80',
  },
];

export default function Collections() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-warm-charcoal">Collections</h1>
          <p className="mt-3 text-sm text-warm-gray max-w-md mx-auto">
            Curated stories in gold. Find the collection that speaks to you.
          </p>
        </div>

        <div className="space-y-16">
          {collections.map((col) => (
            <div key={col.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={`aspect-[4/5] overflow-hidden bg-cream-dark ${col.id === 'heirloom' ? 'md:order-2' : ''}`}>
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`max-w-sm ${col.id === 'heirloom' ? 'md:order-1' : ''}`}>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-charcoal">
                  {col.name}
                </h2>
                <div className="w-10 h-px bg-gold mt-6 mb-6" />
                <p className="text-sm text-warm-gray leading-relaxed">{col.description}</p>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-1.5 mt-6 text-xs uppercase tracking-widest text-gold hover:text-warm-charcoal transition-colors border-b border-gold pb-0.5"
                >
                  Explore Collection <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}