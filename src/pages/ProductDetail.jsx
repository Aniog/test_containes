import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5F1]">
        <div className="text-center">
          <p className="text-[#6B635C] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-sm text-[#6B635C] hover:text-[#1A1816] mb-8">
          <ChevronLeft size={16} className="mr-1" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F2ED] overflow-hidden mb-3">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover cursor-zoom-in"
                onClick={() => window.open(product.images[selectedImageIndex], '_blank')}
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 bg-[#F5F2ED] overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx ? 'border-[#B8976A]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl tracking-[0.1em] mb-2">{product.name}</h1>
            <p className="text-2xl mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="stars flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-[#6B635C]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-[#6B635C] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase mb-3 text-[#6B635C]">Tone</p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase mb-3 text-[#6B635C]">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-[#E5DFD6] flex items-center justify-center hover:border-[#B8976A]"
                >
                  −
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-[#E5DFD6] flex items-center justify-center hover:border-[#B8976A]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-gold w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B635C]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-[#E5DFD6]">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="accordion-trigger"
                >
                  Description
                  <span className="text-lg leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <p className="py-4 text-[#6B635C] text-sm leading-relaxed">{product.longDescription}</p>
                </div>
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-trigger"
                >
                  Materials & Care
                  <span className="text-lg leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="py-4 text-[#6B635C] text-sm leading-relaxed space-y-2">
                    <p>• 18K gold plated over sterling silver</p>
                    <p>• Hypoallergenic and nickel-free</p>
                    <p>• Avoid contact with perfumes, lotions, and harsh chemicals</p>
                    <p>• Store in a cool, dry place</p>
                    <p>• Clean gently with a soft cloth</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-trigger"
                >
                  Shipping & Returns
                  <span className="text-lg leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="py-4 text-[#6B635C] text-sm leading-relaxed space-y-2">
                    <p>• Free worldwide shipping on orders over $50</p>
                    <p>• Standard delivery: 5-10 business days</p>
                    <p>• 30-day returns on unworn items in original packaging</p>
                    <p>• Express shipping available at checkout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <h3 className="text-xl font-medium tracking-[-0.01em] mb-6">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="aspect-[4/3.5] bg-[#F5F2ED] overflow-hidden mb-3">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="product-name text-xs tracking-[0.08em] mb-0.5">{related.name}</p>
                <p className="text-sm text-[#6B635C]">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
