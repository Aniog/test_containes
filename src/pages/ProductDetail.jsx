import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5F1]">
        <div className="text-center">
          <p className="text-[#6B655C] mb-4">Product not found</p>
          <Link to="/shop" className="text-[#8B7355]">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, product.category);
  const images = [product.image, product.image2 || product.image];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      {/* Minimal Nav */}
      <nav className="border-b border-[#E5DFD3] bg-[#F8F5F1]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link to="/shop" className="flex items-center gap-2 text-sm tracking-[1px] text-[#6B655C] hover:text-[#2C2522]">
            <ArrowLeft className="w-4 h-4" /> BACK TO SHOP
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#EDE8DF] overflow-hidden mb-4 rounded-sm">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-[#EDE8DF] overflow-hidden rounded-sm border-2 transition-all ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="font-serif text-[32px] tracking-[3px] text-[#2C2522] mb-2">{product.name}</div>
            <div className="text-2xl text-[#8B7355] mb-4">${product.price}</div>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#8B7355] text-[#8B7355]' : 'text-[#E5DFD3]'}`} />
                ))}
              </div>
              <span className="text-sm text-[#6B655C]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-[#5C554E] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[2px] text-[#8B7355] mb-3">FINISH</div>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[2px] text-[#8B7355] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-[#6B655C] hover:text-[#2C2522]">-</button>
                <span className="px-6 py-2 text-[#2C2522] border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-[#6B655C] hover:text-[#2C2522]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#8B7355] text-white text-sm tracking-[2px] hover:bg-[#6B5535] transition-colors mb-3"
            >
              ADD TO CART
            </button>
            <p className="text-center text-xs tracking-[1px] text-[#6B655C]">Free shipping on orders over $75</p>

            {/* Accordions */}
            <div className="mt-12 space-y-px border-t border-[#E5DFD3]">
              {[
                { key: 'desc', label: 'DESCRIPTION', content: product.description },
                { key: 'materials', label: 'MATERIALS & CARE', content: product.details },
                { key: 'shipping', label: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on orders over $75. All orders ship within 1-2 business days. Returns accepted within 30 days of delivery.' },
              ].map((section) => (
                <div key={section.key} className="border-b border-[#E5DFD3]">
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="w-full flex justify-between items-center py-5 text-left text-sm tracking-[1.5px] text-[#2C2522]"
                  >
                    {section.label}
                    <span className="text-[#8B7355]">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === section.key ? 'open' : ''}`}>
                    <p className="pb-6 text-[#5C554E] text-sm leading-relaxed pr-8">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5DFD3]">
            <div className="text-center mb-10">
              <span className="text-xs tracking-[3px] text-[#8B7355]">DISCOVER MORE</span>
              <h3 className="font-serif text-3xl text-[#2C2522] mt-1">You may also like</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
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