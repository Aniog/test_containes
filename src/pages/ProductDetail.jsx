import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian group-hover:text-velmora-gold transition-colors duration-200">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-velmora-muted" />
          : <ChevronDown className="w-4 h-4 text-velmora-muted" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <div className="font-manrope text-sm text-velmora-muted leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-cormorant text-3xl md:text-4xl text-velmora-obsidian mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-portrait bg-velmora-cream mb-4">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <h3 id={`related-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-1">
                <span className="font-cormorant text-lg text-velmora-obsidian">${product.price}</span>
                <button
                  onClick={() => addItem(product)}
                  className="font-manrope text-[10px] uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors duration-200"
                >
                  Add +
                </button>
              </div>
            </div>
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
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 font-manrope text-xs text-velmora-subtle">
          <Link to="/" className="hover:text-velmora-gold transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors duration-200">Shop</Link>
          <span>/</span>
          <span className="text-velmora-muted">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                    activeImg === i ? 'border-velmora-gold' : 'border-velmora-linen hover:border-velmora-muted'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id2}`}
                    data-strk-img={`[${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden aspect-portrait bg-velmora-cream">
              <img
                data-strk-img-id={`main-${images[activeImg].id2}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-velmora-obsidian text-velmora-ivory font-manrope text-[10px] uppercase tracking-widest px-3 py-1.5">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-velmora-obsidian leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-linen'}`}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-4xl text-velmora-obsidian mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-velmora-muted leading-relaxed mb-7 pb-7 border-b border-velmora-linen"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-muted mb-3">
                Finish: <span className="text-velmora-obsidian">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`font-manrope text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                        : 'border-velmora-linen text-velmora-muted hover:border-velmora-muted'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian hover:bg-velmora-cream transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-velmora-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian hover:bg-velmora-cream transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-velmora-gold-light transition-colors duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
              <div className="flex gap-3">
                <button className="flex-1 border border-velmora-linen text-velmora-muted font-manrope text-xs uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300">
                  <Heart className="w-3.5 h-3.5" />
                  Wishlist
                </button>
                <button className="flex-1 border border-velmora-linen text-velmora-muted font-manrope text-xs uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300">
                  <Share2 className="w-3.5 h-3.5" />
                  Share
                </button>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 py-5 border-t border-velmora-linen mb-6">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic', 'Gift Wrapping'].map(item => (
                <div key={item} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-velmora-gold" />
                  <span className="font-manrope text-[11px] text-velmora-muted">{item}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>To maintain the beauty of your Velmora piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft, dry cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3"><strong className="text-velmora-obsidian">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5–10 business days. Express available at checkout.</p>
                <p><strong className="text-velmora-obsidian">Returns:</strong> We offer hassle-free 30-day returns on all unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
