import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.floor(rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-gold/25'
            }`}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-velmora-stone">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-gold/15">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-velmora-stone flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-velmora-stone flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-manrope text-sm text-velmora-stone leading-relaxed">
            {children}
          </p>
        </div>
      )}
    </div>
  );
}

function ProductImageGallery({ product }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const images = [
    { label: 'Main', bg: 'linear-gradient(145deg, #F2EDE4 0%, #E8D5A3 50%, #C9A96E 100%)' },
    { label: 'Detail', bg: 'linear-gradient(145deg, #2C2018 0%, #3D2E1A 50%, #1A1614 100%)' },
    { label: 'Worn', bg: 'linear-gradient(145deg, #E8D5A3 0%, #C9A96E 50%, #A07840 100%)' },
    { label: 'Box', bg: 'linear-gradient(145deg, #F2EDE4 0%, #FAF7F2 50%, #E8D5A3 100%)' },
  ];

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3 lg:gap-4">
      {/* Thumbnails */}
      <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 transition-all duration-200 ${
              activeIdx === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-gold/40'
            }`}
            style={{ background: img.bg }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-cormorant text-xs text-velmora-obsidian/30">{img.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div
        className="flex-1 aspect-square sm:aspect-[4/5] overflow-hidden relative"
        style={{ background: images[activeIdx].bg }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,169,110,0.2) 0%, transparent 65%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32 lg:w-48 lg:h-48">
            <div className="absolute inset-0 rounded-full border border-velmora-gold/30" />
            <div className="absolute inset-4 rounded-full border border-velmora-gold/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-cormorant text-6xl lg:text-8xl text-velmora-gold/40 font-light">
                {product.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
        {/* Category label */}
        <div className="absolute bottom-4 left-4">
          <span className="font-manrope text-[9px] uppercase tracking-widest text-velmora-stone/60 bg-velmora-ivory/80 px-2 py-1">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-velmora-ivory min-h-screen pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-b border-velmora-gold/10">
        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="flex items-center gap-1.5 font-manrope text-xs text-velmora-stone hover:text-velmora-gold transition-colors duration-200 uppercase tracking-widest"
          >
            <ArrowLeft className="w-3 h-3" />
            Shop
          </Link>
          <span className="text-velmora-gold/30 text-xs">/</span>
          <span className="font-manrope text-xs text-velmora-stone/60 uppercase tracking-widest capitalize">
            {product.category}
          </span>
          <span className="text-velmora-gold/30 text-xs">/</span>
          <span className="font-manrope text-xs text-velmora-charcoal uppercase tracking-widest">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left: Gallery */}
          <ProductImageGallery product={product} />

          {/* Right: Product info */}
          <div className="lg:pt-4">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.map(tag => (
                <span
                  key={tag}
                  className="font-manrope text-[9px] uppercase tracking-widest px-2 py-1 bg-velmora-cream text-velmora-stone border border-velmora-gold/15"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Product name */}
            <h1 className="font-cormorant text-3xl lg:text-4xl uppercase tracking-widest text-velmora-obsidian font-medium leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <div className="mt-5 mb-6">
              <span className="font-cormorant text-3xl text-velmora-obsidian">
                ${product.price}
              </span>
              <span className="font-manrope text-xs text-velmora-stone ml-2 uppercase tracking-widest">
                USD
              </span>
            </div>

            {/* Short description */}
            <p className="font-manrope text-sm text-velmora-stone leading-relaxed mb-8 border-b border-velmora-gold/10 pb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-3">
                Tone: <span className="text-velmora-gold capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-manrope text-xs uppercase tracking-widest border transition-all duration-200 capitalize ${
                      selectedVariant === v
                        ? 'bg-velmora-obsidian text-velmora-ivory border-velmora-obsidian'
                        : 'bg-transparent text-velmora-charcoal border-velmora-gold/30 hover:border-velmora-gold'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-gold/25 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal hover:bg-velmora-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal hover:bg-velmora-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-manrope text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-200 ${
                added
                  ? 'bg-velmora-gold text-velmora-obsidian'
                  : 'bg-velmora-obsidian text-velmora-ivory hover:bg-velmora-charcoal'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-velmora-gold rounded-full flex-shrink-0" />
                  <span className="font-manrope text-[10px] uppercase tracking-widest text-velmora-stone">
                    {t}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.details}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="border-t border-velmora-gold/10 py-16 lg:py-20 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
              Continue Exploring
            </p>
            <h2 className="font-cormorant text-3xl lg:text-4xl text-velmora-obsidian font-light">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div
                  className="aspect-square overflow-hidden mb-3"
                  style={{
                    background: 'linear-gradient(145deg, #F2EDE4 0%, #E8D5A3 50%, #C9A96E 100%)',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="font-cormorant text-4xl text-velmora-gold/40">{p.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian group-hover:text-velmora-gold transition-colors duration-200">
                  {p.name}
                </h3>
                <p className="font-manrope text-xs text-velmora-stone mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
