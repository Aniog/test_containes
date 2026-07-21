import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductById, products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase text-foreground hover:text-accent transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-foreground-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.value || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]?.value || 'gold');
      setQuantity(1);
      setSelectedImage(0);
      setAddedToCart(false);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-content mx-auto px-4 md:px-8 py-20 text-center">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Button variant="outline" className="mt-4" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <main className="animate-fade-in" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="py-6">
          <div className="flex items-center gap-2 text-xs text-foreground-muted tracking-wider uppercase">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/shop" className="hover:text-accent">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pb-16">
          {/* Left: Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[4/5] bg-muted overflow-hidden mb-4">
              <img
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-muted overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="md:pl-4">
            <h1
              id={`product-name-${product.id}`}
              className="font-serif text-xl md:text-2xl uppercase tracking-wider"
            >
              {product.name}
            </h1>
            <p className="font-serif text-accent text-xl md:text-2xl mt-2">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-foreground-muted/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-foreground-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p
              id={`product-desc-${product.id}`}
              className="text-foreground-muted text-sm leading-relaxed mt-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase text-foreground-muted mb-3">
                Finish: <span className="text-foreground capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all duration-200 ${
                      selectedVariant === variant.value
                        ? 'bg-foreground text-white border-foreground'
                        : 'bg-transparent text-foreground border-border hover:border-foreground'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-12 flex items-center justify-center border-r border-border hover:bg-muted transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 h-12 flex items-center justify-center text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-12 flex items-center justify-center border-l border-border hover:bg-muted transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                className="flex-1"
              >
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
              </Button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <p className="text-foreground text-xs uppercase tracking-wider mb-1">Materials</p>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <p className="text-foreground text-xs uppercase tracking-wider mb-1">Care Instructions</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <p>Free worldwide shipping on orders over $75. Standard shipping $5.99 (5-8 business days). Express shipping $12.99 (2-3 business days).</p>
                  <p>30-day return window for unworn items in original packaging. Free returns within the US. International return shipping is the responsibility of the customer.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pb-16 md:pb-24">
            <div className="border-t border-border pt-12">
              <h2 className="font-serif text-xl md:text-2xl uppercase tracking-wider text-center mb-10">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((rp) => (
                  <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                    <div className="aspect-[3/4] bg-muted overflow-hidden">
                      <img
                        data-strk-img-id={`related-${rp.id}`}
                        data-strk-img={rp.name}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={rp.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="text-xs md:text-sm tracking-wider uppercase">{rp.name}</h3>
                      <p className="text-accent font-serif text-sm mt-0.5">${rp.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}