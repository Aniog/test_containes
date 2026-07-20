import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-widest uppercase text-text-primary">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-text-secondary" />
        ) : (
          <ChevronDown className="w-4 h-4 text-text-secondary" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-text-secondary leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  useEffect(() => {
    setSelectedVariant('gold');
    setQuantity(1);
    setActiveImage(0);
    setAddedToCart(false);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-text-primary mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-accent text-sm tracking-widest uppercase hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="order-2 lg:order-1">
            {/* Main image */}
            <div className="aspect-[3/4] bg-surface mb-4 overflow-hidden">
              <img
                data-strk-img-id={`product-${product.images[activeImage].id}`}
                data-strk-img={product.images[activeImage].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.shortName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square bg-surface overflow-hidden border-2 transition-colors ${
                    activeImage === index ? 'border-accent' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.shortName} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="order-1 lg:order-2">
            {product.badge && (
              <span className="inline-block bg-accent/10 text-accent text-[10px] tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl sm:text-4xl text-text-primary tracking-wider mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-accent'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-text-secondary">{product.rating}</span>
              <span className="text-sm text-text-muted">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-text-primary mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-sm tracking-widest uppercase text-text-primary mb-3 block">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-6 py-2.5 text-sm tracking-wider border transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? 'border-accent bg-accent text-white'
                        : 'border-border text-text-primary hover:border-accent'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm tracking-widest uppercase text-text-primary mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-border w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-background transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-text-secondary" />
                </button>
                <span className="flex-1 text-center text-sm text-text-primary">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-background transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-text-secondary" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-[#B8860B] hover:bg-[#996F0A] text-white'
              }`}
            >
              {addedToCart ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>

            {/* You may also like */}
            <div className="mt-16 pt-10 border-t border-border">
              <h3 className="font-serif text-2xl text-text-primary mb-8 text-center">
                You May Also Like
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products
                  .filter((p) => p.id !== product.id)
                  .slice(0, 4)
                  .map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      to={`/product/${relatedProduct.id}`}
                      className="group"
                    >
                      <div className="aspect-[3/4] bg-surface overflow-hidden mb-3">
                        <img
                          data-strk-img-id={`related-${relatedProduct.images[0].id}`}
                          data-strk-img={relatedProduct.images[0].query}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="400"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={relatedProduct.shortName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-xs tracking-widest uppercase text-text-primary group-hover:text-accent transition-colors">
                        {relatedProduct.name}
                      </h4>
                      <p className="text-xs text-text-secondary mt-1">${relatedProduct.price.toFixed(2)}</p>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                {product.description} Crafted with care using premium materials and designed for everyday wear. Each piece undergoes rigorous quality testing to ensure lasting beauty.
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To maintain the luster, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns. Items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
