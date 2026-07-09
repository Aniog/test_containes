import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordions, setOpenAccordions] = useState({ description: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-black mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outlined inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
  };

  const accordions = [
    { key: 'description', label: 'Description', content: product.longDescription },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="pt-20" ref={containerRef}>
      <div className="container-velmora section-padding">
        {/* Breadcrumb */}
        <nav className="mb-8 md:mb-12">
          <ol className="flex items-center gap-2 font-sans text-xs text-velmora-stone">
            <li><Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-velmora-pearl mb-4 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                data-strk-bg-id={`${product.images[activeImage].id}-detail`}
                data-strk-bg={product.imgQuery}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                role="img"
                aria-label={product.images[activeImage].alt}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 bg-velmora-pearl overflow-hidden transition-all ${
                    activeImage === index ? 'ring-2 ring-velmora-gold' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    data-strk-bg-id={`${img.id}-thumb`}
                    data-strk-bg={`${product.imgQuery} ${index === 0 ? '' : 'detail close-up'}`}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="100"
                    role="img"
                    aria-label={img.alt}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            {/* Badge */}
            {product.badge && (
              <span className="inline-block bg-velmora-gold text-white text-[10px] tracking-wider uppercase px-3 py-1.5 font-sans mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-product text-velmora-black mb-4">
              {product.name}
            </h1>

            <p className="font-sans text-2xl font-medium text-velmora-black mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-stone">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-sans text-sm text-velmora-charcoal/80 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="divider mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wider uppercase text-velmora-stone mb-3">
                Tone: {product.variants[selectedVariant]}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2.5 font-sans text-xs tracking-wider uppercase transition-all ${
                      selectedVariant === index
                        ? 'bg-velmora-gold text-white'
                        : 'border border-velmora-sand text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wider uppercase text-velmora-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-sans text-sm font-medium text-velmora-black">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full text-center mb-6">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                  <item.icon size={18} className="text-velmora-gold" />
                  <span className="font-sans text-[10px] text-velmora-stone">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="divider mb-8" />

            {/* Accordions */}
            <div className="space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.key} className="border-b border-velmora-sand">
                  <button
                    onClick={() => toggleAccordion(accordion.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-wider uppercase text-velmora-charcoal">
                      {accordion.label}
                    </span>
                    {openAccordions[accordion.key] ? (
                      <ChevronUp size={16} className="text-velmora-stone" />
                    ) : (
                      <ChevronDown size={16} className="text-velmora-stone" />
                    )}
                  </button>
                  {openAccordions[accordion.key] && (
                    <div className="pb-4 font-sans text-sm text-velmora-charcoal/70 leading-relaxed whitespace-pre-line">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl text-velmora-black">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
