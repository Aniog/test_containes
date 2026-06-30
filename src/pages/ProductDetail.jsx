import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronDown, ChevronUp, Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (!product) {
      navigate('/collection');
    }
  }, [product, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
       return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (!product) return null;

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-xs uppercase tracking-wider text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collection" className="hover:text-primary transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.title}</span>
        </nav>

        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto md:w-20 md:flex-shrink-0 hide-scrollbar">
              {[1, 2, 3].map((num) => (
                <button key={num} className="w-20 h-24 bg-muted flex-shrink-0 border border-transparent hover:border-gold transition-colors focus:outline-none">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.title} view ${num}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`${product.imgId}-thumb-${num}`}
                    data-strk-img={`[pdp-title] view ${num}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-1 bg-muted aspect-[4/5] relative">
               <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`${product.imgId}-hero`}
                  data-strk-img={`[pdp-title] beautiful product photography on model`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                />
            </div>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-4">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-light">${product.price.toFixed(2)}</span>
              <div className="flex items-center text-gold">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                <span className="text-xs text-muted-foreground ml-2">(12 reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest mb-3 block">Material: {variant === 'Gold' ? '18K Gold Plated' : 'Sterling Silver'}</span>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('Gold')}
                  className={cn(
                    "px-6 py-2 border text-sm tracking-wide font-light transition-colors",
                    variant === 'Gold' ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"
                  )}
                >
                  Gold
                </button>
                <button 
                  onClick={() => setVariant('Silver')}
                  className={cn(
                    "px-6 py-2 border text-sm tracking-wide font-light transition-colors opacity-50 cursor-not-allowed",
                    variant === 'Silver' ? "border-primary bg-primary text-primary-foreground" : "border-border"
                  )}
                  disabled
                  title="Coming soon"
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-10">
              <div className="flex items-center border border-border">
                <button className="px-4 py-3 text-muted-foreground hover:bg-muted" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button className="px-4 py-3 text-muted-foreground hover:bg-muted" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button 
                onClick={() => addToCart(product, variant, quantity)}
                className="flex-1 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-gold hover:text-white transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>

            {/* Trust Icons */}
            <div className="grid grid-cols-3 gap-4 mb-12 py-6 border-y border-border">
              <div className="flex flex-col items-center text-center gap-2 text-muted-foreground">
                 <Truck size={20} className="stroke-[1.5]" />
                 <span className="text-xs tracking-wide">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-muted-foreground">
                 <RefreshCw size={20} className="stroke-[1.5]" />
                 <span className="text-xs tracking-wide">30-Day Returns</span>
              </div>
               <div className="flex flex-col items-center text-center gap-2 text-muted-foreground">
                 <ShieldCheck size={20} className="stroke-[1.5]" />
                 <span className="text-xs tracking-wide">2 Year Warranty</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
               {[
                 { id: 'description', label: 'Details & Features', content: (
                   <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground font-light">
                     {product.features.map((feature, i) => <li key={i}>{feature}</li>)}
                   </ul>
                 )},
                 { id: 'materials', label: 'Materials & Care', content: (
                    <p className="text-sm text-muted-foreground font-light">
                      To ensure your pieces stay bright, keep them away from water, perfume, and harsh chemicals. Store in a cool, dry place when not wearing. We use high-quality 18K gold vermeil which is a thick layer of gold over sterling silver.
                    </p>
                 )},
                 { id: 'shipping', label: 'Shipping & Returns', content: (
                   <p className="text-sm text-muted-foreground font-light">
                     Free standard shipping on all orders. Expedited shipping is available at checkout. You can return any unworn pieces within 30 days of receiving your order for a full refund.
                   </p>
                 )}
               ].map(accordion => (
                 <div key={accordion.id} className="border-b border-border pb-4">
                   <button 
                     className="w-full justify-between flex items-center text-left py-2 font-serif uppercase tracking-wider text-sm"
                     onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                   >
                     {accordion.label}
                     {openAccordion === accordion.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                   </button>
                   <div className={cn(
                     "overflow-hidden transition-all duration-300",
                     openAccordion === accordion.id ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                   )}>
                     {accordion.content}
                   </div>
                 </div>
               ))}
            </div>

          </div>
        </div>

        {/* Related Products */}
        <section className="pt-16 border-t border-border">
          <h2 id="related-title" className="font-serif text-3xl mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group cursor-pointer flex flex-col">
                <div className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[related-title] [prod-title-rel-${p.id}] on model`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                  />
                </div>
                <div className="flex flex-col flex-1 text-center">
                  <h3 id={`prod-title-rel-${p.id}`} className="font-serif uppercase tracking-wide text-sm font-medium mb-1">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground font-light">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductDetail;