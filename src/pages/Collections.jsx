import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'new-arrivals',
    name: 'New Arrivals',
    description: 'Fresh designs just dropped',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
  },
  {
    id: 'bestsellers',
    name: 'Bestsellers',
    description: 'Our most-loved pieces',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops, and statement pieces',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layers',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
  },
  {
    id: 'gift-sets',
    name: 'Gift Sets',
    description: 'Beautifully packaged presents',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
  }
];

export default function Collections() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-[#F5F3EF] py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1C1917] mb-4">
            Collections
          </h1>
          <p className="text-[#57534E] max-w-lg mx-auto">
            Curated selections for every style and occasion
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <Link
                key={collection.id}
                to={`/shop?category=${collection.id === 'bestsellers' ? '' : collection.id}`}
                className={`group relative overflow-hidden rounded-lg ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`${index === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[4/3'}`}>
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">
                    {collection.name}
                  </h2>
                  <p className="text-white/80 text-sm">
                    {collection.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
