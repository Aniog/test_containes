import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Accordion from '@/components/ui/Accordion';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={12}
            stroke={i <= Math.round(rating) ? '#C9A96E' : '#D4C9B5'}
            fill={i <= Math.round(rating) ? '#C9A96E' : 'none'}
          />
        ))}
      </div>
      <span className="font-inter text-xs text-velmora-mist">({count} reviews)</span>
    </div>
  );
}

function RelatedProducts({ current }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== current.id).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4]">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] [related-${product.descId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-3">
                <p id={`related-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian group-hover:text-velmora-gold-dark transition-colors duration-300">
                  {product.name}
                </p>
                <p id={`related-${product.descId}`} className="sr-only">{product.shortDesc}</p>
                <p className="font-inter text-sm font-medium text-velmora-obsidian mt-1">${product.price}</p>
              </div>
            </Link>
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
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQty(1);
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAdd = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: `pdp-main-${product.imgId}`, img2Id: `pdp-main-${product.img2Id}`, label: 'main' },
    { id: `pdp-alt-${product.img2Id}`, img2Id: `pdp-alt-${product.imgId}`, label: 'alt' },
  ];

  return (
    <div className="bg-velmora-linen min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-inter text-xs text-velmora-mist hover:text-velmora-obsidian transition-colors duration-200">
            Home
          </Link>
          <span className="text-velmora-stone/50 text-xs">/</span>
          <Link to="/shop" className="font-inter text-xs text-velmora-mist hover:text-velmora-obsidian transition-colors duration-200">
            Shop
          </Link>
          <span className="text-velmora-stone/50 text-xs">/</span>
          <span className="font-inter text-xs text-velmora-obsidian">{product.name}</span>
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-velmora-cream aspect-[4/5]">
              {images.map((img, idx) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === idx ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(idx)}
                  className={`relative w-20 h-20 overflow-hidden border-2 transition-all duration-200 ${
                    activeImg === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[pdp-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-inter text-[9px] uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-2 py-0.5">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-inter text-[9px] uppercase tracking-widest bg-velmora-obsidian text-velmora-text-light px-2 py-0.5">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-velmora-obsidian font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <p className="font-inter text-2xl font-medium text-velmora-obsidian mt-4 mb-5">
              ${product.price}
            </p>

            {/* Short desc */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-inter text-sm text-velmora-mist leading-relaxed mb-6 border-b border-velmora-stone/20 pb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-velmora-obsidian mb-3">
                Finish: <span className="text-velmora-mist normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-text-light'
                        : 'border-velmora-stone/40 text-velmora-mist hover:border-velmora-obsidian hover:text-velmora-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-velmora-obsidian mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-velmora-stone/40 w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-obsidian hover:bg-velmora-cream transition-all duration-200"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-inter text-sm text-velmora-obsidian border-x border-velmora-stone/40">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-obsidian hover:bg-velmora-cream transition-all duration-200"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="w-full bg-velmora-obsidian text-velmora-text-light font-inter text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-velmora-charcoal transition-all duration-300 mb-3"
            >
              <ShoppingBag size={14} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <button className="w-full border border-velmora-stone/40 text-velmora-mist font-inter text-xs uppercase tracking-widest py-4 hover:border-velmora-obsidian hover:text-velmora-obsidian transition-all duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-velmora-stone/20">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-inter text-xs text-velmora-mist">{t}</span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-velmora-obsidian">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velmora-obsidian">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery 3–7 business days.</p>
                <p>We offer hassle-free 30-day returns on all unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts current={product} />
    </div>
  );
}
