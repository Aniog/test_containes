import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImage(0);
    setOpenAccordion(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: `${product.materials}\n\nCare Instructions: Store in the provided pouch when not wearing. Avoid contact with water, perfume, and lotions. Gently polish with a soft cloth to restore shine.`,
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 3–7 business days. Express delivery available at checkout.\n\nWe offer hassle-free 30-day returns on all unworn items in original packaging. Contact our team to initiate a return.',
    },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-velmora-text-muted hover:text-velmora-text-dark transition-colors uppercase tracking-wider">Home</Link>
          <span className="text-velmora-sand">/</span>
          <Link to="/shop" className="font-sans text-xs text-velmora-text-muted hover:text-velmora-text-dark transition-colors uppercase tracking-wider">Shop</Link>
          <span className="text-velmora-sand">/</span>
          <span className="font-sans text-xs text-velmora-text-dark uppercase tracking-wider">{product.name}</span>
        </div>
      </div>

      {/* Product Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-velmora-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-linen" style={{ aspectRatio: '3/4' }}>
              {/* Hidden text nodes */}
              {product.images.map(img => (
                <span key={`text-${img.id}`} className="hidden">
                  <span id={img.titleId}>{product.titleText}</span>
                  <span id={img.descId}>{product.descText}</span>
                </span>
              ))}
              <img
                data-strk-img-id={`main-${product.images[activeImage].id}`}
                data-strk-img={`[${product.images[activeImage].descId}] [${product.images[activeImage].titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 bg-velmora-obsidian text-velmora-gold">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-velmora-text-dark font-light leading-tight mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-text-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-velmora-text-dark mb-6">${product.price}</p>

            {/* Short Description */}
            <p className="font-sans text-sm text-velmora-text-muted leading-relaxed mb-8 border-b border-velmora-sand/60 pb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-velmora-text-dark mb-3">
                Finish: <span className="text-velmora-text-muted">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 font-sans text-xs uppercase tracking-wider font-medium border transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-cream'
                        : 'border-velmora-sand text-velmora-text-dark hover:border-velmora-obsidian'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-widest text-velmora-text-dark mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-velmora-text-dark">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-obsidian text-velmora-cream font-sans text-xs uppercase tracking-widest font-semibold hover:bg-velmora-charcoal transition-colors mb-3"
            >
              {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-velmora-sand/60 mt-2">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(item => (
                <span key={item} className="font-sans text-[10px] uppercase tracking-wider text-velmora-text-muted">
                  {item}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-6 border-t border-velmora-sand/60">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-velmora-sand/60">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs uppercase tracking-widest font-semibold text-velmora-text-dark">
                      {acc.label}
                    </span>
                    {openAccordion === acc.id
                      ? <ChevronUp className="w-4 h-4 text-velmora-text-muted" />
                      : <ChevronDown className="w-4 h-4 text-velmora-text-muted" />
                    }
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-5">
                      <p className="font-sans text-sm text-velmora-text-muted leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-3">Curated for You</p>
              <h2 className="font-serif text-3xl md:text-4xl text-velmora-text-dark font-light">You May Also Like</h2>
            </div>
            <Link to="/shop" className="font-sans text-xs uppercase tracking-widest text-velmora-text-dark border-b border-velmora-text-dark pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors hidden md:block">
              View All
            </Link>
          </div>

          {/* Hidden text nodes for related products */}
          {related.map(p => (
            <span key={`rel-text-${p.id}`} className="hidden">
              <span id={p.images[0].titleId}>{p.titleText}</span>
              <span id={p.images[0].descId}>{p.descText}</span>
              <span id={p.images[1].titleId}>{p.title2Text}</span>
              <span id={p.images[1].descId}>{p.desc2Text}</span>
            </span>
          ))}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                imgId={p.images[0].id}
                imgQuery={`[${p.images[0].descId}] [${p.images[0].titleId}]`}
                img2Id={p.images[1].id}
                img2Query={`[${p.images[1].descId}] [${p.images[1].titleId}]`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
