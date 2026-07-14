import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { toast } from 'sonner';

const ProductPage = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [product.images.primary, product.images.secondary];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant);
    toast.success(`${product.name} added to cart`);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] text-[#6B6B6B] hover:text-[#C5A26F] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F0EBE3] mb-3 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F0EBE3] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#C5A26F]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-4xl tracking-[0.12em] mb-3 pr-8">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#C5A26F] text-[#C5A26F]" />
                ))}
              </div>
              <span className="text-sm text-[#6B6B6B]">{product.rating} · {product.reviews} reviews</span>
            </div>

            <div className="text-2xl font-light tracking-tight mb-8">${product.price}</div>

            <p className="text-[#4A4A4A] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="uppercase tracking-[0.15em] text-xs mb-3 text-[#C5A26F]">Finish</div>
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
              <div className="uppercase tracking-[0.15em] text-xs mb-3 text-[#C5A26F]">Quantity</div>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F8F5F0]">-</button>
                <span className="px-6 py-3 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F8F5F0]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <div className="text-center text-xs tracking-[0.1em] text-[#6B6B6B]">Ships in 1–2 business days</div>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E8E4DC]">
              {[
                { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our New York studio.' },
                { key: 'care', label: 'Materials & Care', content: `Material: ${product.material}. Avoid contact with perfumes and lotions. Clean gently with a soft cloth. Store in the provided pouch.` },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns for unworn items in original packaging.' },
              ].map(item => (
                <div key={item.key}>
                  <button 
                    onClick={() => toggleAccordion(item.key)}
                    className="accordion-header w-full text-left"
                  >
                    {item.label}
                    <span className="text-xl leading-none">{openAccordion === item.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#4A4A4A] leading-relaxed ${openAccordion === item.key ? 'open' : ''}`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="uppercase tracking-[0.2em] text-xs text-[#C5A26F] mb-6">You May Also Like</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square bg-[#F0EBE3] mb-4 overflow-hidden">
                  <img src={p.images.primary} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="product-name text-sm tracking-[0.08em] mb-1">{p.name}</div>
                <div className="text-sm text-[#6B6B6B]">${p.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;