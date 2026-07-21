import { FALLBACK_PRODUCTS } from '@/lib/constants';
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { useCart } from '@/lib/CartContext';
import { cn, formatPrice } from '@/lib/utils';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight, Star, Plus, Minus, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [activeTab, setActiveTab] = useState('description');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data: response, error } = await client
          .from('JewelryProduct')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error || !response?.data) throw error || new Error('Not found');
        setProduct(response.data);
      } catch (err) {
        console.error('Failed to fetch product:', err);
        const fb = FALLBACK_PRODUCTS.find(p => p.id === id);
        if (fb) setProduct(fb);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
      const fetchRelated = async () => {
        try {
            const { data: relatedResponse } = await client
            .from('JewelryProduct')
            .select('*')
            .eq('category', product.data?.category || product.category)
            .neq('id', id)
            .limit(4);
            
            setRelatedProducts(relatedResponse?.data?.list?.length ? relatedResponse.data.list : FALLBACK_PRODUCTS.slice(0, 4));
        } catch (err) {
            setRelatedProducts(FALLBACK_PRODUCTS.slice(0, 4));
        }
      }
      fetchRelated();
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product, id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) return <div className="py-40 text-center">Product not found</div>;

  const fields = product.data || product;

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-medium">{fields.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 mb-32">
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:h-[600px] flex-shrink-0">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 md:w-24 aspect-[3/4] bg-muted flex-shrink-0 overflow-hidden cursor-pointer">
                  <img 
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                    data-strk-img={`[prod-title] alternate view ${i} jewelry gold editorial`}
                    data-strk-img-id={`prod-thumb-${id}-${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={`${fields.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-1 aspect-[3/4] bg-muted overflow-hidden">
              <img 
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                data-strk-img={`[prod-title] jewelry gold editorial white background main`}
                data-strk-img-id={`prod-main-${id}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                alt={fields.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4 block">
                {fields.category}
              </span>
              <h1 id="prod-title" className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
                {fields.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-sans font-medium">{formatPrice(fields.price)}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">(12 reviews)</span>
                </div>
              </div>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                {fields.description}
              </p>
            </div>

            <div className="mb-8 p-6 bg-muted/30 border border-border">
               <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Select Tone</p>
               <div className="flex gap-3">
                  {['Gold', 'Silver'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        "px-6 py-2 border transition-all duration-300 text-[10px] uppercase tracking-widest font-medium",
                        selectedVariant === variant 
                          ? "bg-primary text-white border-primary" 
                          : "bg-white text-muted-foreground border-border hover:border-muted-foreground"
                      )}
                    >
                      {variant}
                    </button>
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-4 mb-12">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border h-[52px]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-10 text-center text-sm font-sans">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity, selectedVariant)}
                  className="premium-button flex-1 h-[52px]"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="border-t border-border">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((title) => (
                <div key={title} className="border-b border-border">
                  <button
                    onClick={() => setActiveTab(activeTab === title ? null : title)}
                    className="w-full flex items-center justify-between py-6 text-left hover:text-accent transition-colors group"
                  >
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-colors">
                      {title}
                    </span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-500", activeTab === title && "rotate-180")} />
                  </button>
                  {activeTab === title && (
                    <div className="pb-8 text-sm text-muted-foreground leading-relaxed font-sans">
                      {title === 'Description' && (fields.description || 'Elegantly minimal piece.')}
                      {title === 'Materials & Care' && '18K Gold Plated. Hypoallergenic.'}
                      {title === 'Shipping & Returns' && 'Free worldwide shipping over $75.'}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="pt-24 border-t border-border">
            <h2 className="text-3xl font-serif text-center mb-16">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
