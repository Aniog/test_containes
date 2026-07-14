import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velmora-text-primary font-600">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-velmora-text-muted" />
          : <ChevronDown className="w-4 h-4 text-velmora-text-muted" />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-velmora-text-secondary leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="bg-velmora-linen py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-light text-velmora-text-primary">You May Also Like</h2>
          <div className="w-10 h-px bg-velmora-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="relative overflow-hidden bg-velmora-sand aspect-product mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] [related-section-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 id={`related-${product.titleId}`} className="font-serif text-xs uppercase tracking-widest text-velmora-text-primary group-hover:text-velmora-gold transition-colors">
                {product.name}
              </h3>
              <p className="font-sans text-sm font-600 text-velmora-text-primary mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
        <span id="related-section-title" className="hidden">Velmora fine jewelry gold earrings necklaces</span>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
  }, [product.id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const images = [
    { imgId: product.imgId, imgId2: `pdp-main-${product.imgId}` },
    { imgId: product.imgId2, imgId2: `pdp-alt-${product.imgId2}` },
  ];

  return (
    <>
      <div ref={containerRef} className="bg-velmora-linen pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 font-sans text-xs text-velmora-text-muted">
            <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-velmora-text-primary">{product.name}</span>
          </nav>
        </div>

        {/* Main product section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Image gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-3">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveThumb(i)}
                    className={`relative flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                      activeThumb === i ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      data-strk-img-id={`thumb-${i}-${img.imgId}`}
                      data-strk-img={`[pdp-product-title] [pdp-product-desc]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 relative overflow-hidden bg-velmora-sand" style={{ aspectRatio: '3/4' }}>
                <img
                  data-strk-img-id={`pdp-main-active-${product.id}-${activeThumb}`}
                  data-strk-img={`[pdp-product-desc] [pdp-product-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Product info */}
            <div className="flex flex-col">
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {product.tags.includes('bestseller') && (
                  <span className="bg-velmora-obsidian text-velmora-cream font-sans text-[9px] tracking-widest uppercase px-2 py-1">
                    Bestseller
                  </span>
                )}
                {product.tags.includes('new') && (
                  <span className="bg-velmora-gold text-velmora-obsidian font-sans text-[9px] tracking-widest uppercase px-2 py-1">
                    New
                  </span>
                )}
              </div>

              {/* Name */}
              <h1
                id="pdp-product-title"
                className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-velmora-text-primary leading-tight mb-3"
              >
                {product.name}
              </h1>

              {/* Price */}
              <p className="font-sans text-2xl font-600 text-velmora-text-primary mb-4">
                ${product.price}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-velmora-text-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="w-10 h-px bg-velmora-gold mb-6" />

              {/* Short description */}
              <p id="pdp-product-desc" className="font-sans text-sm text-velmora-text-secondary leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mb-6">
                <p className="font-sans text-xs tracking-widest uppercase text-velmora-text-muted mb-3">
                  Finish: <span className="text-velmora-text-primary">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                          : 'border-velmora-sand text-velmora-text-secondary hover:border-velmora-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-sans text-xs tracking-widest uppercase text-velmora-text-muted mb-3">Quantity</p>
                <div className="flex items-center gap-0 border border-velmora-sand w-fit">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-velmora-text-secondary hover:text-velmora-gold hover:bg-velmora-linen transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-velmora-text-primary border-x border-velmora-sand">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-velmora-text-secondary hover:text-velmora-gold hover:bg-velmora-linen transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300 font-600 mb-3"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
              <button className="w-full border border-velmora-obsidian text-velmora-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-velmora-obsidian hover:text-velmora-cream transition-all duration-300">
                Buy It Now
              </button>

              {/* Trust signals */}
              <div className="mt-6 pt-6 border-t border-velmora-sand flex flex-wrap gap-4">
                {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                  <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-velmora-text-muted">
                    ✓ {t}
                  </span>
                ))}
              </div>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description">{product.description}</Accordion>
                <Accordion title="Materials & Care">
                  <strong>Materials:</strong> {product.materials}<br /><br />
                  <strong>Care:</strong> {product.care}
                </Accordion>
                <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </>
  );
}
