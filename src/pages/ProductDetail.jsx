import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { getProductById, products } from '../data';
import { useAppStore } from '../store';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, ChevronUp, Star, Truck, ShieldCheck, Heart } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useAppStore();
  const containerRef = useRef(null);
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (strkImgConfig && Object.keys(strkImgConfig).length > 0) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id, activeImage]); // Reload if id or active image changes, though activeImage isn't strictly needed if we just pass the wrapper

  useEffect(() => {
    // Reset state on navigation
    setQuantity(1);
    setActiveImage(0);
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/collections/all" className="uppercase tracking-widest text-xs font-medium border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  if(relatedProducts.length < 4) {
    const more = products.filter(p => !relatedProducts.find(r => r.id === p.id) && p.id !== product.id).slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...more);
  }

  // Set explicit strings for data-strk-img attribute from product images
  const thumbQueries = product.images.map(img => `[pd-name] ${img}`);
  const mainQueries = product.images.map(img => `[pd-name] ${img}`);


  return (
    <div className="pt-24 pb-16" ref={containerRef}>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="text-xs uppercase tracking-widest text-brand-gray flex items-center space-x-2">
          <Link to="/" className="hover:text-brand-dark transition">Home</Link>
          <span>/</span>
          <Link to={`/collections/${product.category}`} className="hover:text-brand-dark transition">{product.category}</Link>
          <span>/</span>
          <span className="text-brand-dark">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Image Gallery */}
          <div className="lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
             {/* Thumbnails */}
             <div className="flex lg:flex-col gap-4 lg:w-20 overflow-x-auto lg:overflow-visible">
               {product.images.map((img, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setActiveImage(idx)}
                   className={`flex-shrink-0 w-20 aspect-[3/4] overflow-hidden border transition-all duration-200 ${activeImage === idx ? 'border-brand-dark' : 'border-transparent hover:border-brand-sand'}`}
                 >
                     <img 
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                       alt={`${product.name} view ${idx + 1}`}
                       className="w-full h-full object-cover bg-brand-sand/30"
                       data-strk-img-id={`prod-thumb-${product.id}-${idx}`}
                       data-strk-img={thumbQueries[idx]}
                       data-strk-img-ratio="3x4"
                       data-strk-img-width="200"
                     />
                 </button>
               ))}
             </div>
             
             {/* Main Image */}
             <div className="flex-1 aspect-[4/5] bg-brand-sand/30 relative overflow-hidden">
                {product.images.map((img, idx) => (
                 <img 
                   key={idx}
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                   alt={`${product.name} main view`}
                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                   data-strk-img-id={`prod-main-${product.id}-${idx}`}
                   data-strk-img={mainQueries[idx]}
                   data-strk-img-ratio="4x5"
                   data-strk-img-width="800"
                 />
                ))}
             </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:w-1/2 flex flex-col">
            <h1 id="pd-name" className="font-serif text-4xl text-brand-dark mb-4 uppercase tracking-widest">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-light text-brand-dark">${product.price}</span>
              <div className="flex items-center text-brand-gold text-sm space-x-1 border-l border-brand-sand pl-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="text-brand-gray ml-2 font-sans tracking-wide">(42)</span>
              </div>
            </div>

            <p className="text-brand-dark/80 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-brand-gray mb-3 font-medium">Metal Finish</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedVariant('Gold')}
                  className={`px-8 py-3 text-sm tracking-widest transition-all ${
                    selectedVariant === 'Gold' 
                      ? 'border border-brand-dark bg-brand-dark text-white' 
                      : 'border border-brand-sand bg-white text-brand-dark hover:border-brand-gray'
                  }`}
                >
                  GOLD
                </button>
                <button 
                  onClick={() => setSelectedVariant('Silver')}
                  className={`px-8 py-3 text-sm tracking-widest transition-all ${
                    selectedVariant === 'Silver' 
                      ? 'border border-brand-dark bg-brand-dark text-white' 
                      : 'border border-brand-sand bg-white text-brand-dark hover:border-brand-gray'
                  }`}
                >
                  SILVER
                </button>
              </div>
            </div>

            {/* Add to Cart line */}
            <div className="flex gap-4 mb-10">
              <div className="flex items-center border border-brand-dark/20 h-14 w-32 justify-between px-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-brand-dark hover:text-brand-gold"
                >
                  -
                </button>
                <span className="font-light">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-brand-dark hover:text-brand-gold"
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product, quantity, selectedVariant);
                }}
                className="flex-1 bg-brand-dark text-white h-14 uppercase tracking-widest text-sm font-medium hover:bg-brand-gold transition-colors duration-300 flex items-center justify-center"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 mb-10 text-xs tracking-wider text-brand-dark/70 font-light border-y border-brand-sand py-4">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-gold" />
                Free Shipping Over $150
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                2 Year Warranty
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-brand-gold" />
                Hypoallergenic
              </div>
               <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Secure Checkout
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-brand-dark/10">
              <AccordionItem 
                title="Description" 
                isOpen={openAccordion === 'description'} 
                onClick={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                <div className="text-brand-dark/80 font-light leading-relaxed pb-4">
                  {product.description} <br/><br/>
                  Perfect for everyday wear or stacking with your favorite pieces. Designed to be a durable addition to your demi-fine collection.
                </div>
              </AccordionItem>
              
              <AccordionItem 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'} 
                onClick={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <div className="text-brand-dark/80 font-light leading-relaxed pb-4">
                  <strong>Materials:</strong> {product.material}<br/><br/>
                  <strong>Care Instructions:</strong> To maintain the luster of your demi-fine jewelry, avoid contact with perfumes, lotions, and harsh chemicals. Remove before swimming or exercising. Clean gently with a soft cloth and store in the provided Velmora pouch when not in use.
                </div>
              </AccordionItem>
              
              <AccordionItem 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'} 
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <div className="text-brand-dark/80 font-light leading-relaxed pb-4">
                  <strong>Shipping:</strong> Standard shipping takes 3-5 business days. Express options available at checkout.<br/><br/>
                  <strong>Returns:</strong> We offer a 30-day return policy for unworn items in their original packaging. Earrings and pierced items cannot be returned for hygiene reasons unless faulty.
                </div>
              </AccordionItem>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl text-brand-dark mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {relatedProducts.map((related) => (
             <div key={related.id} className="group flex flex-col">
              <Link to={`/product/${related.id}`} className="block relative aspect-[4/5] mb-4 overflow-hidden bg-brand-sand/30">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={related.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`related-img-${related.id}`}
                  data-strk-img={related.image.replace(/\[|\]/g, '')}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                />
              </Link>
              <div className="text-center font-serif text-lg text-brand-dark mb-1">
                <Link to={`/product/${related.id}`} id={`related-name-${related.id}`} className="hover:text-brand-gold transition-colors">
                  {related.name}
                </Link>
              </div>
              <div className="text-center font-sans tracking-wide text-brand-gray text-sm">
                ${related.price}
              </div>
            </div>
           ))}
        </div>
      </section>
    </div>
  );
};

const AccordionItem = ({ title, isOpen, onClick, children }) => (
  <div className="border-b border-brand-dark/10">
    <button 
      className="w-full flex justify-between items-center py-5 uppercase tracking-widest text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors"
      onClick={onClick}
    >
      {title}
      {isOpen ? <ChevronUp className="w-5 h-5 text-brand-gray" /> : <ChevronDown className="w-5 h-5 text-brand-gray" />}
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      {children}
    </div>
  </div>
);


export default ProductDetail;