import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-brand-gold no-underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: product.materials + ' To maintain shine, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days. 30-day returns — items must be unworn and in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-brand-ivory overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-e1f2g3`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title] gold jewelry close up`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-brand-ivory overflow-hidden cursor-pointer border border-transparent hover:border-brand-gold transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-h4i5j6`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-xs text-brand-muted no-underline hover:text-brand-charcoal transition-colors">Home</Link>
              <span className="text-xs text-brand-sand">/</span>
              <Link to="/shop" className="text-xs text-brand-muted no-underline hover:text-brand-charcoal transition-colors">Shop</Link>
              <span className="text-xs text-brand-sand">/</span>
              <span className="text-xs text-brand-muted capitalize">{product.category}</span>
            </div>

            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-charcoal font-light uppercase tracking-product"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-brand-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-4 font-serif text-2xl text-brand-charcoal">${product.price}</p>

            <p
              id={`pdp-${product.id}-desc`}
              className="mt-6 font-sans text-sm text-brand-muted leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 font-sans text-xs uppercase tracking-wide-xl border transition-all cursor-pointer ${
                      selectedVariant === variant
                        ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                        : 'bg-transparent text-brand-charcoal border-brand-sand hover:border-brand-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-brand-sand text-brand-charcoal bg-transparent hover:bg-brand-ivory transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-brand-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-brand-sand text-brand-charcoal bg-transparent hover:bg-brand-ivory transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full py-4 bg-brand-charcoal text-brand-cream font-sans text-xs uppercase tracking-wide-xl hover:bg-brand-warm transition-colors border-none cursor-pointer"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-sand">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-brand-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left"
                  >
                    <span className="font-sans text-sm text-brand-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4">
                      <p className="font-sans text-sm text-brand-muted leading-relaxed">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-32 border-t border-brand-sand pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
