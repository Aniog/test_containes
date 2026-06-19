import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [activeImage, setActiveImage] = useState(0);
  
  const [openAccordions, setOpenAccordions] = useState({
    description: true,
    materials: false,
    shipping: false
  });

  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    setVariant('gold');
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-sm font-medium tracking-widest uppercase border-b border-brand-charcoal pb-1 transition-colors hover:text-brand-gold hover:border-brand-gold">
          Return to Shop
        </Link>
      </div>
    );
  }

  const toggleAccordion = (name) => {
    setOpenAccordions(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  // Get related products (different from current, same category if possible, limited to 4)
  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .sort((a, b) => (a.category === product.category ? -1 : 1))
    .slice(0, 4);

  // Generate an array of image queries for the gallery
  // Since we only have `images` array with dummy SVGs, let's create dynamic queries
  const galleryQueries = [
    product.strkImgQuery,
    `[product-title-${product.id}] alternate angle jewelry`,
    `[product-title-${product.id}] lifestyle worn jewelry model`
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-white">
      <div className="container px-4">
        
        {/* Breadcrumb */}
        <div className="flex text-xs uppercase tracking-widest text-brand-charcoal/50 mb-8 pt-4">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-brand-charcoal transition-colors">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0 hide-scrollbar">
              {galleryQueries.map((query, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[4/5] w-20 md:w-full overflow-hidden border ${activeImage === idx ? 'border-brand-charcoal' : 'border-black/5 opacity-70'} transition-all`}
                >
                  <img 
                    src={product.images[0]} 
                    data-strk-img-id={`${product.strkImgId}-thumb-${idx}`}
                    data-strk-img={query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-brand-sand aspect-[4/5] relative">
              <img 
                src={product.images[0]} 
                data-strk-img-id={`${product.strkImgId}-main-${activeImage}`}
                data-strk-img={galleryQueries[activeImage]}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500"
                key={activeImage} // Force re-render of img tag when activeImage changes
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col pt-2 lg:pt-10">
            <h1 id={`product-title-${product.id}`} className="text-3xl md:text-4xl lg:text-5xl font-serif uppercase tracking-widest mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="text-xl md:text-2xl font-sans mb-6">
              ${product.price.toFixed(2)}
            </div>

            <div className="flex items-center space-x-1 mb-8">
              {[1,2,3,4,5].map((s) => (
                <Star 
                  key={s} 
                  size={14} 
                  className={s <= Math.floor(product.rating) ? 'text-brand-gold fill-current' : 'text-brand-charcoal/20'} 
                />
              ))}
              <span className="text-xs tracking-widest text-brand-charcoal/50 ml-2">({product.reviews} REVIEWS)</span>
            </div>

            <p className="text-brand-charcoal/80 mb-10 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-widest font-medium mb-3">Tone: <span className="font-normal text-brand-charcoal/60 capitalize ml-1">{variant}</span></span>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setVariant('gold')}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${variant === 'gold' ? 'border-brand-charcoal p-1' : 'border-transparent'}`}
                >
                  <span className="w-full h-full rounded-full bg-[#E5C158] block border border-black/10"></span>
                </button>
                <button 
                  onClick={() => setVariant('silver')}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${variant === 'silver' ? 'border-brand-charcoal p-1' : 'border-transparent'}`}
                >
                  <span className="w-full h-full rounded-full bg-[#E0E0E0] block border border-black/10"></span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Quantity */}
              <div className="flex items-center border border-black/20 shrink-0 h-14">
                <button 
                  disabled={quantity <= 1}
                  className="w-12 h-full flex items-center justify-center hover:bg-black/5 text-brand-charcoal disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button 
                  className="w-12 h-full flex items-center justify-center hover:bg-black/5 text-brand-charcoal transition-colors"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
              
              {/* Add to Cart */}
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-charcoal text-white tracking-widest uppercase font-medium h-14 hover:bg-primary transition-colors duration-300"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-black/10 mt-auto">
              {/* Description Accordion */}
              <div className="border-b border-black/10">
                <button 
                  className="w-full py-5 flex justify-between items-center bg-transparent group"
                  onClick={() => toggleAccordion('description')}
                >
                  <span className="text-sm font-medium uppercase tracking-widest">Description</span>
                  {openAccordions.description ? <ChevronUp size={16} className="text-brand-charcoal/50 group-hover:text-brand-charcoal transition-colors" /> : <ChevronDown size={16} className="text-brand-charcoal/50 group-hover:text-brand-charcoal transition-colors" />}
                </button>
                {openAccordions.description && (
                  <div className="pb-5 text-sm leading-relaxed text-brand-charcoal/70 font-light animate-accordion-down">
                    <p>{product.description}</p>
                    <p className="mt-4">Designed in our New York studio, each piece is carefully considered to ensure absolute comfort and timeless style.</p>
                  </div>
                )}
              </div>
              
              {/* Materials Accordion */}
              <div className="border-b border-black/10">
                <button 
                  className="w-full py-5 flex justify-between items-center bg-transparent group"
                  onClick={() => toggleAccordion('materials')}
                >
                  <span className="text-sm font-medium uppercase tracking-widest">Materials & Care</span>
                  {openAccordions.materials ? <ChevronUp size={16} className="text-brand-charcoal/50 group-hover:text-brand-charcoal transition-colors" /> : <ChevronDown size={16} className="text-brand-charcoal/50 group-hover:text-brand-charcoal transition-colors" />}
                </button>
                {openAccordions.materials && (
                  <div className="pb-5 text-sm leading-relaxed text-brand-charcoal/70 font-light animate-accordion-down">
                    <p><strong>{product.materials}</strong></p>
                    <p className="mt-2">Our jewelry is crafted from high-quality 18K solid gold plating over a sterling silver or brass core. To maintain its shine, we recommend avoiding contact with water, perfumes, and lotions. Store your pieces in the provided Velmora pouch when not in use.</p>
                  </div>
                )}
              </div>

              {/* Shipping Accordion */}
              <div className="border-b border-black/10">
                <button 
                  className="w-full py-5 flex justify-between items-center bg-transparent group"
                  onClick={() => toggleAccordion('shipping')}
                >
                  <span className="text-sm font-medium uppercase tracking-widest">Shipping & Returns</span>
                  {openAccordions.shipping ? <ChevronUp size={16} className="text-brand-charcoal/50 group-hover:text-brand-charcoal transition-colors" /> : <ChevronDown size={16} className="text-brand-charcoal/50 group-hover:text-brand-charcoal transition-colors" />}
                </button>
                {openAccordions.shipping && (
                  <div className="pb-5 text-sm leading-relaxed text-brand-charcoal/70 font-light animate-accordion-down">
                    <p>We offer free worldwide shipping on all orders over $75.</p>
                    <ul className="list-disc pl-4 mt-2 space-y-1">
                      <li>US Standard (3-5 business days): Free</li>
                      <li>US Express (1-2 business days): $15</li>
                      <li>International (5-10 business days): Calculated at checkout</li>
                    </ul>
                    <p className="mt-4">If you are not completely satisfied with your purchase, you may return the item within 30 days of receiving it for a full refund or exchange. Custom pieces and earrings (for hygiene reasons) are final sale unless faulty.</p>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t border-black/10 pt-20">
            <h2 className="text-3xl font-serif text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <div key={p.id} className="group relative flex flex-col">
                  <Link to={`/product/${p.id}`} className="relative aspect-[4/5] overflow-hidden bg-brand-sand mb-4 block">
                    <img 
                      src={p.images[0]}
                      data-strk-img-id={`related-${p.strkImgId}`}
                      data-strk-img={p.strkImgQuery}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      alt={p.name}
                      className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img 
                      src={p.images[1]}
                      data-strk-img-id={`related-${p.strkImgId}-hover`}
                      data-strk-img={`[related-title-${p.id}] alternate angle jewelry lifestyle`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      alt={`${p.name} on model`}
                      className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </Link>
                  <div className="flex flex-col flex-1 text-center">
                    <Link to={`/product/${p.id}`}>
                      <h3 id={`related-title-${p.id}`} className="font-serif text-lg tracking-wider uppercase mb-1">{p.name}</h3>
                      <p className="text-brand-charcoal/70">${p.price.toFixed(2)}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}