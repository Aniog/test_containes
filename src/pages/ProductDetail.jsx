import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [id]);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="container-wide section-padding pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl tracking-wider mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const accordionSections = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="container-wide section-padding pt-28 md:pt-36 pb-16" ref={containerRef}>
      {/* Breadcrumb */}
      <nav className="text-[11px] tracking-wider uppercase text-velmora-taupe mb-8">
        <Link to="/" className="hover:text-velmora-golddark transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-velmora-golddark transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-charcoal">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
        {/* Gallery */}
        <div>
          {/* Main image */}
          <div className="aspect-[3/4] bg-velmora-sand mb-4 relative overflow-hidden">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-main-${product.id}-g8h9i0`}
              data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`w-16 md:w-20 aspect-square bg-velmora-sand relative overflow-hidden transition-all ${
                  n === 1 ? 'ring-1 ring-velmora-gold' : 'hover:ring-1 hover:ring-velmora-gold'
                }`}
              >
                <img
                  alt={`${product.name} view ${n}`}
                  data-strk-img-id={`pdp-thumb-${product.id}-${n}-j1k2l3`}
                  data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="160"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 id={`pdp-title-${product.id}`} className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-velmora-charcoal leading-tight">
            {product.name}
          </h1>

          {/* Price + Rating */}
          <div className="flex items-center gap-4 mt-4 mb-2">
            <span className="text-xl font-medium text-velmora-charcoal">${product.price}</span>
            <span className="w-px h-4 bg-velmora-sand" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'fill-velmora-sand text-velmora-sand'
                  }`}
                />
              ))}
              <span className="text-xs text-velmora-taupe ml-1">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <p id={`pdp-desc-${product.id}`} className="text-sm text-velmora-warmgray leading-relaxed mt-4 mb-6">
            {product.description}
          </p>

          <hr className="hairline-divider my-6" />

          {/* Variant selector */}
          <div className="mb-6">
            <p className="text-[11px] tracking-wider uppercase text-velmora-taupe mb-3">
              Finish: <span className="text-velmora-charcoal font-medium">{selectedVariant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                    selectedVariant === v
                      ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                      : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-charcoal'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-[11px] tracking-wider uppercase text-velmora-taupe mb-3">Quantity</p>
            <div className="flex items-center border border-velmora-sand w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:text-velmora-golddark transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-5 text-sm min-w-[44px] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:text-velmora-golddark transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="btn-primary w-full mb-3"
          >
            {addedToCart ? 'Added to Bag!' : 'Add to Bag'}
          </button>

          {/* Wishlist */}
          <button className="w-full text-center text-xs text-velmora-taupe hover:text-velmora-charcoal transition-colors flex items-center justify-center gap-1.5 py-2">
            <Heart className="w-3.5 h-3.5" />
            Add to Wishlist
          </button>

          <hr className="hairline-divider my-8" />

          {/* Accordions */}
          <div className="divide-y divide-velmora-sand">
            {accordionSections.map((section) => (
              <div key={section.key} className="py-4">
                <button
                  onClick={() => toggleAccordion(section.key)}
                  className="w-full flex items-center justify-between text-xs tracking-wider uppercase font-medium text-velmora-charcoal hover:text-velmora-golddark transition-colors"
                >
                  {section.title}
                  {activeAccordion === section.key ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === section.key ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-velmora-warmgray leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related products */}
      <hr className="hairline-divider my-16 md:my-20" />
      <div className="mb-6">
        <h2 className="font-serif text-2xl tracking-wider text-velmora-charcoal text-center">
          You May Also Like
        </h2>
        <hr className="hairline-divider w-12 mx-auto mt-4 mb-10" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {relatedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
