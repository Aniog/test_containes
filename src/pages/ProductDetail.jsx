import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';

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
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8A8178] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] mb-8 hover:text-[#B89778]">
          <ChevronLeft size={16} /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F8F6F3] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F8F6F3] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#B89778]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</p>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1 text-[#B89778]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#B89778" />
                ))}
              </div>
              <span className="text-sm text-[#8A8178]">{product.rating} · {product.reviews} reviews</span>
            </div>

            <p className="text-2xl mb-8">${product.price}</p>

            <p className="text-[#5C5651] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] text-[#8A8178] mb-3">TONE</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
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
              <p className="text-xs tracking-[0.1em] text-[#8A8178] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F6F3]">-</button>
                <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F6F3]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-accent w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#8A8178] tracking-[0.05em]">Free shipping on orders over $75</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              <div>
                <button onClick={() => toggleAccordion('description')} className="accordion-header w-full">
                  <span>DESCRIPTION</span>
                  <span className="text-xl">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'description' && (
                  <div className="accordion-content">{product.details}</div>
                )}
              </div>
              <div>
                <button onClick={() => toggleAccordion('materials')} className="accordion-header w-full">
                  <span>MATERIALS & CARE</span>
                  <span className="text-xl">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content">{product.care}</div>
                )}
              </div>
              <div>
                <button onClick={() => toggleAccordion('shipping')} className="accordion-header w-full">
                  <span>SHIPPING & RETURNS</span>
                  <span className="text-xl">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content">
                    Free worldwide shipping on orders over $75. All orders ship within 1-2 business days. 
                    Returns accepted within 30 days of delivery. Items must be unworn with tags attached.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E5E0D8]">
            <h3 className="heading-serif text-2xl tracking-[0.04em] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[4/3.5] bg-[#F8F6F3] mb-3 overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</p>
                  <p className="text-sm text-[#8A8178]">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;