import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { SEED_PRODUCTS } from '../constants/products';
import strkImgConfig from '../strk-img-config.json';
import { Plus, Minus, Star, ChevronDown, ChevronUp, Share2, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/common/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('GOLD');
  const [activeTab, setActiveTab] = useState('description');
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, relatedProducts]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data, error } = await client.from('Products').select('*').eq('id', id).single();
        if (!error && data?.success) {
          setProduct(data.data);
          fetchRelated(data.data.data.category);
        } else {
          // Find in seed data
          const seedProduct = SEED_PRODUCTS.find(p => p.id === id);
          if (seedProduct) {
            setProduct(seedProduct);
            fetchRelated(seedProduct.data.category);
          }
        }
      } catch (err) {
        const seedProduct = SEED_PRODUCTS.find(p => p.id === id);
        if (seedProduct) {
          setProduct(seedProduct);
          fetchRelated(seedProduct.data.category);
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchRelated = async (category) => {
      try {
        const { data, error } = await client
          .from('Products')
          .select('*')
          .eq('category', category)
          .neq('id', id)
          .limit(4);
        if (!error && data?.success && data?.data?.list?.length > 0) {
          setRelatedProducts(data.data.list);
        } else {
          setRelatedProducts(SEED_PRODUCTS.filter(p => p.data.category === category && p.id !== id).slice(0, 4));
        }
      } catch (err) {
        setRelatedProducts(SEED_PRODUCTS.filter(p => p.data.category === category && p.id !== id).slice(0, 4));
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div className="pt-40 text-center font-serif italic text-2xl">Refining your treasure...</div>;
  if (!product) return <div className="pt-40 text-center font-serif italic text-2xl">Treasure not found.</div>;

  const data = product.data;

  const accordions = [
    { id: 'description', title: 'Description', content: data.description },
    { id: 'materials', title: 'Materials & Care', content: "Our pieces are crafted from 18K Gold Plated Brass, finished with an anti-tarnish coating for lasting brilliance. To preserve the radiance: remove before swimming, showering, or exercise. Clean with a soft lint-free cloth." },
    { id: 'shipping', title: 'Shipping & Returns', content: "Complimentary worldwide shipping on all orders. Returns are accepted within 30 days of delivery for a full refund or exchange. Items must be returned in original packaging with tags attached." }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="flex-1 space-y-4">
          <div className="aspect-[4/5] bg-surface overflow-hidden">
            <img
              data-strk-img-id={`detail-main-${product.id}`}
              data-strk-img={`[detail-name] jewelry gold luxury studio product photo`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-surface overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                   <img
                    data-strk-img-id={`detail-thumb-${product.id}-${i}`}
                    data-strk-img={`[detail-name] detail angle ${i} jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${data.name} view ${i}`}
                     className="w-full h-full object-cover"
                   />
                </div>
             ))}
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-[450px] space-y-10">
          <div className="space-y-4">
            <p className="text-[11px] text-muted uppercase tracking-[0.3em] font-semibold">{data.category}</p>
            <h1 id="detail-name" className="font-serif text-5xl uppercase tracking-[0.1em] leading-tight">{data.name}</h1>
            <div className="flex items-baseline justify-between">
               <p className="font-serif text-2xl">${data.price}</p>
               <div className="flex items-center gap-2">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted">12 Reviews</span>
               </div>
            </div>
            <p className="font-sans text-muted leading-relaxed italic">{data.description}</p>
          </div>

          <div className="space-y-8">
            {/* Variant Selector */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold">Finish: {variant}</label>
              <div className="flex gap-4">
                {['GOLD', 'SILVER'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-8 py-3 text-[10px] tracking-widest uppercase font-bold border transition-all ${
                      variant === v ? 'border-foreground bg-foreground text-background' : 'border-border text-muted hover:border-accent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold">Quantity</label>
              <div className="flex items-center border border-border w-32 py-3 px-4 justify-between">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-accent"><Minus size={16} /></button>
                <span className="text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="hover:text-accent"><Plus size={16} /></button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <button 
                onClick={() => addToCart(product, variant)}
                className="flex-1 bg-foreground text-background py-5 uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-accent transition-colors duration-500"
              >
                Add to Cart
              </button>
              <button className="flex items-center justify-center border border-border px-5 hover:text-accent transition-colors">
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Accordions */}
          <div className="border-t border-border mt-12">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-b border-border">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === acc.id ? '' : acc.id)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="font-serif uppercase tracking-[0.1em] text-sm group-hover:text-accent transition-colors">{acc.title}</span>
                  {openAccordion === acc.id ? <ChevronUp size={18} strokeWidth={1.5} /> : <ChevronDown size={18} strokeWidth={1.5} />}
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openAccordion === acc.id ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                   <p className="text-muted text-sm leading-relaxed whitespace-pre-line">{acc.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-6 flex justify-center">
             <button className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-[10px] uppercase tracking-widest font-bold">
               <Share2 size={14} />
               Share this treasure
             </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-40">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Complete Your Look</h2>
            <p className="text-muted text-[10px] uppercase tracking-widest font-semibold italic">Treasures often found together</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
