import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const accordionItems = [
  { id: 'description', label: 'Description', key: 'longDescription' },
  { id: 'materials', label: 'Materials & Care', key: 'materials' },
  { id: 'shipping', label: 'Shipping & Returns', key: 'shipping' },
];

function Accordion({ items, product }) {
  const [open, setOpen] = useState('description');
  return (
    <div className="border-t border-gold/20">
      {items.map(item => (
        <div key={item.id} className="border-b border-gold/20">
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-manrope text-xs uppercase tracking-widest text-obsidian">
              {item.label}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-stone transition-transform duration-200 ${
                open === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          {open === item.id && (
            <div className="pb-5 animate-fadeIn">
              <p className="font-manrope text-sm text-stone leading-relaxed">
                {product[item.key]}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    setSelectedVariant(product.variants?.[0] || null);
    setQuantity(1);
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, id2: `${product.imgId}-pdp-main` },
    { id: product.imgId2, id2: `${product.imgId2}-pdp-alt` },
  ];

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-manrope text-[10px] uppercase tracking-widest text-stone hover:text-gold transition-colors">
            Home
          </Link>
          <span className="text-stone-light text-xs">/</span>
          <Link to="/shop" className="font-manrope text-[10px] uppercase tracking-widest text-stone hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-stone-light text-xs">/</span>
          <span className="font-manrope text-[10px] uppercase tracking-widest text-obsidian">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb-${idx}`}
                    data-strk-img={`[${product.titleId}] gold jewelry`}
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
            <div className="flex-1 relative overflow-hidden bg-ivory-dark" style={{ aspectRatio: '3/4' }}>
              {images.map((img, idx) => (
                <img
                  key={idx}
                  data-strk-img-id={`${img.id}-main-${idx}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="bg-gold text-ivory font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="bg-obsidian text-ivory font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Product name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest2 text-obsidian font-medium mb-2 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-stone-light'}`}
                    style={i < Math.floor(product.rating) ? { fill: 'currentColor' } : {}}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-obsidian font-medium mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-stone leading-relaxed mb-6 border-b border-gold/20 pb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="font-manrope text-[10px] uppercase tracking-widest text-stone mb-3">
                  Finish: <span className="text-obsidian">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs px-4 py-2 border transition-colors ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-ivory'
                          : 'border-gold/30 text-stone hover:border-gold hover:text-obsidian'
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
              <p className="font-manrope text-[10px] uppercase tracking-widest text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-gold/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-ivory font-manrope text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors mb-3"
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-4 mb-6">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-gold" />
                <span className="font-manrope text-[10px] text-stone uppercase tracking-widest">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-gold" />
                <span className="font-manrope text-[10px] text-stone uppercase tracking-widest">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-gold" />
                <span className="font-manrope text-[10px] text-stone uppercase tracking-widest">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <Accordion items={accordionItems} product={product} />
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-20 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
              You May Also Like
            </h2>
            <Link
              to="/shop"
              className="font-manrope text-xs uppercase tracking-widest text-stone hover:text-gold transition-colors border-b border-stone/30 hover:border-gold pb-0.5"
            >
              View All
            </Link>
          </div>
          <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
