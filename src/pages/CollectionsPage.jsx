import { Link } from 'react-router-dom';

export default function CollectionsPage() {
  const collections = [
    {
      id: 'everyday-luxury',
      name: 'Everyday Luxury',
      description: 'Effortless pieces for your daily routine',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=600&fit=crop'
    },
    {
      id: 'gift-sets',
      name: 'Gift Sets',
      description: 'Perfectly paired pieces for gifting',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop'
    },
    {
      id: 'statement',
      name: 'Statement',
      description: 'Bold pieces that command attention',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop'
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h1 className="font-serif text-h1 text-secondary">Collections</h1>
          <p className="text-body text-secondary-text mt-4 max-w-xl mx-auto">
            Curated selections for every style and occasion
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map(collection => (
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
                <div className="absolute inset-0 bg-secondary/30 group-hover:bg-secondary/40 transition-smooth" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary">
                    <h2 className="font-serif text-h3">{collection.name}</h2>
                    <p className="text-small text-primary/80 mt-2">{collection.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}