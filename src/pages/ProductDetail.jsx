import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import { allProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];
  const relatedProducts = allProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const variants = ['Gold', 'Silver'];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    {
      title: "Description",
      content: product.longDescription || product.description,
    },
    {
      title: "Materials & Care",
      content: `Crafted from ${product.material}. To maintain its beauty, avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not in use. Clean gently with a soft cloth.`,
    },
    {
      title: "Shipping & Returns",
      content: "Complimentary worldwide shipping on all orders. Returns accepted within 30 days of delivery for a full refund. Items must be unworn and in original packaging. Please allow 5-7 business days for processing.",
    },
  ];

  const currentImage = product.images?.[selectedImageIndex] || product.images?.[0];

  return (
    <div className="min-h-screen bg-[#F7F3EB] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[1px] text-[#6B6259] hover:text-[#1C1B19] mb-8">
          <ArrowLeft className="w-4 h-4" /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#E5DFD3] overflow-hidden mb-3">
              <img 
                src={currentImage} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 bg-[#E5DFD3] overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-[#C5A46E]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="product-name font-serif text-3xl md:text-4xl tracking-[2px] text-[#1C1B19] mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl text-[#C5A46E] font-medium">${product.price}</span>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 star fill-current" />
                  ))}
                </div>
                <span className="text-[#6B6259] tabular-nums">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="text-[#6B6259] leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="filter-label mb-3">Tone</div>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill px-6 py-2.5 text-sm border rounded-full tracking-[1px] ${
                      selectedVariant === variant ? 'active' : ''
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="filter-label mb-3">Quantity</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg hover:bg-[#E5DFD3] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 tabular-nums border-x border-[#E5DFD3]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg hover:bg-[#E5DFD3] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button onClick={handleAddToCart} size="lg" className="w-full mb-3 tracking-[2px]">
              ADD TO CART
            </Button>
            <p className="text-center text-xs text-[#6B6259]">Free shipping • 30-day returns</p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#E5DFD3]">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <h3 className="font-serif text-3xl text-[#1C1B19]">You may also like</h3>
              <Link to="/shop" className="text-sm tracking-[1px] text-[#C5A46E] hidden md:block">VIEW ALL →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}