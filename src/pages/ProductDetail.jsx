import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ products, addToCart, selectedVariant, setSelectedVariant }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return <div className="pt-20 text-center">Product not found</div>;
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-widest mb-8 hover:text-[#B8976F]">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F2ED] mb-4 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
          <div className="lg:pt-4">
            <h1 className="product-name text-4xl tracking-[0.15em] mb-2">{product.name}</h1>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="stars flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className={i < Math.floor(product.rating) ? '' : 'opacity-30'} />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-[#6B6560] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-3">TONE</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill capitalize ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F5F2ED]">-</button>
                <span className="px-6 py-3 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F5F2ED]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart — ${product.price * quantity}
            </button>
            <p className="text-center text-xs text-[#6B6560]">Free shipping • 30-day returns</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { title: 'Description', content: product.description + ' Each piece is hand-finished in our atelier.' },
                { title: 'Materials & Care', content: `Material: ${product.material}. Avoid contact with perfumes, lotions, and harsh chemicals. Clean gently with a soft cloth.` },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
              ].map((section, i) => (
                <div key={i}>
                  <button 
                    onClick={() => toggleAccordion(i)}
                    className="accordion-header w-full text-left"
                  >
                    {section.title}
                    <span className="text-xl">{openAccordion === i ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B6560] text-sm ${openAccordion === i ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-8">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;