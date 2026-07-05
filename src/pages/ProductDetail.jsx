import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';
import ProductCard from '../components/product/ProductCard';

const accordions = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <main className="pt-24 bg-obsidian min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-ivory mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold text-sm tracking-wider hover:text-gold-light transition-colors">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, product.variants[selectedVariant]);
    }
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const getAccordionContent = (key) => {
    switch (key) {
      case 'description': return product.longDescription;
      case 'materials': return product.materials + '\n\n' + product.care;
      case 'shipping': return product.shipping;
      default: return '';
    }
  };

  return (
    <main className="pt-20 lg:pt-24 bg-obsidian min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted/60 hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Shop
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-charcoal/20 border border-charcoal/30 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-muted/20 text-xs tracking-widest uppercase mb-2">
                    {product.images[activeImage]?.query ? 'Stock Image' : 'No Image'}
                  </span>
                  <span className="block text-muted/10 text-[10px] tracking-wider">
                    {product.images[activeImage]?.alt}
                  </span>
                </div>
              </div>
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-gold/90 text-obsidian text-[10px] font-bold tracking-[0.15em] uppercase">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 bg-charcoal/20 border transition-colors ${
                    activeImage === idx ? 'border-gold' : 'border-charcoal/30 hover:border-charcoal/60'
                  }`}
                >
                  <span className="text-[9px] text-muted/30 tracking-wider">{idx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold/60 mb-3">
              {product.category}
            </p>

            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl tracking-[0.1em] text-ivory mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-charcoal/60'}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-sm text-muted/50">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading text-2xl text-gold">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-base text-muted/40 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-muted/70 leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-ivory/50 mb-3">
                Tone: <span className="text-ivory/80">{product.variants[selectedVariant]}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant, idx) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(idx)}
                    className={`px-5 py-2.5 text-sm tracking-wider border transition-all ${
                      selectedVariant === idx
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-charcoal/50 text-muted/60 hover:border-charcoal hover:text-ivory'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-ivory/50 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-charcoal/50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-muted hover:text-ivory transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm text-ivory">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-muted hover:text-ivory transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-gold text-obsidian text-sm font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              ADD TO CART — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="border-t border-charcoal/30">
              {accordions.map(({ key, label }) => (
                <div key={key} className="border-b border-charcoal/30">
                  <button
                    onClick={() => toggleAccordion(key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm tracking-[0.1em] text-ivory/70">{label}</span>
                    {openAccordion === key ? (
                      <ChevronUp size={16} className="text-gold/60" />
                    ) : (
                      <ChevronDown size={16} className="text-muted/40" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === key ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-muted/60 leading-relaxed whitespace-pre-line">
                      {getAccordionContent(key)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 lg:mt-28">
          <div className="text-center mb-12">
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-3">You May Also Like</p>
            <h2 className="font-heading text-2xl sm:text-3xl text-ivory tracking-wide">Related Pieces</h2>
            <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
