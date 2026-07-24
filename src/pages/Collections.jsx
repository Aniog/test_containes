import { Link } from 'react-router-dom';

export default function Collections() {
  const collections = [
    {
      id: 'new-arrivals',
      name: 'New Arrivals',
      description: 'The latest additions to our collection',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop'
    },
    {
      id: 'bestsellers',
      name: 'Bestsellers',
      description: 'Our most loved pieces',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=600&fit=crop'
    },
    {
      id: 'gift-sets',
      name: 'Gift Sets',
      description: 'Perfectly packaged presents',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="pt-[72px]">
      {/* Page Header */}
      <div className="bg-[var(--color-cream-dark)] py-16">
        <div className="container text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)]">
            Collections
          </h1>
          <p className="mt-4 text-[var(--color-stone)] max-w-md mx-auto">
            Curated collections for every occasion and style
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/shop?collection=${collection.id}`}
              className="group relative aspect-[4/5] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h2 className="font-serif text-3xl text-[var(--color-cream)]">
                  {collection.name}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-cream)] opacity-80">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}