import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
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
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const variants = ['Gold', 'Silver'];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center text-sm tracking-widest mb-8 hover:text-velmora-gold transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-velmora-light mb-4 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => {
                  // Simple lightbox simulation
                  const lightbox = document.createElement('div');
                  lightbox.className = 'lightbox';
                  lightbox.innerHTML = `<img src="${product.images[selectedImage]}" alt="${product.name}" />`;
                  lightbox.onclick = () => lightbox.remove();
                  document.body.appendChild(lightbox);
                }}
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 bg-velmora-light overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-velmora-base' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-widest mb-2">{product.name}</h1>
            <p className="text-2xl mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="stars flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-sm text-velmora-text-light">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-[15px] leading-relaxed mb-8 text-velmora-text">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] text-velmora-text-light mb-3">TONE</p>
              <div className="flex gap-3">
                {variants.map((v) => (
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
              <p className="text-xs tracking-[0.1em] text-velmora-text-light mb-3">QUANTITY</p>
              <div className="flex items-center border border-velmora-light w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-velmora-light transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm border-x border-velmora-light">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-velmora-light transition-colors"
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
              ADD TO CART
            </button>
            <p className="text-center text-xs tracking-widest text-velmora-text-light">
              FREE SHIPPING • 30-DAY RETURNS
            </p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-velmora-light">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  <span>DESCRIPTION</span>
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm leading-relaxed text-velmora-text ${openAccordion === 'description' ? 'open' : ''}`}>
                  {product.details}
                </div>
              </div>

              {/* Materials & Care */}
              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full text-left"
                >
                  <span>MATERIALS & CARE</span>
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm leading-relaxed text-velmora-text ${openAccordion === 'materials' ? 'open' : ''}`}>
                  {product.care}
                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  <span>SHIPPING & RETURNS</span>
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm leading-relaxed text-velmora-text ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  Free worldwide shipping on orders over $75. All orders ship within 1-2 business days. 
                  Returns accepted within 30 days of delivery. Items must be unworn with original packaging.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-velmora-light">
            <h3 className="serif text-2xl tracking-[0.05em] mb-8">You May Also Like</h3>
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