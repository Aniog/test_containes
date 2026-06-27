import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase mb-8 hover:text-[#B8976F]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F8F5F1] mb-4 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, i) => (
                <div key={i} className="aspect-square bg-[#F8F5F1] overflow-hidden cursor-pointer border border-[#E5DFD3]">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <p className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#B8976F]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="body-text text-[#6B665F] mb-8 max-w-md">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="uppercase tracking-[0.1em] text-xs mb-3">Finish</div>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
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
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier and comes with a lifetime guarantee against manufacturing defects.' },
                { key: 'materials', label: 'Materials & Care', content: '18K gold plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not in use.' },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.' },
              ].map(section => (
                <div key={section.key}>
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === section.key ? 'open' : ''}`}>
                    <p className="body-text text-[#6B665F] text-sm pr-8">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-12 border-t border-[#E5DFD3]">
          <p className="uppercase tracking-[0.2em] text-xs text-[#6B665F] mb-8">You May Also Like</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square bg-[#F8F5F1] mb-4 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</p>
                <p className="text-sm text-[#6B665F]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;