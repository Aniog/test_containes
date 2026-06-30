import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-muted">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-sans text-xs tracking-widest uppercase text-velmora-gold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-velmora-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-velmora-subtle hover:text-velmora-gold transition-colors">Home</Link>
          <span className="text-velmora-border">/</span>
          <Link to="/shop" className="font-sans text-xs text-velmora-subtle hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="text-velmora-border">/</span>
          <span className="font-sans text-xs text-velmora-muted">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <ProductDetail product={product} />

      {/* Related products */}
      <RelatedProducts product={product} />
    </div>
  );
}

function ProductDetail({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div>
          <p className="font-sans text-sm text-velmora-muted leading-relaxed mb-4">{product.description}</p>
          <ul className="flex flex-col gap-2">
            {product.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 font-sans text-sm text-velmora-muted">
                <span className="text-velmora-gold mt-0.5">✦</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'care',
      label: 'Materials & Care',
      content: <p className="font-sans text-sm text-velmora-muted leading-relaxed">{product.care}</p>,
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: <p className="font-sans text-sm text-velmora-muted leading-relaxed">{product.shipping}</p>,
    },
  ];

  const imgIds = [product.imgId, product.img2Id];

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-3">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {imgIds.map((imgId, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${activeImg === i ? 'border-velmora-gold' : 'border-transparent'}`}
              >
                <img
                  data-strk-img-id={`${imgId}-thumb`}
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
          <div className="flex-1 relative overflow-hidden bg-velmora-cream aspect-[3/4]">
            {imgIds.map((imgId, i) => (
              <img
                key={i}
                data-strk-img-id={imgId}
                data-strk-img={i === 0 ? `[${product.descId}] [${product.titleId}]` : `[${product.titleId}] gold jewelry worn model`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}

            {product.badge && (
              <span className="absolute top-4 left-4 font-sans text-[9px] tracking-widest uppercase font-medium bg-velmora-obsidian text-velmora-ivory px-2 py-1">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {/* Category */}
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-2">
            {product.category}
          </p>

          {/* Name */}
          <h1
            id={product.titleId}
            className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-[0.1em] uppercase leading-tight"
          >
            {product.name}
          </h1>

          {/* Subtitle */}
          <p id={product.descId} className="font-sans text-sm text-velmora-muted mt-1">
            {product.subtitle}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className="font-sans text-xs text-velmora-muted">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <p className="font-serif text-3xl font-light text-velmora-obsidian mt-4">
            ${product.price}
          </p>

          <div className="h-px bg-velmora-border my-6" />

          {/* Variant selector */}
          <div className="mb-6">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-3">
              Finish: <span className="text-velmora-obsidian">{selectedVariant}</span>
            </p>
            <div className="flex gap-2">
              {product.variants.map(v => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                    selectedVariant === v
                      ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                      : 'border-velmora-border text-velmora-muted hover:border-velmora-obsidian hover:text-velmora-obsidian'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-3">Quantity</p>
            <div className="flex items-center border border-velmora-border w-fit">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors"
              >
                −
              </button>
              <span className="w-10 text-center font-sans text-sm font-medium text-velmora-obsidian">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleAddToCart}
              className={`w-full font-sans text-xs tracking-widest uppercase font-medium py-4 flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? 'bg-velmora-obsidian text-velmora-ivory'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-dark'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <button className="w-full border border-velmora-border text-velmora-muted font-sans text-xs tracking-widest uppercase font-medium py-4 flex items-center justify-center gap-2 hover:border-velmora-obsidian hover:text-velmora-obsidian transition-all duration-300">
              <Heart size={14} strokeWidth={1.5} />
              Save to Wishlist
            </button>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-velmora-border">
            {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
              <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle flex items-center gap-1">
                <span className="text-velmora-gold">✦</span> {t}
              </span>
            ))}
          </div>

          {/* Accordions */}
          <div className="mt-8 flex flex-col border-t border-velmora-border">
            {accordions.map(acc => (
              <div key={acc.id} className="border-b border-velmora-border">
                <button
                  onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-obsidian">
                    {acc.label}
                  </span>
                  {openAccordion === acc.id
                    ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-muted" />
                    : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-muted" />
                  }
                </button>
                {openAccordion === acc.id && (
                  <div className="pb-5">{acc.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RelatedProducts({ product }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const related = products.filter(p => product.relatedIds.includes(p.id));

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  return (
    <section className="py-16 md:py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl font-light text-velmora-obsidian tracking-wide mb-10">
          You May Also Like
        </h2>
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {related.map(p => (
            <RelatedCard key={p.id} product={p} onAddToCart={() => addItem(p)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button
          onClick={(e) => { e.preventDefault(); onAddToCart(); }}
          className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 text-velmora-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>
      <div className="pt-3">
        <p id={product.titleId} className="font-sans text-[11px] tracking-widest uppercase font-medium text-velmora-obsidian">{product.name}</p>
        <p id={product.descId} className="font-sans text-xs text-velmora-muted mt-0.5 hidden">{product.subtitle}</p>
        <p className="font-sans text-sm font-medium text-velmora-obsidian mt-1">${product.price}</p>
      </div>
    </div>
  );
}
