import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B665F] mb-4">Product not found</p>
          <Link to="/shop" className="text-[#B8975E]">Return to shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordions = [
    { 
      id: 'description', 
      title: 'Description', 
      content: product.description 
    },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: product.details + ' Store in a dry place. Avoid contact with perfumes and lotions. Clean gently with a soft cloth.' 
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: 'Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted for unworn items in original packaging.' 
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-[#6B665F] hover:text-[#2C2823] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F8F5F1] mb-4 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#F8F5F1] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="stars flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl mb-8">${product.price}</p>

            <p className="text-[#6B665F] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-sm tracking-[0.08em] mb-3">Tone</p>
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
              <p className="text-sm tracking-[0.08em] mb-3">Quantity</p>
              <div className="flex items-center border border-[#D4C9B8] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#F8F5F1]"
                >
                  −
                </button>
                <span className="px-6 py-2 border-x border-[#D4C9B8]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#F8F5F1]"
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
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 pt-8 border-t border-[#D4C9B8]">
              {accordions.map((acc) => (
                <div key={acc.id}>
                  <button 
                    onClick={() => toggleAccordion(acc.id)}
                    className="accordion-header w-full text-left"
                  >
                    <span>{acc.title}</span>
                    <span className="text-xl leading-none">{openAccordion === acc.id ? '−' : '+'}</span>
                  </button>
                  {openAccordion === acc.id && (
                    <div className="accordion-content">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-16 border-t border-[#D4C9B8]">
          <p className="uppercase tracking-[0.15em] text-xs text-[#B8975E] mb-8">You May Also Like</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
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