import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shared/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  
  const containerRef = useRef(null);

  useEffect(() => {
    // Reset state on detail view change
    setQuantity(1);
    setVariant('Gold');
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      // Need frame to let DOM update completely before scanning
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen">
        <h2 className="text-2xl font-serif mb-4 text-stone-900">Product not found.</h2>
        <Link to="/shop" className="underline underline-offset-4 uppercase tracking-widest text-sm text-stone-600 hover:text-stone-900">
          Return to Shop
        </Link>
      </div>
    );
  }

  // Get related products in same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough in category, just grab some others
  if (relatedProducts.length < 4) {
    const extra = products.filter(p => !relatedProducts.includes(p) && p.id !== product.id);
    relatedProducts.push(...extra.slice(0, 4 - relatedProducts.length));
  }

  const handleAdd = () => {
    addToCart(product, quantity, variant);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="pt-24 pb-24 bg-stone-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-stone-500 uppercase tracking-wider">
          <Link to="/" className="hover:text-stone-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-stone-900">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-900 font-medium">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="bg-stone-100 aspect-[3/4] relative">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`pd-main-${product.id}`}
                data-strk-img={`[pd-title-${product.id}] jewelry detailed`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-100 aspect-square relative">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} alternate view`}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`pd-alt-${product.id}`}
                  data-strk-img={`[pd-title-${product.id}] model wearing jewelry`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                />
              </div>
              <div className="bg-stone-100 aspect-square relative flex items-center justify-center text-stone-400">
                <span>View Details</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 id={`pd-title-${product.id}`} className="text-3xl lg:text-4xl font-serif text-stone-900 uppercase tracking-wide">
              {product.name}
            </h1>
            
            <div className="mt-4 flex items-center justify-between border-b border-stone-200 pb-6">
              <p className="text-2xl font-medium text-stone-900">${product.price}</p>
              <div className="flex items-center space-x-2">
                <div className="flex text-stone-800">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-stone-500 underline underline-offset-4">{product.reviews} Reviews</span>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              
              {/* Finish Selector */}
              <div>
                <p className="text-sm uppercase tracking-widest text-stone-900 font-medium mb-3">Metal: {variant}</p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setVariant('Gold')}
                    className={`h-10 w-24 rounded-sm border ${variant === 'Gold' ? 'border-stone-900 border-2' : 'border-stone-300'} flex items-center justify-center cursor-pointer`}
                  >
                    <div className="w-6 h-6 rounded-full bg-yellow-500/80 mr-2" />
                    <span className="text-sm">Gold</span>
                  </button>
                  <button 
                    onClick={() => setVariant('Silver')}
                    className={`h-10 w-24 rounded-sm border ${variant === 'Silver' ? 'border-stone-900 border-2' : 'border-stone-300'} flex items-center justify-center cursor-pointer`}
                  >
                    <div className="w-6 h-6 rounded-full bg-stone-300 mr-2" />
                    <span className="text-sm">Silver</span>
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="text-sm uppercase tracking-widest text-stone-900 font-medium mb-3">Quantity</p>
                <div className="flex items-center border border-stone-300 rounded-sm w-32">
                  <button 
                    className="flex-1 py-3 flex justify-center text-stone-500 hover:text-stone-900 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex-1 text-center font-medium">{quantity}</span>
                  <button 
                    className="flex-1 py-3 flex justify-center text-stone-500 hover:text-stone-900 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button 
                onClick={handleAdd}
                className="w-full bg-stone-900 text-stone-50 py-4 uppercase tracking-widest text-sm font-medium hover:bg-stone-800 transition-colors rounded-sm shadow-sm mt-4"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Extra Info */}
              <div className="bg-stone-100 p-4 text-sm text-stone-600 flex justify-center space-x-6 uppercase tracking-wider rounded-sm mt-4">
                <span>Free Shipping</span>
                <span>Returns up to 30 Days</span>
              </div>

              {/* Accordions */}
              <div className="border-t border-stone-200 mt-8 pt-4">
                
                <div className="border-b border-stone-200">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-stone-900 font-medium uppercase tracking-wider text-sm transition-colors hover:text-stone-600"
                    onClick={() => toggleAccordion('description')}
                  >
                    <span>Description</span>
                    {activeAccordion === 'description' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeAccordion === 'description' && (
                    <div className="pb-6 text-stone-600 text-sm leading-relaxed overflow-hidden">
                      <p className="mb-4">{product.description}</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {product.features.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="border-b border-stone-200">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-stone-900 font-medium uppercase tracking-wider text-sm transition-colors hover:text-stone-600"
                    onClick={() => toggleAccordion('materials')}
                  >
                    <span>Materials & Care</span>
                    {activeAccordion === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeAccordion === 'materials' && (
                    <div className="pb-6 text-stone-600 text-sm leading-relaxed">
                      <p className="mb-2"><strong>Base Material:</strong> 925 Sterling Silver.</p>
                      <p className="mb-2"><strong>Plating:</strong> Thick 18k Gold Plating (Vermeil).</p>
                      <p>To preserve the brilliance of your piece, avoid contact with perfumes, lotions, and harsh chemicals. Remove before swimming or showering. Store in the provided velvet pouch.</p>
                    </div>
                  )}
                </div>

                <div className="border-b border-stone-200">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-stone-900 font-medium uppercase tracking-wider text-sm transition-colors hover:text-stone-600"
                    onClick={() => toggleAccordion('shipping')}
                  >
                    <span>Shipping & Returns</span>
                    {activeAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeAccordion === 'shipping' && (
                    <div className="pb-6 text-stone-600 text-sm leading-relaxed">
                      <p className="mb-2">We offer complimentary standard shipping on all orders worldwide.</p>
                      <p className="mb-2">Express shipping is available at checkout.</p>
                      <p>If you're not completely satisfied with your purchase, you may return it within 30 days of receipt for a full refund or exchange. Custom engraved items are final sale.</p>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <h2 className="text-2xl font-serif text-stone-900 tracking-wide mb-10 text-center uppercase">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map(rp => (
              <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
