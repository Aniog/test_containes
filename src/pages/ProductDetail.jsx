import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return <div className="pt-20 p-8 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] text-[#6B635C] hover:text-[#2C2825] mb-8 mt-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.2] bg-[#F8F5F1] mb-4 overflow-hidden">
              <img src={product.images.primary} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] bg-[#F8F5F1] overflow-hidden">
                <img src={product.images.secondary} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] bg-[#F8F5F1] overflow-hidden">
                <img src={product.images.primary} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</p>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex text-[#C5A46E]">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
              </div>
              <span className="text-sm text-[#6B635C]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            <p className="text-2xl font-light mt-1 mb-8">${product.price}</p>

            <p className="text-[#6B635C] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.12em] text-[#6B635C] mb-3">TONE</div>
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
              <div className="text-xs tracking-[0.12em] text-[#6B635C] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD6] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-2.5 border-x border-[#E5DFD6]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs tracking-[0.08em] text-[#6B635C]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 space-y-px border-t border-[#E5DFD6]">
              {[
                { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier.' },
                { key: 'materials', label: 'Materials & Care', content: `${product.material}. Avoid contact with perfumes and lotions. Clean gently with a soft cloth.` },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns accepted. Items must be unworn with original packaging.' }
              ].map((section) => (
                <div key={section.key} className="border-b border-[#E5DFD6]">
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-trigger w-full flex justify-between items-center py-5 text-left text-sm tracking-[0.08em]"
                  >
                    {section.label}
                    <span className="text-lg">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B635C] leading-relaxed pb-5 ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="mb-10">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">CURATED FOR YOU</span>
            <h3 className="font-serif text-3xl tracking-[0.05em] mt-1">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[4/3.5] bg-[#F8F5F1] mb-4 overflow-hidden">
                  <img src={item.images.primary} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="product-name text-sm tracking-[0.1em] mb-1 group-hover:text-[#8B7355] transition-colors">{item.name}</p>
                <p className="text-sm text-[#6B635C]">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;