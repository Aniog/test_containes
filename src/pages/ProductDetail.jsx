import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) return <div className="p-10">Product not found</div>;

  const images = [product.images.primary, product.images.secondary];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F0EDE6] overflow-hidden mb-3">
              <img src={images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button key={idx} onClick={() => setSelectedImage(idx)} className={`w-20 h-20 overflow-hidden border-2 ${selectedImage === idx ? 'border-[#B89778]' : 'border-transparent'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="pt-2">
            <p className="product-name text-3xl mb-2 tracking-[0.12em]">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
              <span className="text-sm text-[#6B665E]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-[#6B665E] mb-8 leading-relaxed">{product.description}</p>

            {/* Variants */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-[#6B665E] mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button key={v} onClick={() => setSelectedVariant(v)} className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}>
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase text-[#6B665E] mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-[#E5E0D8]">-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-[#E5E0D8]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">Add to Cart</button>
            <p className="text-center text-xs text-[#6B665E]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier.' },
                { key: 'care', label: 'Materials & Care', content: `${product.material}. Avoid contact with perfumes and lotions. Store in a dry place.` },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping. 30-day returns. All orders include complimentary gift packaging.' }
              ].map(acc => (
                <div key={acc.key}>
                  <button onClick={() => toggleAccordion(acc.key)} className="accordion-header w-full text-left">
                    {acc.label}
                    <span>{openAccordion === acc.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B665E] text-sm ${openAccordion === acc.key ? 'open' : ''}`}>
                    {acc.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <p className="text-xs tracking-[0.15em] uppercase text-[#6B665E] mb-6">You May Also Like</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-[#F0EDE6] mb-3"><img src={p.images.primary} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <p className="product-name text-sm">{p.name}</p>
                <p className="text-sm text-[#6B665E]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
