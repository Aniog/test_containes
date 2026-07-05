import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-ivory mb-4">
          {/* Primary image */}
          <div
            data-strk-img-id={`bestseller-${product.id}`}
            data-strk-img={`[${product.id}-name] [product-type] gold jewelry product photo dark background elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="absolute inset-0 w-full h-full bg-brand-ivory transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay with add to cart */}
          <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/20 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="btn-gold py-3 px-6 text-xs transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              <ShoppingBag size={14} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="text-center">
          <p id={`${product.id}-name`} className="product-name">{product.name}</p>
          <p className="font-sans text-xs text-brand-warm-gray mt-1">{product.subtitle}</p>
          <p className="font-sans text-sm font-medium text-brand-charcoal mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subheading mb-3">Curated Selection</p>
          <h2 className="section-heading">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
