import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velvet-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase text-velvet-700 font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velvet-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velvet-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velvet-600 leading-relaxed font-light">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const product = products.find((p) => p.slug === slug);

  const relatedImgIdMap = {
    'vivid-aura-jewels': 'related-vivid-aura-jewels',
    'majestic-flora-nectar': 'related-majestic-flora-nectar',
    'golden-sphere-huggies': 'related-golden-sphere-huggies',
    'amber-lace-earrings': 'related-amber-lace-earrings',
    'royal-heirloom-set': 'related-royal-heirloom-set',
  };

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant(0);
    setQuantity(1);
    setAdded(false);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-40 text-center">
        <h1 className="font-serif text-2xl tracking-wider text-velvet-900">Product Not Found</h1>
        <Link to="/shop" className="btn-ghost mt-6 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20">
      {/* Breadcrumb */}
      <nav className="text-xs tracking-wider text-velvet-500 mb-8" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velvet-700">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Image gallery */}
        <div>
          <div className="aspect-square bg-velvet-50 overflow-hidden mb-4">
            <img
              alt={`${product.name} - view ${selectedImage + 1}`}
              data-strk-img-id={`pdp-main-${product.slug}-${selectedImage}`}
              data-strk-img={`[pdp-name-${product.slug}] [pdp-desc-${product.slug}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <span id={`pdp-name-${product.slug}`} className="hidden">{product.name}</span>
            <span id={`pdp-desc-${product.slug}`} className="hidden">{product.description}</span>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(i)}
                className={`w-20 h-20 flex-shrink-0 border-2 transition-colors ${
                  i === selectedImage ? 'border-gold' : 'border-transparent hover:border-velvet-300'
                }`}
              >
                <div className="w-full h-full bg-velvet-50 overflow-hidden">
                  <img
                    alt={`${product.name} thumbnail ${i + 1}`}
                    data-strk-img-id={`pdp-thumb-${product.slug}-${i}`}
                    data-strk-img={`[pdp-name-${product.slug}] [pdp-desc-${product.slug}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velvet-900 leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-velvet-200'
                }`}
              />
            ))}
            <span className="text-sm text-velvet-600 ml-1.5">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-xl font-medium text-velvet-900 mt-4">${product.price}</p>

          {/* Description */}
          <p className="text-velvet-600 leading-relaxed mt-5 font-light">
            {product.description}
          </p>

          <hr className="hairline-divider my-6" />

          {/* Variant selector */}
          <div>
            <span className="text-xs tracking-widest uppercase text-velvet-700 font-medium">
              Tone
            </span>
            <div className="flex gap-3 mt-2.5">
              {product.variants.map((v, i) => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(i)}
                  className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                    i === selectedVariant
                      ? 'border-velvet-900 bg-velvet-900 text-white'
                      : 'border-velvet-200 text-velvet-700 hover:border-velvet-600'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex flex-col sm:flex-row gap-4 mt-7">
            <div className="flex items-center border border-velvet-200 h-12">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-11 h-full flex items-center justify-center text-velvet-600 hover:text-velvet-900 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-11 h-full flex items-center justify-center text-sm text-velvet-900 font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-11 h-full flex items-center justify-center text-velvet-600 hover:text-velvet-900 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`btn-primary flex-1 h-12 text-sm ${
                added ? 'bg-green-600 hover:bg-green-700' : ''
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Cart'}
            </button>

            <button
              className="w-12 h-12 border border-velvet-200 flex items-center justify-center text-velvet-500 hover:text-velvet-900 hover:border-velvet-600 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Accordions */}
          <div className="mt-8">
            <Accordion title="Description" defaultOpen>
              {product.details}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns">
              {product.shipping}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="mt-24">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-velvet-900 text-center">
          You May Also Like
        </h2>
        <hr className="hairline-divider w-16 mx-auto mt-5 mb-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((p) => (
              <article key={p.id} className="group">
                <Link to={`/product/${p.slug}`} className="block">
                  <div className="aspect-[3/4] bg-velvet-50 overflow-hidden">
                    <img
                      alt={p.name}
                      data-strk-img-id={relatedImgIdMap[p.slug]}
                      data-strk-img={`[related-name-${p.slug}] [related-desc-${p.slug}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span id={`related-name-${p.slug}`} className="hidden">{p.name}</span>
                    <span id={`related-desc-${p.slug}`} className="hidden">{p.description}</span>
                  </div>
                  <h3 className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velvet-900 mt-3 hover:text-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-velvet-800 mt-1">${p.price}</p>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}
