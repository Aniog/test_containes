import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Star, ChevronRight, Minus, Plus, ShoppingBag, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { toast } from 'sonner';
import { cn } from '../lib/utils';
import ProductCard from '../components/shop/ProductCard';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageTab, setActiveImageTab] = useState(0);
  const [expandedSection, setExpandedSection] = useState('description');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
        const { data: response } = await client.from('Products').select('*').eq('id', id).single();
        
        if (response) {
          // response is the entity: { id, data: { ...fields } }
          const fields = response.data || {};
          const productData = { ...fields, id: response.id };
          setProduct(productData);
          setSelectedVariant(productData.variants?.[0] || 'Gold Tone');
          
          // Fetch related products
          const { data: relatedRes } = await client.from('Products').select('*').eq('category', productData.category).neq('id', id).limit(4);
          if (relatedRes?.data?.list) {
            setRelatedProducts(relatedRes.data.list.map(item => ({ ...item.data, id: item.id })));
          }
        }
      } catch (err) {
        console.error('Failed to fetch product:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product || relatedProducts.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product, relatedProducts]);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to your bag`);
  };

  if (isLoading) return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!product) return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen text-center space-y-8">
      <h1 className="font-serif text-3xl">Piece not found.</h1>
      <Link to="/shop" className="inline-block text-xs uppercase tracking-widest border-b pb-1">Return to Collection</Link>
    </div>
  );

  const Accordion = ({ id, title, children }) => (
    <div className="border-b">
      <button 
        onClick={() => setExpandedSection(expandedSection === id ? null : id)}
        className="w-full flex justify-between items-center py-6 text-left"
      >
        <span className="font-serif text-sm tracking-widest uppercase">{title}</span>
        <Plus size={16} className={cn("transition-transform duration-300", expandedSection === id && "rotate-45")} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        expandedSection === id ? "max-h-96 pb-6" : "max-h-0"
      )}>
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 lg:pt-40 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-12">
          <Link to="/" className="hover:text-accent">Home</Link> 
          <ChevronRight size={10} /> 
          <Link to="/shop" className="hover:text-accent">Shop</Link>
          <ChevronRight size={10} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-accent">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageTab(index)}
                  className={cn(
                    "flex-shrink-0 w-20 aspect-[3/4] bg-secondary border-2 transition-all",
                    activeImageTab === index ? "border-accent" : "border-transparent"
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${id}-${index}`}
                    data-strk-img={`[pdp-name] gold demi-fine jewelry ${index === 0 ? 'studio' : 'worn'} shot`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${product.name} gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-grow aspect-[3/4] bg-secondary overflow-hidden relative">
              <img
                data-strk-img-id={`pdp-main-${id}-${activeImageTab}`}
                data-strk-img={`[pdp-name] gold demi-fine jewelry ${activeImageTab === 0 ? 'studio' : 'worn'} shot detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                 <span className="text-accent text-[10px] uppercase tracking-widest font-bold">{product.category}</span>
                 <h1 id="pdp-name" className="text-4xl lg:text-5xl font-serif tracking-widest uppercase">{product.name}</h1>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="text-2xl font-medium tracking-tight">${product.price}</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 text-[#FFC107]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">(12 Reviews)</span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Select Finish: {selectedVariant}</h4>
                <div className="flex gap-4">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={cn(
                        "px-8 py-3 uppercase tracking-widest text-[10px] font-semibold border transition-all",
                        selectedVariant === v 
                          ? "bg-accent text-white border-accent" 
                          : "bg-white text-foreground border-border hover:border-accent"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and ATC */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center border h-14 md:w-32 justify-between px-6">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="hover:text-accent"><Minus size={16} /></button>
                  <span className="font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="hover:text-accent"><Plus size={16} /></button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-foreground text-white h-14 uppercase tracking-[0.25em] text-xs font-bold hover:bg-accent transition-all flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={18} strokeWidth={2} /> Add to Bag
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-semibold">
                <ShieldCheck size={20} strokeWidth={1.5} className="text-accent" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-semibold">
                <Truck size={20} strokeWidth={1.5} className="text-accent" />
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-semibold">
                <RefreshCcw size={20} strokeWidth={1.5} className="text-accent" />
                <span>Easy Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-10">
              <Accordion id="description" title="Description">
                <p>Meticulously designed for everyday luxury, the {product.name} features refined craftsmanship and exceptional attention to detail. Part of our signature {product.category} collection.</p>
              </Accordion>
              <Accordion id="materials" title="Materials & Care">
                <p>Hand-crafted in 18K gold plating over premium brass. We recommend avoiding direct contact with water, perfumes, and creams to maintain its brilliant luster. Store in your Velmora pouch when not in use.</p>
              </Accordion>
              <Accordion id="shipping" title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. We offer a 30-day return policy for unused pieces in their original packaging. Gift boxing available at checkout.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-40">
            <h2 className="font-serif text-3xl tracking-wide uppercase mb-16 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item.data ? { ...item.data, id: item.id } : item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
