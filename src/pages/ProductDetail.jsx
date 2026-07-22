import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || { id: 'gold', label: 'Gold', value: 'gold' });
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B635C] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-gold-outline">BACK TO SHOP</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const getImageUrl = (index) => {
    const colors = ['F5EDE3', 'EDE4D7', 'D4B99A'];
    const color = colors[index % colors.length];
    return `https://placehold.co/800x600/${color}/1C1917?text=${encodeURIComponent(product.name.split(' ').slice(0, 2).join(' '))}`;
  };

  return (
    <div className="pt-20">
      <div className="container py-8">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center text-sm text-[#6B635C] hover:text-[#B89778] mb-8">
          <ChevronLeft size={16} className="mr-1" /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="product-gallery">
            <div className="product-gallery-main">
              <img 
                src={getImageUrl(selectedImageIndex)} 
                alt={product.images[selectedImageIndex]?.alt || product.name}
              />
            </div>
            <div className="product-gallery-thumbs">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`product-gallery-thumb ${selectedImageIndex === index ? 'active' : ''}`}
                >
                  <img src={getImageUrl(index)} alt={img.alt} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xl font-light">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex text-[#B89778]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[#6B635C] ml-1">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="text-[#6B635C] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[#6B635C] mb-3">TONE</div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant.id === variant.id ? 'active' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] uppercase text-[#6B635C] mb-3">QUANTITY</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#D9D2C7]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-lg hover:text-[#B89778] transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-sm tracking-widest">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-lg hover:text-[#B89778] transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-[#6B635C]">IN STOCK • READY TO SHIP</span>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary btn-full mb-4"
            >
              ADD TO CART — ${product.price * quantity}
            </button>
            <p className="text-center text-xs text-[#6B635C] tracking-wider">FREE SHIPPING • 30-DAY RETURNS</p>

            {/* Accordions */}
            <div className="mt-12">
              <div className="accordion">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header"
                >
                  <span>DESCRIPTION</span>
                  <span className="text-lg leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <p>{product.longDescription}</p>
                </div>
              </div>

              <div className="accordion">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header"
                >
                  <span>MATERIALS & CARE</span>
                  <span className="text-lg leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <p>
                    18K gold-plated brass with hypoallergenic posts. Avoid contact with water, 
                    perfume, and lotions. Store in the provided pouch. Polish gently with a soft cloth.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header"
                >
                  <span>SHIPPING & RETURNS</span>
                  <span className="text-lg leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <p>
                    Free worldwide shipping on all orders. Ships within 1-2 business days. 
                    Returns accepted within 30 days of delivery. Items must be unworn with tags attached.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-8">
            <h2>You May Also Like</h2>
            <Link to="/shop" className="text-sm tracking-[0.06em] text-[#6B635C] hover:text-[#B89778] hidden md:block">
              VIEW ALL →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
