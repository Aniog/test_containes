import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-xl mb-4">Product not found</p>
        <Link to="/shop" className="text-[#B89778] hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const images = product.images || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Back Link */}
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] text-[#6B645C] hover:text-[#2C2825] mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3.5] bg-[#F1EDE6] overflow-hidden mb-3">
            <img 
              src={images[selectedImageIndex]?.url || images[0]?.url} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-all ${selectedImageIndex === idx ? 'border-[#1C1917]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <h1 className="product-name text-3xl md:text-4xl tracking-[0.1em] mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-4">
            <StarRating rating={product.rating} showNumber />
            <span className="text-xs text-[#6B645C]">({product.reviewCount} reviews)</span>
          </div>

          <p className="text-2xl font-medium mb-6 tabular-nums">${product.price}</p>

          <p className="text-[#6B645C] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.15em] text-[#6B645C] mb-3">TONE</p>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`variant-pill ${selectedVariant === variant.id ? 'active' : ''}`}
                  disabled={!variant.available}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.15em] text-[#6B645C] mb-3">QUANTITY</p>
            <div className="flex items-center border border-[#D4CFC6] w-fit">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2.5 hover:bg-[#F1EDE6] transition-colors"
              >−</button>
              <span className="px-6 py-2.5 tabular-nums border-x border-[#D4CFC6]">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2.5 hover:bg-[#F1EDE6] transition-colors"
              >+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button 
            variant="accent" 
            className="w-full mb-3 text-base py-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <p className="text-center text-xs text-[#6B645C] tracking-wide">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-10 space-y-px border-t border-[#D4CFC6]">
            {/* Description */}
            <div className="border-b border-[#D4CFC6]">
              <button 
                onClick={() => toggleAccordion('description')}
                className="w-full flex justify-between items-center py-5 text-left"
              >
                <span className="text-sm tracking-[0.1em]">Description</span>
                <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                <p className="pb-6 text-[#6B645C] leading-relaxed pr-4">{product.longDescription}</p>
              </div>
            </div>

            {/* Materials & Care */}
            <div className="border-b border-[#D4CFC6]">
              <button 
                onClick={() => toggleAccordion('materials')}
                className="w-full flex justify-between items-center py-5 text-left"
              >
                <span className="text-sm tracking-[0.1em]">Materials & Care</span>
                <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                <div className="pb-6 text-[#6B645C] leading-relaxed space-y-3 pr-4">
                  <p><span className="text-[#2C2825]">Materials:</span> {product.material}</p>
                  <p><span className="text-[#2C2825]">Care:</span> {product.care}</p>
                </div>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="border-b border-[#D4CFC6]">
              <button 
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex justify-between items-center py-5 text-left"
              >
                <span className="text-sm tracking-[0.1em]">Shipping & Returns</span>
                <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                <div className="pb-6 text-[#6B645C] leading-relaxed space-y-3 pr-4 text-sm">
                  <p><span className="text-[#2C2825]">Shipping:</span> Free worldwide shipping on all orders. Delivered in 5-10 business days.</p>
                  <p><span className="text-[#2C2825]">Returns:</span> 30-day returns. Items must be unworn and in original packaging.</p>
                  <p><span className="text-[#2C2825]">Care:</span> All pieces are hypoallergenic and nickel-free.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[#D4CFC6]">
          <h3 className="serif text-2xl tracking-wide mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
