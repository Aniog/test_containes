import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id) || products[0];
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [product.image, product.imageSecondary || product.image];
  const variants = ['Gold', 'Silver'];

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedVariant);
    }
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.longDescription || product.description,
    },
    {
      title: 'Materials & Care',
      content: '18K gold-plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch. Clean gently with a soft cloth.',
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns for unworn items in original packaging. Custom pieces are final sale.',
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[1px] text-[#8B8178] py-6">
          <Link to="/shop" className="hover:text-[#2C2825]">SHOP</Link> / <span className="text-[#2C2825]">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F5F2ED] overflow-hidden mb-4">
              <img 
                src={images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`gallery-thumb w-20 h-20 overflow-hidden bg-[#F5F2ED] ${selectedImageIndex === idx ? 'active' : ''}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="font-serif text-3xl md:text-4xl tracking-[2px] uppercase mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl text-[#C5A46E]">${product.price}</span>
              <StarRating rating={product.rating} size={15} />
              <span className="text-xs text-[#8B8178]">({product.rating}.0)</span>
            </div>

            <p className="text-[#5C5651] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[1.5px] text-[#8B8178] mb-3">TONE</p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                  >
                    {v.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[1.5px] text-[#8B8178] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E8E4DE] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg hover:bg-[#F5F2ED] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 tabular-nums">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg hover:bg-[#F5F2ED] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button onClick={handleAddToCart} className="w-full mb-4" size="lg">
              ADD TO CART
            </Button>
            <p className="text-center text-xs text-[#8B8178] tracking-[0.5px]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 border-t border-[#E8E4DE]">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl tracking-[1px]">You May Also Like</h3>
            <Link to="/shop" className="text-sm tracking-[1px] text-[#C5A46E] hover:text-[#B89778]">VIEW ALL →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
