import { Link } from 'react-router-dom';

const CollectionsPage = () => {
  const collections = [
    {
      id: 'everyday-luxury',
      name: 'Everyday Luxury',
      description: 'Effortless pieces for your daily routine',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop'
    },
    {
      id: 'gift-sets',
      name: 'Gift Sets',
      description: 'Perfectly paired pieces for special moments',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=600&fit=crop'
    },
    {
      id: 'statement',
      name: 'Statement',
      description: 'Bold pieces that command attention',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop'
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-velmora-cream">
      {/* Header */}
      <div className="bg-velmora-creamDark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-velmora-dark">Collections</h1>
          <p className="mt-4 text-velmora-textLight max-w-xl mx-auto">
            Curated collections designed for every style and occasion
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to="/shop"
                className="group relative aspect-[4/5] overflow-hidden rounded-sm"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-velmora-dark/40 group-hover:bg-velmora-dark/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h2 className="font-serif text-3xl text-white">{collection.name}</h2>
                  <p className="mt-2 text-white/80 text-sm">{collection.description}</p>
                  <span className="mt-4 text-white/80 text-sm uppercase tracking-widest-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionsPage;