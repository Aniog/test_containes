import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
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
    return <div className="pt-20 p-6 text-center">Product not found</div>;
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 pt-8">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F3EF] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F5F3EF] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#2C2825]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</div>
            <div className="text-2xl mb-4">${product.price}</div>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#C5A46E" className="text-[#C5A46E]" />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-[#6B6560] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="uppercase tracking-[0.1em] text-xs mb-3">Tone</div>
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
              <div className="uppercase tracking-[0.1em] text-xs mb-3">Quantity</div>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F6F3]">-</button>
                <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F6F3]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-accent w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B6560] tracking-wide">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: product.care },
                { key: 'ship', label: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
              ].map((acc) => (
                <div key={acc.key}>
                  <button 
                    onClick={() => toggleAccordion(acc.key)}
                    className="accordion-header w-full text-left"
                  >
                    <span>{acc.label}</span>
                    <span className="text-xl">{openAccordion === acc.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B6560] text-sm leading-relaxed ${openAccordion === acc.key ? 'open' : ''}`}>
                    {acc.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-8">You May Also Like</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="img-container aspect-[4/3] mb-4">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="product-name text-sm tracking-wider mb-1">{p.name}</div>
                <div className="text-[#6B6560]">${p.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;