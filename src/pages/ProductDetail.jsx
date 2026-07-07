import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 text-center py-20">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#8b7355] underline">Back to shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success('Added to cart', { description: product.name });
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-1 text-xs tracking-[0.08em] text-[#6b635e] hover:text-[#2c2522] mb-8">
          <ChevronLeft size={14} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#f0ede6] mb-3 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, i) => (
                <div key={i} className="aspect-square bg-[#f0ede6] overflow-hidden cursor-pointer border border-transparent hover:border-[#8b7355]">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-2">
              <div className="flex text-[#c5a46e]">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
              </div>
              <span className="text-sm text-[#6b635e]">{product.rating} · {product.reviews} reviews</span>
            </div>

            <div className="text-2xl font-medium mt-4 mb-8">${product.price}</div>

            <p className="text-[#6b635e] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.12em] uppercase mb-3 text-[#8a8178]">Finish</div>
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
              <div className="text-xs tracking-[0.12em] uppercase mb-3 text-[#8a8178]">Quantity</div>
              <div className="inline-flex border border-[#e5e0d8]">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#f8f5f1]">-</button>
                <span className="px-6 py-2 border-x border-[#e5e0d8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#f8f5f1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#8a8178] tracking-wide">Ships in 1–2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#e5e0d8]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: '18K gold plated brass. Wipe gently with a soft cloth. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place.' },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns accepted. Items must be unworn with original packaging.' },
              ].map(section => (
                <div key={section.key}>
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6b635e] leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <div className="mb-8">
              <span className="text-xs tracking-[0.15em] uppercase text-[#8a8178]">Complete the Look</span>
              <h3 className="serif text-3xl mt-1">You May Also Like</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedProducts.map(p => (
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
