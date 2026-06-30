import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1,2,3,4,5].map(i => (
          <Star
            key={i}
            size={12}
            fill={i <= Math.round(rating) ? '#C9A96E' : 'none'}
            stroke={i <= Math.round(rating) ? 'none' : '#C9A96E'}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-mist">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-ink">{title}</span>
        {open ? <ChevronUp size={14} className="text-mist" /> : <ChevronDown size={14} className="text-mist" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="font-sans text-sm text-stone leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 border-t border-linen">
      <div className="mb-10">
        <h2 className="font-serif text-3xl text-ink font-light">You May Also Like</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group block">
            <div className="relative overflow-hidden bg-linen aspect-[3/4]">
              <span id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-desc-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <p className="font-sans text-xs text-mist">{product.shortDescription}</p>
              <h3 className="font-serif text-sm uppercase tracking-wider text-ink mt-1 group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              <p className="font-sans text-sm text-ink mt-1">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  const images = [
    { id: product.imgId, label: product.shortDescription, labelId: `pdp-label-0-${product.id}` },
    { id: product.imgId2, label: `${product.shortDescription} detail`, labelId: `pdp-label-1-${product.id}` },
  ];

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-parchment pt-16 lg:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-sans text-xs text-mist hover:text-gold transition-colors">Home</Link>
          <span className="text-mist text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-mist hover:text-gold transition-colors">Shop</Link>
          <span className="text-mist text-xs">/</span>
          <span className="font-sans text-xs text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <span id={img.labelId} className="sr-only">{img.label}</span>
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${img.labelId}]`}
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
            <div className="flex-1 relative overflow-hidden bg-linen aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={img.id}
                  data-strk-img={`[${img.labelId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl lg:text-4xl uppercase tracking-wider text-ink font-light leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-2xl text-ink mt-3">${product.price}</p>

            {/* Rating */}
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Divider */}
            <div className="h-px bg-linen my-6" />

            {/* Description */}
            <p className="font-sans text-sm text-stone leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider uppercase px-4 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-linen text-stone hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-ink transition-colors border-r border-linen"
                >
                  <Minus size={12} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-ink transition-colors border-l border-linen"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="mt-8 w-full bg-gold text-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-300"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex items-center justify-center gap-6">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-wider text-mist uppercase">{t}</span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <strong className="text-ink">Materials:</strong> {product.material}<br /><br />
                <strong className="text-ink">Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}
