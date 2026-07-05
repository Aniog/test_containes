import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  const related = product ? getRelatedProducts(product) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!containerRef.current) return;
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(raf);
  }, [slug, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl text-[#2C2622] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Product Not Found
          </h2>
          <Link to="/shop" className="text-xs tracking-[0.15em] uppercase text-[#C9A84C] font-semibold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const accordions = [
    { key: 'description', label: 'Description', content: product.longDescription },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#8A7F74]">
          <Link to="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#C9A84C] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#2C2622]">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left — Images */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-gradient-to-br from-[#E8DFD5] to-[#D4C8B8] rounded-xl overflow-hidden mb-4">
              <img
                data-strk-img-id={`${product.imgId}-detail-${activeImage}`}
                data-strk-img={`[${product.slug}-title] elegant gold jewelry product photo detail view dark background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
              <span id={`${product.slug}-title`} className="sr-only">{product.name}</span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-[#C9A84C]' : 'border-transparent hover:border-[#D4C8B8]'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.slug}-title] jewelry detail close-up view ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — Details */}
          <div className="py-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] font-semibold mb-2">
              {product.category}
            </p>
            <h1
              className="text-2xl md:text-3xl tracking-[0.1em] uppercase text-[#2C2622] font-semibold mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-[#D4C8B8]'}
                  />
                ))}
              </div>
              <span className="text-xs text-[#8A7F74]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-2xl font-semibold text-[#2C2622] mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-sm text-[#6B5E52] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-[#2C2622] font-semibold mb-3">
                Tone: {product.variants[selectedVariant].name}
              </p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(i)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-xs tracking-[0.1em] uppercase font-semibold transition-all duration-300 ${
                      selectedVariant === i
                        ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#2C2622]'
                        : 'border-[#E8DFD5] text-[#6B5E52] hover:border-[#C9A84C]'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-[#E8DFD5]"
                      style={{ backgroundColor: v.color }}
                    />
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase text-[#2C2622] font-semibold mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center gap-4 border border-[#E8DFD5] rounded-full px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-[#6B5E52] hover:text-[#2C2622] transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm font-semibold text-[#2C2622] w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-[#6B5E52] hover:text-[#2C2622] transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#2C2622] text-[#FAF7F2] py-4 text-xs tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-[#C9A84C] transition-colors duration-300 mb-6"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex items-center gap-6 py-4 border-t border-[#E8DFD5]">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon size={14} className="text-[#C9A84C]" />
                  <span className="text-[10px] tracking-wider uppercase text-[#8A7F74]">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-[#E8DFD5]">
              {accordions.map(({ key, label, content }) => (
                <div key={key} className="border-b border-[#E8DFD5]">
                  <button
                    onClick={() => toggleAccordion(key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-[0.15em] uppercase font-semibold text-[#2C2622] hover:text-[#C9A84C] transition-colors"
                  >
                    {label}
                    {openAccordion === key ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openAccordion === key && (
                    <div className="pb-4 text-sm text-[#6B5E52] leading-relaxed whitespace-pre-line">
                      {content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl text-[#2C2622] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-[#C9A84C] mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
