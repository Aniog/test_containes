import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-stone mb-4">Product not found</p>
          <Link to="/shop" className="text-velmora-gold text-sm underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div>
          <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
          <p><strong>Care:</strong> {product.care}</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div>
          <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.</p>
          <p><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging. Refunds processed within 5 business days of receiving the return.</p>
        </div>
      ),
    },
  ];

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs text-velmora-stone hover:text-velmora-gold transition-colors">
          <ArrowLeft size={14} />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[3/4] bg-velmora-warm mb-4 relative">
              <div
                className="absolute inset-0"
                data-strk-bg-id={`product-main-${product.id}`}
                data-strk-bg={`[${product.id}-subtitle] [${product.id}-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-24 bg-velmora-warm flex-shrink-0 transition-all duration-300 ${
                    activeImage === index ? 'ring-2 ring-velmora-gold' : 'ring-1 ring-velmora-stone-lighter/30'
                  }`}
                >
                  <div
                    className="w-full h-full"
                    data-strk-bg-id={`product-thumb-${product.id}-${index}`}
                    data-strk-bg={`[${product.id}-subtitle] [${product.id}-title] ${index === 1 ? 'detail' : ''}`}
                    data-strk-bg-ratio="3x4"
                    data-strk-bg-width="200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-velmora-gold/10 text-velmora-gold-dark text-[10px] tracking-ultra-wide uppercase px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl lg:text-3xl tracking-wide text-velmora-base mb-2">
              {product.name}
            </h1>
            <p className="text-velmora-stone text-sm mb-4">{product.subtitle}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-stone-lighter'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-stone">{product.rating}</span>
              <span className="text-sm text-velmora-stone-light">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-base mb-6">${product.price}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-ultra-wide uppercase text-velmora-stone mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-5 py-2.5 text-xs tracking-wide border transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-base'
                        : variant.available
                        ? 'border-velmora-stone-lighter/50 text-velmora-stone hover:border-velmora-stone'
                        : 'border-velmora-stone-lighter/20 text-velmora-stone-lighter cursor-not-allowed'
                    }`}
                  >
                    {variant.name}
                    {!variant.available && ' (Sold Out)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-ultra-wide uppercase text-velmora-stone mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-stone-lighter/50 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-stone hover:text-velmora-base transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 text-sm text-velmora-base">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-stone hover:text-velmora-base transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-velmora-gold text-velmora-base py-4 text-xs tracking-ultra-wide uppercase font-medium hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag size={16} />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-velmora-stone-light text-center">
              Free shipping · 30-day returns · Hypoallergenic
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-stone-lighter/30">
              {accordions.map((accordion, index) => (
                <div key={index} className="border-b border-velmora-stone-lighter/30">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-ultra-wide uppercase font-medium text-velmora-base">
                      {accordion.title}
                    </span>
                    {openAccordion === index ? (
                      <ChevronUp size={18} className="text-velmora-stone flex-shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-velmora-stone flex-shrink-0" />
                    )}
                  </button>
                  {openAccordion === index && (
                    <div className="pb-4 text-sm text-velmora-stone leading-relaxed">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-velmora-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-velmora-base">You May Also Like</h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
