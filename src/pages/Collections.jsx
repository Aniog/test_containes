import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'From delicate studs to statement drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    count: 2
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Layer, stack, make it yours',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    count: 1
  },
  {
    id: 'huggies',
    name: 'Huggies',
    tagline: 'Effortless everyday glamour',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    count: 1
  },
  {
    id: 'sets',
    name: 'Gift Sets',
    tagline: 'Curated combinations for every occasion',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    count: 1
  }
];

export default function Collections() {
  return (
    <main className="pt-20">
      {/* Header */}
      <div className="bg-[#faf9f7] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">
            Explore
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mt-3">
            Our Collections
          </h1>
          <p className="text-[#1a1a1a]/60 mt-4 max-w-xl mx-auto">
            Discover our curated collections, each designed to bring 
            timeless elegance to your everyday style.
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/shop?category=${collection.id}`}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <h2 className="font-serif text-2xl md:text-3xl text-white tracking-[0.2em] mb-2">
                  {collection.name.toUpperCase()}
                </h2>
                <p className="text-white/70 text-sm mb-4">{collection.tagline}</p>
                <div className="flex items-center gap-2 text-white text-sm tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>SHOP NOW</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
