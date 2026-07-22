import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/common/ProductCard';
import StarRating from '@/components/common/StarRating';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-charcoal">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-inter text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-linen">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-inter text-[10px] uppercase tracking-widest text-warm-gray hover:text-gold transition-colors">Home</Link>
          <span className="text-linen">/</span>
          <Link to="/shop" className="font-inter text-[10px] uppercase tracking-widest text-warm-gray hover:text-gold transition-colors">Shop</Link>
          <span className="text-linen">/</span>
          <span className="font-inter text-[10px] uppercase tracking-widest text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Image Gallery */}
          <ProductGallery product={product} />

          {/* Product Info */}
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Accordions */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="max-w-2xl border-t border-linen">
          <Accordion title="Description" defaultOpen>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">{product.description}</p>
          </Accordion>
          <Accordion title="Materials & Care">
            <div className="space-y-3">
              <p className="font-inter text-sm text-warm-gray leading-relaxed">{product.materials}</p>
              <p className="font-inter text-sm text-warm-gray leading-relaxed">{product.care}</p>
            </div>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p className="font-inter text-sm text-warm-gray leading-relaxed">{product.shipping}</p>
          </Accordion>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-linen py-16 md:py-20 bg-blush">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal font-light tracking-wide mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGallery({ product }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
        {[0, 1].map(i => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
              activeImg === i ? 'border-gold' : 'border-transparent'
            }`}
          >
            <img
              data-strk-img-id={i === 0 ? product.imgId : product.img2Id}
              data-strk-img={i === 0
                ? `[${product.descId}] [${product.titleId}]`
                : `[${product.titleId}] gold jewelry close-up detail`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image — both rendered in DOM, CSS toggles visibility */}
      <div className="flex-1 aspect-[3/4] overflow-hidden bg-blush relative">
        {/* Image 1 */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === 0 ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Image 2 */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry close-up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === 1 ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Hidden text refs */}
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.shortDescription}</span>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 w-9 h-9 bg-ivory/80 backdrop-blur-sm flex items-center justify-center hover:bg-ivory transition-colors z-10">
          <Heart className="w-4 h-4 text-warm-gray" />
        </button>
      </div>
    </div>
  );
}

function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Tags */}
      <div className="flex items-center gap-2">
        {product.tags?.includes('bestseller') && (
          <span className="font-inter text-[9px] uppercase tracking-widest bg-gold text-ivory px-2.5 py-1">Bestseller</span>
        )}
        {product.tags?.includes('new') && (
          <span className="font-inter text-[9px] uppercase tracking-widest bg-charcoal text-ivory px-2.5 py-1">New</span>
        )}
      </div>

      {/* Name & Price */}
      <div>
        <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-charcoal font-medium leading-tight">
          {product.name}
        </h1>
        <div className="flex items-center gap-4 mt-3">
          <span className="font-inter text-2xl font-medium text-charcoal">${product.price}</span>
          <span className="font-inter text-xs text-warm-gray">Free shipping</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <StarRating rating={product.rating} size="lg" />
        <span className="font-inter text-xs text-warm-gray">{product.rating} ({product.reviewCount} reviews)</span>
      </div>

      {/* Short description */}
      <p className="font-inter text-sm text-warm-gray leading-relaxed border-t border-linen pt-5">
        {product.shortDescription}. {product.description.split('.')[0]}.
      </p>

      {/* Variant selector */}
      <div>
        <p className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-3">
          Finish: <span className="text-charcoal">{selectedVariant}</span>
        </p>
        <div className="flex gap-2">
          {product.variants.map(v => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`font-inter text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors duration-200 ${
                selectedVariant === v
                  ? 'bg-charcoal text-ivory border-charcoal'
                  : 'bg-transparent text-warm-gray border-linen hover:border-charcoal hover:text-charcoal'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-3">Quantity</p>
        <div className="flex items-center border border-linen w-fit">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-12 text-center font-inter text-sm text-charcoal">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 font-inter text-xs uppercase tracking-widest transition-colors duration-300 ${
          added
            ? 'bg-gold text-ivory'
            : 'bg-charcoal text-ivory hover:bg-gold'
        }`}
      >
        {added ? '✓ Added to Cart' : 'Add to Cart'}
      </button>

      {/* Trust signals */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        {[
          'Free Worldwide Shipping',
          '30-Day Returns',
          '18K Gold Plated',
          'Hypoallergenic',
        ].map(item => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
            <span className="font-inter text-[10px] text-warm-gray uppercase tracking-wider">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
}
