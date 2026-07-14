import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#8B7355] underline">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase mb-8 hover:text-[#8B7355]">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3.5] bg-[#F8F5F1] mb-4 overflow-hidden">
            <img src={product.image1} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-[#F8F5F1] overflow-hidden">
              <img src={product.image2} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#F8F5F1] overflow-hidden">
              <img src={product.image1} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <p className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</p>
          <p className="text-2xl mb-4">${product.price}</p>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="#C5A46E" color="#C5A46E" />
              ))}
            </div>
            <span className="text-sm text-[#6B635C]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="text-[#6B635C] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.15em] uppercase mb-3">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((variant) => (
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
            <p className="text-xs tracking-[0.15em] uppercase mb-3">Quantity</p>
            <div className="flex items-center border border-[#E5DFD6] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
              <span className="px-6 py-2 border-x border-[#E5DFD6]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B635C]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD6]">
            {[
              { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier.' },
              { key: 'materials', label: 'Materials & Care', content: `Material: ${product.material}. Avoid contact with perfumes and lotions. Clean gently with a soft cloth.` },
              { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns accepted. Items must be unworn with original packaging.' },
            ].map((section) => (
              <div key={section.key}>
                <button
                  onClick={() => toggleAccordion(section.key)}
                  className="accordion-header w-full text-left"
                >
                  {section.label}
                  <span className="text-xl leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                </button>
                {openAccordion === section.key && (
                  <div className="accordion-content">{section.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-20 pt-12 border-t border-[#E5DFD6]">
        <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-6">You May Also Like</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link key={related.id} to={`/product/${related.id}`} className="group">
              <div className="aspect-[4/3.5] bg-[#F8F5F1] mb-3 overflow-hidden">
                <img src={related.image1} alt={related.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <p className="product-name text-sm tracking-[0.1em] mb-0.5">{related.name}</p>
              <p className="text-sm text-[#6B635C]">${related.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;