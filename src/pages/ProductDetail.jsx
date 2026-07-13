import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Accordion from '../components/ui/Accordion';

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative overflow-hidden bg-linen aspect-[3/4]">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={() => addItem(product)}
                    className="w-full bg-obsidian/90 text-cream py-2.5 text-[10px] tracking-widest uppercase font-sans font-semibold hover:bg-obsidian transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="pt-3">
                <Link to={`/product/${product.slug}`}>
                  <h3
                    id={`related-${product.titleId}`}
                    className="font-serif text-xs uppercase tracking-widest text-obsidian hover:text-gold transition-colors"
                  >
                    {product.name}
                  </h3>
                </Link>
                <p className="font-sans text-sm font-medium text-obsidian mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[10px] tracking-wider uppercase font-sans text-whisper">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-muted">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-linen aspect-[4/5]">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry close up`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[product.imgId, product.imgId2, `${product.imgId}-alt3`, `${product.imgId}-alt4`].map((imgId, i) => (
                <div key={i} className="aspect-square overflow-hidden bg-linen cursor-pointer border-2 border-transparent hover:border-gold transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${imgId}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="text-[9px] tracking-widest uppercase font-sans font-semibold text-gold border border-gold px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="text-[9px] tracking-widest uppercase font-sans font-semibold text-obsidian border border-obsidian px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-obsidian font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
                  />
                ))}
              </div>
              <span className="text-xs text-muted font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-obsidian mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-muted leading-relaxed mb-8 border-t border-linen pt-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs tracking-widest uppercase font-sans font-semibold text-obsidian mb-3">
                  Tone: <span className="font-normal capitalize text-muted">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 text-xs tracking-widest uppercase font-sans font-medium border transition-colors ${
                        selectedVariant === v
                          ? 'bg-obsidian text-cream border-obsidian'
                          : 'bg-transparent text-obsidian border-linen hover:border-obsidian'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase font-sans font-semibold text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                >
                  <ChevronLeft size={14} />
                </button>
                <span className="w-10 text-center text-sm font-sans text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-widest uppercase font-sans font-semibold flex items-center justify-center gap-3 transition-colors duration-300 ${
                added
                  ? 'bg-obsidian text-cream'
                  : 'bg-gold text-cream hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5 pt-5 border-t border-linen">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="text-[10px] tracking-wider uppercase font-sans text-whisper">
                  ✦ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-obsidian">Materials:</strong> {product.materials}</p>
                <p><strong className="text-obsidian">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Delivered in 3–7 business days.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
