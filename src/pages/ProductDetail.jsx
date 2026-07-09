import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { Star, ChevronDown, ChevronUp, ChevronLeft, Heart, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/products/ProductCard';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Accordion = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-velmora-sand/30">
    <button
      onClick={onClick}
      className="w-full py-6 flex justify-between items-center group transition-colors hover:text-velmora-gold"
    >
      <span className="uppercase tracking-[0.2em] text-[11px] font-bold">{title}</span>
      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
    <div
      className={cn(
        'overflow-hidden transition-all duration-500 ease-in-out',
        isOpen ? 'max-h-[500px] pb-8' : 'max-h-0'
      )}
    >
      <div className="text-sm font-light leading-relaxed text-velmora-charcoal/70 space-y-4">
        {children}
      </div>
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTone, setSelectedTone] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data: response } = await client.from('Product').select('*').eq('id', id).single();
        if (response?.data) {
          setProduct(response.data);
          const tones = response.data.data?.tones || response.data.tones || ['Gold'];
          setSelectedTone(tones[0]);

          // Fetch related
          const { data: relatedRes } = await client
            .from('Product')
            .select('*')
            .eq('category', response.data.data?.category)
            .neq('id', id)
            .limit(4);
          setRelatedProducts(relatedRes?.data?.list || []);
        }
      } catch (err) {
        console.error('Failed to fetch product:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 px-6 md:px-12 bg-white min-h-screen animate-pulse">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-velmora-cream rounded-sm" />
          <div className="w-full md:w-1/2 space-y-8">
            <div className="h-4 bg-velmora-cream w-24" />
            <div className="h-12 bg-velmora-cream w-full" />
            <div className="h-8 bg-velmora-cream w-32" />
            <div className="h-32 bg-velmora-cream w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-48 pb-24 text-center space-y-8">
        <h1 className="text-4xl font-serif">Product not found</h1>
        <Link to="/shop" className="inline-block bg-velmora-charcoal text-white px-8 py-4 uppercase tracking-widest text-xs">
          Back to Shop
        </Link>
      </div>
    );
  }

  const data = product.data || product;

  return (
    <div className="pt-32 md:pt-40 pb-24 px-6 md:px-12 bg-white">
      <Link to="/shop" className="inline-flex items-center gap-2 mb-12 uppercase tracking-widest text-[10px] font-bold text-velmora-charcoal/40 hover:text-velmora-charcoal transition-colors">
        <ChevronLeft className="w-3 h-3" />
        Back to Shop
      </Link>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left: Image Gallery */}
        <div className="w-full md:w-3/5 space-y-8">
          <div className="aspect-[4/5] bg-velmora-cream overflow-hidden group">
            <img
              data-strk-img-id={`pdp-main-${id}`}
              data-strk-img={data.stock_image_query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={data.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4">
             {[...Array(3)].map((_, i) => (
                <div key={i} className="aspect-[4/5] bg-velmora-cream overflow-hidden">
                   <img
                    data-strk-img-id={`pdp-alt-${id}-${i}`}
                    data-strk-img={`Close up macro detail of ${data.name} jewelry gold texture`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${data.name} detail`}
                    className="w-full h-full object-cover"
                  />
                </div>
             ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-2/5 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-1 text-velmora-gold mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              <span className="text-[10px] text-velmora-charcoal/40 uppercase tracking-widest ml-2">(24 Reviews)</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest leading-tight">{data.name}</h1>
            <p className="text-2xl font-light text-velmora-charcoal/80">${data.price.toFixed(2)}</p>
            <p className="text-velmora-charcoal/60 leading-relaxed font-light text-sm max-w-md italic">{data.description}</p>
          </div>

          {/* Tone Selector */}
          <div className="space-y-4">
            <h3 className="uppercase tracking-[0.2em] text-[11px] font-bold">Metal Tone: {selectedTone}</h3>
            <div className="flex gap-4">
              {(data.tones || ['Gold']).map((tone) => (
                <button
                  key={tone}
                  onClick={() => setSelectedTone(tone)}
                  className={cn(
                    'px-8 py-3 uppercase tracking-widest text-[10px] font-bold transition-all border',
                    selectedTone === tone
                      ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                      : 'bg-white text-velmora-charcoal border-velmora-sand/50 hover:border-velmora-charcoal'
                  )}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Cart */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center border border-velmora-sand/50 h-14 md:w-32">
                 <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 h-full hover:bg-velmora-sand/10 flex items-center justify-center"><ChevronDown className="w-4 h-4" /></button>
                 <span className="flex-1 text-center font-medium">{quantity}</span>
                 <button onClick={() => setQuantity(quantity + 1)} className="flex-1 h-full hover:bg-velmora-sand/10 flex items-center justify-center"><ChevronUp className="w-4 h-4" /></button>
              </div>
              <button
                onClick={() => {
                  addToCart(product, selectedTone, quantity);
                  toast.success(`Added ${data.name} to bag`);
                }}
                className="flex-1 bg-velmora-charcoal text-white h-14 uppercase tracking-[0.3em] text-xs font-bold hover:bg-black transition-colors"
              >
                Add to Bag
              </button>
            </div>
            
            <div className="flex gap-6 border-t border-velmora-sand/20 pt-6">
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-velmora-charcoal/60 hover:text-velmora-gold transition-colors">
                <Heart className="w-4 h-4" /> Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-velmora-charcoal/60 hover:text-velmora-gold transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>

          {/* Info Accordions */}
          <div className="pt-8">
            <Accordion
              title="Description"
              isOpen={activeAccordion === 'description'}
              onClick={() => setActiveAccordion(activeAccordion === 'description' ? null : 'description')}
            >
              <p>{data.full_description}</p>
            </Accordion>

            <Accordion
              title="Materials & Care"
              isOpen={activeAccordion === 'materials'}
              onClick={() => setActiveAccordion(activeAccordion === 'materials' ? null : 'materials')}
            >
              <p>Our jewelry is crafted from 18K gold-plated recycled sterling silver or premium gold-filled alloys. Each piece is hypoallergenic and nickel-free.</p>
              <p>To maintain its beauty, avoid contact with perfumes, lotions, and water. Store in your Velmora pouch when not in use.</p>
            </Accordion>

            <Accordion
              title="Shipping & Returns"
              isOpen={activeAccordion === 'shipping'}
              onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? null : 'shipping')}
            >
              <p>Complimentary worldwide shipping on all orders over $100.</p>
              <p>We accept returns for store credit or refund within 30 days of purchase. Items must be in original condition with tags attached.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-32 border-t border-velmora-sand/20 pt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-3xl md:text-5xl font-serif">You May Also Like</h2>
            <Link to="/shop" className="text-velmora-charcoal border-b border-velmora-charcoal pb-1 uppercase tracking-widest text-[10px] font-bold">
              View Collection
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-10">
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
