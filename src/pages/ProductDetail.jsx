import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById, fetchProducts } from '@/api/products';
import { useCart } from '@/lib/CartContext';
import { ProductCard } from '@/components/home/Bestsellers';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-100 last:border-0 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-[10px] uppercase tracking-widest font-bold"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-sm text-stone-500 font-light leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        if (data?.data?.variants?.length > 0) {
          setSelectedVariant(data.data.variants[0]);
        }
        
        const allProducts = await fetchProducts();
        setRelatedProducts(allProducts.filter(p => p.id !== id).slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
       ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product, activeImage]);

  if (loading) {
    return (
      <div className="pt-32 min-h-screen animate-pulse px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-stone-100" />
          <div className="space-y-6">
            <div className="h-8 bg-stone-100 w-3/4" />
            <div className="h-4 bg-stone-100 w-1/4" />
            <div className="h-20 bg-stone-100 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) return <div className="pt-32 text-center">Product not found.</div>;

  const data = product.data;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#FDFCFB]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto scrollbar-hide">
              {(data.images || [null, null]).map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 aspect-[3/4] bg-stone-50 flex-shrink-0 border-2 transition-all",
                    activeImage === idx ? "border-[#B08D57]" : "border-transparent"
                  )}
                >
                  <img 
                    alt={`${data.name} thumb ${idx}`}
                    data-strk-img-id={`prod-thumb-${id}-${idx}`}
                    data-strk-img={data.images?.[idx] || `[prod-name-pdp] jewelry closeup view ${idx}`}
                    data-strk-img-ratio="3x4"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-stone-50 overflow-hidden rounded-sm">
               <img 
                  alt={data.name}
                  data-strk-img-id={`prod-main-${id}`}
                  data-strk-img={data.images?.[activeImage] || `[prod-name-pdp] high end jewelry editorial shot`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <header className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#B08D57] mb-4 font-bold">{data.category}</p>
              <h1 id="prod-name-pdp" className="text-3xl md:text-4xl font-serif mb-4 uppercase tracking-[0.1em]">{data.name}</h1>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-serif">${data.price}</span>
                <div className="flex items-center space-x-1 border-l border-stone-200 pl-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-3 h-3", i < Math.floor(data.rating || 0) ? "text-[#B08D57] fill-[#B08D57]" : "text-stone-200")} />
                  ))}
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest ml-1">(24 Reviews)</span>
                </div>
              </div>
            </header>

            <p className="text-stone-500 font-light mb-10 leading-relaxed max-w-md">
              {data.description || "Sophisticated and timeless, this piece is designed to be worn every day. Hand-finished with 18K gold and attention to every detail."}
            </p>

            <div className="space-y-10 mb-10">
              {/* Variant Selector */}
              {data.variants && (
                <div>
                   <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Tone: {selectedVariant}</h4>
                   <div className="flex gap-4">
                    {data.variants.map(variant => (
                      <button 
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={cn(
                          "px-6 py-2 border text-[10px] uppercase tracking-widest font-bold transition-all",
                          selectedVariant === variant ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "border-stone-200 hover:border-stone-400"
                        )}
                      >
                        {variant}
                      </button>
                    ))}
                   </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                 <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Quantity</h4>
                 <div className="flex items-center border border-stone-200 w-32">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-stone-50 flex-1 flex justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm w-10 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-stone-50 flex-1 flex justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                 </div>
              </div>
            </div>

            <button 
              onClick={() => addToCart(product, quantity, selectedVariant)}
              className="w-full bg-[#1A1A1A] text-white py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-[#333333] transition-all mb-12 shadow-sm"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-stone-100">
              <Accordion title="Description">
                 {data.details || "This piece is hand-crafted with high-quality materials to ensure longevity and timeless appeal."}
              </Accordion>
              <Accordion title="Materials & Care">
                 {data.materials || "Typically crafted with 18K gold plated brass. Avoid direct contact with water, perfume, and lotions. Store in the provided pouch."}
              </Accordion>
              <Accordion title="Shipping & Returns">
                 {data.shipping || "Enjoy free shipping on all orders over $50. We offer a 30-day return window for all unword jewelry in original packaging."}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-24 border-t border-stone-100">
           <h2 className="text-2xl font-serif text-center mb-12">You May Also Like</h2>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
