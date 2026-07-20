import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none"
      >
        <span className="font-sans text-sm tracking-wider uppercase text-brand-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-brand-muted font-sans leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-brand-gold no-underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-brand-ivory overflow-hidden mb-4">
              {activeThumb === 0 ? (
                <img
                  data-strk-img-id={`pdp-main-${product.imgId}`}
                  data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title] gold jewelry product`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  data-strk-img-id={`pdp-alt-${product.imgId2}`}
                  data-strk-img={`[pdp-${product.id}-title] gold jewelry detail close up`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveThumb(0)}
                className={`w-20 h-20 bg-brand-ivory overflow-hidden border-none p-0 rounded-none ${activeThumb === 0 ? 'ring-1 ring-brand-charcoal' : 'opacity-60 hover:opacity-100'} transition-opacity`}
              >
                <img
                  data-strk-img-id={`pdp-thumb1-${product.id}-k1l2m3`}
                  data-strk-img={`[pdp-${product.id}-title] gold jewelry`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Thumbnail 1"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveThumb(1)}
                className={`w-20 h-20 bg-brand-ivory overflow-hidden border-none p-0 rounded-none ${activeThumb === 1 ? 'ring-1 ring-brand-charcoal' : 'opacity-60 hover:opacity-100'} transition-opacity`}
              >
                <img
                  data-strk-img-id={`pdp-thumb2-${product.id}-n4o5p6`}
                  data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Thumbnail 2"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <h1 id={`pdp-${product.id}-title`} className="font-serif text-2xl md:text-3xl uppercase tracking-product text-brand-charcoal font-medium">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-sans">({product.reviewCount} reviews)</span>
            </div>

            <p className="font-sans text-xl text-brand-charcoal mt-4">${product.price}</p>

            <p id={`pdp-${product.id}-desc`} className="font-sans text-sm text-brand-muted mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="font-sans text-xs tracking-wider uppercase text-brand-charcoal mb-3">Tone</p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 rounded-full text-sm font-sans capitalize transition-all border ${
                        selectedVariant === variant
                          ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                          : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal bg-transparent'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-wider uppercase text-brand-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4 border border-brand-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-brand-charcoal hover:text-brand-gold transition-colors bg-transparent border-none"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-sans text-brand-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-brand-charcoal hover:text-brand-gold transition-colors bg-transparent border-none"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full py-4 bg-brand-charcoal text-brand-cream text-sm tracking-wider uppercase font-sans hover:bg-brand-graphite transition-colors border-none rounded-none"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-sand">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  Crafted with {product.material} over a hypoallergenic brass base. 
                  To maintain its luster, avoid contact with water, perfume, and lotions. 
                  Store in the included velvet pouch when not wearing.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders. Delivery within 5–7 business days. 
                  We offer a 30-day return policy — items must be unworn and in original packaging. 
                  Contact hello@velmora.com to initiate a return.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-32">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group no-underline">
                <div className="aspect-[3/4] bg-brand-ivory overflow-hidden">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[related-${rp.id}-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 id={`related-${rp.id}-title`} className="font-serif text-xs uppercase tracking-product text-brand-charcoal mt-3">
                  {rp.name}
                </h3>
                <p className="text-sm font-sans text-brand-muted mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
