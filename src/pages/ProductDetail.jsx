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

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
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
    <div className="pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#B8976F]">
          <ChevronLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F1EA] mb-4 overflow-hidden">
              <img src={product.images.primary} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-[#F5F1EA] overflow-hidden">
                <img src={product.images.secondary} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-[#F5F1EA] overflow-hidden">
                <img src={product.images.primary} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-[#B8976F] text-[#B8976F]" : "text-[#E5DFD4]"} />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-[#6B665F] mb-8 leading-relaxed">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] uppercase mb-3 text-[#6B665F]">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
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
              <p className="text-xs tracking-[0.15em] uppercase mb-3 text-[#6B665F]">Quantity</p>
              <div className="flex items-center border border-[#E5DFD4] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F5F1EA]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD4]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F5F1EA]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-gold w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B665F]">Free shipping • 30-day returns</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD4]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: product.care },
                { key: 'ship', label: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
              ].map(item => (
                <div key={item.key}>
                  <button 
                    onClick={() => toggleAccordion(item.key)}
                    className="accordion-trigger w-full text-left"
                  >
                    {item.label}
                    <span className="text-xl">{openAccordion === item.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === item.key ? 'open' : ''}`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-[#E5DFD4]">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-8">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square bg-[#F5F1EA] mb-4 overflow-hidden">
                  <img src={p.images.primary} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="product-name text-sm tracking-[0.1em]">{p.name}</p>
                <p className="text-sm text-[#6B665F]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;