import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight, Star, Minus, Plus, ShieldCheck, Truck, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-xs uppercase letter-spacing-wide hover:opacity-70 transition-opacity"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>
      {isOpen && (
        <div className="mt-6 text-sm text-primary/70 leading-relaxed font-sans font-light animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setProduct(response?.data);
        
        // Fetch related products (same category, different slug)
        if (response?.data) {
          const { data: relatedResponse } = await client
            .from('Products')
            .select('*')
            .eq('category', response.data.data.category)
            .neq('slug', slug)
            .limit(4);
          setRelatedProducts(relatedResponse?.data?.list || []);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!loading && product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, product]);

  if (loading) return <div className="h-screen bg-white" />;
  if (!product) return <div className="h-screen flex items-center justify-center font-serif text-2xl">Piece not found</div>;

  const data = product.data || product;

  return (
    <div className="pt-24 pb-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase letter-spacing-wide text-primary/40 mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${data.category}`} className="hover:text-primary transition-colors">{data.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">{data.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={cn(
                    "flex-shrink-0 w-20 md:w-24 aspect-[3/4] bg-accent transition-all duration-300 ring-offset-2",
                    activeThumb === i ? "ring-1 ring-primary" : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                  )}
                >
                    <img
                        data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                        data-strk-img={`[pdp-title] gold jewelry editorial close up detail shot aesthetic`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=200&auto=format&fit=crop"
                        alt={`${data.name} Thumb ${i}`}
                        className="w-full h-full object-cover"
                    />
                </button>
              ))}
            </div>
            <div className="flex-grow aspect-[3/4] bg-accent overflow-hidden relative">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-title] gold jewelry high end editorial portrait lifestyle close up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
                alt={data.name}
                className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="space-y-6 mb-12 border-b pb-12">
              <h1 id="pdp-title" className="text-4xl md:text-5xl uppercase tracking-[0.1em]">{data.name}</h1>
              <div className="flex items-center gap-6">
                <span className="font-serif text-2xl">${data.price}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-accent-gold fill-accent-gold" />
                  ))}
                  <span className="text-[10px] uppercase letter-spacing-wide text-primary/40 ml-2">48 Reviews</span>
                </div>
              </div>
              <p className="text-sm text-primary/70 leading-relaxed font-sans font-light max-w-lg">
                {data.description || "Thoughtfully designed for everyday elegance. This piece captures the essence of quiet luxury, making it a perfect addition to your curated collection."}
              </p>
            </div>

            <div className="space-y-8 mb-12">
              {/* Variant Selector */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase letter-spacing-wide">Metal Tone</span>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-primary text-white text-[10px] uppercase letter-spacing-wide transition-all ring-1 ring-primary ring-offset-2">18K Gold Plated</button>
                  <button className="px-8 py-3 bg-white border border-gray-200 text-primary/40 text-[10px] uppercase letter-spacing-wide transition-all hover:border-primary">Rhodium Silver</button>
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase letter-spacing-wide">Quantity</span>
                <div className="flex items-center border border-gray-200 w-32 justify-between">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-50"><Minus className="w-4 h-4" /></button>
                  <span className="text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50"><Plus className="w-4 h-4" /></button>
                </div>
              </div>

              <button
                onClick={() => {
                  addToCart(product, quantity);
                  toast.success(`${data.name} added to cart`);
                }}
                className="w-full bg-primary text-white py-5 uppercase letter-spacing-wide text-xs hover:bg-black transition-all duration-300 transform active:scale-[0.98]"
              >
                Add to Bag
              </button>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="flex flex-col items-center gap-2 text-center">
                    <Truck className="w-5 h-5 opacity-40" />
                    <span className="text-[9px] uppercase letter-spacing-wide text-primary/60">Express Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <RefreshCw className="w-5 h-5 opacity-40" />
                    <span className="text-[9px] uppercase letter-spacing-wide text-primary/60">30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <ShieldCheck className="w-5 h-5 opacity-40" />
                    <span className="text-[9px] uppercase letter-spacing-wide text-primary/60">2-Year Warranty</span>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t">
              <Accordion title="Details & Fit">
                <ul className="space-y-2 list-disc pl-4">
                  <li>Handcrafted with recycled premium brass base</li>
                  <li>Heavily plated in 18K Gold (2.5 microns)</li>
                  <li>Nickel, lead, and cadmium free</li>
                  <li>Suitable for sensitive skin types</li>
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  To keep your Velmora pieces looking their best, we recommend removing them before showering, exercising, or sleeping. Store in your provided jewelry pouch when not in use.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide express shipping on orders over $100. We offer a hassle-free 30-day return policy for all unworn jewelry.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t pt-24">
              <h2 className="text-3xl mb-12 text-center font-serif">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {relatedProducts.map((rel) => {
                      const relData = rel.data || rel;
                      return (
                          <div key={rel.id} className="group flex flex-col items-center">
                              <Link to={`/product/${relData.slug}`} className="relative w-full aspect-[3/4] overflow-hidden bg-accent">
                                  <img
                                      data-strk-img-id={`rel-product-img-${rel.id}`}
                                      data-strk-img={`[rel-product-title-${rel.id}] gold jewelry editorial close up aesthetic`}
                                      data-strk-img-ratio="2x3"
                                      data-strk-img-width="600"
                                      src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600&auto=format&fit=crop"
                                      alt={relData.name}
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                              </Link>
                              <div className="mt-6 text-center space-y-1">
                                  <h3 id={`rel-product-title-${rel.id}`} className="text-[10px] uppercase letter-spacing-wide font-medium">{relData.name}</h3>
                                  <p className="font-serif italic text-primary/60 text-sm">${relData.price}</p>
                              </div>
                          </div>
                      );
                  })}
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
