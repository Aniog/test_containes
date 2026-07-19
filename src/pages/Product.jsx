import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const seedProducts = [
  { 
    id: 1, 
    name: 'VIVID AURA JEWELS', 
    price: 42, 
    type: 'EAR CUFF', 
    category: 'earrings', 
    imgId: 'product-1-vivid-aura',
    desc: 'An everyday statement piece. This textured ear cuff wraps delicately around the cartilage, offering the illusion of a conch piercing without the commitment. Crafted from 18k gold vermeil over a sterling silver base.',
    titleId: 'p-1-title', 
    descId: 'p-1-desc' 
  },
  // Adding just enough data for the demo
  { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, type: 'NECKLACE', category: 'necklaces', imgId: 'product-2-flora', desc: 'A beautiful floral piece.', titleId: 'p-2-title', descId: 'p-2-desc' },
  { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, type: 'HUGGIES', category: 'huggies', imgId: 'product-3-sphere', desc: 'Chunky daily huggies.', titleId: 'p-3-title', descId: 'p-3-desc' },
  { id: 4, name: 'AMBER LACE EARRINGS', price: 54, type: 'EARRINGS', category: 'earrings', imgId: 'product-4-amber', desc: 'Textured drops.', titleId: 'p-4-title', descId: 'p-4-desc' }
];

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-border">
    <button 
      className="flex justify-between items-center w-full py-4 uppercase tracking-widest text-xs font-medium focus:outline-none"
      onClick={onClick}
    >
      {title}
      {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
      <div className="text-sm font-light text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const Product = () => {
  const { id } = useParams();
  const product = seedProducts.find(p => p.id === parseInt(id)) || seedProducts[0];
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');
  
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
      if (ImageHelper && ImageHelper.loadImages && containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage, variant]);

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? '' : name);
  };

  const images = [
    { id: `${product.imgId}-main`, context: 'main product shot white background' },
    { id: `${product.imgId}-model1`, context: 'model wearing lifestyle' },
    { id: `${product.imgId}-detail`, context: 'macro detail close up' }
  ];

  return (
    <div className="pt-20 pb-24 bg-background min-h-screen" ref={containerRef}>
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Images */}
          <div className="lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible md:w-24 shrink-0 no-scrollbar">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  className={`relative aspect-[4/5] w-20 md:w-full overflow-hidden border ${activeImage === idx ? 'border-foreground' : 'border-transparent opacity-70'} transition-all`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${product.titleId}] gold jewelry ${img.context}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover bg-muted"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-muted relative">
              <img
                key={activeImage} // Force re-render for clean transition
                data-strk-img-id={`main-${images[activeImage].id}`}
                data-strk-img={`[${product.titleId}] [${product.descId}] gold jewelry ${images[activeImage].context} high quality editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-2/5 flex flex-col pt-4">
            <div className="flex text-primary mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              <span className="text-muted-foreground text-xs ml-2 uppercase tracking-widest">(24 Reviews)</span>
            </div>

            <h1 id={product.titleId} className="text-3xl md:text-4xl font-serif mb-4 uppercase tracking-wide">
              {product.name}
            </h1>
            
            <p className="text-2xl font-light mb-8">${product.price}</p>

            <p id={product.descId} className="text-muted-foreground font-light leading-relaxed mb-8 hidden">
              {product.desc}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-medium uppercase tracking-widest">Metal</span>
                <span className="text-xs text-muted-foreground capitalize">{variant === 'gold' ? '18k Gold Plated' : 'Sterling Silver'}</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('gold')}
                  className={`w-full py-3 text-xs uppercase tracking-widest border transition-colors ${variant === 'gold' ? 'border-primary bg-background' : 'border-input bg-muted/30 text-muted-foreground hover:border-border'}`}
                >
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#e6c15c]/80 mr-2"></span>
                  Gold
                </button>
                <button 
                  onClick={() => setVariant('silver')}
                  className={`w-full py-3 text-xs uppercase tracking-widest border transition-colors ${variant === 'silver' ? 'border-foreground bg-background' : 'border-input bg-muted/30 text-muted-foreground hover:border-border'}`}
                >
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-gray-300 mr-2"></span>
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-10">
              <div className="flex items-center border border-input w-28">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-muted-foreground hover:text-foreground"><Minus className="w-4 h-4" /></button>
                <span className="flex-1 text-center font-light">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-muted-foreground hover:text-foreground"><Plus className="w-4 h-4" /></button>
              </div>
              <button className="flex-1 bg-foreground text-background hover:bg-primary transition-colors py-4 uppercase tracking-widest text-sm font-medium">
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-auto border-t border-border">
              <AccordionItem 
                title="Description" 
                isOpen={openAccordion === 'description'} 
                onClick={() => toggleAccordion('description')}
              >
                {product.desc}
                <br/><br/>
                Sold as a single piece. Safe for sensitive skin.
              </AccordionItem>
              <AccordionItem 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'} 
                onClick={() => toggleAccordion('materials')}
              >
                Crafted in vermeil: a thick 18k gold layer on sterling silver. 
                <br/><br/>
                To preserve the plating, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not worn.
              </AccordionItem>
              <AccordionItem 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'} 
                onClick={() => toggleAccordion('shipping')}
              >
                Free standard shipping worldwide on orders over $50.
                <br/><br/>
                We accept returns in unworn condition within 30 days of delivery.
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32 pt-16 border-t border-border">
          <h2 id="related-title" className="text-2xl md:text-3xl font-serif text-center mb-12">Complete the Look</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {seedProducts.filter(p => p.id !== product.id).slice(0, 4).map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative cursor-pointer flex flex-col">
                <div className="aspect-[4/5] bg-muted w-full overflow-hidden relative mb-4">
                  <Link to={`/product/${relatedProduct.id}`} className="absolute inset-0 z-10 w-full h-full block">
                    <img
                      data-strk-img-id={`related-${relatedProduct.imgId}`}
                      data-strk-img={`[${relatedProduct.titleId}] [related-title] gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                </div>
                <div className="flex flex-col text-center relative z-10">
                  <h3 id={relatedProduct.titleId} className="text-xs font-medium tracking-widest uppercase mt-2 mb-1 hover:text-primary transition-colors">
                    <Link to={`/product/${relatedProduct.id}`}>{relatedProduct.name}</Link>
                  </h3>
                  <p className="text-secondary-foreground text-sm font-light">
                    ${relatedProduct.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;