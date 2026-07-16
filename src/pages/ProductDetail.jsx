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
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none"
      >
        <span className="text-sm font-medium text-charcoal uppercase tracking-button">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-stone leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-gold hover:text-gold-dark transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-stone">
          <Link to="/" className="hover:text-charcoal transition-colors no-underline text-stone">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors no-underline text-stone">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-ivory overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-x1y2`}
                data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-desc] gold jewelry product`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-ivory overflow-hidden border border-border hover:border-gold transition-colors cursor-pointer">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-z3w4`}
                    data-strk-img={`[pdp-${product.id}-name] gold jewelry detail angle ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal mb-3"
            >
              {product.name}
            </h1>

            <p className="text-2xl font-serif text-charcoal mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">({product.reviewCount} reviews)</span>
            </div>

            {/* Description */}
            <p id={`pdp-${product.id}-desc`} className="text-sm text-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-button text-charcoal font-medium mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-button font-medium transition-all border ${
                      variant === v
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-stone border-border hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-button text-charcoal font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors bg-transparent border-none"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-charcoal font-medium border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors bg-transparent border-none"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="w-full py-4 bg-gold text-cream text-xs uppercase tracking-button font-medium hover:bg-gold-dark transition-colors border-none mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>To maintain the beauty of your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
                <p>We offer a 30-day return policy. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-16 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group no-underline">
                <div className="aspect-[3/4] bg-ivory overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.id}-m5n6`}
                    data-strk-img={`[related-${p.id}-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 id={`related-${p.id}-title`} className="font-serif text-xs uppercase tracking-product text-charcoal mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-stone">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
