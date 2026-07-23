import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B635E] mb-4">Product not found</p>
          <Link to="/shop" className="btn">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F0EBE3] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F0EBE3] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</p>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-[#C5A46E]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C5A46E" />)}
              </div>
              <span className="text-sm text-[#6B635E]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl mb-8">${product.price}</p>

            <p className="body-text text-[#6B635E] mb-8 pr-4">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] uppercase mb-3 text-[#8B7355]">Tone</p>
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
              <p className="text-xs tracking-[0.15em] uppercase mb-3 text-[#8B7355]">Quantity</p>
              <div className="flex items-center border border-[#E5DFD6] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F0EBE3]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD6]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F0EBE3]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-accent w-full mb-4">Add to Cart</button>
            <p className="text-center text-xs text-[#6B635E]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 border-t border-[#E5DFD6]">
              {[
                { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier and inspected for quality before shipping.' },
                { key: 'materials', label: 'Materials & Care', content: `Crafted from ${product.material}. Avoid contact with perfumes, lotions, and harsh chemicals. Clean gently with a soft cloth. Store in a cool, dry place.` },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
              ].map(section => (
                <div key={section.key} className="border-b border-[#E5DFD6]">
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header"
                  >
                    {section.label}
                    <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  {openAccordion === section.key && (
                    <div className="accordion-content">{section.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5DFD6]">
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-8">You May Also Like</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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