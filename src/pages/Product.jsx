import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { seedProducts } from '../data/products';
import { ChevronDown, ChevronUp, Star, Truck, ShieldCheck, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function Product() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = seedProducts.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setCurrentImage(0);
      setQuantity(1);
    }
  }, [id]);

  useEffect(() => {
    if (!product) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, currentImage]);

  if (!product) {
    return <div className="pt-32 min-h-screen text-center"><p>Product not found.</p></div>;
  }

  const images = [product.image, product.imageHover];
  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, quantity, { tone });
  };

  return (
    <div className="pt-24 pb-32 mt-10" ref={containerRef}>
       <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32">
             {/* Image Gallery */}
             <div className="lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
                <div className="flex-1 aspect-[3/4] bg-secondary overflow-hidden">
                   <img 
                     data-strk-img-id={`prod-main-${product.id}`}
                     data-strk-img={`[prod-title-main]`}
                     data-strk-img-ratio="3x4"
                     data-strk-img-width="800"
                     src={images[currentImage]} 
                     alt={product.name} 
                     className="w-full h-full object-cover" 
                   />
                </div>
                <div className="flex md:flex-col gap-4 md:w-24 overflow-x-auto no-scrollbar">
                   {images.map((img, idx) => (
                     <button 
                       key={idx} 
                       onClick={() => setCurrentImage(idx)}
                       className={`relative w-20 md:w-full aspect-[3/4] flex-shrink-0 bg-secondary overflow-hidden border-2 transition-colors ${currentImage === idx ? 'border-accent' : 'border-transparent'}`}
                     >
                        <img 
                          data-strk-img-id={`prod-thumb-${product.id}-${idx}`}
                          data-strk-img={`[prod-title-main]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="400"
                          src={img} 
                          alt={`${product.name} view ${idx + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                     </button>
                   ))}
                </div>
             </div>

             {/* Product Info */}
             <div className="lg:w-1/2 pt-8">
                <nav className="text-sm text-muted-foreground uppercase tracking-widest mb-6 flex gap-2">
                   <Link to="/" className="hover:text-foreground">Home</Link>
                   <span>/</span>
                   <Link to={`/collections?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
                   <span>/</span>
                   <span className="text-foreground">{product.name}</span>
                </nav>

                <h1 id="prod-title-main" className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wider">{product.name}</h1>
                <p className="text-2xl font-medium mb-6">${product.price}</p>
                
                <div className="flex items-center gap-4 mb-8">
                   <div className="flex text-accent">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                     ))}
                   </div>
                   <span className="text-sm text-muted-foreground">{product.reviews} reviews</span>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                   {product.description}
                </p>

                {/* Variants */}
                <div className="mb-10">
                   <span className="block text-sm uppercase tracking-widest font-medium mb-4">Tone: {tone}</span>
                   <div className="flex gap-4">
                      <button 
                         onClick={() => setTone('Gold')}
                         className={`px-8 py-3 border uppercase tracking-widest text-sm transition-colors ${tone === 'Gold' ? 'border-foreground bg-background text-foreground' : 'border-border text-muted-foreground hover:border-foreground'}`}
                      >
                         Yellow Gold
                      </button>
                      <button 
                         onClick={() => setTone('Silver')}
                         className={`px-8 py-3 border uppercase tracking-widest text-sm transition-colors ${tone === 'Silver' ? 'border-foreground bg-background text-foreground' : 'border-border text-muted-foreground hover:border-foreground'}`}
                      >
                         White Gold
                      </button>
                   </div>
                </div>

                {/* Add to Cart */}
                <div className="flex gap-4 mb-12">
                   <div className="w-32 flex items-center justify-between border border-border px-4 py-3">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-muted-foreground hover:text-foreground">-</button>
                      <span className="font-medium">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="text-muted-foreground hover:text-foreground">+</button>
                   </div>
                   <button 
                      onClick={handleAdd}
                      className="flex-1 bg-accent text-accent-foreground uppercase tracking-widest text-sm font-medium hover:bg-accent/90 transition-colors"
                   >
                      Add to Cart — ${(product.price * quantity).toFixed(2)}
                   </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-12 py-6 border-y border-border text-sm">
                   <div className="flex items-center gap-3"><Truck className="w-5 h-5 text-muted-foreground"/> <span>Free Worldwide Shipping</span></div>
                   <div className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-muted-foreground"/> <span>1 Year Warranty</span></div>
                   <div className="flex items-center gap-3"><Heart className="w-5 h-5 text-muted-foreground"/> <span>Hypoallergenic</span></div>
                </div>

                {/* Accordions */}
                <div className="border-t border-border">
                   {[
                     { id: 'description', title: 'Details & Story', content: product.description + ' Designed to be worn every day, this piece is crafted with care using ethically sourced materials.' },
                     { id: 'materials', title: 'Materials & Care', content: `Material: ${product.material}. To preserve the plating, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not worn.` },
                     { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard shipping on all orders. Express shipping available at checkout. We accept returns within 30 days of delivery in original condition.' }
                   ].map(acc => (
                      <div key={acc.id} className="border-b border-border">
                         <button 
                           onClick={() => setActiveAccordion(activeAccordion === acc.id ? '' : acc.id)}
                           className="w-full py-5 flex justify-between items-center text-left uppercase tracking-widest text-sm font-medium"
                         >
                            {acc.title}
                            {activeAccordion === acc.id ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                         </button>
                         <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === acc.id ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                            <p className="text-muted-foreground leading-relaxed">{acc.content}</p>
                         </div>
                      </div>
                   ))}
                </div>

             </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-3xl font-serif mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(relProduct => (
                <div key={relProduct.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                    <Link to={`/product/${relProduct.id}`}>
                      <img 
                        data-strk-img-id={`rel-${relProduct.id}`}
                        data-strk-img={`[rel-${relProduct.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src={relProduct.image} 
                        alt={relProduct.name}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img 
                        data-strk-img-id={`rel-hover-${relProduct.id}`}
                        data-strk-img={`[rel-${relProduct.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src={relProduct.imageHover} 
                        alt={`${relProduct.name} worn`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    </Link>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(relProduct, 1, { tone: 'Gold' }); }}
                      className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur text-foreground py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-widest text-xs font-medium"
                    >
                      Quick Add
                    </button>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 id={`rel-${relProduct.id}-name`} className="font-serif text-lg mb-1"><Link to={`/product/${relProduct.id}`} className="hover:text-accent transition-colors">{relProduct.name}</Link></h3>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider">{relProduct.material}</p>
                    </div>
                    <span className="font-medium">${relProduct.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
       </div>
    </div>
  );
}