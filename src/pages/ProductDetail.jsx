import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-sand">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-text-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-text-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 font-manrope text-sm text-velmora-text-mid leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-dark mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="relative overflow-hidden bg-velmora-sand aspect-[3/4] mb-4">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3
                id={`related-${product.titleId}`}
                className="font-cormorant text-sm font-medium tracking-widest uppercase text-velmora-text-dark group-hover:text-velmora-gold-muted transition-colors duration-200"
              >
                {product.name}
              </h3>
              <p id={`related-${product.descId}`} className="font-manrope text-xs text-velmora-text-muted mt-0.5">
                {product.shortDescription}
              </p>
              <p className="font-manrope text-sm font-semibold text-velmora-text-dark mt-1.5">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ];

  useEffect(() => {
    setActiveImg(0);
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="bg-velmora-linen min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <nav className="flex items-center gap-2 font-manrope text-xs text-velmora-text-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors duration-200">Shop</Link>
          <span>/</span>
          <span className="text-velmora-text-dark">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id2}`}
                    data-strk-img={`[${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-sand aspect-[3/4]">
              <img
                data-strk-img-id={activeImg === 0 ? `pdp-main-active-${product.id}` : `pdp-alt-active-${product.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tags.includes('bestseller') && (
                <span className="absolute top-4 left-4 font-manrope text-[9px] tracking-widest uppercase bg-velmora-gold text-velmora-obsidian px-2.5 py-1">
                  Bestseller
                </span>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="pb-6 border-b border-velmora-sand">
              <h1
                id={product.titleId}
                className="font-cormorant text-3xl md:text-4xl font-medium tracking-widest uppercase text-velmora-text-dark leading-tight"
              >
                {product.name}
              </h1>
              <p id={product.descId} className="font-manrope text-sm text-velmora-text-muted mt-2">
                {product.shortDescription}
              </p>

              <div className="flex items-center gap-4 mt-4">
                <span className="font-cormorant text-3xl font-medium text-velmora-text-dark">
                  ${product.price}
                </span>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                      className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-sand'}
                    />
                  ))}
                  <span className="font-manrope text-xs text-velmora-text-muted ml-1">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed py-6 border-b border-velmora-sand">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="py-6 border-b border-velmora-sand">
              <p className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark mb-3 font-medium">
                Finish: <span className="text-velmora-text-mid font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-wider uppercase px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-sand text-velmora-text-mid hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="py-6">
              <div className="flex gap-3 mb-4">
                {/* Quantity */}
                <div className="flex items-center border border-velmora-sand">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-11 h-12 flex items-center justify-center text-velmora-text-mid hover:text-velmora-gold transition-colors duration-200"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-10 text-center font-manrope text-sm text-velmora-text-dark">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-11 h-12 flex items-center justify-center text-velmora-text-mid hover:text-velmora-gold transition-colors duration-200"
                    aria-label="Increase quantity"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => setWishlisted((v) => !v)}
                  aria-label="Add to wishlist"
                  className="w-12 h-12 border border-velmora-sand flex items-center justify-center text-velmora-text-mid hover:border-velmora-gold hover:text-velmora-gold transition-all duration-200"
                >
                  <Heart
                    size={16}
                    strokeWidth={1.5}
                    fill={wishlisted ? '#C9A96E' : 'none'}
                    className={wishlisted ? 'text-velmora-gold' : ''}
                  />
                </button>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300 font-medium flex items-center justify-center gap-2"
              >
                <ShoppingBag size={14} strokeWidth={1.5} />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              <p className="font-manrope text-xs text-velmora-text-muted text-center mt-3">
                Free worldwide shipping · 30-day returns
              </p>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-sand">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="font-medium text-velmora-text-dark">Materials:</strong> {product.materials}</p>
                <p><strong className="font-medium text-velmora-text-dark">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
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
