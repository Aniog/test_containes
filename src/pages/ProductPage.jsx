import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
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
    openCart();
  };

  const sections = [
    { id: 'description', title: 'Description' },
    { id: 'materials', title: 'Materials & Care' },
    { id: 'shipping', title: 'Shipping & Returns' },
  ];

  return (
    <div className="min-h-screen bg-base-cream">
      {/* Breadcrumb */}
      <div className="section-padding pt-24 pb-4">
        <nav className="max-w-6xl mx-auto text-xs text-base-muted">
          <Link to="/" className="hover:text-gold transition-colors duration-200">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors duration-200">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-base-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="section-padding pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-base-paper overflow-hidden">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square bg-base-paper overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === index ? 'border-gold' : 'border-transparent hover:border-base-sand'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product details */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-medium text-base-charcoal mb-3 uppercase tracking-wider">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-gold text-gold'
                          : 'text-base-sand'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-base-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-display text-3xl font-medium text-base-charcoal mb-6">
                ${product.price}
              </p>

              {/* Description */}
              <p className="text-base-muted leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium tracking-wider uppercase text-base-charcoal mb-3">
                  Finish
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-3 border text-sm font-medium tracking-wider uppercase transition-all duration-200 ${
                        selectedVariant === variant
                          ? 'border-gold bg-gold text-base-cream'
                          : 'border-base-sand text-base-ink hover:border-gold'
                      }`}
                    >
                      {variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-medium tracking-wider uppercase text-base-charcoal mb-3">
                  Quantity
                </label>
                <div className="inline-flex items-center border border-base-sand">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-base-paper transition-colors duration-200"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 text-base-charcoal font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-base-paper transition-colors duration-200"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button onClick={handleAddToCart} className="btn-primary w-full mb-6">
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-base-sand">
                <div className="flex flex-col items-center text-center">
                  <Truck className="w-5 h-5 text-gold mb-2" />
                  <span className="text-xs text-base-muted">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RotateCcw className="w-5 h-5 text-gold mb-2" />
                  <span className="text-xs text-base-muted">30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="w-5 h-5 text-gold mb-2" />
                  <span className="text-xs text-base-muted">2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="border-t border-base-sand bg-white">
        <div className="max-w-6xl mx-auto">
          {sections.map((section) => (
            <div key={section.id} className="border-b border-base-sand last:border-b-0">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full flex items-center justify-between px-6 md:px-0 py-5 text-left"
              >
                <span className="font-display text-xl font-medium text-base-charcoal">
                  {section.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-base-muted transition-transform duration-200 ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSection === section.id ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-0 text-base-muted leading-relaxed">
                  {section.id === 'description' && (
                    <p>{product.description} Each piece is crafted with attention to detail, using premium materials that are designed to last. The {product.name} makes a perfect gift or a luxurious treat for yourself.</p>
                  )}
                  {section.id === 'materials' && (
                    <p>{product.details} To care for your jewelry, avoid contact with harsh chemicals, perfumes, and lotions. Store in a dry place and clean with a soft cloth.</p>
                  )}
                  {section.id === 'shipping' && (
                    <p>We offer free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping (2-3 business days) is available at checkout. Returns are accepted within 30 days of delivery. Items must be unworn and in original packaging.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 md:py-28 bg-base-cream">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-medium text-base-charcoal mb-10 text-center">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
