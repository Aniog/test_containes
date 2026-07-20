import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus, Star, ChevronRight, ChevronDown } from 'lucide-react';
import { fetchProductBySlug, fetchProducts } from '@/api/products';
import ProductCard from '@/components/products/ProductCard';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [expandedSection, setExpandedSection] = useState('description');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const p = await fetchProductBySlug(slug);
        if (p) {
          setProduct(p);
          const relatedData = await fetchProducts({ category: p.data.category });
          setRelated(relatedData.filter(item => item.id !== p.id).slice(0, 4));
        }
      } catch (error) {
        console.error('Failed to load product', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!loading && product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading, product, activeImage, related]);

  if (loading) {
     return (
       <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-neutral-100 aspect-[3/4] animate-pulse" />
          <div className="space-y-8 animate-pulse">
             <div className="h-12 bg-neutral-100 w-3/4" />
             <div className="h-6 bg-neutral-100 w-1/4" />
             <div className="h-32 bg-neutral-100 w-full" />
          </div>
       </div>
     );
  }

  if (!product) {
    return (
      <div className="pt-48 pb-24 text-center space-y-6">
        <h1 className="font-serif text-4xl">Product not found</h1>
        <Link to="/shop" className="inline-block border-b border-brand-onyx pb-1 uppercase tracking-widest text-sm font-bold">
           Back to Shop
        </Link>
      </div>
    );
  }

  const fields = product.data;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${fields.name} added to bag`);
  };

  const sections = [
    { id: 'description', title: 'Description', content: fields.description || 'No description available.' },
    { id: 'materials', title: 'Materials & Care', content: fields.materials || '18K Gold Plated over brass. Nickel-free and hypoallergenic.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day hassle-free returns.' },
  ];

  const mainImgId = `pdp-main-${product.id}`;

  return (
    <div ref={containerRef} className="pt-32 pb-24 space-y-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
            <img 
               src={fields.images?.[activeImage] || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
               data-strk-img-id={`pdp-main-${product.id}`}
               data-strk-img={`[pdp-name-${product.id}] close up perspective`}
               data-strk-img-ratio="3x4"
               data-strk-img-width="1200"
               className="w-full h-full object-cover"
               alt={fields.name}
            />
          </div>
          <div className="flex gap-4">
            {[0, 1, 2].map((i) => (
              <button 
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "w-20 aspect-[3/4] bg-neutral-100 overflow-hidden border-2 transition-all",
                  activeImage === i ? "border-brand-gold" : "border-transparent opacity-60"
                )}
              >
                <img 
                  src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                  data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                  data-strk-img={`[pdp-name-${product.id}] perspective ${i}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  className="w-full h-full object-cover"
                  alt={`${fields.name} detail ${i}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-2">
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-400">
               <Link to="/">Home</Link> <ChevronRight size={10} /> 
               <Link to={`/shop?category=${fields.category}`}>{fields.category}</Link> <ChevronRight size={10} /> 
               <span className="text-brand-onyx">{fields.name}</span>
            </nav>
            <h1 id={`pdp-name-${product.id}`} className="font-serif text-4xl lg:text-5xl uppercase tracking-widest leading-tight">{fields.name}</h1>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${fields.price}</span>
              <div className="flex items-center gap-1 text-brand-gold text-xs">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <span className="text-neutral-400 font-bold ml-1 tracking-widest uppercase text-[10px]">(12 REVIEWS)</span>
              </div>
            </div>
          </div>

          <p className="text-neutral-600 leading-relaxed font-light">
            {fields.description}
          </p>

          <div className="space-y-6 pt-4">
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500">Tone</label>
              <div className="flex gap-3">
                 <button className="px-6 py-2 border-2 border-brand-onyx text-xs uppercase tracking-widest font-bold">Gold</button>
                 <button className="px-6 py-2 border border-neutral-200 text-xs uppercase tracking-widest font-bold opacity-40 cursor-not-allowed">Silver</button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-neutral-200 h-14">
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="px-4 hover:bg-neutral-50"><Minus size={16} /></button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 hover:bg-neutral-50"><Plus size={16} /></button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-onyx text-white h-14 uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-colors"
              >
                Add to Bag
              </button>
            </div>
          </div>

          {/* Accordions */}
          <div className="pt-8 space-y-4 border-t">
             {sections.map((section) => (
               <div key={section.id} className="border-b pb-4">
                  <button 
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="uppercase tracking-[0.2em] text-xs font-bold">{section.title}</span>
                    <ChevronDown size={18} className={cn("transition-transform", expandedSection === section.id && "rotate-180")} />
                  </button>
                  {expandedSection === section.id && (
                    <div className="mt-4 text-sm text-neutral-600 font-light leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {section.content}
                    </div>
                  )}
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 space-y-12">
          <h2 className="font-serif text-3xl text-center uppercase tracking-widest">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
             {related.map(item => <ProductCard key={item.id} product={item} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
