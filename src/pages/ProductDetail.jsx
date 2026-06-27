import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductBySlug, fetchProducts } from '@/api/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import { Star, ChevronDown, ChevronRight, Share2, Heart, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVariant, setActiveVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const data = await fetchProductBySlug(slug);
        setProduct(data);
        if (data.data.variants?.length > 0) {
          setActiveVariant(data.data.variants[0]);
        }
        
        const allProducts = await fetchProducts();
        setRelated(allProducts.filter(p => p.id !== data.id).slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (loading) return (
    <div className="pt-32 pb-24 min-h-screen container-custom flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
    </div>
  );

  if (!product) return (
    <div className="pt-40 pb-24 text-center">
      <h1 className="text-4xl font-serif mb-8">Jewel Not Found</h1>
      <Link to="/shop" className="text-sm border-b border-obsidian pb-1 uppercase tracking-widest font-bold">Return to Collection</Link>
    </div>
  );

  const { name, price, description, variants, category } = product.data;

  const accordions = [
    { id: 'description', title: 'Description', content: description },
    { id: 'materials', title: 'Materials & Care', content: "Our jewelry is hand-crafted in 18K Gold Plated Vermeil or Sterling Silver. To maintain its brilliance, avoid contact with perfumes and water. Gently polish with a soft cloth after each wear." },
    { id: 'shipping', title: 'Shipping & Returns', content: "Complimentary worldwide shipping on all orders over $75. 30-day returns on unworn pieces. Each order arrives in a signature Velmora editorial box." }
  ];

  return (
    <div ref={containerRef} className="pt-24 lg:pt-32 pb-24 bg-parchment min-h-screen">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="flex gap-2 text-[10px] tracking-widest uppercase text-stone-400 mb-12">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop/${category.toLowerCase()}`} className="hover:text-gold">{category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-obsidian">{name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Gallery */}
          <div className="flex-1 lg:max-w-[600px]">
            <div className="aspect-[3/4] bg-stone-muted relative overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-name-${product.id}] gold jewelry editorial close-up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 text-[10px] tracking-[0.2em] font-bold uppercase">
                Ethically Sourced
              </span>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-[1/1] bg-stone-muted overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-name-${product.id}] detail view ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${name} view ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 lg:max-w-md">
            <h1 id={`pdp-name-${product.id}`} className="text-4xl lg:text-5xl font-serif mb-4 leading-tight tracking-tight uppercase tracking-[0.05em]">
              {name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-serif">{formatPrice(price)}</span>
              <div className="flex items-center gap-2 border-l border-stone-muted pl-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold" />)}
                </div>
                <span className="text-[10px] tracking-widest text-stone-400 uppercase">24 Reviews</span>
              </div>
            </div>

            <p className="text-stone-500 font-light leading-relaxed mb-10 pb-10 border-b border-stone-muted">
              {description}
            </p>

            {/* Selection */}
            <div className="space-y-10 mb-12">
              <div>
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase mb-4 block">Select Tone</span>
                <div className="flex gap-3">
                  {variants?.map(v => (
                    <button
                      key={v}
                      onClick={() => setActiveVariant(v)}
                      className={cn(
                        "px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-bold border transition-all duration-300",
                        activeVariant === v ? "bg-obsidian text-white border-obsidian" : "border-stone-muted text-stone-500 hover:border-gold"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase mb-4 block">Quantity</span>
                <div className="flex items-center border border-stone-muted w-max bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:text-gold transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:text-gold transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <button 
                onClick={() => {
                  addToCart(product, activeVariant);
                  toast.success(`${name} added to your bag`);
                }}
                className="flex-1 bg-obsidian text-white py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-gold transition-all duration-500 shadow-xl"
              >
                ADD TO BAG
              </button>
              <button className="px-5 border border-stone-muted hover:border-gold transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="px-5 border border-stone-muted hover:border-gold transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-stone-muted pt-4 space-y-2">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-stone-muted/50 last:border-b-0">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? '' : acc.id)}
                    className="w-full flex items-center justify-between py-5 text-[10px] tracking-[0.2em] font-bold uppercase text-left group"
                  >
                    {acc.title}
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-500", activeAccordion === acc.id && "rotate-180")} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-500",
                    activeAccordion === acc.id ? "max-h-60 pb-8" : "max-h-0"
                  )}>
                    <p className="text-sm font-light text-stone-500 leading-relaxed font-sans">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-40">
          <div className="flex justify-between items-end mb-16 border-b border-stone-muted pb-8">
            <h2 className="text-3xl font-serif">You May Also Like</h2>
            <Link to="/shop" className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-stone-muted pb-1 hover:text-gold hover:border-gold transition-all">Shop All</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map((item) => (
              <div key={item.id} className="group">
                <Link to={`/product/${item.data.slug}`} className="block aspect-[3/4] bg-stone-muted overflow-hidden relative mb-6">
                  <img
                    data-strk-img-id={`related-${item.id}`}
                    data-strk-img={`[related-name-${item.id}] jewelry editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.data.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="text-center">
                  <h3 id={`related-name-${item.id}`} className="text-[10px] font-medium tracking-[0.2em] uppercase mb-2 group-hover:text-gold transition-colors">{item.data.name}</h3>
                  <p className="font-serif text-sm text-stone-500">{formatPrice(item.data.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
