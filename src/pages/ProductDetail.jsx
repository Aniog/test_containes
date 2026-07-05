import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variant[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p>Product not found</p>
          <Link to="/shop" className="text-[#B8976E] underline">Back to Shop</Link>
        </div>
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
    <div className="min-h-screen pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#B8976E]">
          <ChevronLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#F5F2ED] mb-4 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.imageAlt, product.image, product.imageAlt].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#F5F2ED] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-[#B8976E] text-[#B8976E]" : "text-[#E5DFD6]"} />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">{product.rating} · {product.reviewCount} reviews</span>
            </div>

            <p className="body-text text-[#6B6560] mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-3">TONE</p>
              <div className="flex gap-3">
                {product.variant.map((v) => (
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
              <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5DFD6] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F5F2ED]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD6]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F5F2ED]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B6560]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD6]">
              {[
                { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier, ensuring the highest standards of quality and craftsmanship.' },
                { key: 'materials', label: 'Materials & Care', content: 'Crafted from ' + product.material + '. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Clean gently with a soft cloth.' },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === section.key ? 'open' : ''}`}>
                    <p className="body-text text-[#6B6560] pr-4">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-6 text-center">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3.5] bg-[#F5F2ED] overflow-hidden mb-4">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</p>
                <p className="text-sm text-[#6B6560]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;