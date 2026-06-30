import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian group-hover:text-gold transition-colors">
          {title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-taupe transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="accordion-content"
        style={{ maxHeight: open ? '400px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="pb-5 font-sans text-sm text-taupe leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function RelatedProducts({ products }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [products]);

  if (!products.length) return null;

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-obsidian mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {products.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`} className="block">
                <div className="product-img-wrap relative aspect-[3/4] bg-ivory-dark overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="img-primary absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    data-strk-img-id={`related-alt-${product.imgId2}`}
                    data-strk-img={`[related-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="img-secondary absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => { e.preventDefault(); addItem(product); }}
                      className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] tracking-widest uppercase py-2.5 flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag size={11} strokeWidth={1.5} />
                      Quick Add
                    </button>
                  </div>
                </div>
              </Link>
              <span id={`related-title-${product.id}`} className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium block">{product.name}</span>
              <span id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
              <span className="font-sans text-sm text-obsidian mt-0.5 block">${product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveThumb(0);
    }
  }, [product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, activeThumb]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]`, alt: product.name },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry worn model`, alt: `${product.name} worn` },
    { id: `${product.imgId}-detail`, query: `[${product.titleId}] gold jewelry detail close up`, alt: `${product.name} detail` },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-taupe hover:text-gold transition-colors">Home</Link>
          <span className="text-divider text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-taupe hover:text-gold transition-colors">Shop</Link>
          <span className="text-divider text-xs">/</span>
          <span className="font-sans text-xs text-obsidian">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-ivory-dark overflow-hidden relative">
              <img
                data-strk-img-id={`main-${images[activeThumb].id}`}
                data-strk-img={images[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={images[activeThumb].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Back link mobile */}
            <Link to="/shop" className="flex items-center gap-1.5 text-taupe hover:text-gold transition-colors mb-6 md:hidden">
              <ArrowLeft size={14} strokeWidth={1.5} />
              <span className="font-sans text-xs tracking-widest uppercase">Back to Shop</span>
            </Link>

            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2 capitalize">{product.category}</p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl font-light text-obsidian tracking-widest2 uppercase mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    style={i < Math.floor(product.rating)
                      ? { color: '#c9a96e', fill: '#c9a96e' }
                      : { color: '#e2dbd2', fill: '#e2dbd2' }}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-taupe">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-obsidian mb-5">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="font-sans text-sm text-taupe leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-divider mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">
                Metal: <span className="text-taupe normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider px-4 py-2 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-divider text-taupe hover:border-obsidian hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => addItem(product, selectedVariant, quantity)}
                className="flex-1 bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:bg-obsidian-light transition-colors duration-300"
              >
                <ShoppingBag size={14} strokeWidth={1.5} />
                Add to Cart
              </button>
              <button
                aria-label="Save to wishlist"
                className="w-14 border border-divider text-taupe hover:border-gold hover:text-gold transition-colors duration-300 flex items-center justify-center"
              >
                <Heart size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-wider text-taupe border border-divider px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">To care for your Velmora jewelry: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout.</p>
                <p className="mt-3">We offer hassle-free 30-day returns on all unworn items in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts products={related} />
    </div>
  );
}
