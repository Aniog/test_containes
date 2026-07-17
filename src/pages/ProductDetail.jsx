import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none"
      >
        <span className="text-sm uppercase tracking-widest text-charcoal font-sans font-medium">
          {title}
        </span>
        <ChevronDown className={`w-4 h-4 text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-stone leading-relaxed font-sans">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm uppercase tracking-widest">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-stone font-sans">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-ivory overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-i9j0`}
                data-strk-img={`[pdp-product-name-${product.id}] gold jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-ivory overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-k1l2`}
                    data-strk-img={`[pdp-product-name-${product.id}] fine jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail ${i}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <h1
              id={`pdp-product-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal"
            >
              {product.name}
            </h1>

            <p className="mt-3 font-serif text-2xl text-charcoal">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-border'}`}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs text-stone font-sans">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-6 text-stone leading-relaxed font-sans text-sm">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-charcoal font-sans font-medium mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest font-sans border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-white'
                        : 'border-border text-stone hover:border-gold hover:text-gold bg-transparent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-charcoal font-sans font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border text-stone hover:border-gold hover:text-gold transition-colors bg-transparent"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-charcoal font-sans font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border text-stone hover:border-gold hover:text-gold transition-colors bg-transparent"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-gold text-white py-4 text-sm uppercase tracking-widest hover:bg-gold-dark transition-colors border-none"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.details.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.details.materials}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.details.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
