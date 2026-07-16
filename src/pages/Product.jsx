import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Product = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#8B7355]">Back to shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to bag`);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#8B7355]">
        <ChevronLeft size={16} /> BACK TO COLLECTION
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3] bg-[#E5E0D8] mb-4 overflow-hidden">
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
                className={`w-20 h-20 bg-[#E5E0D8] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#2C2825]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <div className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#C5A46E" color="#C5A46E" />
              ))}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="text-2xl mb-8">${product.price}</div>

          <p className="text-[#6B665F] mb-8 leading-relaxed">{product.description}</p>

          {/* Variants */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] mb-3">FINISH</div>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
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
            <div className="text-xs tracking-[0.15em] mb-3">QUANTITY</div>
            <div className="flex items-center border border-[#E5E0D8] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F8F6F3]">-</button>
              <span className="px-6 py-3 border-x border-[#E5E0D8]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F8F6F3]">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
            ADD TO BAG
          </button>
          <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5E0D8]">
            {[
              { key: 'desc', label: 'DESCRIPTION', content: product.details },
              { key: 'care', label: 'MATERIALS & CARE', content: product.care },
              { key: 'ship', label: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' }
            ].map((section) => (
              <div key={section.key}>
                <button 
                  onClick={() => toggleAccordion(section.key)}
                  className="accordion-header w-full text-left"
                >
                  {section.label}
                  <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 pt-12 border-t border-[#E5E0D8]">
        <div className="mb-8">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">YOU MAY ALSO LIKE</div>
          <h3 className="serif text-3xl">Discover More</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="group">
              <div className="aspect-[4/3.5] bg-[#E5E0D8] mb-4 overflow-hidden">
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="product-name text-sm tracking-wider mb-1">{item.name}</div>
              <div className="text-sm text-[#6B665F]">${item.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;