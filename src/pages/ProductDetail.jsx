import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import { useCart } from '../lib/CartContext';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('Description');
  const [variant, setVariant] = useState('Gold');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data: response, error } = await client
          .from('JewelryProduct')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (error) throw error;
        const prodData = { ...response?.data?.data, id: response?.data?.id };
        setProduct(prodData);

        // Fetch related
        const { data: relResponse } = await client
          .from('JewelryProduct')
          .select('*')
          .eq('category', prodData.category)
          .neq('slug', slug)
          .limit(4);
        
        setRelated((relResponse?.data?.list ?? []).map(p => ({ ...p.data, id: p.id })));
      } catch (err) {
        console.error('Failed to fetch product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return <div className="pt-40 text-center font-sans uppercase tracking-[0.2em] opacity-40">Loading...</div>;
  if (!product) return <div className="pt-40 text-center font-sans uppercase tracking-[0.2em] opacity-40">Product not found</div>;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse gap-6">
             <div className="flex-1 aspect-[3/4] bg-velmora-stone relative overflow-hidden">
                <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
             </div>
             <div className="flex md:flex-col gap-4">
                {[product.image_url, product.hover_image_url].map((img, i) => (
                  <div key={i} className="w-20 md:w-24 aspect-[3/4] bg-velmora-stone cursor-pointer border border-transparent hover:border-velmora-gold">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="font-serif text-4xl md:text-5xl tracking-widest-lg uppercase mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-serif text-2xl tracking-wide">${product.price}</span>
              <div className="flex gap-1 text-velmora-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>

            <p className="font-sans text-base opacity-70 leading-relaxed mb-10 max-w-lg">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-10 text-xs uppercase tracking-widest-lg">
              <p className="mb-4 opacity-40 font-sans">Tone: {variant}</p>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map(v => (
                  <button 
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-8 py-2 border ${variant === v ? 'border-velmora-charcoal bg-velmora-charcoal text-white' : 'border-velmora-charcoal/10 hover:border-velmora-charcoal/40'} transition-all`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-10 text-xs uppercase tracking-widest-lg">
              <p className="mb-4 opacity-40 font-sans">Quantity</p>
              <div className="flex items-center w-32 border border-velmora-charcoal/10">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 px-4 hover:bg-velmora-charcoal/5 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-sans">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 px-4 hover:bg-velmora-charcoal/5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button 
              onClick={() => addToCart(product, quantity)}
              className="w-full btn-premium mb-12"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-charcoal/5">
              {[
                { title: 'Description', content: product.description },
                { title: 'Materials & Care', content: product.material || '18k Gold Plated Brass. Avoid contact with water, perfumes, and lotions.' },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. 30-day returns.' }
              ].map(acc => (
                <div key={acc.title} className="border-b border-velmora-charcoal/5">
                  <button 
                    className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-widest-lg font-sans text-left"
                    onClick={() => setOpenAccordion(openAccordion === acc.title ? '' : acc.title)}
                  >
                    {acc.title}
                    {openAccordion === acc.title ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === acc.title ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                    <p className="font-sans text-sm opacity-60 leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You may also like */}
        {related.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-12 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map(prod => <ProductCard key={prod.id} product={prod} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
