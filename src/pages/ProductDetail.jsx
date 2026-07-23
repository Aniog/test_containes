import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div className="pt-24 text-center">Product not found</div>;
  }

  const images = [product.image, product.hoverImage];
  const variants = ['Gold', 'Silver'];

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-[4/3] bg-[#F1EDE5] overflow-hidden mb-4">
            <img 
              src={images[currentImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button 
                  onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
          <div className="flex gap-3">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-20 h-20 border-2 overflow-hidden ${currentImageIndex === idx ? 'border-[#B89778]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <p className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</p>
          <p className="text-2xl mb-4">${product.price}</p>
          
          <div className="flex items-center gap-2 mb-8">
            <div className="stars flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="text-[#6B665F] mb-8 leading-relaxed">{product.description}</p>

          {/* Variants */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.1em] text-[#6B665F] mb-3">TONE</p>
            <div className="flex gap-3">
              {variants.map(v => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.1em] text-[#6B665F] mb-3">QUANTITY</p>
            <div className="flex items-center border border-[#E5DFD3] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
              <span className="px-6 py-2 border-x border-[#E5DFD3]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-10">
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="border-t border-[#E5DFD3]">
            {[
              { key: 'desc', label: 'Description', content: product.details },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated over sterling silver or brass. Wipe gently with a soft cloth. Avoid exposure to harsh chemicals and store in a dry place.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day returns accepted. Items must be unworn with original packaging.' },
            ].map(({ key, label, content }) => (
              <div key={key} className="border-b border-[#E5DFD3]">
                <button 
                  onClick={() => toggleAccordion(key)}
                  className="accordion-header w-full text-left"
                >
                  {label}
                  <span className="text-xl leading-none">{activeAccordion === key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${activeAccordion === key ? 'open' : ''}`}>
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="max-w-[1400px] mx-auto px-6 mt-20">
        <h3 className="serif text-3xl mb-8">You may also like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="product-card group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F1EDE5]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="product-name text-sm tracking-wider mb-1">{p.name}</p>
                <p className="text-[#6B665F] text-sm">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;