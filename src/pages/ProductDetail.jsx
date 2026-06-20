import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTone, setSelectedTone] = useState(
    product?.tone === 'both' ? 'gold' : product?.tone || 'gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-base mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:underline">
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
    addItem(product, selectedTone, quantity);
  };

  const toneOptions =
    product.tone === 'both'
      ? [
          { value: 'gold', label: '18K Gold' },
          { value: 'silver', label: 'Sterling Silver' },
        ]
      : product.tone === 'gold'
      ? [{ value: 'gold', label: '18K Gold' }]
      : [{ value: 'silver', label: 'Sterling Silver' }];

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-base/50">
            <li>
              <Link to="/" className="hover:text-gold transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-gold transition-colors duration-300">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-base/80">{product.name}</li>
          </ol>
        </nav>

        {/* Product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-cream-dark overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-cream-dark overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index ? 'border-gold' : 'border-transparent hover:border-base/20'
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
            )}
          </div>

          {/* Product info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-base mb-3">
              {product.name.toUpperCase()}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'fill-base/10 text-base/10'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-base/50">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-base mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-base/70 leading-relaxed mb-8">{product.description}</p>

            {/* Tone selector */}
            {toneOptions.length > 1 && (
              <div className="mb-8">
                <label className="block text-sm tracking-widest uppercase text-base/60 mb-3">
                  Tone
                </label>
                <div className="flex gap-3">
                  {toneOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedTone(option.value)}
                      className={`px-6 py-3 border text-sm tracking-wider transition-all duration-300 ${
                        selectedTone === option.value
                          ? 'border-gold bg-gold/5 text-gold'
                          : 'border-base/20 text-base/70 hover:border-gold'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm tracking-widest uppercase text-base/60 mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-base/20">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-base/5 transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-base min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-base/5 transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300 mb-4"
            >
              Add to Bag
            </button>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 text-xs text-base/50">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-gold" />
                Free shipping over $75
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-gold" />
                30-day returns
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-gold" />
                Hypoallergenic
              </span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-20 border-t border-base/10">
          {[
            {
              id: 'description',
              title: 'Description',
              content: product.description,
            },
            {
              id: 'materials',
              title: 'Materials & Care',
              content:
                'Our jewelry is crafted from high-quality materials including 18K gold-plated brass and sterling silver. To keep your pieces looking their best, avoid contact with harsh chemicals, perfumes, and lotions. Store in a dry place and clean with a soft cloth.',
            },
            {
              id: 'shipping',
              title: 'Shipping & Returns',
              content:
                'We offer free worldwide shipping on orders over $75. Standard delivery takes 5-7 business days. We accept returns within 30 days of purchase for a full refund. Items must be unworn and in original packaging.',
            },
          ].map((item) => (
            <div key={item.id} className="border-b border-base/10">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === item.id ? null : item.id)
                }
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="font-serif text-xl text-base">{item.title}</span>
                {openAccordion === item.id ? (
                  <ChevronUp className="w-5 h-5 text-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-base/40" />
                )}
              </button>
              {openAccordion === item.id && (
                <div className="pb-6 text-base/70 leading-relaxed animate-fade-in">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-3xl text-base text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;