import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return <div className="p-8">Product not found</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
  };

  const images = [product.image1, product.image2];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] mb-8 hover:text-[#C5A46E]">
        <ChevronLeft size={16} /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3] bg-[#1A1A1A] mb-4 overflow-hidden">
            <img src={images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-4">
            {images.map((img, idx) => (
              <button key={idx} onClick={() => setSelectedImage(idx)} className={`w-20 h-20 overflow-hidden border-2 ${selectedImage === idx ? 'border-[#C5A46E]' : 'border-transparent'}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="product-name font-serif text-4xl tracking-[0.08em] mb-4">{product.name}</div>
          <div className="text-2xl text-[#C5A46E] mb-4">${product.price}</div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-[#C5A46E]">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-[#A3A3A3]">{product.rating} · {product.reviews} reviews</span>
          </div>

          <p className="text-[#A3A3A3] mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[#A3A3A3]">Tone</div>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((v) => (
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
            <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[#A3A3A3]">Quantity</div>
            <div className="flex items-center gap-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-[#2A2A2A]">-</button>
              <span className="w-8 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-[#2A2A2A]">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-8">Add to Cart</button>

          {/* Accordions */}
          <div className="border-t border-[#2A2A2A]">
            {[
              { key: 'desc', label: 'Description', content: product.description },
              { key: 'materials', label: 'Materials & Care', content: `${product.material}. Avoid contact with perfumes and lotions. Store in a dry place.` },
              { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns. All pieces are hypoallergenic and nickel-free.' },
            ].map((acc) => (
              <div key={acc.key}>
                <button onClick={() => toggleAccordion(acc.key)} className="accordion-header w-full text-left">
                  <span className="tracking-[0.04em]">{acc.label}</span>
                  <span className="text-xl">{openAccordion === acc.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[#A3A3A3] ${openAccordion === acc.key ? 'open' : ''}`}>
                  {acc.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20 pt-12 border-t border-[#2A2A2A]">
        <div className="font-serif text-3xl tracking-[0.02em] mb-10 text-center">You May Also Like</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group block">
              <div className="aspect-[4/3] bg-[#1A1A1A] mb-4 overflow-hidden">
                <img src={p.image1} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="product-name font-serif text-sm tracking-[0.08em] mb-1">{p.name}</div>
              <div className="text-[#C5A46E] text-sm">${p.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;