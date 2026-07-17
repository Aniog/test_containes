import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F5F2ED]">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="text-[#C5A46E]">Return to shop →</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);

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
      content: `${product.material}. ${product.care}`,
    },
    {
      title: "Shipping & Returns",
      content: "Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging. Please allow 5-7 business days for processing.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back link */}
        <Link to="/shop" className="inline-flex items-center text-sm tracking-[1px] text-[#6B6359] hover:text-[#1A1A1A] mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#EDE8E0] overflow-hidden mb-3">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 bg-[#EDE8E0] overflow-hidden border-2 transition-all ${selectedImageIndex === idx ? 'border-[#C5A46E]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="product-name font-serif text-3xl md:text-4xl tracking-[3px] mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl text-[#C5A46E]">${product.price}</span>
              <div className="flex items-center text-sm text-[#8B7B6B]">
                <div className="stars flex mr-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                {product.rating} ({product.reviewCount})
              </div>
            </div>

            <p className="text-[#6B6359] mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[2px] text-[#8B7B6B] mb-3">TONE</div>
              <div className="flex gap-3">
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
              <div className="text-xs tracking-[2px] text-[#8B7B6B] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#EDE8E0] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-[#EDE8E0] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-3 text-sm tabular-nums border-x border-[#EDE8E0]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-[#EDE8E0] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button onClick={handleAddToCart} className="w-full mb-4" size="lg">
              ADD TO CART
            </Button>
            <p className="text-center text-xs text-[#8B7B6B] tracking-wide">FREE SHIPPING • 30-DAY RETURNS</p>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-12 border-t border-[#EDE8E0]">
          <h3 className="font-serif text-2xl mb-8 tracking-[1px]">You may also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
