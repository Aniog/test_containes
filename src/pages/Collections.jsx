import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Collections() {
  const collections = [
    {
      id: 'new-arrivals',
      name: 'New Arrivals',
      description: 'The latest additions to our collection',
      products: products.slice(0, 3),
    },
    {
      id: 'bestsellers',
      name: 'Bestsellers',
      description: 'Our most loved pieces',
      products: products.slice(2, 5),
    },
    {
      id: 'gifts',
      name: 'Perfect Gifts',
      description: 'Thoughtfully curated gift sets',
      products: products.filter((p) => p.category === 'sets'),
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl">Collections</h1>
          <p className="mt-4 text-velmora-taupe font-sans">
            Curated selections for every style and occasion
          </p>
        </div>

        {/* Collections */}
        <div className="space-y-20">
          {collections.map((collection) => (
            <section key={collection.id}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl">{collection.name}</h2>
                  <p className="mt-2 text-velmora-taupe font-sans">
                    {collection.description}
                  </p>
                </div>
                <Link
                  to={`/shop?collection=${collection.id}`}
                  className="text-sm text-velmora-taupe hover:text-charcoal underline mt-4 md:mt-0"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {collection.products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="product-name text-xs">{product.name}</h3>
                      <p className="font-sans text-sm mt-1">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}