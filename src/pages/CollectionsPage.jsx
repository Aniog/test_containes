import { Link } from 'react-router-dom';
import { products } from '../data/products';

function CollectionsPage() {
  // Group products by category
  const collections = [
    {
      id: 'earrings',
      name: 'Earrings',
      description: 'From delicate studs to statement drops, find your perfect pair.',
      products: products.filter(p => p.category === 'earrings'),
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      description: 'Layer, stack, and shine with our curated necklace collection.',
      products: products.filter(p => p.category === 'necklaces'),
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    },
    {
      id: 'huggies',
      name: 'Huggies',
      description: 'Modern classics that hug your earlobe with effortless style.',
      products: products.filter(p => p.category === 'huggies'),
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    }
  ];

  return (
    <main className="pt-24 lg:pt-32 pb-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-primary">Collections</h1>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            Explore our curated collections, each designed to bring timeless elegance to your everyday.
          </p>
        </div>

        <div className="space-y-16">
          {collections.map((collection, index) => (
            <section 
              key={collection.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative aspect-[4/5] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}>
                <h2 className="font-serif text-3xl text-primary">{collection.name}</h2>
                <p className="mt-4 text-secondary">{collection.description}</p>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {collection.products.slice(0, 4).map(product => (
                    <Link 
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group"
                    >
                      <div className="aspect-square bg-card-bg overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-xs tracking-widest uppercase">{product.name}</p>
                      <p className="text-sm">${product.price}</p>
                    </Link>
                  ))}
                </div>

                <Link 
                  to={`/shop?category=${collection.id}`}
                  className="inline-block mt-8 px-6 py-3 border border-primary hover:bg-primary hover:text-text-light transition-colors"
                >
                  View All {collection.name}
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CollectionsPage;