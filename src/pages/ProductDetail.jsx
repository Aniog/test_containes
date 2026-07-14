import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { useCart } from '@/lib/cart-context';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SEED_PRODUCTS } from '@/lib/mock-data';
import { Plus, Minus, Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-xs uppercase tracking-widest font-medium text-left"
      >
        {title}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 pb-6 text-sm text-muted-foreground leading-relaxed" : "max-h-0"
      )}>
        {children}
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data: response } = await client.from('Products').select('*').eq('id', id).single();
        if (response?.data) {
          setProduct(response.data);
        } else {
          const mock = SEED_PRODUCTS.find(p => p.id === id);
          if (mock) setProduct(mock);
        }
      } catch (err) {
        const mock = SEED_PRODUCTS.find(p => p.id === id);
        if (mock) setProduct(mock);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (loading) return <div className="h-screen flex items-center justify-center font-serif italic text-muted-foreground">Loading treasures...</div>;
  if (!product) return <div className="h-screen flex items-center justify-center font-serif italic text-muted-foreground">Product not found.</div>;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-background min-h-screen">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground mb-12">
          <ArrowLeft size={14} /> Back to Collection
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Gallery */}
          <div className="flex-1 flex flex-col-reverse md:flex-row gap-4">
             <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar">
                {product.data.images?.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={cn(
                      "w-20 md:w-24 aspect-[3/4] bg-muted flex-shrink-0 border-2 transition-colors",
                      activeImg === i ? "border-primary" : "border-transparent"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
             </div>
             <div className="flex-1 aspect-[3/4] bg-muted relative overflow-hidden">
                <img
                  data-strk-img-id={`detail-img-${id}`}
                  data-strk-img={`[detail-name-${id}] gold fine jewelry close up luxury editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src={product.data.images[activeImg]}
                  alt={product.data.name}
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Info */}
          <div className="flex-1 lg:max-w-md">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{product.data.category}</p>
            <h1 id={`detail-name-${id}`} className="text-3xl font-serif mb-2 uppercase tracking-widest">{product.data.name}</h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-xl font-serif italic text-muted-foreground">${product.data.price}</span>
              <div className="flex items-center gap-1 text-accent border-l border-border pl-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                <span className="text-[10px] text-muted-foreground ml-1 uppercase tracking-widest">(24 Reviews)</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              {product.data.description}
            </p>

            <div className="space-y-8 mb-12">
               <div>
                  <p className="text-[10px] uppercase tracking-widest font-medium mb-4">Material</p>
                  <div className="flex gap-2">
                     <button className="px-6 py-2 border border-primary text-xs uppercase tracking-widest font-medium bg-primary text-white">18K Gold Tone</button>
                     <button className="px-6 py-2 border border-border text-xs uppercase tracking-widest font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors">Sterling Silver</button>
                  </div>
               </div>

               <div>
                  <p className="text-[10px] uppercase tracking-widest font-medium mb-4">Quantity</p>
                  <div className="flex items-center border border-border w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-6 text-sm tabular-nums">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
               </div>
            </div>

            <button
               onClick={() => {
                 addToCart(product, quantity);
                 toast.success(`${product.data.name} added to bag`);
               }}
               className="w-full btn-premium py-5 mb-12"
            >
              Add to Bag
            </button>

            <div className="space-y-1">
               <Accordion title="Description">
                  Handcrafted pieces that blend artisanal heritage with modern design. Each piece is meticulously checked for quality and finish.
               </Accordion>
               <Accordion title="Materials & Care">
                  Made from high-quality 18K gold plated brass. Lead and nickel free. To maintain luster, avoid contact with water, sweat, and perfumes.
               </Accordion>
               <Accordion title="Shipping & Returns">
                  Free standard shipping on all orders over $75. 30-day returns accepted for unworn pieces in original packaging.
               </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 border-t border-border pt-24">
          <h2 className="text-2xl font-serif mb-12 text-center uppercase tracking-widest">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <RelatedProducts category={product.data.category} currentId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedProducts = ({ category, currentId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      const { data: response } = await client
        .from('Products')
        .select('*')
        .eq('category', category)
        .neq('id', currentId)
        .limit(4);
      
      if (response?.data?.list && response.data.list.length > 0) {
        setItems(response.data.list);
      } else {
        // Fallback to general products if none in same category
        const { data: general } = await client
          .from('Products')
          .select('*')
          .neq('id', currentId)
          .limit(4);
        if (general?.data?.list) setItems(general.data.list);
      }
    };
    fetchRelated();
  }, [category, currentId]);

  return items.map((prod) => (
    <Link key={prod.id} to={`/product/${prod.id}`} className="group">
      <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden relative">
        <img src={prod.data.images[0]} alt={prod.data.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <h3 className="text-[10px] uppercase tracking-widest font-medium mb-1">{prod.data.name}</h3>
      <p className="text-xs font-serif italic text-muted-foreground">${prod.data.price}</p>
    </Link>
  ));
};


export default ProductDetail;
