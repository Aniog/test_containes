import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B665F]">Product not found.</p>
          <Link to="/shop" className="text-sm tracking-[0.08em] mt-4 inline-block underline">Back to Shop</Link>
        </div>
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
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-1 text-xs tracking-[0.1em] text-[#6B665F] hover:text-[#2C2823] mb-8">
          <ChevronLeft size={14} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F1EA] mb-3 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#F5F1EA] overflow-hidden cursor-pointer border border-transparent hover:border-[#E5DFD3]">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">
              {product.name}
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-light">${product.price}</span>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-[#B8976E] text-[#B8976E]" : "text-[#E5DFD3]"} />
                  ))}
                </div>
                <span className="text-[#6B665F] ml-1">({product.reviews})</span>
              </div>
            </div>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="uppercase tracking-[0.1em] text-xs mb-3 text-[#6B665F]">Tone</div>
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
              <div className="uppercase tracking-[0.1em] text-xs mb-3 text-[#6B665F]">Quantity</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F5F1EA]">-</button>
                <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F5F1EA]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-gold w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#A39B8F] tracking-[0.05em]">Ships in 1–2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { key: 'desc', label: 'Description', content: 'Each piece is hand-finished in our studio using traditional techniques. Our demi-fine collection features 18K gold plating over a hypoallergenic base, designed for everyday wear.' },
                { key: 'care', label: 'Materials & Care', content: '18K gold plated brass with crystal accents. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch. Wipe gently with a soft cloth.' },
                { key: 'ship', label: 'Shipping & Returns', content: 'Complimentary worldwide shipping. Returns accepted within 30 days. Items must be unworn with original packaging. Contact us for any questions.' },
              ].map(section => (
                <div key={section.key}>
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B665F] ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="flex items-end justify-between mb-8">
              <h3 className="heading-serif text-2xl">You May Also Like</h3>
              <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-[#B8976E]">View All →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(p => (
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
