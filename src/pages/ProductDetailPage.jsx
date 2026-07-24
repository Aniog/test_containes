import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-parchment-dark">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian">{title}</span>
        <ChevronDown
          size={16}
          className={`text-warm-gray transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm text-warm-gray font-sans leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-warm-gray font-sans">
          <Link to="/" className="hover:text-champagne transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-champagne transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-obsidian">{product.name}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={img.imgId}
                    data-strk-img={`[product-detail-title] ${img.query}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-square md:aspect-[3/4] overflow-hidden bg-parchment">
              {product.images.map((img, idx) => (
                <img
                  key={img.id}
                  data-strk-img-id={`${img.imgId}-main`}
                  data-strk-img={`[product-detail-desc] [product-detail-title] ${img.query}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    selectedImage === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-champagne text-obsidian text-[9px] tracking-widest uppercase px-2 py-0.5 font-sans font-semibold">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-obsidian text-ivory text-[9px] tracking-widest uppercase px-2 py-0.5 font-sans">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id="product-detail-title"
              className="font-serif text-3xl md:text-4xl tracking-wider uppercase text-obsidian font-light leading-tight"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl text-obsidian mt-3">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    size={13}
                    className={i <= Math.round(product.rating) ? 'fill-champagne text-champagne' : 'text-parchment-dark'}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p
              id="product-detail-desc"
              className="mt-5 text-sm text-warm-gray font-sans leading-relaxed border-t border-parchment-dark pt-5"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">
                Finish: <span className="text-champagne">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-champagne bg-champagne text-obsidian'
                        : 'border-parchment-dark text-warm-gray hover:border-obsidian hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-6 flex gap-3">
              <div className="flex items-center border border-parchment-dark">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-12 flex items-center justify-center text-warm-gray hover:text-obsidian transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm text-obsidian font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-12 flex items-center justify-center text-warm-gray hover:text-obsidian transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:bg-obsidian-light transition-colors duration-300"
              >
                <ShoppingBag size={15} />
                Add to Cart
              </button>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-warm-gray font-sans">
              <span>✓ Free shipping over $50</span>
              <span>✓ 30-day returns</span>
              <span>✓ Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-parchment-dark">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-obsidian">Material:</strong> {product.material}</p>
                <p>To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free standard shipping on orders over $50. Express shipping available at checkout.</p>
                <p>We accept returns within 30 days of delivery. Items must be unworn and in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-parchment-dark">
        <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
