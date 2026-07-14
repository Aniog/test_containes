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
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return <div className="pt-20 p-8 text-center">Product not found</div>;
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center text-sm tracking-[0.1em] mb-8 hover:text-[#8B7355]">
        <ChevronLeft size={16} className="mr-1" /> BACK TO SHOP
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[#F4F1EB] mb-4 overflow-hidden">
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
                className={`w-20 h-20 bg-[#F4F1EB] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="product-name text-3xl tracking-[0.15em] mb-2">{product.name}</p>
          <p className="text-2xl mb-4">${product.price}</p>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="stars flex">
              {[...Array(Math.floor(product.rating))].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="text-[#6B665F] mb-8 leading-relaxed">{product.description}</p>

          {/* Variants */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.15em] mb-3 text-[#6B665F]">FINISH</p>
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
            <p className="text-xs tracking-[0.15em] mb-3 text-[#6B665F]">QUANTITY</p>
            <div className="flex items-center border border-[#E5E0D8] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F4F1EB]">-</button>
              <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F4F1EB]">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-8">
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="border-t border-[#E5E0D8]">
            {[
              { key: 'desc', label: 'Description', content: product.details },
              { key: 'care', label: 'Materials & Care', content: product.care },
              { key: 'ship', label: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` }
            ].map(({ key, label, content }) => (
              <div key={key}>
                <button 
                  onClick={() => toggleAccordion(key)}
                  className="accordion-trigger"
                >
                  {label}
                  <span className="text-xl">{openAccordion === key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === key ? 'open' : ''}`}>
                  <p className="text-[#6B665F] text-sm leading-relaxed">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 pt-12 border-t border-[#E5E0D8]">
        <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">YOU MAY ALSO LIKE</p>
        <h3 className="font-serif text-3xl tracking-[0.05em] mb-8">Complete the Look</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="group">
              <div className="aspect-[4/3] bg-[#F4F1EB] mb-4 overflow-hidden">
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="product-name text-sm tracking-[0.1em] mb-1">{item.name}</p>
              <p className="text-[#6B665F] text-sm">${item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;