import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield, ArrowLeft } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (pageRef.current) {
      return ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="heading-serif text-3xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  // If not enough related, add from other categories
  const allRelated = relatedProducts.length >= 4
    ? relatedProducts
    : [
        ...relatedProducts,
        ...getProductsByCategory(product.category === 'earrings' ? 'necklaces' : 'earrings')
          .filter(p => p.id !== product.id && !relatedProducts.find(r => r.id === p.id))
          .slice(0, 4 - relatedProducts.length),
      ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const accordions = [
    { id: 'description', label: 'Description', content: product.longDescription },
    { id: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  return (
    <main className="pt-20 md:pt-24 pb-16" ref={pageRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs text-taupe hover:text-espresso transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-cream rounded-sm overflow-hidden relative">
              <div
                data-strk-bg-id={`product-detail-${product.id}`}
                data-strk-bg={product.imageQuery}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-gradient-to-br from-sand/40 to-cream"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl text-gold-muted/50 tracking-mega-wide uppercase">
                    Velmora
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`aspect-square bg-cream rounded-sm cursor-pointer border-2 transition-colors ${
                    i === 0 ? 'border-gold' : 'border-transparent hover:border-sand'
                  }`}
                >
                  <div
                    data-strk-bg-id={`product-thumb-${product.id}-${i}`}
                    data-strk-bg={i === 0 ? product.imageQuery : product.imageQueryAlt || product.imageQuery}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="200"
                    className="w-full h-full bg-gradient-to-br from-sand/30 to-cream"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-gold text-xs tracking-mega-wide uppercase font-sans font-medium mb-2">
              {product.category}
            </p>

            <h1 className="heading-serif text-3xl md:text-4xl tracking-wider uppercase text-espresso mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-espresso mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-taupe text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="hairline-divider mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-taupe mb-3 font-sans font-medium">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase font-sans font-medium rounded-sm transition-all ${
                      selectedVariant === variant
                        ? 'bg-espresso text-ivory'
                        : 'border border-sand text-taupe hover:border-espresso hover:text-espresso'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-taupe mb-3 font-sans font-medium">
                Quantity
              </p>
              <div className="inline-flex items-center border border-sand rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-gold w-full text-xs mb-6"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center py-3 bg-cream/50 rounded-sm">
                  <Icon className="w-4 h-4 text-gold mx-auto mb-1" />
                  <span className="text-[10px] text-taupe uppercase tracking-wider font-sans">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="hairline-divider mb-8" />

            {/* Accordions */}
            <div className="space-y-0">
              {accordions.map(({ id: accId, label, content }) => (
                <div key={accId} className="border-b border-sand last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(accId)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-wider uppercase font-sans font-medium text-espresso">
                      {label}
                    </span>
                    {activeAccordion === accId ? (
                      <ChevronUp className="w-4 h-4 text-taupe" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-taupe" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === accId ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-taupe leading-relaxed whitespace-pre-line">
                      {content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {allRelated.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl md:text-4xl text-espresso mb-3">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-gold mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {allRelated.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
