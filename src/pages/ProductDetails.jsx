import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

// Extended Seed product data for detail view
const PRODUCTS_DB = {
  '1': { id: '1', name: 'VIVID AURA JEWELS', price: 42, category: 'earrings', desc: 'An elegant gold ear cuff featuring a delicate crystal accent that catches the light beautifully. Designed to hug the ear comfortably without piercing.', material: '18k Gold Plated Brass, Cubic Zirconia' },
  '2': { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, category: 'necklaces', desc: 'A stunning multicolor floral crystal necklace that instantly elevates any look. Features intricate detailing and a perfectly balanced chain.', material: '18k Gold Plated Brass, Mixed Crystals' },
  '3': { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, category: 'huggies', desc: 'Chunky gold dome huggie earrings that offer a bold yet refined statement. Hollowed design ensures comfortable all-day wear.', material: '18k Gold Plated Sterling Silver' },
  '4': { id: '4', name: 'AMBER LACE EARRINGS', price: 54, category: 'earrings', desc: 'Textured gold filigree drop earrings reminiscent of vintage heirlooms. Lightweight and detailed to perfection.', material: '18k Gold Plated Brass' },
  '5': { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, category: 'necklaces', desc: 'The perfect gift. A beautifully boxed earring and necklace set featuring classic, timeless design. Wear them together or individually.', material: '18k Gold Vermeil' },
  '6': { id: '6', name: 'TWISTED VINE HUGGIES', price: 45, category: 'huggies', desc: 'Delicate twisted design that adds texture to your ear stack.', material: '18k Gold Plated Sterling Silver' },
  '7': { id: '7', name: 'CELESTIAL DROP EARRINGS', price: 62, category: 'earrings', desc: 'Star-inspired drop earrings that create subtle movement and shine.', material: '18k Gold Plated Brass' },
  '8': { id: '8', name: 'LUNA PEARL CHAIN', price: 75, category: 'necklaces', desc: 'A modern take on the classic pearl necklace, featuring an irregular freshwater pearl on a delicate gold chain.', material: '18k Gold Filled, Freshwater Pearl' },
};

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedVariant, setSelectedVariant] = useState('gold');
  
  const product = PRODUCTS_DB[id] || PRODUCTS_DB['1'];

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, variant: selectedVariant }, quantity);
  };

  return (
    <div ref={containerRef} className="bg-background min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 lg:px-12 py-6 text-xs uppercase tracking-widest text-neutral-500">
        <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-neutral-900 transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900">{product.name}</span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
             <div className="aspect-[4/5] md:aspect-[3/4] bg-secondary w-full relative overflow-hidden">
                <img
                  alt={product.name}
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`[pdp-desc] [pdp-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="grid grid-cols-3 gap-4">
               {[1, 2, 3].map((thumb) => (
                 <div key={thumb} className="aspect-square bg-secondary relative overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                    <img
                      alt={`${product.name} detail ${thumb}`}
                      data-strk-img-id={`pdp-thumb-${product.id}-${thumb}`}
                      data-strk-img={`[pdp-desc] [pdp-title]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                 </div>
               ))}
             </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col lg:py-10">
            <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl mb-4 uppercase tracking-[0.1em]">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl text-neutral-900">${product.price}</span>
              <div className="flex items-center text-amber-700">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                 <span className="text-neutral-500 text-xs ml-2">(24 Reviews)</span>
              </div>
            </div>

            <p id="pdp-desc" className="text-neutral-500 text-sm leading-relaxed mb-10">
              {product.desc}
            </p>

            <div className="mb-8">
              <span className="block text-xs uppercase tracking-widest text-neutral-900 mb-3">Color: <span className="text-neutral-500">{selectedVariant === 'gold' ? '18K Gold' : 'Silver'}</span></span>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedVariant('gold')}
                  className={`w-8 h-8 rounded-full bg-[#E5C158] border-2 ring-2 ring-offset-2 ${selectedVariant === 'gold' ? 'ring-neutral-900' : 'ring-transparent border-transparent'} transition-all`}
                  aria-label="Gold"
                />
                <button 
                  onClick={() => setSelectedVariant('silver')}
                  className={`w-8 h-8 rounded-full bg-[#EAEAEA] border-2 ring-2 ring-offset-2 ${selectedVariant === 'silver' ? 'ring-neutral-900' : 'ring-transparent border-transparent'} transition-all`}
                  aria-label="Silver"
                />
              </div>
            </div>

            <div className="flex mb-10 h-14">
              <div className="flex items-center border border-neutral-300 w-32 justify-between px-4 mr-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-neutral-500 hover:text-neutral-900">
                  <Minus className="w-4 h-4" />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-neutral-500 hover:text-neutral-900">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-amber-700 hover:bg-amber-800 text-white uppercase tracking-[0.15em] text-sm font-medium transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-neutral-200">
              <div className="border-b border-neutral-200">
                <button 
                  className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase font-medium"
                  onClick={() => setActiveTab(activeTab === 'description' ? '' : 'description')}
                >
                  Description
                  {activeTab === 'description' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'description' && (
                  <div className="pb-6 text-sm text-neutral-500 leading-relaxed">
                    {product.desc} Arrives in our signature Velmora soft-touch pouch, perfect for gifting.
                  </div>
                )}
              </div>
              
              <div className="border-b border-neutral-200">
                <button 
                  className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase font-medium"
                  onClick={() => setActiveTab(activeTab === 'materials' ? '' : 'materials')}
                >
                  Materials & Care
                  {activeTab === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'materials' && (
                  <div className="pb-6 text-sm text-neutral-500 leading-relaxed">
                    <p className="mb-2"><strong>Material:</strong> {product.material}</p>
                    <p>To ensure your pieces stay bright and shiny, keep them away from harsh chemicals, perfumes, and water. Store them in a cool, dry place when not wearing.</p>
                  </div>
                )}
              </div>

              <div className="border-b border-neutral-200">
                <button 
                  className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase font-medium"
                  onClick={() => setActiveTab(activeTab === 'shipping' ? '' : 'shipping')}
                >
                  Shipping & Returns
                  {activeTab === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'shipping' && (
                  <div className="pb-6 text-sm text-neutral-500 leading-relaxed">
                    <p>Free standard shipping on all orders over $50. We accept returns within 30 days of purchase for a full refund. Earrings are non-returnable for hygiene reasons unless faulty.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="py-24 border-t border-neutral-200 mt-12 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
             {Object.values(PRODUCTS_DB).filter(p => p.id !== id).slice(0, 4).map((related) => (
               <div key={related.id} className="group relative">
                  <Link to={`/product/${related.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden mb-4">
                    <img
                      alt={related.name}
                      data-strk-img-id={`related-img-${related.id}`}
                      data-strk-img={`[related-title-${related.id}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <div className="text-center">
                    <h3 id={`related-title-${related.id}`} className="font-serif text-sm tracking-widest mb-1 truncate">{related.name}</h3>
                    <p className="text-neutral-500 text-sm">${related.price}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetails;
