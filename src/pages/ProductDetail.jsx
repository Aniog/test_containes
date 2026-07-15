import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 text-center py-20">
        <p>Product not found</p>
        <Link to="/shop" className="text-[#8B7355] underline">Back to shop</Link>
      </div>
    );
  }

  const images = [product.image, product.imageSecondary];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F0EBE3] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F0EBE3] overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#C5A46E] text-[#C5A46E]" />
                ))}
              </div>
              <span className="text-sm text-[#6B605A]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-[#6B605A] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#6B605A] mb-3">FINISH</p>
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
              <p className="text-xs tracking-[0.15em] text-[#6B605A] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5DFD6] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F0EBE3]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD6]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F0EBE3]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B605A]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD6]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: '18K gold plated brass. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place. Clean gently with a soft cloth.' },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns accepted. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-trigger"
                  >
                    {section.label}
                    <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === section.key ? 'open' : ''}`}>
                    <p className="py-4 text-[#6B605A] text-sm leading-relaxed pr-8">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <p className="text-xs tracking-[0.2em] text-[#6B605A] mb-8">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="product-card group block">
                <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</p>
                  <p className="text-[#6B605A] text-sm">${p.price}</p>
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