import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Star, Minus, Plus, Share2, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { toast } from "sonner";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('gold');
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const { data: response } = await client
          .from('Products')
          .select('*')
          .eq('id', id)
          .single();
        
        if (response?.data) {
          setProduct(response.data);
          
          // Fetch related products
          const { data: relatedResponse } = await client
            .from('Products')
            .select('*')
            .eq('category', response.data.data.category)
            .neq('id', id)
            .limit(4);
            
          if (relatedResponse?.data?.list) {
            setRelatedProducts(relatedResponse.data.list);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
    setQuantity(1);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-32 px-6 lg:px-20 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="aspect-[3/4] bg-muted w-full" />
          <div className="space-y-8">
            <div className="h-10 bg-muted w-3/4" />
            <div className="h-6 bg-muted w-1/4" />
            <div className="h-20 bg-muted w-full" />
            <div className="h-12 bg-muted w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="font-serif text-3xl mb-4 text-[#1A1A1A]">Product Not Found</h2>
        <Button asChild variant="outline">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const { data } = product;
  const colors = data.color_variants || ['gold', 'silver'];

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] bg-muted relative overflow-hidden">
              <img
                src={data.image_url}
                alt={data.name}
                className="w-full h-full object-cover"
                data-strk-img={`[product-title] [product-category] detailed view`}
                data-strk-img-id={`pdp-main-img-${id}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-muted cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    src={data.image_url}
                    alt={`${data.name} view ${i}`}
                    className="w-full h-full object-cover"
                    data-strk-img={`[product-title] angle ${i}`}
                    data-strk-img-id={`pdp-thumb-${id}-${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p id="product-category" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-sans">
                    {data.category}
                  </p>
                  <h1 id="product-title" className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase leading-tight">
                    {data.name}
                  </h1>
                </div>
                <button className="p-2 hover:bg-muted rounded-full transition-colors">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-sans">${data.price}</span>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-accent text-accent" />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans mt-0.5">(12 Reviews)</span>
                </div>
              </div>

              <p className="text-muted-foreground font-sans leading-relaxed">
                {data.description}
              </p>
            </div>

            <Separator />

            {/* Option Selectors */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-widest font-sans font-bold">Finish: <span className="text-muted-foreground font-normal">{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</span></p>
                <div className="flex gap-3">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-2 border text-[10px] uppercase tracking-widest transition-all ${
                        selectedColor === color 
                          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' 
                          : 'border-border text-muted-foreground hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-widest font-sans font-bold">Quantity</p>
                <div className="flex items-center border border-border w-32 py-2">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="flex-1 flex justify-center hover:text-accent transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-sans">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="flex-1 flex justify-center hover:text-accent transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                onClick={() => {
                  addToCart(product, quantity);
                  toast.success(`${data.name} added to cart`);
                }}
                className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white rounded-none py-7 uppercase tracking-[0.2em] text-xs font-bold"
              >
                Add to Cart
              </Button>
              <div className="flex justify-center gap-8 py-4 px-6 bg-[#F9F7F4] text-[10px] uppercase tracking-widest font-sans text-muted-foreground">
                <div className="flex items-center gap-2"><Truck size={14} /> Free Shipping</div>
                <div className="flex items-center gap-2"><RotateCcw size={14} /> 30-Day Returns</div>
                <div className="flex items-center gap-2"><ShieldCheck size={14} /> 2-Year Warranty</div>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="uppercase tracking-widest text-xs font-serif py-4 hover:no-underline">Details</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-sans">
                  The {data.name} is a testament to Velmora's commitment to quiet luxury. 
                  Designed for versatile wear, it seamlessly transitions from morning 
                  coffee to evening affairs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="uppercase tracking-widest text-xs font-serif py-4 hover:no-underline">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-sans space-y-4">
                  <p><span className="font-bold text-foreground">Materials:</span> {data.materials}</p>
                  <p><span className="font-bold text-foreground">Care:</span> {data.care_instructions}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border border-b">
                <AccordionTrigger className="uppercase tracking-widest text-xs font-serif py-4 hover:no-underline">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-sans">
                  Complimentary worldwide shipping is included on every order. 
                  Returns are accepted within 30 days of delivery, provided the 
                  jewelry is in its original, unworn condition.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-40 px-6 lg:px-20 max-w-7xl mx-auto w-full">
          <h2 className="font-serif text-3xl uppercase tracking-widest mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group space-y-4">
                <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={p.data?.image_url}
                    alt={p.data?.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-strk-img={`[related-name-${p.id}]`}
                    data-strk-img-id={`related-img-${p.id}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                  />
                </Link>
                <div className="text-center space-y-1">
                  <h3 
                    id={`related-name-${p.id}`}
                    className="font-serif text-lg tracking-wide uppercase leading-tight"
                  >
                    <Link to={`/product/${p.id}`}>{p.data?.name}</Link>
                  </h3>
                  <p className="font-sans text-sm">${p.data?.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
