import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div>Product not found</div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`Added ${quantity} × ${product.name} to cart`);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F8F5F1] mb-4 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, i) => (
                <div key={i} className="aspect-square bg-[#F8F5F1] overflow-hidden cursor-pointer border border-transparent hover:border-[#E5DFD3]">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.15em] mb-3 pr-4">{product.name}</div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-2xl font-light">${product.price}</div>
              <div className="flex items-center gap-1 text-sm text-[#C5A46E]">
                <Star size={16} fill="currentColor" /> {product.rating} ({product.reviews} reviews)
              </div>
            </div>

            <p className="text-[#6B665F] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="uppercase text-xs tracking-[0.15em] mb-3">Tone</div>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
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
              <div className="uppercase text-xs tracking-[0.15em] mb-3">Quantity</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 border-t border-[#E5DFD3]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: '18K gold plated over brass. To maintain luster, avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.' },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns accepted. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key} className="border-b border-[#E5DFD3]">
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-12 border-t border-[#E5DFD3]">
          <div className="uppercase text-xs tracking-[0.2em] text-[#8B7355] mb-8 text-center">You May Also Like</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="product-card group">
                <div className="product-image-container bg-[#F8F5F1]">
                  <img src={p.image} alt={p.name} className="product-image" />
                  <img src={p.hoverImage} alt={p.name} className="product-image-hover" />
                </div>
                <div className="p-4">
                  <div className="product-name text-sm tracking-wider mb-1">{p.name}</div>
                  <div className="text-sm text-[#6B665F]">${p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
