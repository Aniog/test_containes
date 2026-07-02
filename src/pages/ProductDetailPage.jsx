import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, generateStars } from '../lib/utils';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product, activeImageIndex]);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const stars = generateStars(product.rating);
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.details.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.details.materials}\n\n${product.details.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `${product.details.shipping}\n\n${product.details.returns}`,
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="section-padding py-4 border-b border-charcoal-100">
        <nav className="flex items-center gap-2 font-sans text-xs text-charcoal-400">
          <Link to="/" className="hover:text-charcoal-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-700">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="section-padding py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-ivory-200 overflow-hidden rounded-sm">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImageIndex]?.alt}
                className="w-full h-full object-cover"
                data-strk-img-id={product.images[activeImageIndex]?.id}
                data-strk-img={`[pd-name] [pd-desc] jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden rounded-sm border-2 transition-colors ${
                      activeImageIndex === idx ? 'border-brand-gold' : 'border-transparent hover:border-charcoal-200'
                    }`}
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`thumb-${img.id}`}
                      data-strk-img={`[pd-name] jewelry`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="100"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="lg:py-4">
            {product.badges.length > 0 && (
              <span className="inline-block bg-brand-gold/10 text-brand-gold-dark font-sans text-[10px] tracking-[0.12em] uppercase px-3 py-1 mb-4">
                {product.badges[0]}
              </span>
            )}

            <h1
              id="pd-name"
              className="font-serif text-2xl md:text-3xl text-charcoal-900 tracking-[0.06em] uppercase font-medium mb-2"
            >
              {product.name}
            </h1>

            <p className="price text-xl font-medium mb-4">{formatPrice(product.price)}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(stars.full)].map((_, i) => (
                  <Star key={`full-${i}`} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
                {[...Array(stars.empty)].map((_, i) => (
                  <Star key={`empty-${i}`} size={16} className="text-charcoal-200" />
                ))}
              </div>
              <span className="font-sans text-sm text-charcoal-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p id="pd-desc" className="font-sans text-sm text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="divider-gold mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.1em] uppercase text-charcoal-500 mb-3">
                Tone: <span className="text-charcoal-900 font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 border text-xs tracking-[0.1em] uppercase font-sans font-medium transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-charcoal-900 bg-charcoal-900 text-white'
                        : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.1em] uppercase text-charcoal-500 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-charcoal-50 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-charcoal-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-charcoal-50 transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-gold w-full text-xs mb-4"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-2.5 text-charcoal-500 hover:text-charcoal-900 transition-colors font-sans text-xs tracking-[0.1em] uppercase">
              <Heart size={16} />
              Add to Wishlist
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-charcoal-100">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-charcoal-100">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? '' : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-[0.12em] uppercase text-charcoal-700 font-medium">
                      {acc.title}
                    </span>
                    {activeAccordion === acc.id ? (
                      <ChevronUp size={16} className="text-charcoal-400" />
                    ) : (
                      <ChevronDown size={16} className="text-charcoal-400" />
                    )}
                  </button>
                  {activeAccordion === acc.id && (
                    <div className="pb-4 animate-fade-in">
                      <p className="font-sans text-sm text-charcoal-600 leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 md:py-20 bg-ivory-50 border-t border-charcoal-100">
        <div className="section-padding">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 tracking-[0.04em] text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
