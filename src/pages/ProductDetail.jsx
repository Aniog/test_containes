import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return <div className="max-w-7xl mx-auto px-6 py-20 text-center">Product not found</div>;
  }

  const images = product.images[selectedVariant];
  const imageArray = [images.primary, images.secondary];

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center text-sm tracking-wide mb-8 hover:text-[#c5a26f]">
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
            <img 
              src={imageArray[activeImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button 
              onClick={() => setActiveImageIndex(activeImageIndex === 0 ? 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-3">
            {imageArray.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-20 h-20 bg-gray-100 overflow-hidden border-2 ${activeImageIndex === idx ? 'border-[#1a1816]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <h1 className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#c5a26f] text-[#c5a26f]' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-sm text-[#6b665f]">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <p className="text-2xl mb-8">${product.price}</p>

          <p className="text-[#6b665f] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.1em] uppercase text-[#6b665f] mb-3">Tone</p>
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
            <p className="text-xs tracking-[0.1em] uppercase text-[#6b665f] mb-3">Quantity</p>
            <div className="flex items-center border w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-gray-50">-</button>
              <span className="px-6 py-3 border-x">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-gray-50">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6b665f]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y">
            {[
              { key: 'description', label: 'Description', content: product.details },
              { key: 'care', label: 'Materials & Care', content: product.care },
              { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' }
            ].map(section => (
              <div key={section.key}>
                <button 
                  onClick={() => toggleAccordion(section.key)}
                  className="accordion-trigger"
                >
                  {section.label}
                  <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                </button>
                {openAccordion === section.key && (
                  <div className="pb-6 text-[#6b665f] text-sm leading-relaxed">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-20 pt-16 border-t">
        <h3 className="serif text-2xl mb-8 text-center">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;