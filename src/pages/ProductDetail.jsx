import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-stone transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-linen overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-q1w2e3`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}] gold jewelry close up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-linen overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-r4t5y6`}
                    data-strk-img={`[pdp-name-${product.id}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail ${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-stone mb-6">
              <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
              <span>/</span>
              <span className="text-charcoal capitalize">{product.category}</span>
            </div>

            <h1 id={`pdp-name-${product.id}`} className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-xl font-serif text-charcoal">${product.price}</p>

            {/* Description */}
            <p id={`pdp-desc-${product.id}`} className="mt-4 text-sm text-stone leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-charcoal font-medium mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest border transition-colors ${
                      variant === v
                        ? 'border-gold bg-gold text-white'
                        : 'border-sand text-stone hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-charcoal font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-sand flex items-center justify-center text-stone hover:border-gold hover:text-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-sand flex items-center justify-center text-stone hover:border-gold hover:text-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="w-full mt-8 bg-gold text-white py-4 uppercase tracking-widest text-xs font-medium hover:bg-gold-light transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">Care: Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.</p>
                <p className="mt-2">We offer a 30-day return policy. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-sand pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-linen overflow-hidden">
                  <img
                    data-strk-img-id={`related-${p.id}-u7i8o9`}
                    data-strk-img={`[related-title-${p.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-title-${p.id}`} className="mt-3 text-xs uppercase tracking-product font-medium text-charcoal">
                  {p.name}
                </h3>
                <p className="text-sm text-stone mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
