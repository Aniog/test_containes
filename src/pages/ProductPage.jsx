import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-sand">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-widest-md text-velmora-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-text-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-text-muted flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function RelatedCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-velmora-sand aspect-[3/4] mb-3">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p id={product.titleId} className="font-cormorant text-sm uppercase tracking-widest-sm text-velmora-obsidian">
        {product.name}
      </p>
      <p id={product.descId} className="font-manrope text-xs text-velmora-text-muted mt-0.5">
        {product.shortDescription}
      </p>
      <p className="font-manrope text-sm font-medium text-velmora-text-dark mt-1">${product.price}</p>
    </Link>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImage(0);
    }
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-linen pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-velmora-text-mid mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs uppercase tracking-widest-md text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-3`, query: `[${product.titleId}] gold jewelry worn model` },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-linen min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 font-manrope text-[10px] uppercase tracking-widest-sm text-velmora-text-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-obsidian">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-sand aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImage === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] uppercase tracking-widest-xl text-velmora-gold mb-2 capitalize">
                {product.category}
              </p>
              <h1
                id={product.titleId}
                className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest-sm font-medium text-velmora-obsidian leading-tight"
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                      stroke={i < Math.floor(product.rating) ? 'none' : '#C9A96E'}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <span className="font-manrope text-xs text-velmora-text-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="font-cormorant text-3xl font-light text-velmora-obsidian mt-4">
                ${product.price}
              </p>
            </div>

            <div className="w-full h-px bg-velmora-sand mb-6" />

            {/* Description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-manrope text-[10px] uppercase tracking-widest-md text-velmora-text-muted mb-3">
                  Tone: <span className="text-velmora-obsidian capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs uppercase tracking-widest-sm px-5 py-2 border transition-colors capitalize ${
                        selectedVariant === v
                          ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-cream'
                          : 'border-velmora-sand text-velmora-text-mid hover:border-velmora-obsidian'
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
              <p className="font-manrope text-[10px] uppercase tracking-widest-md text-velmora-text-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-velmora-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 font-manrope text-xs uppercase tracking-widest-md transition-colors duration-300 ${
                added
                  ? 'bg-velmora-gold-muted text-velmora-cream'
                  : 'bg-velmora-obsidian text-velmora-cream hover:bg-velmora-stone'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-manrope text-[10px] text-velmora-text-muted flex items-center gap-1">
                  <span className="text-velmora-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <ul className="space-y-1.5">
                  {product.details.map((d) => (
                    <li key={d} className="font-manrope text-xs text-velmora-text-mid flex items-start gap-2">
                      <span className="text-velmora-gold mt-0.5 flex-shrink-0">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="font-manrope text-xs text-velmora-text-mid leading-relaxed">
                  {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="font-manrope text-xs text-velmora-text-mid leading-relaxed">
                  {product.shipping}
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="bg-velmora-cream py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
