import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronRight, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-muted/30">
    <button
      onClick={onClick}
      className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-widest font-bold text-left"
    >
      <span>{title}</span>
      <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isOpen && "rotate-180")} />
    </button>
    <div className={cn(
      "overflow-hidden transition-all duration-300 ease-in-out",
      isOpen ? "max-h-96 pb-6" : "max-h-0"
    )}>
      <div className="text-sm text-muted-foreground leading-relaxed font-sans">
        {children}
      </div>
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState('Description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      window.scrollTo(0, 0);
    }
  }, [id]);

  useEffect(() => {
    if (containerRef.current && product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (!product) return <div className="pt-32 text-center font-serif py-40">Product not found.</div>;

  const relatedProducts = products.filter(p => p.id !== id && p.category === product.category).slice(0, 4);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto" ref={containerRef}>
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-black font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Left: Product Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 lg:w-20">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={cn(
                  "aspect-[3/4] w-20 lg:w-full bg-secondary overflow-hidden border-2 transition-all",
                  activeImageIndex === idx ? "border-accent" : "border-transparent"
                )}
              >
                <img
                  data-strk-img-id={`thumb-${product.id}-${idx}`}
                  data-strk-img={`[prod-title] gold jewelry detail viewpoint ${idx}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`View ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow aspect-[3/4] bg-secondary overflow-hidden">
            <img
              data-strk-img-id={`main-img-${product.id}`}
              data-strk-img={`[prod-title] gold jewelry premium editorial spotlight ${activeImageIndex}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-8">
          <div>
            <h1 id="prod-title" className="text-4xl md:text-5xl font-serif uppercase tracking-[0.2em] mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-2xl font-sans tracking-wide">${product.price}.00</span>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">(24 Reviews)</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed font-sans">{product.description}</p>
          </div>

          <div className="space-y-6">
             <div>
               <label className="text-[10px] uppercase tracking-widest font-bold mb-4 block">Select Tone</label>
               <div className="flex space-x-3">
                 {['Gold', 'Silver'].map((t) => (
                   <button
                    key={t}
                    onClick={() => setVariant(t)}
                    className={cn(
                      "px-6 py-2.5 text-[10px] uppercase tracking-widest font-medium border transition-all",
                      variant === t ? "bg-black text-white border-black" : "border-muted text-muted-foreground hover:border-black"
                    )}
                   >
                     {t}
                   </button>
                 ))}
               </div>
             </div>

             <div className="flex gap-4">
               <div className="flex items-center border border-muted px-4 h-14">
                 <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 hover:text-accent">
                   <Minus className="w-4 h-4" />
                 </button>
                 <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                 <button onClick={() => setQuantity(q => q+1)} className="p-2 hover:text-accent">
                   <Plus className="w-4 h-4" />
                 </button>
               </div>
               
               <button 
                onClick={() => addToCart(product, quantity, variant)}
                className="flex-grow bg-accent text-white h-14 text-xs uppercase tracking-widest font-bold hover:bg-black transition-all duration-300"
               >
                 Add to Cart
               </button>
             </div>
          </div>

          <div className="pt-8 space-y-2">
            <Accordion 
              title="Description" 
              isOpen={openAccordion === 'Description'} 
              onClick={() => setOpenAccordion(openAccordion === 'Description' ? '' : 'Description')}
            >
              <p>Hand-crafted with meticulous detail, this piece embodies our commitment to quality. The {product.materials.toLowerCase()} ensures a lasting brilliance that complements any ensemble from morning to moonlight.</p>
            </Accordion>
            <Accordion 
              title="Materials & Care" 
              isOpen={openAccordion === 'Materials'} 
              onClick={() => setOpenAccordion(openAccordion === 'Materials' ? '' : 'Materials')}
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Primary Material: {product.materials}</li>
                <li>Avoid contact with perfumes, lotions, and harsh chemicals.</li>
                <li>Store in the provided Velmora jewelry box when not in use.</li>
                <li>Clean gently with a soft, lint-free cloth.</li>
              </ul>
            </Accordion>
            <Accordion 
              title="Shipping & Returns" 
              isOpen={openAccordion === 'Shipping'} 
              onClick={() => setOpenAccordion(openAccordion === 'Shipping' ? '' : 'Shipping')}
            >
               <p>We offer free worldwide shipping on all orders. Standard delivery arrives in 3-5 business days. We accept returns within 30 days of purchase, provided items are in original condition with all packaging.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-serif mb-12">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3/4] bg-secondary overflow-hidden mb-4">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-name-${p.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 id={`related-name-${p.id}`} className="text-xs uppercase tracking-widest font-serif mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground font-sans tracking-wide">${p.price}.00</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
