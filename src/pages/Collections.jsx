import { Link } from 'react-router-dom';
import { products, categories } from '@/data/products';

export default function Collections() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Collections
          </h1>
          <p className="font-sans text-velmora-taupe max-w-xl mx-auto">
            Explore our curated collections, each designed to bring beauty to your everyday moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-warmBlack/30 group-hover:bg-velmora-warmBlack/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl text-velmora-cream tracking-widest">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mt-20">
          <h2 className="font-serif text-3xl text-velmora-charcoal mb-8 text-center">
            Featured Pieces
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card group"
              >
                <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-sm tracking-wider text-velmora-charcoal">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm text-velmora-gold mt-1">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}