import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ChevronDown, ChevronUp, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

const products = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, category: 'earrings', material: 'gold', desc: 'Gold ear cuff with crystal accent', imgId: 'vivid-aura-cuff-1a', hoverImgId: 'vivid-aura-cuff-1b', details: 'A striking ear cuff featuring a delicate row of hand-set crystals. No piercing required. Crafted from 18k gold vermeil.' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, category: 'necklaces', material: 'gold', desc: 'Multicolor floral crystal necklace', imgId: 'majestic-flora-neck-2a', hoverImgId: 'majestic-flora-neck-2b', details: 'Inspired by spring blooms, this necklace features warm multicolored crystals set in an intricate floral arrangement along a delicate chain.' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, category: 'huggies', material: 'gold', desc: 'Chunky gold dome huggie earrings', imgId: 'golden-sphere-hug-3a', hoverImgId: 'golden-sphere-hug-3b', details: 'The ultimate everyday earring. A lightweight but chunky hollow dome design that hugs the earlobe perfectly.' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, category: 'earrings', material: 'gold', desc: 'Textured gold filigree drop earrings', imgId: 'amber-lace-drop-4a', hoverImgId: 'amber-lace-drop-4b', details: 'Vintage-inspired drop earrings with intricate filigree detailing that catches the light beautifully from every angle.' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, category: 'sets', material: 'gold', desc: 'Gift-boxed earring + necklace set', imgId: 'royal-heirloom-set-5a', hoverImgId: 'royal-heirloom-set-5b', details: 'Our signature gifting set. Includes a delicate pendant necklace and matching stud earrings, perfectly presented in our luxury velvet box.' },
  { id: '6', name: 'Lunar Pearl Pendant', price: 72, category: 'necklaces', material: 'gold', desc: 'Freshwater pearl on gold snake chain', imgId: 'lunar-pearl-neck-6a', hoverImgId: 'lunar-pearl-neck-6b', details: 'A luminous freshwater pearl suspended on a fluid 18k gold vermeil snake chain. A modern take on a classic.' }
];

