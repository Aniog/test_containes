import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Bestsellers
          </h2>
          <p className="font-sans text-velmora-taupe max-w-xl mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellerProducts.map((product) => (
            <div
              key={product.id}
              className="product-card group relative"
            >
              {/* Image Container */}
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
                  {/* Primary Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image-primary absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Secondary Image (hover) */}
                  <img
                    src={product.imageSecondary}
                    alt={product.name}
                    className="product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
                  />
                  
                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 1, 'gold');
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-velmora-warmBlack/90 text-velmora-cream font-sans text-xs tracking-wider py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>

              {/* Product Info */}
              <div className="mt-4 text-center">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm tracking-wider text-velmora-charcoal hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-sans text-sm text-velmora-gold mt-1">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block btn-outline"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}