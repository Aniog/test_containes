import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(parseInt(id));
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#7A7368] mb-4">Product not found</p>
          <Link to="/shop" className="text-sm tracking-wider">Back to Shop →</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success('Added to cart');
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center text-sm tracking-wider mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} className="mr-1" /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F8F5F1] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F8F5F1] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <p className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#C5A46E] text-[#C5A46E]" />
                ))}
              </div>
              <span className="text-sm text-[#7A7368]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-[#7A7368] leading-relaxed mb-8">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#7A7368] mb-3">TONE</p>
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
              <p className="text-xs tracking-[0.15em] text-[#7A7368] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#7A7368]">Ships within 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              <div>
                <button onClick={() => toggleAccordion('description')} className="accordion-header w-full">
                  <span>Description</span>
                  <span className="text-xl">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <p className="text-[#7A7368] leading-relaxed">{product.details}</p>
                </div>
              </div>
              <div>
                <button onClick={() => toggleAccordion('materials')} className="accordion-header w-full">
                  <span>Materials & Care</span>
                  <span className="text-xl">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <p className="text-[#7A7368] leading-relaxed">{product.care}</p>
                </div>
              </div>
              <div>
                <button onClick={() => toggleAccordion('shipping')} className="accordion-header w-full">
                  <span>Shipping & Returns</span>
                  <span className="text-xl">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <p className="text-[#7A7368] leading-relaxed">{product.shipping}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[#7A7368] mb-8">YOU MAY ALSO LIKE</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
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