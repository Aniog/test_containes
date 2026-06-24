import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper, DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Plus, Minus, Star, ChevronDown, ChevronUp, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState('18K Gold');
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product with ID:', id);
        // Ensure id is treated as the correct type (integer for IDs)
        const numericId = parseInt(id, 10);
        const queryId = isNaN(numericId) ? id : numericId;
        
        const { data: response, error } = await client
          .from('Product')
          .select('*')
          .eq('id', queryId)
          .limit(1);
        
        console.log('Product response:', response);
        
        if (error) {
          console.error('Error fetching product:', error);
          return;
        }

        const productEntity = response?.data?.list?.[0];
        if (productEntity) {
          setProduct(productEntity);
          
          // Fetch related products
          const { data: related } = await client
            .from('Product')
            .select('*')
            .neq('id', queryId)
            .eq('category', productEntity.data.category)
            .limit(4);
          
          if (related?.data?.list) {
            setRelatedProducts(related.data.list);
          }
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };
    fetchProduct();
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current && product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product, relatedProducts]);


  if (!product || !product.data) {
    return (
      <Layout>
        <div className="pt-40 pb-24 text-center">
          <p className="text-brand-espresso/60 uppercase tracking-widest text-xs">Loading treasure...</p>
          <button onClick={() => window.location.reload()} className="mt-4 text-[10px] uppercase tracking-widest underline">Retry</button>
        </div>
      </Layout>
    );
  }

  const fields = product.data;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${fields.name} added to bag`, {
      description: `Quantity: ${quantity} | Finish: ${selectedFinish}`,
    });
  };

  const Accordion = ({ id, title, content }) => {
    const isOpen = openAccordion === id;
    return (
      <div className="border-b border-brand-charcoal/10 py-5">
        <button 
          onClick={() => setOpenAccordion(isOpen ? null : id)}
          className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-bold text-left"
        >
          {title}
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mt-4 text-sm text-brand-espresso/60 leading-relaxed font-sans"
          >
            {content}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <Layout>
      <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left: Gallery */}
            <div className="space-y-6">
              <div className="aspect-[4/5] bg-brand-cream overflow-hidden shadow-sm">
                <img
                  data-strk-img={`[pd-name] jewelry product macro shot`}
                  data-strk-img-id={`pdp-main-${id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                  alt={fields.name}
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-brand-cream overflow-hidden">
                    <img
                      data-strk-img={`[pd-name] jewelry product detail angle ${i}`}
                      data-strk-img-id={`pdp-thumb-${id}-${i}`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-soft cursor-pointer"
                      alt={`${fields.name} detail ${i}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col">
              <nav className="text-[10px] uppercase tracking-widest text-brand-espresso/40 mb-8 space-x-2">
                <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
                <span>/</span>
                <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
                <span>/</span>
                <span>{fields.category}</span>
              </nav>

              <h1 id="pd-name" className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4 uppercase tracking-wider">{fields.name}</h1>
              
              <div className="flex items-center gap-6 mb-8">
                <p className="text-2xl font-serif text-brand-charcoal">$ {fields.price}</p>
                <div className="flex items-center gap-2">
                  <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(fields.starRating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-espresso/40">(24 Reviews)</span>
                </div>
              </div>

              <p className="text-sm text-brand-espresso/70 leading-relaxed font-sans mb-10 pb-10 border-b border-brand-charcoal/5">
                {fields.description}
              </p>

              <div className="space-y-8 mb-12">
                {/* Variant Selector */}
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4">Finish: <span className="text-brand-espresso/40">{selectedFinish}</span></h3>
                  <div className="flex gap-4">
                    {['18K Gold', 'Sterling Silver'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setSelectedFinish(f)}
                        className={cn(
                          "px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-all border",
                          selectedFinish === f ? "border-brand-charcoal bg-brand-charcoal text-white" : "border-brand-charcoal/10 hover:border-brand-charcoal/30"
                        )}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4">Quantity</h3>
                  <div className="flex items-center border border-brand-charcoal w-fit px-2 py-1">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3">
                      <Minus size={14} />
                    </button>
                    <span className="w-12 text-center text-sm font-bold font-sans">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-brand-gold text-white py-5 text-sm font-bold uppercase tracking-[0.2em] mb-12 hover:bg-brand-charcoal transition-soft shadow-xl"
              >
                Add to Bag
              </button>

              {/* Accordions */}
              <div className="space-y-2 border-t border-brand-charcoal/10">
                <Accordion 
                  id="description" 
                  title="Description & Fit" 
                  content="A timeless silhouette reimagined with a modern edge. Measuring 18mm in diameter, these domes catch the light with every move. Made with 18k gold vermeil over sterling silver for daily endurance."
                />
                <Accordion 
                  id="materials" 
                  title="Materials & Care" 
                  content="Our pieces are handcrafted using ethically sourced 18k gold plating. To maintain shine, avoid direct contact with perfumes and lotions. Clean gently with our provided microfibre cloth."
                />
                <Accordion 
                  id="shipping" 
                  title="Shipping & Returns" 
                  content="Enjoy free express shipping on all orders over $150. We offer a 30-day return policy on all unworn jewelry in its original packaging."
                />
              </div>

              {/* USP Icons */}
              <div className="mt-12 grid grid-cols-3 gap-4 pt-10 border-t border-brand-charcoal/5">
                <div className="flex flex-col items-center text-center gap-3">
                  <ShieldCheck size={20} className="text-brand-gold" />
                  <span className="text-[8px] uppercase tracking-widest font-bold text-brand-espresso/60">2 Year Warranty</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <Truck size={20} className="text-brand-gold" />
                  <span className="text-[8px] uppercase tracking-widest font-bold text-brand-espresso/60">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <RefreshCw size={20} className="text-brand-gold" />
                  <span className="text-[8px] uppercase tracking-widest font-bold text-brand-espresso/60">Carbon Neutral</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-32">
              <h2 className="text-3xl font-serif text-brand-charcoal mb-12 text-center">Complete the Set</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {relatedProducts.map((p) => {
                  const pFields = p.data;
                  return (
                    <motion.div key={p.id} whileHover={{ y: -8 }} className="group">
                      <Link to={`/product/${p.id}`}>
                        <div className="aspect-[3/4] bg-brand-cream overflow-hidden mb-6">
                          <img
                            data-strk-img={`[rel-${p.id}-title] jewelry product`}
                            data-strk-img-id={`rel-${p.id}`}
                            data-strk-img-ratio="3x4"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="w-full h-full object-cover transition-soft group-hover:scale-105"
                            alt={pFields.name}
                          />
                        </div>
                        <h3 id={`rel-${p.id}-title`} className="text-[10px] uppercase tracking-widest font-bold mb-1 text-center">{pFields.name}</h3>
                        <p className="text-[10px] text-brand-espresso/40 font-semibold text-center">$ {pFields.price}</p>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
