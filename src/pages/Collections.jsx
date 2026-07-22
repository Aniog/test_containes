import { Link } from 'react-router-dom';

export default function Collections() {
  const collections = [
    {
      id: 'everyday',
      name: 'Everyday Essentials',
      description: 'Timeless pieces for daily wear',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop'
    },
    {
      id: 'evening',
      name: 'Evening Elegance',
      description: 'Statement pieces for special occasions',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=600&fit=crop'
    },
    {
      id: 'gifts',
      name: 'Gift Sets',
      description: 'Perfectly packaged presents',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-velmora-sand py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">
            Collections
          </h1>
          <p className="font-sans text-sm text-velmora-taupe mt-3">
            Curated pieces for every moment
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link 
              key={collection.id}
              to={`/shop?collection=${collection.id}`}
              className="group relative aspect-[4/5] overflow-hidden animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <img 
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-velmora-cream tracking-widest">
                    {collection.name}
                  </h3>
                  <p className="font-sans text-sm text-velmora-cream/70 mt-2">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}