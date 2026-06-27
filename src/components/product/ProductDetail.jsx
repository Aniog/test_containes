import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-[var(--color-accent)] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart(product, selectedVariant, quantity);
      setIsAdding(false);
    }, 500);
  };

  // Related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: 'Our jewelry is crafted with 18K gold plating on sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on orders over $100. We offer 30-day returns for unworn items in original packaging. Express shipping options available at checkout.'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-cream)] pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container py-4">
        <nav className="flex items-center gap-2 font-sans text-sm text-[var(--color-text-muted)]">
          <Link to="/" className="hover:text-[var(--color-charcoal)]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-[var(--color-charcoal)]">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[var(--color-charcoal)]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-[var(--color-bg-secondary)] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`
                    w-20 h-24 bg-[var(--color-bg-secondary)] overflow-hidden
                    transition-all duration-200
                    ${selectedImage === index 
                      ? 'ring-2 ring-[var(--color-charcoal)]' 
                      : 'opacity-60 hover:opacity-100'
                    }
                  `}
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

          {/* Product Info */}
          <div className="md:sticky md:top-24 h-fit">
            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl text-[var(--color-charcoal)] mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < product.rating ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-[var(--color-text-muted)]'}`} 
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-[var(--color-text-muted)]">
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-[var(--color-charcoal)] mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-[var(--color-text-secondary)] mb-6">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="font-sans text-sm font-medium text-[var(--color-charcoal)] mb-3 block">
                Color: {selectedVariant}
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`
                      px-4 py-2 font-sans text-sm border
                      transition-all duration-200
                      ${selectedVariant === variant
                        ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-warm-white)]'
                        : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-charcoal)]'
                      }
                    `}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="font-sans text-sm font-medium text-[var(--color-charcoal)] mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-charcoal)] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-charcoal)] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
              disabled={isAdding}
              className="mb-4"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </Button>

            {/* Material Info */}
            <p className="font-sans text-sm text-[var(--color-text-muted)] text-center">
              Material: {product.material}
            </p>
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="container pb-16">
        <div className="max-w-2xl">
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[var(--color-ivory)]">
          <div className="container">
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-charcoal)] mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;