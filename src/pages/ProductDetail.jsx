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
    <div className="border-b border-brand-warm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
      >
        <span className="font-sans text-sm tracking-wider uppercase text-brand-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 animate-fade-in">
          <p className="font-sans text-sm text-brand-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-brand-gold no-underline">
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
        <nav className="mb-8 font-sans text-xs text-brand-muted">
          <Link to="/" className="text-brand-muted no-underline hover:text-brand-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="text-brand-muted no-underline hover:text-brand-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-brand-ivory overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-brand-ivory overflow-hidden border border-brand-warm cursor-pointer hover:border-brand-gold transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-x${i}y${i}z${i}`}
                    data-strk-img={`[pdp-${product.id}-name]`}
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
          <div className="flex flex-col">
            <h1 id={`pdp-${product.id}-name`} className="font-serif text-sm tracking-product uppercase text-brand-charcoal mb-2">
              {product.name}
            </h1>
            <p className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-warm'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p id={`pdp-${product.id}-desc`} className="font-sans text-sm text-brand-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wider uppercase text-brand-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 font-sans text-xs tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                      variant === v
                        ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                        : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wider uppercase text-brand-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-brand-warm text-brand-charcoal bg-transparent hover:bg-brand-ivory transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-brand-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-brand-warm text-brand-charcoal bg-transparent hover:bg-brand-ivory transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="w-full bg-brand-charcoal text-brand-cream font-sans text-xs tracking-widest uppercase py-4 hover:bg-brand-dark transition-colors border-none cursor-pointer mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-brand-warm">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-32">
          <h2 id="related-products-title" className="font-serif text-2xl md:text-3xl font-light text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group no-underline">
                <div className="aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-title] [related-products-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-${p.id}-title`} className="font-serif text-xs tracking-product uppercase text-brand-charcoal text-center">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-brand-muted text-center mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
