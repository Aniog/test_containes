import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';

function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="font-serif text-2xl mb-4">Product not found</div>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[0.1em] text-[#6B6058] mb-8">
          <Link to="/shop" className="hover:text-[#B89778]">SHOP</Link> / {product.name}
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#F8F5F1] overflow-hidden mb-3">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#2C2522]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-1">
            <div className="product-name text-3xl tracking-[0.1em] leading-tight mb-2">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-2 text-sm">
                <StarRating rating={product.rating} size={14} />
                <span className="text-[#6B6058]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#6B6058] leading-relaxed mb-8 pr-4">{product.shortDescription}</p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <div className="filter-label mb-2.5">Tone</div>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
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
            )}

            {/* Quantity */}
            <div className="mb-8">
              <div className="filter-label mb-2.5">Quantity</div>
              <div className="flex items-center border border-[#E5DFD6] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-[#F8F5F1] transition-colors"
                >
                  −
                </button>
                <span className="px-5 text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-[#F8F5F1] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B6058] tracking-widest">FREE SHIPPING ON ALL ORDERS</p>

            {/* Accordions */}
            <div className="mt-10 space-y-px border-t border-[#E5DFD6]">
              {[
                { key: 'desc', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: '18K gold-plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place. Clean gently with a soft cloth.' },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns for unworn items in original packaging. Please contact us for any questions.' },
              ].map((section) => (
                <div key={section.key} className="border-b border-[#E5DFD6]">
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="w-full flex justify-between items-center py-4 text-left text-sm tracking-[0.08em]"
                  >
                    {section.title}
                    <span className="text-lg leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B6058] leading-relaxed pb-4 ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-10 border-t border-[#E5DFD6]">
          <div className="flex items-center justify-between mb-8">
            <div className="font-serif text-2xl tracking-[0.04em]">You May Also Like</div>
            <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#B89778] hidden md:block">VIEW ALL →</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
