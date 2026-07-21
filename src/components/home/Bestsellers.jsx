import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StockImg } from '@/lib/images';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-parchment rounded overflow-hidden">
          <StockImg
            id={`bestseller-${product.id}`}
            query={`[product-title-${product.id}]`}
            ratio="3x4"
            width={600}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {product.hoverImage && (
            <StockImg
              id={`bestseller-hover-${product.id}`}
              query={`[product-title-${product.id}]`}
              ratio="3x4"
              width={600}
              alt={`${product.name} alternate`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
          <span id={`product-title-${product.id}`} className="sr-only">
            {product.name} gold jewelry
          </span>
        </div>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-espresso hover:text-velmora-gold transition-colors duration-300 truncate">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center gap-1.5 mt-1">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="font-sans text-xs text-velmora-stone">
              {product.rating}
            </span>
            <span className="font-sans text-xs text-velmora-taupe">
              ({product.reviewCount})
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="font-sans text-sm font-medium text-velmora-espresso">
            ${product.price}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, 'gold', 1);
            }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-velmora-espresso text-white p-2 rounded hover:bg-velmora-ink"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-espresso">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
