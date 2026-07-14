import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="btn btn-outline mt-4">Back to Shop</Link>
      </div>
    );
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#B8976F]">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[#F5F2ED] mb-4 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, i) => (
              <div key={i} className="aspect-square bg-[#F5F2ED] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4">
          <h1 className="product-name serif text-3xl tracking-[0.1em] mb-2">{product.name}</h1>
          <p className="text-2xl mb-4">${product.price}</p>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#B8976F] text-[#B8976F]" />
              ))}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="text-[#6B665F] mb-8 leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">FINISH</p>
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
            <p className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">QUANTITY</p>
            <div className="flex items-center border border-[#E5E0D8] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F5F2ED]">-</button>
              <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F5F2ED]">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn btn-gold w-full mb-8">
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="border-t border-[#E5E0D8]">
            {[
              { id: 'desc', label: 'Description', content: product.details },
              { id: 'care', label: 'Materials & Care', content: '18K gold plated brass. To maintain luster, avoid contact with water, perfume, and lotions. Store in a cool, dry place.' },
              { id: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns accepted. Items must be unworn with original packaging.' },
            ].map((section) => (
              <div key={section.id} className="border-b border-[#E5E0D8]">
                <button 
                  onClick={() => toggleAccordion(section.id)}
                  className="accordion-header w-full text-left"
                >
                  {section.label}
                  <span className="text-xl">{openAccordion === section.id ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-[#6B665F] ${openAccordion === section.id ? 'open' : ''}`}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-20 pt-12 border-t border-[#E5E0D8]">
        <h3 className="serif text-2xl tracking-[0.05em] mb-8 text-center">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[4/3] bg-[#F5F2ED] mb-4 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</p>
              <p className="text-sm text-[#6B665F]">${p.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;