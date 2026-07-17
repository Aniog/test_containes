import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const Collections = () => {
  const collectionItems = [
    {
      id: 'earrings',
      name: 'Earrings',
      description: 'From delicate studs to statement drops',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop'
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      description: 'Layerable chains and statement pendants',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop'
    },
    {
      id: 'huggies',
      name: 'Huggies',
      description: 'Modern classics for everyday elegance',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal text-center mb-4">
            Collections
          </h1>
          <p className="text-velmora-warm-gray text-center mb-12">
            Explore our curated collections
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {collectionItems.map((item) => (
              <Link
                key={item.id}
                to={`/shop?category=${item.id}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-velmora-cream p-4">
                  <h2 className="font-serif text-2xl mb-2">{item.name}</h2>
                  <p className="text-sm text-velmora-cream/80">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Collections;