const Product = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  
  // Find product or default to first if not found (for demo purposes)
  const product = products.find(p => p.id === id) || products[0];
  
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [selectedMetal, setSelectedMetal] = useState(product.material);
  
  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    setActiveImageIndex(0);
    setOpenAccordion('description');
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    let cleanup = undefined;
    if (containerRef.current) {
       try {
         cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
       } catch(e) {
         console.error(e);
       }
    }
    return () => {
        if(cleanup) cleanup();
    }
  }, [id, activeImageIndex]);

  // Mock gallery images by combining main and hover img IDs
  const galleryImages = [
    { id: 'gallery-1', imgId: product.imgId, query: `[pdp-desc] [pdp-title]` },
    { id: 'gallery-2', imgId: product.hoverImgId, query: `model wearing [pdp-desc] [pdp-title]` },
    { id: 'gallery-3', imgId: `${product.imgId}-detail`, query: `close up macro detail shot of [pdp-desc] [pdp-title]` }
  ];

  // Related products (exclude current)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24" ref={containerRef}>
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-8 mb-8">
         <nav className="text-xs tracking-widest text-muted-foreground uppercase flex items-center space-x-2">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collection" className="hover:text-foreground transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
         </nav>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-[55%] flex flex-col md:flex-row gap-4 md:h-[700px]">
            {/* Thumbnails (desktop left, mobile bottom) */}
            <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-y-auto hide-scrollbar flex-shrink-0 w-full md:w-24">
              {galleryImages.map((img, idx) => (
                <button 
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[4/5] md:aspect-square w-20 md:w-full flex-shrink-0 border-2 overflow-hidden ${activeImageIndex === idx ? 'border-primary' : 'border-transparent'}`}
                >
                  <img 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="150"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-grow order-1 md:order-2 aspect-[4/5] md:aspect-auto bg-secondary overflow-hidden">
               <img 
                  key={galleryImages[activeImageIndex].imgId} // Force re-render on change if needed
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  data-strk-img-id={`main-${galleryImages[activeImageIndex].imgId}`}
                  data-strk-img={galleryImages[activeImageIndex].query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
               />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4 md:py-10">
            <h1 id="pdp-title" className="text-3xl md:text-5xl font-serif tracking-wide uppercase mb-4">
              {product.name}
            </h1>
            
            <p id="pdp-desc" className="sr-only">{product.desc}</p>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xl md:text-2xl font-medium tracking-widest">${product.price}</span>
              <div className="flex items-center text-accent">
                <Star fill="currentColor" size={14} className="mx-0.5" />
                <Star fill="currentColor" size={14} className="mx-0.5" />
                <Star fill="currentColor" size={14} className="mx-0.5" />
                <Star fill="currentColor" size={14} className="mx-0.5" />
                <Star fill="currentColor" size={14} className="mx-0.5" />
                <span className="text-muted-foreground text-xs ml-2 uppercase tracking-widest block transform translate-y-px">(24 Reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg">
              {product.details}
            </p>

            {/* Variants */}
            <div className="mb-10">
              <span className="text-xs tracking-widest uppercase mb-4 block">Metal Tone</span>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setSelectedMetal('gold')}
                  className={`flex items-center space-x-2 border px-6 py-3 transition-colors ${selectedMetal === 'gold' ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:border-primary'}`}
                >
                   <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
                   <span className="text-sm font-medium uppercase tracking-widest">18k Gold</span>
                </button>
                <button 
                  onClick={() => setSelectedMetal('silver')}
                  className={`flex items-center space-x-2 border px-6 py-3 transition-colors ${selectedMetal === 'silver' ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:border-primary'}`}
                >
                   <div className="w-3 h-3 rounded-full bg-gray-300 shadow-sm" />
                   <span className="text-sm font-medium uppercase tracking-widest">Silver</span>
                </button>
              </div>
            </div>

            {/* Add to Cart form */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
               <div className="flex items-center border border-border h-14 w-full sm:w-32">
                 <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-1/3 h-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                 >
                   <Minus size={16} />
                 </button>
                 <span className="w-1/3 text-center text-sm font-medium">{quantity}</span>
                 <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-1/3 h-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                 >
                   <Plus size={16} />
                 </button>
               </div>

               <button 
                onClick={() => addToCart(product, quantity, selectedMetal === 'gold' ? '18k Gold' : 'Silver')}
                className="flex-grow bg-primary text-primary-foreground h-14 tracking-widest uppercase font-medium text-sm hover:bg-primary/90 transition-colors"
               >
                 Add to Cart &mdash; ${(product.price * quantity).toFixed(2)}
               </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
              {/* Description Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex justify-between items-center py-5 uppercase tracking-widest text-sm font-medium"
                >
                  Description
                  {openAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'description' ? 'max-h-96 pb-6' : 'max-h-0'}`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Designed for everyday elegance, the {product.name} is a versatile addition to any collection. 
                    Made to be layered or worn solo, its timeless silhouette ensures it will remain a staple in your jewelry box for years to come.
                  </p>
                </div>
              </div>

              {/* Materials Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex justify-between items-center py-5 uppercase tracking-widest text-sm font-medium"
                >
                  Materials & Care
                  {openAccordion === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'materials' ? 'max-h-96 pb-6' : 'max-h-0'}`}
                >
                  <ul className="text-muted-foreground text-sm leading-relaxed list-disc list-inside space-y-2 ml-4">
                    <li>18k Gold Vermeil (a thick layer of solid 18k gold over 925 sterling silver)</li>
                    <li>Hypoallergenic and free of nickel and lead</li>
                    <li>To maintain shine, avoid contact with water, perfumes, and lotions</li>
                    <li>Store in the provided Velmora pouch when not in use</li>
                  </ul>
                </div>
              </div>

              {/* Shipping Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex justify-between items-center py-5 uppercase tracking-widest text-sm font-medium"
                >
                  Shipping & Returns
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'shipping' ? 'max-h-96 pb-6' : 'max-h-0'}`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We offer free standard worldwide shipping on all orders. Express options are available at checkout.
                    <br/><br/>
                    Not quite right? We accept returns within 30 days of receipt in unworn condition with original packaging.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products Row */}
      <section className="container mx-auto px-4 md:px-8 mt-32">
        <div className="flex justify-between items-end mb-10 border-b border-border pb-4">
           <h2 id="related-title" className="text-2xl font-serif uppercase tracking-widest">You May Also Like</h2>
           <Link to="/collection" className="text-sm tracking-widest uppercase hover:text-accent transition-colors flex items-center">
             Shop All <ArrowRight size={14} className="ml-2" />
           </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
           {relatedProducts.map((item) => (
               <div key={item.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-secondary w-full">
                     <Link to={`/product/${item.id}`} className="block h-full">
                        <img 
                          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.name}
                          data-strk-img-id={`rel-${item.imgId}`}
                          data-strk-img={`[rel-desc-${item.id}] [rel-title-${item.id}] [related-title]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="400"
                        />
                        <img 
                          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${item.name} alternate view`}
                          data-strk-img-id={`rel-${item.hoverImgId}`}
                          data-strk-img={`model wearing [rel-desc-${item.id}] [rel-title-${item.id}]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="400"
                        />
                     </Link>
                  </div>
                  <div className="flex flex-col text-center">
                    <Link to={`/product/${item.id}`}>
                      <h3 id={`rel-title-${item.id}`} className="font-serif tracking-wide text-sm mb-1">{item.name}</h3>
                    </Link>
                    <p id={`rel-desc-${item.id}`} className="sr-only">{item.desc}</p>
                    <span className="text-sm text-muted-foreground">${item.price}</span>
                  </div>
                </div>
           ))}
        </div>
      </section>

    </div>
  );
};

export default Product;