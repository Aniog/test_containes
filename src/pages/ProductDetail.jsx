import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id, selectedImage]);

  if (!product) {
    return (
      <main className="py-20 text-center">
        <p className="font-serif text-2xl text-ink-muted mb-4">Product not found</p>
        <Link to="/shop" className="text-sm text-gold-500 hover:text-gold-600 underline underline-offset-2">
          Back to Shop
        </Link>
      </main>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    window.dispatchEvent(new CustomEvent('velmora:open-cart'));
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  return (
    <main ref={containerRef} className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-ink-muted hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-velvet-100 mb-4">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${selectedImage}`}
                data-strk-img={`[pdp-title-${product.id}] [pdp-desc-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-velvet-100 transition-all duration-300 ${
                    idx === selectedImage ? 'ring-1 ring-ink' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-title-${product.id}] [pdp-desc-${product.id}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <h1 id={`pdp-title-${product.id}`} className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink uppercase tracking-wider mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-ink-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-ink mb-6">${product.price}</p>

            {/* Description */}
            <p id={`pdp-desc-${product.id}`} className="text-sm text-ink-lighter leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-6 mb-8">
              {/* Variant selector */}
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">
                  Finish: <span className="text-gold-500">{variant === 'gold' ? '18K Gold Plated' : 'Silver Tone'}</span>
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setVariant('gold')}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase transition-all duration-300 ${
                      variant === 'gold'
                        ? 'bg-ink text-white'
                        : 'border border-ink-border text-ink hover:border-ink'
                    }`}
                  >
                    18K Gold
                  </button>
                  <button
                    onClick={() => setVariant('silver')}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase transition-all duration-300 ${
                      variant === 'silver'
                        ? 'bg-ink text-white'
                        : 'border border-ink-border text-ink hover:border-ink'
                    }`}
                  >
                    Silver Tone
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
                <div className="flex items-center border border-ink-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-velvet-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-velvet-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`w-full py-3.5 text-sm tracking-widest uppercase font-medium flex items-center justify-center gap-3 transition-all duration-300 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-gold-500 text-white hover:bg-gold-600'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-ink-border">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-ink-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left transition-colors hover:text-gold-500"
                  >
                    <span className="font-sans text-xs tracking-widest uppercase text-ink">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-ink-lighter leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-ink-border">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((r) => (
                <Link key={r.id} to={`/product/${r.id}`} className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-velvet-100 mb-3">
                    <img
                      data-strk-img-id={`related-${r.id}`}
                      data-strk-img={`[related-title-${r.id}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={r.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p id={`related-title-${r.id}`} className="product-name mb-1 group-hover:text-gold-500 transition-colors">
                    {r.name}
                  </p>
                  <p className="font-sans text-sm text-ink">${r.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}