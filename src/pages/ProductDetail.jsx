import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import ProductCard from '@/components/product/ProductCard';
import { Star, ChevronRight, ChevronLeft, Minus, Plus, ShoppingBag, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

import { useCart } from '@/context/CartContext';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [material, setMaterial] = useState('Gold Tone');
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    async function fetchProductData() {
      setLoading(true);
      try {
        const { data: response } = await client.from('Products').select('*').eq('id', id).single();
        if (response?.success) {
          setProduct(response.data);
          
          // Fetch related
          const { data: relatedRes } = await client
            .from('Products')
            .select('*')
            .eq('category', response.data.data.category)
            .neq('id', id)
            .limit(4);
          setRelatedProducts(relatedRes?.data?.list || []);
        }
      } catch (err) {
        console.error('Failed to fetch product:', err);
      } finally {
        setLoading(false);
        window.scrollTo(0, 0);
      }
    }
    fetchProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-40 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-pulse">
          <div className="aspect-[3/4] bg-muted" />
          <div className="flex flex-col gap-8">
            <div className="h-4 bg-muted w-1/4" />
            <div className="h-10 bg-muted w-3/4" />
            <div className="h-6 bg-muted w-1/4" />
            <div className="h-24 bg-muted w-full" />
            <div className="h-12 bg-muted w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  const { name, price, description, rating, reviewCount, category } = product.data;

  const tabs = [
    { id: 'description', label: 'Description', content: description },
    { id: 'materials', label: 'Materials & Care', content: "Handcrafted in 18K Gold Vermeil: a thick layer of solid 18K gold (at least 2.5 microns) over a base of recycled 925 Sterling Silver. This provides a long-lasting, premium finish that is hypoallergenic and nickel-free." },
    { id: 'shipping', label: 'Shipping & Returns', content: "Complimentary standard shipping on all orders. We offer a 30-day return policy for unused items in their original packaging. Please note that for hygiene reasons, earrings are non-returnable unless faulty." },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase-spaced font-bold text-muted-foreground mb-12">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-accent">Shop All</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Gallery Shell */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-4 w-20 order-2 md:order-1">
              {[1, 2, 3].map((img) => (
                <div key={img} className="aspect-[3/4] bg-muted overflow-hidden transition-luxury hover:opacity-80 cursor-pointer">
                   <img
                    data-strk-img-id={`detail-thumb-${id}-${img}`}
                    data-strk-img={`[prod-name] jewelry ${img}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                    alt={name}
                  />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-muted overflow-hidden relative order-1 md:order-2">
              <img
                data-strk-img-id={`detail-main-${id}`}
                data-strk-img={`[prod-name] jewelry close-up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover"
                alt={name}
                id="prod-name-id"
              />
              <div id="prod-name" className="hidden">{name}</div>
            </div>
          </div>

          {/* Info Side */}
          <div className="flex flex-col">
            <span className="text-[10px] uppercase-spaced font-bold text-accent mb-4">{category}</span>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{name}</h1>
            
            <div className="flex items-center gap-6 mb-8">
              <span className="text-2xl font-light">${price}</span>
              <div className="flex items-center gap-2 border-l border-border pl-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-3 h-3", i < Math.floor(rating) ? "fill-accent text-accent" : "fill-muted text-muted")} />
                  ))}
                </div>
                <span className="text-[10px] uppercase-spaced font-bold text-muted-foreground">{reviewCount} Reviews</span>
              </div>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
              {description}
            </p>

            <div className="hairline mb-8" />

            {/* Selection */}
            <div className="flex flex-col gap-10 mb-12">
              <div>
                <span className="text-[10px] uppercase-spaced font-bold block mb-4">Material: {material}</span>
                <div className="flex gap-4">
                  {['Gold Tone', 'Silver Tone'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMaterial(m)}
                      className={cn(
                        "px-8 py-3 border text-[10px] uppercase-spaced font-bold transition-all",
                        material === m ? "border-foreground bg-foreground text-white" : "border-border hover:border-foreground"
                      )}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center border border-border h-14">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-5 hover:text-accent transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-5 hover:text-accent transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity, material)}
                  className="flex-1 bg-foreground text-white h-14 uppercase-spaced text-xs font-bold hover:bg-accent transition-luxury flex items-center justify-center gap-3 px-8"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-border/40">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-5 h-5 text-accent" />
                <span className="text-[9px] uppercase-spaced font-bold">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-5 h-5 text-accent" />
                <span className="text-[9px] uppercase-spaced font-bold">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-[9px] uppercase-spaced font-bold">Safe Payments</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              {tabs.map((tab) => (
                <div key={tab.id} className="border-b border-border/40 overflow-hidden">
                  <button 
                    onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                    className="w-full flex justify-between items-center py-6 text-[10px] uppercase-spaced font-bold hover:text-accent transition-colors"
                  >
                    {tab.label}
                    {activeTab === tab.id ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </button>
                  <div className={cn(
                    "transition-all duration-500 ease-in-out",
                    activeTab === tab.id ? "max-h-60 pb-8" : "max-h-0"
                  )}>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {tab.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif">You May Also Like</h2>
            <Link to="/shop" className="uppercase-spaced text-[10px] font-bold hover:text-accent border-b border-transparent hover:border-accent pb-1">Shop Collection</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
