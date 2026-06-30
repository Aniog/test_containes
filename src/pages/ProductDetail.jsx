import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div>Product not found</div>
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
        <div className="py-6 text-xs tracking-[0.1em] text-[#6B665E]">
          <Link to="/shop" className="hover:text-[#8B7355]">Shop</Link> / {product.category} / {product.name}
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F1EDE6] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F1EDE6] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</div>
            <div className="flex items-center gap-3 mb-6">
              <div className="stars">★★★★★</div>
              <span className="text-sm text-[#6B665E]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            
            <div className="text-2xl font-medium mb-8">${product.price}</div>

            <p className="text-[#6B665E] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] uppercase mb-3 text-[#6B665E]">Tone</div>
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
              <div className="text-xs tracking-[0.15em] uppercase mb-3 text-[#6B665E]">Quantity</div>
              <div className="inline-flex border border-[#E5DFD4]">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD4]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4 text-base py-4"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B665E]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD4]">
              {[
                { key: 'desc', label: 'Description', content: product.description },
                { key: 'materials', label: 'Materials & Care', content: product.details },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns. All pieces are hypoallergenic and tarnish-resistant.' },
              ].map((section) => (
                <div key={section.key}>
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B665E] text-sm leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-6">DISCOVER MORE</div>
          <h3 className="font-serif text-3xl tracking-[0.05em] mb-10">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;