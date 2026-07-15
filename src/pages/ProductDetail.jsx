import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return <div className="pt-20 p-10 text-center">Product not found</div>;
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-widest mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F8F6F3] mb-4 overflow-hidden">
              <img 
                src={product.images.primary} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.images.primary, product.images.secondary, product.images.primary, product.images.secondary].map((img, i) => (
                <div key={i} className="aspect-square bg-[#F8F6F3] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-2">
              <div className="stars flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm text-[#6B6763]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            <p className="text-2xl mb-8">${product.price}</p>

            <p className="text-[#6B6763] leading-relaxed mb-8">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <p className="filter-label mb-3">Tone</p>
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
              <p className="filter-label mb-3">Quantity</p>
              <div className="flex items-center border border-[#E5E1DB] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F6F3]">-</button>
                <span className="px-6 py-2 border-x border-[#E5E1DB]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F6F3]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B6763] tracking-widest">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E1DB] border-y border-[#E5E1DB]">
              {[
                { title: "Description", content: "Each piece is hand-finished in our atelier using traditional techniques. Our demi-fine jewelry is designed to be worn daily and treasured for years to come." },
                { title: "Materials & Care", content: "18K gold plated over sterling silver base. Hypoallergenic and tarnish-resistant. Clean gently with a soft cloth. Avoid contact with perfumes and lotions." },
                { title: "Shipping & Returns", content: "Free worldwide shipping on orders over $75. 30-day returns accepted. Items must be unworn with original packaging." },
              ].map((section, i) => (
                <div key={i}>
                  <button 
                    onClick={() => toggleAccordion(i)}
                    className="accordion-header w-full flex justify-between items-center py-5 text-left"
                  >
                    <span className="text-sm tracking-widest">{section.title}</span>
                    <span className="text-xl">{openAccordion === i ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === i ? 'open' : ''}`}>
                    <p className="text-[#6B6763] pb-6 text-sm leading-relaxed pr-8">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">YOU MAY ALSO LIKE</p>
          <h3 className="serif text-3xl mb-10">Complete the Look</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[4/3] bg-[#F8F6F3] mb-4 overflow-hidden">
                  <img src={item.images.primary} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="product-name text-sm tracking-wider mb-1">{item.name}</p>
                <p className="text-sm text-[#6B6763]">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;