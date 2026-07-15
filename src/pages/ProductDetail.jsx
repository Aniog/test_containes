import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-charcoal-200/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-[11px] font-semibold tracking-widest2 uppercase text-charcoal-700">
          {title}
        </span>
        <ChevronDown className={`w-4 h-4 text-charcoal-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[300px] pb-5' : 'max-h-0'}`}>
        <div className="text-sm text-charcoal-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);

  const relatedProducts = products.filter((p) => p.id !== productId).slice(0, 4);

  useEffect(() => {
    if (product) setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setGalleryIndex(0);
    setAdded(false);
  }, [productId]);

  useEffect(() => {
    if (!containerRef.current || !product) return;
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [product, selectedVariant]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-xl text-charcoal-500">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ productId: product.id, variant: selectedVariant, price: product.price, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const galleryImages = [0, 1, 2, 3];

  return (
    <div className="min-h-screen pt-24 pb-20" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-400 mb-8">
          <Link to="/" className="hover:text-charcoal-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-700">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] bg-charcoal-100 overflow-hidden rounded-sm mb-4">
              <div
                data-strk-bg-id={`pdp-main-${product.id}`}
                data-strk-bg={`[pdp-name-${product.id}] gold jewelry ${selectedVariant} tone`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="1000"
                className="absolute inset-0"
              />
              {/* Gallery nav */}
              <button
                onClick={() => setGalleryIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream-50/80 backdrop-blur-sm flex items-center justify-center text-charcoal-700 hover:bg-cream-50 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGalleryIndex((p) => (p + 1) % galleryImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream-50/80 backdrop-blur-sm flex items-center justify-center text-charcoal-700 hover:bg-cream-50 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryIndex(i)}
                  className={`w-16 h-20 bg-charcoal-100 rounded-sm overflow-hidden border-2 transition-colors ${
                    i === galleryIndex ? 'border-charcoal-800' : 'border-transparent'
                  }`}
                >
                  <div
                    data-strk-bg-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-bg={`[pdp-name-${product.id}] gold jewelry closeup ${i}`}
                    data-strk-bg-ratio="4x5"
                    data-strk-bg-width="200"
                    className="w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="font-sans text-[10px] tracking-widest2 uppercase text-charcoal-400 mb-3">
              {product.category} · {product.subcategory}
            </p>
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold tracking-widest2 uppercase text-charcoal-900 leading-tight mb-3"
            >
              {product.name}
            </h1>
            <p className="font-sans text-xl font-medium text-charcoal-800 mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-warm-500 text-warm-500' : 'text-charcoal-200 fill-charcoal-200'}`} />
                ))}
              </div>
              <span className="text-xs text-charcoal-500">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Description */}
            <p className="text-sm text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-[10px] font-semibold tracking-widest2 uppercase text-charcoal-400 mb-3">
                  Tone: <span className="text-charcoal-700 ml-1">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 text-sm rounded-full border transition-all ${
                        selectedVariant === v
                          ? 'border-charcoal-800 bg-charcoal-800 text-cream-50'
                          : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[10px] font-semibold tracking-widest2 uppercase text-charcoal-400 mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 border border-charcoal-200 flex items-center justify-center text-charcoal-600 hover:border-charcoal-400 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm text-charcoal-800">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="w-10 h-10 border border-charcoal-200 flex items-center justify-center text-charcoal-600 hover:border-charcoal-400 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className={`w-full py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 mb-4 ${
              added ? 'bg-green-600 text-white' : 'btn-primary'
            }`}>
              {added ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>
            <button onClick={() => { handleAddToCart(); openCart(); }} className="w-full btn-outline">
              Buy it Now
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong>Shipping:</strong> {product.shipping}</p>
                <p><strong>Returns:</strong> {product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24 pt-16 border-t border-charcoal-200/60">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal-900 text-center mb-10 tracking-wider">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                <div className="relative overflow-hidden bg-charcoal-100 aspect-[3/4] mb-3">
                  <div
                    data-strk-bg-id={`related-${rp.id}`}
                    data-strk-bg={`[related-name-${rp.id}] gold jewelry`}
                    data-strk-bg-ratio="3x4"
                    data-strk-bg-width="400"
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p id={`related-name-${rp.id}`} className="font-serif text-sm font-semibold tracking-widest uppercase text-charcoal-900">
                  {rp.name}
                </p>
                <p className="text-sm font-medium text-charcoal-700 mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
