import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { SEED_PRODUCTS } from './Home';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/plugin/strk-img-config.json';

const ALL_PRODUCTS = [
  ...SEED_PRODUCTS,
  ...SEED_PRODUCTS.map(p => ({...p, id: `${p.id}-2`, name: `${p.name} II`, price: p.price + 10, imgId: `${p.imgId}-v2`, hoverImgId: `${p.hoverImgId}-v2`})),
];

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border py-4">
      <button 
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium tracking-wide">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="pt-4 text-muted-foreground font-light text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = ALL_PRODUCTS.find(p => p.id === id) || SEED_PRODUCTS[0];
  
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState('18K Gold Vermeil');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const images = [
     { id: `${product.imgId}-main`, desc: `[product-desc-${product.id}] [product-name-${product.id}] close up` },
     { id: `${product.imgId}-life`, desc: `woman wearing [product-desc-${product.id}] [product-name-${product.id}]` },
     { id: `${product.imgId}-alt`, desc: `[product-name-${product.id}] alternative angle` }
  ];

  const relatedProducts = ALL_PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  if (relatedProducts.length === 0) {
     relatedProducts.push(...ALL_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4));
  }

  useEffect(() => {
    window.scrollTo(0,0);
    const frameId = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch(e) {}
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]); // activeImage re-renders the main image tag sometimes depending on how it's done.

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      // For now passing a placeholder, later we can add the generated URL if available
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    }, quantity, variant);
  };

  return (
    <div ref={containerRef} className="pt-[100px] mb-24 bg-background">
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 lg:px-12 py-6 text-xs uppercase tracking-widest text-muted-foreground flex gap-2">
         <Link to="/" className="hover:text-foreground">Home</Link>
         <span>/</span>
         <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
         <span>/</span>
         <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-3/5 flex flex-col-reverse lg:flex-row gap-4">
             {/* Thumbnails */}
             <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible lg:w-24 shrink-0">
               {images.map((img, idx) => (
                 <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] w-20 lg:w-full shrink-0 overflow-hidden bg-secondary border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                 >
                   <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`Thumbnail ${idx+1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={`thumb-${img.id}`}
                      data-strk-img={img.desc}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="150"
                   />
                 </button>
               ))}
             </div>
             
             {/* Main Image */}
             <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[800px] w-full bg-secondary overflow-hidden flex-1">
                 {/* Render all absolute, use opacity to switch to keep image helper happy by not unmounting */}
                 {images.map((img, idx) => (
                    <img 
                      key={`main-${idx}`}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      data-strk-img-id={`main-${img.id}`}
                      data-strk-img={img.desc}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="1200"
                    />
                 ))}
             </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-2/5 flex flex-col pt-4 lg:pt-12">
            <h1 id={`product-name-${product.id}`} className="font-serif text-3xl md:text-5xl uppercase tracking-widest leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-light mb-4">${product.price}</p>
            
            <div className="flex items-center space-x-2 mb-8 hidden">
               <span id={`product-desc-${product.id}`}>{product.description}</span>
            </div>

            <div className="flex items-center gap-2 mb-8 text-sm">
               <div className="flex text-accent">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
               </div>
               <span className="text-muted-foreground underline underline-offset-4 cursor-pointer hover:text-foreground">24 Reviews</span>
            </div>

            <p className="text-muted-foreground mb-10 leading-relaxed font-light">
              {product.description} An instant classic to elevate your rotation, crafted to be treasured. Made from hypoallergenic, water-resistant materials so you never have to take it off.
            </p>

            {/* Variants */}
            <div className="mb-8">
              <span className="block text-sm uppercase tracking-widest mb-3">Color: <span className="font-medium text-foreground">{variant}</span></span>
              <div className="flex gap-4">
                 <button 
                  onClick={() => setVariant('18K Gold Vermeil')}
                  className={`w-10 h-10 rounded-full bg-[#D4AF37] ring-offset-2 ring-offset-background transition-all ${variant === '18K Gold Vermeil' ? 'ring-2 ring-foreground' : 'hover:ring-1 hover:ring-border'}`}
                  aria-label="18K Gold Vermeil"
                 />
                 <button 
                  onClick={() => setVariant('Sterling Silver')}
                  className={`w-10 h-10 rounded-full bg-[#C0C0C0] ring-offset-2 ring-offset-background transition-all ${variant === 'Sterling Silver' ? 'ring-2 ring-foreground' : 'hover:ring-1 hover:ring-border'}`}
                  aria-label="Sterling Silver"
                 />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <div className="flex items-center border border-border h-14 w-full sm:w-32 justify-between px-4 shrink-0">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-muted-foreground hover:text-foreground"><Minus className="w-4 h-4" /></button>
                  <span className="text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-muted-foreground hover:text-foreground"><Plus className="w-4 h-4" /></button>
               </div>
               <button 
                 onClick={handleAddToCart}
                 className="flex-1 h-14 bg-foreground text-background hover:bg-accent hover:text-accent-foreground font-medium uppercase tracking-widest transition-colors"
               >
                 Add to Cart - ${(product.price * quantity).toFixed(2)}
               </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
               <Accordion title="Description" defaultOpen={true}>
                 A stunning addition to any collection. Ethically crafted with obsessive attention to detail. Our {product.name.toLowerCase()} shines from every angle, designed to be worn solo for a minimalist look or layered for maximum impact.
               </Accordion>
               <Accordion title="Materials & Care">
                 <ul className="list-disc pl-5 space-y-2">
                   <li>18k solid gold thick plating over sterling silver (vermeil)</li>
                   <li>Hypoallergenic and nickel-free</li>
                   <li>Avoid contact with direct perfumes, lotions, and harsh chemicals</li>
                   <li>Store in the provided Velmora pouch when not in use</li>
                 </ul>
               </Accordion>
               <Accordion title="Shipping & Returns">
                 <p className="mb-2"><strong>Free Worldwide Shipping</strong> on all orders over $150. Standard delivery takes 3-5 business days.</p>
                 <p>Not completely in love? We offer a <strong>30-day return policy</strong> for unworn items in their original packaging.</p>
               </Accordion>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 border-t border-border pt-24 bg-secondary/50">
         <div className="container mx-auto px-6 lg:px-12">
            <h2 id="related-title" className="text-3xl font-serif text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {relatedProducts.map((p) => (
                  <div key={p.id} className="group flex flex-col">
                    <Link to={`/product/${p.id}`} className="relative aspect-[3/4] mb-4 bg-background overflow-hidden">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-strk-img-id={`related-${p.id}`}
                        data-strk-img={`[product-desc-${p.id}] [product-name-${p.id}] [related-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                      />
                    </Link>
                    <div className="flex flex-col text-center">
                      <Link to={`/product/${p.id}`}>
                        <h3 id={`product-name-${p.id}`} className="font-serif uppercase tracking-wider text-sm mb-1 group-hover:text-accent transition-colors">{p.name}</h3>
                      </Link>
                      <p id={`product-desc-${p.id}`} className="hidden">{p.description}</p>
                      <p className="text-foreground tracking-wide mt-1">${p.price}</p>
                    </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  )
}