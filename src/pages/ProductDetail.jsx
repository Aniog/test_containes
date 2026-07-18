import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/product/ProductCard';

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
      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#C5A46E]">Return to shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] uppercase mb-8 hover:text-[#C5A46E]">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3.5] bg-[#E5E0D8] mb-4 overflow-hidden">
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
                className={`w-20 h-20 bg-[#E5E0D8] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#1C1C1C]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <div className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="text-2xl">${product.price}</div>
            <div className="flex items-center gap-1 text-sm">
              <div className="stars flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-[#8B7E6B] ml-1">({product.reviewCount})</span>
            </div>
          </div>

          <p className="text-[#8B7E6B] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase mb-3">Finish</div>
            <div className="flex gap-3">
              {product.variants.map(variant => (
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
            <div className="text-xs tracking-[0.1em] uppercase mb-3">Quantity</div>
            <div className="flex items-center border border-[#E5E0D8] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F4F1EB]">-</button>
              <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F4F1EB]">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button variant="primary" className="w-full mb-4" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <p className="text-center text-xs text-[#8B7E6B]">Ships within 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5E0D8]">
            <div>
              <div className="accordion-header" onClick={() => toggleAccordion('description')}>
                <span>Description</span>
                <span>{openAccordion === 'description' ? '−' : '+'}</span>
              </div>
              <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                <p className="text-[#8B7E6B] leading-relaxed">{product.details}</p>
              </div>
            </div>
            <div>
              <div className="accordion-header" onClick={() => toggleAccordion('materials')}>
                <span>Materials & Care</span>
                <span>{openAccordion === 'materials' ? '−' : '+'}</span>
              </div>
              <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                <p className="text-[#8B7E6B] leading-relaxed">{product.care}</p>
              </div>
            </div>
            <div>
              <div className="accordion-header" onClick={() => toggleAccordion('shipping')}>
                <span>Shipping & Returns</span>
                <span>{openAccordion === 'shipping' ? '−' : '+'}</span>
              </div>
              <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                <p className="text-[#8B7E6B] leading-relaxed">
                  Free worldwide shipping on orders over $75. All orders ship within 1-2 business days. 
                  Returns accepted within 30 days of delivery. Items must be unworn with original packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20 pt-16 border-t border-[#E5E0D8]">
        <div className="mb-10">
          <div className="text-xs tracking-[0.15em] uppercase text-[#8B7E6B] mb-2">Curated For You</div>
          <h3 className="serif text-3xl">You May Also Like</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;