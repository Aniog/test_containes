import { Link } from 'react-router-dom';

export default function Collections() {
  const collections = [
    {
      id: 'everyday-essentials',
      name: 'Everyday Essentials',
      description: 'Timeless pieces designed for daily wear',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop'
    },
    {
      id: 'statement-makers',
      name: 'Statement Makers',
      description: 'Bold pieces that command attention',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop'
    },
    {
      id: 'gift-sets',
      name: 'Gift Sets',
      description: 'Perfectly paired pieces for gifting',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop'
    }
  ];

  return (
    <main className="pt-8 pb-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)] mb-4">
            Collections
          </h1>
          <p className="text-[var(--color-taupe)] max-w-md mx-auto">
            Curated selections of our finest pieces, designed for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/shop?collection=${collection.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="font-serif text-2xl text-[var(--color-cream)] mb-2">
                  {collection.name}
                </h2>
                <p className="text-sm text-[var(--color-cream)]/80">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}