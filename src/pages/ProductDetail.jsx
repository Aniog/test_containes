import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts, products } from '../data/products';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div className="max-w-[1400px] mx-auto px-6 py-20">Product not found</div>;
  }

  const related = getRelatedProducts(product.id, product.category);
  const images = [product.image, product.imageAlt];

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setQuantity(1);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-wider mb-8 hover:text-[#B89778]">
        <ChevronLeft size={16} /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3] bg-[#F8F5F1] mb-4 overflow-hidden">
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
                className={`w-20 h-20 bg-[#F8F5F1] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#B89778]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <div className="product-name text-3xl tracking-[0.1em] mb-3">{product.name}</div>
          <div className="text-2xl mb-4">${product.price}</div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-[#B89778]">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="text-[#6B665F] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <div className="uppercase text-xs tracking-[0.15em] mb-3 text-[#6B665F]">Tone</div>
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
            <div className="uppercase text-xs tracking-[0.15em] mb-3 text-[#6B665F]">Quantity</div>
            <div className="flex items-center border border-[#E5DFD3] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
              <span className="px-6 py-2 border-x border-[#E5DFD3]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B665F] tracking-wider">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 space-y-px border-t border-[#E5DFD3]">
            {[
              { key: 'desc', label: 'Description', content: product.description },
              { key: 'care', label: 'Materials & Care', content: `Crafted from ${product.material}. Avoid contact with perfumes, lotions, and harsh chemicals. Clean gently with a soft cloth.` },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns for unworn items in original packaging.' },
            ].map((section) => (
              <div key={section.key} className="border-b border-[#E5DFD3]">
                <button 
                  onClick={() => toggleAccordion(section.key)}
                  className="w-full flex justify-between items-center py-5 text-left"
                >
                  <span className="uppercase text-sm tracking-[0.1em]">{section.label}</span>
                  <span className="text-xl">{activeAccordion === section.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${activeAccordion === section.key ? 'open' : ''}`}>
                  <p className="pb-6 text-[#6B665F] pr-8">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {related.length > 0 && (
        <div className="mt-20 pt-16 border-t border-[#E5DFD3]">
          <div className="uppercase text-xs tracking-[0.2em] text-[#B89778] mb-8">You May Also Like</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="image-hover aspect-[4/3] bg-[#F8F5F1] mb-4 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="product-name text-sm tracking-wider mb-1">{item.name}</div>
                <div className="text-sm text-[#6B665F]">${item.price}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;