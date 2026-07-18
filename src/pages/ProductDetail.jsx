import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0].id);
      setActiveImage(0);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="heading-serif text-3xl text-brand-100 mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { key: 'description', title: 'Description', content: product.longDescription },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-500 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-300">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-surface-card overflow-hidden mb-4">
              <img
                data-strk-img-id={`pdp-${product.images[activeImage].id}`}
                data-strk-img={`[pdp-title] ${product.images[activeImage].query}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-surface-card overflow-hidden border transition-all duration-300 ${
                    i === activeImage ? 'border-gold' : 'border-transparent hover:border-gold/30'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.id}`}
                    data-strk-img={`[pdp-title] ${img.query}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="inline-block self-start bg-gold text-surface-primary text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 id="pdp-title" className="product-name text-2xl md:text-3xl text-brand-50 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-brand-700'}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-serif text-gold mb-6">${product.price.toFixed(2)}</p>

            {/* Description */}
            <p className="text-brand-300 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-brand-400 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => v.available && setSelectedVariant(v.id)}
                    disabled={!v.available}
                    className={`px-5 py-2.5 text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                      selectedVariant === v.id
                        ? 'bg-gold text-surface-primary'
                        : v.available
                        ? 'border border-gold/30 text-brand-300 hover:border-gold'
                        : 'border border-brand-800 text-brand-700 cursor-not-allowed line-through'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-brand-400 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-brand-700">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-400 hover:text-brand-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm text-brand-200">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-400 hover:text-brand-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-gold w-full flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              Add to Cart
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gold/10">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((badge) => (
                <div key={badge} className="text-center">
                  <p className="text-[10px] uppercase tracking-wider text-brand-500">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          <div className="hairline" />
          {accordions.map((acc) => (
            <div key={acc.key}>
              <button
                onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm uppercase tracking-wider text-brand-200 font-medium">
                  {acc.title}
                </span>
                {openAccordion === acc.key ? (
                  <ChevronUp size={16} className="text-gold" />
                ) : (
                  <ChevronDown size={16} className="text-brand-500" />
                )}
              </button>
              {openAccordion === acc.key && (
                <div className="pb-6 animate-fade-in">
                  {acc.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-sm text-brand-400 leading-relaxed mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              <div className="hairline" />
            </div>
          ))}
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-mega-wide text-gold mb-3">Discover</p>
            <h2 className="heading-serif text-2xl md:text-4xl text-brand-50">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-surface-card overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-name-${p.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-name-${p.id}`} className="product-name text-xs text-brand-200 mb-1">
                  {p.name}
                </h3>
                <p className="text-gold text-sm">${p.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
