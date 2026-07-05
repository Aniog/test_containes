import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-secondary inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#6B6560] mb-8 tracking-wide">
          <Link to="/" className="hover:text-[#B8860B] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#B8860B] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A] capitalize">{product.category}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#F5F0EB] overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 bg-[#F5F0EB] overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-[#B8860B]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <p className="text-xs tracking-[0.3em] uppercase text-[#6B6560] mb-2 capitalize">
              {product.category}
            </p>
            <h1 className="product-name text-3xl md:text-4xl text-[#1A1A1A] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-[#D4A843] text-[#D4A843]" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-[#6B6560]">({product.reviews} reviews)</span>
            </div>

            <p className="serif-heading text-2xl text-[#1A1A1A] mb-6">
              ${product.price}
            </p>

            <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-[#1A1A1A] mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-widest uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#B8860B] bg-[#B8860B] text-white'
                        : 'border-[#E8E2DB] text-[#6B6560] hover:border-[#B8860B]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-[#1A1A1A] mb-3">Quantity</p>
              <div className="flex items-center border border-[#E8E2DB] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:text-[#B8860B] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:text-[#B8860B] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-[#B8860B] text-white hover:bg-[#9A7209]'
              }`}
            >
              <ShoppingBag size={16} />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-[#E8E2DB] grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Free Shipping', sub: 'Worldwide' },
                { label: '30-Day', sub: 'Returns' },
                { label: '18K Gold', sub: 'Plated' },
              ].map(badge => (
                <div key={badge.label}>
                  <p className="text-xs font-medium text-[#1A1A1A]">{badge.label}</p>
                  <p className="text-[10px] text-[#6B6560]">{badge.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl">
          <ProductAccordion product={product} />
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <RelatedProducts product={product} />
        </div>
      </div>
    </div>
  );
}
