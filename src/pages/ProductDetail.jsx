import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, ChevronRight, Share2, Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { products } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-ultra-wide font-sans mb-12 text-velmora-charcoal/40 font-semibold">
            <Link to="/" className="hover:text-gold transition-colors font-semibold">Home</Link>
            <ChevronRight size={10} />
            <Link to="/shop" className="hover:text-gold transition-colors font-semibold">Jewelry</Link>
            <ChevronRight size={10} />
            <Link to={`/shop?category=${product.category}`} className="hover:text-gold transition-colors font-semibold">{product.category}</Link>
            <ChevronRight size={10} />
            <span className="text-velmora-charcoal font-semibold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible">
                  {product.images.map((img, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={cn(
                            "w-20 md:w-24 aspect-[3/4] flex-shrink-0 bg-velmora-cream overflow-hidden border transition-all",
                            selectedImage === idx ? "border-gold" : "border-transparent"
                        )}
                      >
                          <img 
                            data-strk-img-id={`thumb-${product.id}-${idx}`}
                            data-strk-img={`[pd-name] close up texture detail ${idx}`}
                            data-strk-img-ratio="3x4"
                            data-strk-img-width="200"
                            src={img} 
                            alt={`${product.name} ${idx}`} 
                            className="w-full h-full object-cover" 
                          />
                      </button>
                  ))}
              </div>
              {/* Main Image */}
              <div className="flex-grow aspect-[3/4] bg-velmora-cream overflow-hidden cursor-zoom-in relative group">
                  <img 
                    data-strk-img-id={`main-img-${product.id}`}
                    data-strk-img={`[pd-name] [pd-desc] luxury editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="1200"
                    src={product.images[selectedImage]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute top-6 right-6 flex flex-col space-y-4">
                      <button className="h-10 w-10 bg-white shadow-sm flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-all text-velmora-charcoal">
                          <Heart size={18} strokeWidth={1.5} />
                      </button>
                      <button className="h-10 w-10 bg-white shadow-sm flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-all text-velmora-charcoal">
                          <Share2 size={18} strokeWidth={1.5} />
                      </button>
                  </div>
              </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 flex flex-col h-full">
              <div className="pb-8 border-b border-velmora-charcoal/5 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                      <div className="flex space-x-0.5">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className={cn("fill-current", s <= Math.floor(product.rating) ? "text-gold" : "text-velmora-charcoal/10")} />)}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal/40 font-semibold">{product.reviews} Reviews</span>
                  </div>
                  <h1 id="pd-name" className="text-4xl font-serif uppercase tracking-ultra-wide mb-6">{product.name}</h1>
                  <p className="text-2xl font-sans tracking-tight text-velmora-charcoal mb-8">${product.price.toFixed(2)}</p>
                  <p id="pd-desc" className="text-sm text-velmora-charcoal/60 leading-relaxed font-sans italic">{product.description}</p>
              </div>

              <div className="space-y-10 mb-10">
                  {/* Variant Selector */}
                  <div>
                      <h4 className="text-[10px] uppercase tracking-ultra-wide font-semibold mb-6">Tone: {tone === 'gold' ? '18K Gold Plated' : '925 Sterling Silver'}</h4>
                      <div className="flex space-x-4">
                          <button 
                            onClick={() => setTone('gold')}
                            className={cn(
                                "h-8 px-6 text-[10px] uppercase tracking-widest font-semibold transition-all border",
                                tone === 'gold' ? "bg-velmora-charcoal text-white border-velmora-charcoal" : "bg-white text-velmora-charcoal border-velmora-charcoal/10 hover:border-velmora-charcoal"
                            )}
                          >
                              Gold
                          </button>
                          <button 
                            onClick={() => setTone('silver')}
                            className={cn(
                                "h-8 px-6 text-[10px] uppercase tracking-widest font-semibold transition-all border",
                                tone === 'silver' ? "bg-velmora-charcoal text-white border-velmora-charcoal" : "bg-white text-velmora-charcoal border-velmora-charcoal/10 hover:border-velmora-charcoal"
                            )}
                          >
                              Silver
                          </button>
                      </div>
                  </div>

                  {/* Quantity & CTA */}
                  <div className="flex flex-col space-y-4">
                      <h4 className="text-[10px] uppercase tracking-ultra-wide font-semibold">Quantity</h4>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-velmora-charcoal/10 h-14 w-32 justify-between px-4">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-gold transition-colors"><Minus size={16} strokeWidth={1.5}/></button>
                            <span className="text-sm font-sans font-medium w-8 text-center">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="hover:text-gold transition-colors"><Plus size={16} strokeWidth={1.5} /></button>
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            className="flex-grow bg-velmora-charcoal text-white h-14 text-xs uppercase tracking-ultra-wide font-semibold hover:bg-gold transition-colors duration-500"
                        >
                            Add to Bag
                        </button>
                      </div>
                  </div>
              </div>

              {/* Trust Icons */}
              <div className="grid grid-cols-2 gap-4 py-8 border-y border-velmora-charcoal/5 mb-10">
                  <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-velmora-charcoal/60 font-semibold font-sans">
                      <Truck size={18} strokeWidth={1.2} />
                      <span>Free Express Shipping</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-velmora-charcoal/60 font-semibold font-sans">
                      <ShieldCheck size={18} strokeWidth={1.2} />
                      <span>2-Year Warranty</span>
                  </div>
              </div>

              {/* Accordions */}
              <div className="space-y-6">
                  {[
                      { id: 'description', title: 'Details & Story', content: product.description },
                      { id: 'materials', title: 'Materials & Care', content: `Material: ${product.material}. Care: ${product.care}` },
                      { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard shipping on all orders over $75. 30-day easy returns policy for unworn jewelry in original packaging.' }
                  ].map((item) => (
                      <div key={item.id} className="border-b border-velmora-charcoal/5 pb-6 last:border-0">
                          <button 
                            onClick={() => toggleAccordion(item.id)}
                            className="flex items-center justify-between w-full text-left group"
                          >
                              <span className="text-xs uppercase tracking-ultra-wide font-semibold group-hover:text-gold transition-colors">{item.title}</span>
                              <ChevronDown size={14} className={cn("transition-transform duration-300", openAccordion === item.id ? "rotate-180" : "")} />
                          </button>
                          {openAccordion === item.id && (
                              <div className="mt-6 text-sm text-velmora-charcoal/60 leading-relaxed font-sans">
                                  {item.content}
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="py-24 border-t border-velmora-charcoal/5">
            <h2 id="related-title" className="text-3xl font-serif mb-16 text-center">Complete the Look</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((p) => (
                    <div key={p.id} className="group cursor-pointer">
                        <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] overflow-hidden mb-6 bg-velmora-cream">
                            <img 
                                data-strk-img-id={`rel-img-${p.id}`}
                                data-strk-img={`[pd-name] [related-title] matching ${p.name}`}
                                data-strk-img-ratio="3x4"
                                data-strk-img-width="600"
                                src={p.images[0]} 
                                alt={p.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                        </Link>
                        <h3 className="text-[11px] uppercase tracking-ultra-wide mb-2 font-medium font-sans">{p.name}</h3>
                        <p className="text-sm font-sans tracking-tight text-velmora-charcoal/80">${p.price}</p>
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
