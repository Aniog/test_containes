import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem, setCartOpen } = useCart();

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-dark text-sm tracking-wider uppercase">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setCartOpen(true);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div>
          <p className="text-muted text-sm leading-relaxed mb-3">{product.details}</p>
          <p className="text-muted text-sm leading-relaxed">
            <strong className="text-charcoal">Materials:</strong> {product.materials}
          </p>
          <p className="text-muted text-sm leading-relaxed mt-2">
            <strong className="text-charcoal">Care:</strong> {product.care}
          </p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="text-muted text-sm leading-relaxed space-y-2">
          <p><strong className="text-charcoal">Free Worldwide Shipping</strong> on all orders over $75.</p>
          <p>Standard delivery: 5-7 business days. Express delivery: 2-3 business days.</p>
          <p>We offer a 30-day return policy for unworn items in original packaging.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-cream" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-6">
        <nav className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-gold transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-cream-dark overflow-hidden">
              <div
                data-strk-img-id={`product-detail-${product.id}-main`}
                data-strk-img={`[product-detail-${product.id}-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full bg-taupe-light/20"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent hover:border-taupe'
                  }`}
                >
                  <div
                    data-strk-img-id={`product-detail-${product.id}-thumb-${index}`}
                    data-strk-img={`[product-detail-${product.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="w-full h-full bg-taupe-light/20"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={`product-detail-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] uppercase text-charcoal mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-muted">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="text-xs tracking-[0.15em] uppercase text-charcoal font-medium mb-3 block">
                  Tone
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all ${
                        selectedVariant === variant
                          ? 'border-charcoal bg-charcoal text-white'
                          : 'border-border text-charcoal hover:border-charcoal'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-[0.15em] uppercase text-charcoal font-medium mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-charcoal text-white text-xs tracking-[0.25em] uppercase hover:bg-charcoal-light transition-colors mb-4"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 text-[10px] text-muted tracking-wider uppercase">
              <span className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-gold" /> Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-gold" /> 30-Day Returns
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-gold" /> Hypoallergenic
              </span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-20 border-t border-border">
          {accordions.map((accordion) => (
            <div key={accordion.id} className="border-b border-border last:border-b-0">
              <button
                onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left"
              >
                <span className="text-xs tracking-[0.2em] uppercase text-charcoal font-medium">
                  {accordion.title}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted transition-transform duration-300 ${
                    openAccordion === accordion.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === accordion.id ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="text-sm text-muted leading-relaxed max-w-2xl">
                  {accordion.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
