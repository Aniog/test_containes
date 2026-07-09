import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products';

export default function BestsellersSection() {
  const bestsellers = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Bestsellers
          </h2>
          <div className="hairline w-24 mx-auto mb-6" />
          <p className="text-velmora-stone text-lg max-w-2xl mx-auto">
            Our most loved pieces, cherished by women around the world
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border-b-2 border-velmora-gold text-velmora-charcoal pb-1 text-sm tracking-wide hover:text-velmora-gold transition-colors"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}

// Inline ProductCard component for this section
function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-ivory aspect-[3/4] mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>

      <div className="space-y-2">
        <h3
          className="product-name text-sm"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {product.name}
        </h3>
        <p className="text-base font-medium">${product.price}.00</p>
      </div>
    </Link>
  );
}
