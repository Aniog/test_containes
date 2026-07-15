import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';

const ProductDetail = ({ onCartClick }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return <div className="pt-20 p-6">Product not found</div>;
  }

  const images = [product.image, product.image2];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-wide mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F0EDE8] rounded-sm overflow-hidden mb-4">
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
                  className={`w-20 h-20 bg-[#F0EDE8] rounded-sm overflow-hidden border-2 ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
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
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#C5A46E" color="#C5A46E" />
                ))}
              </div>
              <span className="text-sm text-[#6B6763]">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#6B6763] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] mb-3">FINISH</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(v => (
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
              <p className="text-xs tracking-[0.15em] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F6F3]">-</button>
                <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F6F3]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs tracking-wide text-[#6B6763]">Free shipping on orders over $50</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { key: 'desc', title: 'DESCRIPTION', content: 'Each piece is hand-finished in our atelier using 18K gold plating over hypoallergenic brass. Designed for everyday wear and cherished for years to come.' },
                { key: 'care', title: 'MATERIALS & CARE', content: 'Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch. Wipe gently with a soft cloth after wear.' },
                { key: 'ship', title: 'SHIPPING & RETURNS', content: 'Complimentary worldwide shipping. Returns accepted within 30 days. Items must be unworn with original packaging.' },
              ].map(({ key, title, content }) => (
                <div key={key}>
                  <button
                    onClick={() => toggleAccordion(key)}
                    className="accordion-header w-full text-left"
                  >
                    {title}
                    <span className="text-xl">{openAccordion === key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B6763] text-sm leading-relaxed ${openAccordion === key ? 'open' : ''}`}>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-12 border-t border-[#E5E0D8]">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-6">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3.5] bg-[#F0EDE8] mb-4 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="product-name text-sm tracking-[0.15em] mb-1">{p.name}</p>
                <p className="text-[#6B6763] text-sm">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;