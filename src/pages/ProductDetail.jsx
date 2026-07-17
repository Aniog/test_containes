import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { getProductById, getRelatedProducts, products } from '@/data/products';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
        <div className="text-center">
          <p className="text-[#6B635C] mb-4">Product not found</p>
          <Link to="/shop" className="text-[#C5A26F]">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(id);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, variant: selectedVariant, quantity });
  };

  const images = [1, 2, 3]; // Placeholder for multiple images

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F5F2ED] mb-4 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#C5A26F]/30 text-[120px]">✧</div>
              </div>
            </div>
            <div className="flex gap-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-[#F5F2ED] border-2 transition-all ${selectedImage === idx ? 'border-[#C5A26F]' : 'border-transparent'}`}
                >
                  <div className="w-full h-full flex items-center justify-center text-[#C5A26F]/20 text-2xl">✧</div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="font-serif text-4xl tracking-[2px] text-[#2C2522] mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-[#C5A26F]">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <span className="text-sm text-[#6B635C]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl mb-8">${product.price}</p>

            <p className="text-[#6B635C] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[1.5px] mb-3 text-[#C5A26F]">TONE</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-wide border transition-all ${selectedVariant === variant ? 'border-[#C5A26F] bg-[#C5A26F] text-white' : 'border-[#EDE9E3] hover:border-[#C5A26F]'}`}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[1.5px] mb-3 text-[#C5A26F]">QUANTITY</p>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-[#EDE9E3] hover:bg-[#F5F2ED]">-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-[#EDE9E3] hover:bg-[#F5F2ED]">+</button>
              </div>
            </div>

            <Button onClick={handleAddToCart} size="lg" className="w-full mb-4">Add to Cart</Button>
            <p className="text-xs text-center text-[#6B635C]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 space-y-px border-t border-[#EDE9E3]">
              {[
                { key: 'desc', label: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. We source only the finest materials, ensuring every detail meets our exacting standards.' },
                { key: 'materials', label: 'Materials & Care', content: '18K gold plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch. Clean gently with a soft cloth.' },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. All orders ship within 1-2 business days. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key} className="border-b border-[#EDE9E3]">
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-trigger w-full flex justify-between items-center py-5 text-left"
                  >
                    <span className="font-serif text-lg tracking-wide">{section.label}</span>
                    <span className={`transition-transform ${openAccordion === section.key ? 'rotate-180' : ''}`}>↓</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === section.key ? 'open' : ''}`}>
                    <p className="pb-6 text-[#6B635C] leading-relaxed pr-8">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-12 border-t border-[#EDE9E3]">
          <p className="text-xs tracking-[2px] text-[#C5A26F] mb-8">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
