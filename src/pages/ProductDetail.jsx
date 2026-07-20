import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-velmora-gold text-velmora-gold' : 'fill-velmora-stone text-velmora-stone'}`}
            strokeWidth={0}
          />
        ))}
      </div>
      <span className="font-inter text-xs text-velmora-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-stone">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-velmora-muted flex-shrink-0" strokeWidth={1.5} />
          : <ChevronDown className="w-4 h-4 text-velmora-muted flex-shrink-0" strokeWidth={1.5} />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-inter text-sm font-light text-velmora-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function RelatedProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-velmora-linen aspect-portrait mb-4">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p id={`related-${product.titleId}`} className="font-cormorant text-sm font-medium uppercase tracking-widest text-velmora-obsidian mb-1 group-hover:text-velmora-gold-dark transition-colors duration-300">
        {product.name}
      </p>
      <p className="font-inter text-sm font-light text-velmora-obsidian">${product.price}</p>
    </Link>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-velmora-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-velmora-gold border-b border-velmora-gold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-inter text-xs text-velmora-muted hover:text-velmora-gold transition-colors duration-300"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">

          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative overflow-hidden bg-velmora-linen aspect-portrait">
              <img
                data-strk-img-id={images[activeImg].id2}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-24 overflow-hidden bg-velmora-linen flex-shrink-0 transition-all duration-300 ${
                    activeImg === i ? 'ring-1 ring-velmora-gold' : 'ring-1 ring-transparent hover:ring-velmora-stone'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id2}`}
                    data-strk-img={`[pdp-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-inter text-[10px] font-medium uppercase tracking-widest bg-velmora-obsidian text-velmora-white px-2.5 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-inter text-[10px] font-medium uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-2.5 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant font-medium text-3xl md:text-4xl uppercase tracking-widest text-velmora-obsidian leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-inter text-2xl font-light text-velmora-obsidian mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="w-full h-px bg-velmora-stone my-6" />

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-inter font-light text-sm text-velmora-muted leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian mb-3">
                Finish: <span className="text-velmora-muted font-light normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs font-medium uppercase tracking-widest px-5 py-2.5 border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-white'
                        : 'border-velmora-stone text-velmora-muted hover:border-velmora-obsidian hover:text-velmora-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-stone">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-inter text-sm text-velmora-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-obsidian text-velmora-white font-inter text-xs font-medium uppercase tracking-widest py-5 hover:bg-velmora-charcoal transition-colors duration-300 mb-4"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button className="w-full border border-velmora-stone text-velmora-obsidian font-inter text-xs font-medium uppercase tracking-widest py-5 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-velmora-stone">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-inter text-xs text-velmora-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-velmora-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>To maintain your piece: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Polish gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Standard delivery 5–8 business days. Express available at checkout.</p>
                <p>We offer hassle-free 30-day returns on unworn items in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-velmora-linen py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-cormorant font-light text-3xl md:text-4xl text-velmora-obsidian">
              You May Also Like
            </h2>
            <div className="w-10 h-px bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
