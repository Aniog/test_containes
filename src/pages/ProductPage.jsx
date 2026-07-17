import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-obsidian">{title}</span>
        {open ? <ChevronUp size={14} className="text-ink-muted" /> : <ChevronDown size={14} className="text-ink-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="font-manrope text-sm text-ink-muted leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-cormorant text-3xl font-light text-obsidian mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.slug}`}>
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
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <button
                      onClick={(e) => { e.preventDefault(); addItem(product); }}
                      className="w-full bg-obsidian/90 text-cream font-manrope text-xs tracking-widest uppercase py-3 hover:bg-obsidian transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
              </Link>
              <div className="mt-3">
                <p id={`related-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-wider text-obsidian">
                  {product.name}
                </p>
                <p className="font-manrope text-sm font-medium text-obsidian mt-0.5">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
    { id: `pdp-detail-${product.id}-a`, id2: `pdp-detail-a-${product.id}` },
    { id: `pdp-detail-${product.id}-b`, id2: `pdp-detail-b-${product.id}` },
  ];

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-parchment">
      <Nav />
      <CartDrawer />

      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center gap-2 font-manrope text-xs text-ink-muted">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-obsidian">{product.name}</span>
          </div>
        </div>

        {/* Product layout */}
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* Left: Image Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-3">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                      activeImage === i ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      data-strk-img-id={`thumb-${img.id2}`}
                      data-strk-img={`[${product.titleId}] gold jewelry detail`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="120"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 relative overflow-hidden bg-linen aspect-[3/4]">
                {images.map((img, i) => (
                  <img
                    key={i}
                    data-strk-img-id={`main-${img.id2}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                      activeImage === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
              {/* Category */}
              <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-3">
                {product.category}
              </p>

              {/* Name */}
              <h1
                id={product.titleId}
                className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.1em] font-medium text-obsidian leading-tight"
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                      className={i < Math.floor(product.rating) ? 'text-gold' : 'text-sand'}
                    />
                  ))}
                </div>
                <span className="font-manrope text-xs text-ink-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-cormorant text-3xl font-light text-obsidian mt-4">
                ${product.price}
              </p>

              {/* Short description */}
              <p
                id={product.descId}
                className="font-manrope text-sm text-ink-muted leading-relaxed mt-4 pb-5 border-b border-sand"
              >
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mt-5">
                <p className="font-manrope text-xs tracking-widest uppercase text-obsidian mb-3">
                  Finish: <span className="text-ink-muted normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs tracking-wider uppercase px-4 py-2 border transition-colors ${
                        selectedVariant === v
                          ? 'border-obsidian bg-obsidian text-cream'
                          : 'border-sand text-ink-muted hover:border-obsidian hover:text-obsidian'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-5">
                <p className="font-manrope text-xs tracking-widest uppercase text-obsidian mb-3">Quantity</p>
                <div className="flex items-center border border-sand w-fit">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 py-3 text-ink-muted hover:text-obsidian transition-colors"
                    aria-label="Decrease"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="font-manrope text-sm w-10 text-center text-obsidian">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 py-3 text-ink-muted hover:text-obsidian transition-colors"
                    aria-label="Increase"
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="mt-6 w-full bg-obsidian text-cream font-manrope text-xs tracking-widest uppercase py-4 hover:bg-charcoal transition-colors"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Trust signals */}
              <div className="mt-4 flex flex-wrap gap-4">
                {['Free Worldwide Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                  <span key={t} className="font-manrope text-[10px] tracking-wider text-ink-muted/70 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                    {t}
                  </span>
                ))}
              </div>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description">
                  {product.description}
                </Accordion>
                <Accordion title="Materials & Care">
                  <strong>Materials:</strong> {product.material}<br /><br />
                  <strong>Care:</strong> {product.care}
                </Accordion>
                <Accordion title="Shipping & Returns">
                  {product.shipping}
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </main>

      <Footer />
    </div>
  );
}
