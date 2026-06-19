import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function RelatedProductCard({ product }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden bg-warm-100 mb-4 relative">
        <img
          src={product.images.primary}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Quick Add on Hover */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-0 left-0 right-0 py-3 bg-charcoal-800 text-cream-50 text-sm tracking-wider uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center"
        >
          Quick Add
        </button>
      </div>

      {/* Info */}
      <h3 className="text-product-name text-xs mb-1">{product.name}</h3>
      <div className="flex items-center gap-2 mb-1">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-xs text-charcoal-500">{product.rating}</span>
        </div>
      </div>
      <p className="font-serif text-lg">${product.price}</p>
    </Link>
  );
}

export default function RelatedProducts({ currentProduct }) {
  // Get related products from same category, excluding current product
  const relatedProducts = products
    .filter(
      (p) =>
        p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, 4);

  // If not enough products in same category, fill with other products
  if (relatedProducts.length < 4) {
    const additionalProducts = products
      .filter(
        (p) =>
          p.category !== currentProduct.category &&
          !relatedProducts.find((rp) => rp.id === p.id)
      )
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...additionalProducts);
  }

  return (
    <section className="py-16 sm:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-ultra-wide uppercase text-gold-600 mb-3">
            Complete the Look
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800">
            You May Also Like
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {relatedProducts.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}