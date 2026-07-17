import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import ProductCard from '../components/product/ProductCard';

const dummyConfig = {};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const containerRef = useRef(null);
  
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeTone, setActiveTone] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');
  
  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    setActiveTone('gold');
    setOpenAccordion('description');
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    try {
      ImageHelper.loadImages(dummyConfig, containerRef.current);
    } catch (e) {
      console.log('ImageHelper setup pending');
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center pt-20">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/collections/all" className="underline underline-offset-4 uppercase tracking-widest text-sm">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, activeTone);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  // If not enough related in same category, just pad with others
  if (relatedProducts.length < 4) {
    const others = products.filter(p => p.id !== product.id && p.category !== product.category);
    relatedProducts.push(...others.slice(0, 4 - relatedProducts.length));
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? '' : section);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collections/all" className="hover:text-foreground">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
          
          {/* Gallery (Simplified for dummy data) */}
          <div className="grid grid-cols-2 gap-4 h-fit">
             <div className="col-span-2 aspect-[4/5] bg-brand-50 relative overflow-hidden">
                <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  data-strk-img-id={product.detailMainImgId}
                  data-strk-img={`[pd-title] editorial product shot macro high quality`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
             <div className="col-span-1 aspect-square bg-brand-50 relative overflow-hidden">
                <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  data-strk-img-id={product.detailSub1ImgId}
                  data-strk-img={`[pd-title] model wearing jewelry lifestyle`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  alt={`${product.name} detail`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
             <div className="col-span-1 aspect-square bg-brand-50 relative overflow-hidden">
                <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  data-strk-img-id={product.detailSub2ImgId}
                  data-strk-img={`[pd-title] minimalist packaging flatlay`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  alt={`${product.name} lifestyle`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 id="pd-title" className="font-serif text-3xl lg:text-4xl uppercase tracking-widest mb-4 text-brand-950">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-6">
               <div className="flex text-brand-400 mr-3 text-sm">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <span className="text-sm text-muted-foreground underline underline-offset-4 cursor-pointer">
                  (24 Reviews)
                </span>
            </div>

            <p className="text-xl font-medium mb-8">${product.price}</p>

            {/* Tone Selector */}
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-widest font-medium mb-3">
                Tone: {activeTone}
              </span>
              <div className="flex space-x-3">
                <button 
                  className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all ${activeTone === 'gold' ? 'ring-1 ring-offset-2 ring-brand-950' : 'hover:border-gray-400'}`}
                  onClick={() => setActiveTone('gold')}
                  aria-label="Select Gold Tone"
                >
                  <span className="w-8 h-8 rounded-full bg-[#E5C158] block"></span>
                </button>
                <button 
                  className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all ${activeTone === 'silver' ? 'ring-1 ring-offset-2 ring-brand-950' : 'hover:border-gray-400'}`}
                  onClick={() => setActiveTone('silver')}
                  aria-label="Select Silver Tone"
                >
                  <span className="w-8 h-8 rounded-full bg-[#E6E8FA] block"></span>
                </button>
              </div>
            </div>

            {/* Add to Cart Line */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-brand-950 h-14 sm:w-32">
                <button 
                  className="flex-1 flex justify-center text-brand-950 hover:bg-brand-50 transition-colors h-full items-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center font-medium tabular-nums">{quantity}</span>
                <button 
                  className="flex-1 flex justify-center text-brand-950 hover:bg-brand-50 transition-colors h-full items-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-950 text-white h-14 uppercase tracking-widest text-sm font-medium hover:bg-brand-800 transition-colors w-full"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
              {/* Description */}
              <div className="border-b border-border">
                <button 
                  className="w-full py-5 flex justify-between items-center text-left uppercase tracking-widest text-sm font-medium"
                  onClick={() => toggleAccordion('description')}
                >
                  Description
                  {openAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'description' ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    {product.description}
                  </p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>

               {/* Materials & Care */}
               <div className="border-b border-border">
                <button 
                  className="w-full py-5 flex justify-between items-center text-left uppercase tracking-widest text-sm font-medium"
                  onClick={() => toggleAccordion('materials')}
                >
                  Materials & Care
                  {openAccordion === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'materials' ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Our jewelry is crafted from high-quality brass and plated with a thick layer of 18K gold. To maintain its shine, avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch when not in use.
                  </p>
                </div>
              </div>

               {/* Shipping & Returns */}
               <div className="border-b border-border">
                <button 
                  className="w-full py-5 flex justify-between items-center text-left uppercase tracking-widest text-sm font-medium"
                  onClick={() => toggleAccordion('shipping')}
                >
                  Shipping & Returns
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'shipping' ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Enjoy free worldwide shipping on orders over $100. Unworn items in their original packaging can be returned within 30 days of delivery.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* You May Also Like */}
        <div className="pt-16 border-t border-border">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-serif text-3xl mb-4 text-center">You May Also Like</h2>
            <div className="w-16 h-px bg-brand-400"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
