import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#7A7368] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] text-[#7A7368] hover:text-[#2C2823] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F0EBE3] mb-4 overflow-hidden">
              <img
                src={product.images[selectedVariant]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-[#F0EBE3] overflow-hidden cursor-pointer border-2 border-[#8B7355]">
                <img src={product.images.gold} alt="Gold" className="w-full h-full object-cover" />
              </div>
              <div 
                className="aspect-square bg-[#F0EBE3] overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#E5DFD3]"
                onClick={() => setSelectedVariant('silver')}
              >
                <img src={product.images.silver} alt="Silver" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.15em] mb-3 pr-4">
              {product.name}
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#C5A46E" color="#C5A46E" />
                ))}
              </div>
              <span className="text-sm text-[#7A7368]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="text-2xl font-light mb-8">${product.price}</div>

            <p className="text-[#7A7368] leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] uppercase text-[#7A7368] mb-3">Tone</div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedVariant('gold')}
                  className={`variant-pill ${selectedVariant === 'gold' ? 'active' : ''}`}
                >
                  Gold
                </button>
                <button
                  onClick={() => setSelectedVariant('silver')}
                  className={`variant-pill ${selectedVariant === 'silver' ? 'active' : ''}`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] uppercase text-[#7A7368] mb-3">Quantity</div>
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
            <p className="text-center text-xs text-[#7A7368]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { key: 'desc', label: 'Description', content: product.description },
                { key: 'care', label: 'Materials & Care', content: `${product.material}. Avoid harsh chemicals. Store in a dry place. Clean gently with a soft cloth.` },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns. All pieces are hypoallergenic and nickel-free.' },
              ].map((section) => (
                <div key={section.key}>
                  <div 
                    className="accordion-header" 
                    onClick={() => toggleAccordion(section.key)}
                  >
                    <span>{section.label}</span>
                    <span className="text-xl leading-none">{activeAccordion === section.key ? '−' : '+'}</span>
                  </div>
                  {activeAccordion === section.key && (
                    <div className="accordion-content text-sm">{section.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24 pt-16 border-t border-[#E5DFD3]">
          <h3 className="heading-serif text-3xl mb-10 text-center">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
