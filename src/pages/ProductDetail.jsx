import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { Star, Plus, Minus, ChevronRight, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeVariant, setActiveVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const { data: response } = await client
        .from('Product')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (response?.success) {
        setProduct(response.data);
        setActiveVariant(response.data.data.variants[0]);
        
        // Fetch related products
        const { data: relResponse } = await client
          .from('Product')
          .select('*')
          .neq('slug', slug)
          .limit(4);
        
        if (relResponse?.success) {
          setRelatedProducts(relResponse.data.list);
        }
      }
      setLoading(false);
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-40 pb-24 text-center">
        <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center space-y-6">
        <h1 className="text-3xl font-serif italic">The piece you're looking for was not found</h1>
        <Link to="/shop">
          <Button variant="outline">Return to Collection</Button>
        </Link>
      </div>
    );
  }

  const fields = product.data;

  return (
    <div className="pt-32 pb-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <Link to={`/shop?category=${fields.category}`} className="hover:text-primary transition-colors">{fields.category}</Link>
          <ChevronRight size={10} />
          <span className="text-primary font-bold">{fields.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-stone-100 overflow-hidden relative">
              <img
                data-strk-img-id={`main-img-${product.id}`}
                data-strk-img={`[pd-title] [pd-desc] gold jewelry professional studio shot`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={fields.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={cn(
                  "aspect-[3/4] bg-stone-100 overflow-hidden cursor-pointer border-2 transition-all",
                  i === 1 ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                )}>
                  <img
                    data-strk-img-id={`thumb-${product.id}-${i}`}
                    data-strk-img={`[pd-title] detail macro shot gold`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${fields.name} detail ${i}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-4 border-b border-hairline pb-10">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">Velmora Fine</p>
                <h1 id="pd-title" className="text-3xl lg:text-5xl font-serif uppercase tracking-widest">{fields.name}</h1>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-2xl tracking-[0.1em] font-sans">${fields.price}</p>
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <div className="flex text-accent space-x-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span>(24 Reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <p id="pd-desc" className="text-muted-foreground font-sans leading-relaxed tracking-wide">
                {fields.description}
              </p>

              {/* Variant Selector */}
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest font-bold">Metal: <span className="font-medium text-muted-foreground">{activeVariant} Tone</span></span>
                <div className="flex space-x-4">
                  {fields.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setActiveVariant(v)}
                      className={cn(
                        "w-12 h-12 rounded-full border flex items-center justify-center transition-all relative overflow-hidden",
                        activeVariant === v ? "border-primary p-0.5" : "border-hairline"
                      )}
                    >
                      <div className={cn(
                        "w-full h-full rounded-full transition-all",
                        v === 'Gold' ? "bg-accent" : "bg-stone-300"
                      )} />
                      {activeVariant === v && <Check size={14} className="absolute text-secondary" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest font-bold">Quantity</span>
                <div className="flex items-center border border-hairline w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 px-5 hover:bg-stone-50 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-md px-6 min-w-[50px] text-center font-sans">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 px-5 hover:bg-stone-50 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <Button 
                size="full" 
                className="w-full py-6 uppercase tracking-[0.3em] font-bold text-sm"
                onClick={() => addToCart(fields, activeVariant)}
              >
                Add to Bag
              </Button>

              <div className="flex items-center justify-center space-x-6 text-[10px] uppercase tracking-widest text-muted-foreground font-medium pt-4 border-t border-hairline/10">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>In Stock</span>
                </div>
                <span>Free Ship & Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-hairline divide-y divide-hairline">
              {[
                { id: 'description', title: 'Product Details', content: fields.description },
                { id: 'materials', title: 'Materials & Care', content: fields.details.care },
                { id: 'shipping', title: 'Shipping & Returns', content: fields.details.shipping }
              ].map((acc) => (
                <div key={acc.id} className="py-6">
                  <button 
                    className="w-full flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-bold text-left group"
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                  >
                    <span>{acc.title}</span>
                    <ChevronDown size={14} className={cn("transition-transform duration-300", activeAccordion === acc.id && "rotate-180")} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeAccordion === acc.id ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 space-y-12">
          <div className="text-center space-y-2">
            <h2 id="rel-title" className="text-3xl font-serif italic">Complete the Look</h2>
            <p className="text-muted-foreground font-sans tracking-wide">Expertly curated to complement your selection.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((p) => {
              const pFields = p.data;
              return (
                <div key={p.id} className="group flex flex-col space-y-4">
                  <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
                    <Link to={`/product/${pFields.slug}`}>
                      <img
                        data-strk-img-id={`rel-prod-${p.id}`}
                        data-strk-img={`[rel-prod-title-${p.id}] [rel-title] gold jewelry curated`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={pFields.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="space-y-1 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{pFields.category}</p>
                    <h3 id={`rel-prod-title-${p.id}`} className="uppercase tracking-widest text-[11px] font-bold">
                      <Link to={`/product/${pFields.slug}`} className="hover:text-accent transition-colors">
                        {pFields.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">${pFields.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
