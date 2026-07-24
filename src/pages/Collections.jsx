import { Link } from 'react-router-dom';

export default function Collections() {
  const collections = [
    {
      id: 'earrings',
      name: 'Earrings',
      description: 'From delicate studs to statement drops',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop'
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      description: 'Layerable chains and statement pieces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop'
    },
    {
      id: 'huggies',
      name: 'Huggies',
      description: 'The perfect everyday hoops',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop'
    }
  ];

  return (
    <div className="pt-[72px]">
      <section className="relative py-20 md:py-32" style={{ backgroundColor: 'var(--color-ivory)' }}>
        <div className="container mx-auto text-center px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Collections
          </h1>
          <p className="font-sans text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Explore our curated collections
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map(collection => (
              <Link
                key={collection.id}
                to={`/shop?category=${collection.id}`}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="font-serif text-2xl md:text-3xl mb-2">{collection.name}</h2>
                  <p className="font-sans text-sm opacity-80">{collection.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}