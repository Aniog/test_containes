import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [tone, setTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-gold-500 hover:text-gold-600 tracking-wider uppercase">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, tone, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.details,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.material}. ${product.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];

  return (
    <div ref={containerRef} className="bg-cream-50 pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
        <nav className="text-xs text-charcoal-400 tracking-wider uppercase">
          <Link to="/" className="hover:text-charcoal-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal-600 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-sm border-2 transition-all ${
                    selectedImage === idx
                      ? 'border-gold-400'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="w-full h-full bg-charcoal-100/30 flex items-center justify-center text-lg">
                    ✦
                  </div>
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-charcoal-100/20 rounded-sm">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${selectedImage}`}
                data-strk-img={`[pdp-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-xs tracking-widest-2xl uppercase text-gold-400 font-sans font-medium mb-2">
              {product.material}
            </p>
            <h1
              id="pdp-title"
              className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider text-charcoal-800 mb-4"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal-800 mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-charcoal-200'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <hr className="hairline-divider mb-6" />

            {/* Description */}
            <p className="text-sm text-charcoal-500 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-charcoal-500 font-medium mb-3">
                Tone: <span className="text-charcoal-800 capitalize">{tone}</span>
              </p>
              <div className="flex gap-2">
                {['gold', 'silver'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase font-medium border rounded-sm transition-all ${
                      tone === t
                        ? 'bg-charcoal-800 text-cream-50 border-charcoal-800'
                        : 'bg-transparent text-charcoal-600 border-charcoal-200 hover:border-charcoal-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-charcoal-500 font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-200 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-sm font-medium text-charcoal-800 min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-charcoal-800 text-cream-50 text-sm font-medium tracking-widest uppercase hover:bg-charcoal-700 transition-all duration-300 rounded-sm mb-4"
            >
              {added ? 'Added to Bag!' : `Add to Bag — $${(product.price * quantity).toFixed(2)}`}
            </button>

            {/* Trust signals */}
            <div className="flex justify-center gap-6 text-charcoal-400 mb-8">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span className="text-[11px] tracking-wider">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-[11px] tracking-wider">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span className="text-[11px] tracking-wider">18K Gold</span>
              </div>
            </div>

            <hr className="hairline-divider mb-6" />

            {/* Accordions */}
            <div className="space-y-0">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-charcoal-100/30">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium tracking-wider uppercase text-charcoal-700">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4 text-charcoal-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-charcoal-500 leading-relaxed">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="border-t border-charcoal-100/30 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx + 10} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
