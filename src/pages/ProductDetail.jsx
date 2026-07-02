import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/lib/CartProvider';
import { Star, Minus, Plus, ChevronDown, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedTone, setSelectedTone] = useState('gold');
  const { addToCart } = useCart();
  const pageRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: prodData, error: prodErr } = await client
          .from('VelmoraProduct')
          .select('*')
          .eq('id', id)
          .single();

        if (prodErr) throw prodErr;
        const p = prodData?.data ? { ...prodData.data, id: prodData.id } : prodData;
        setProduct(p);

        // Fetch recommendations
        const { data: recData } = await client
          .from('VelmoraProduct')
          .select('*')
          .neq('id', id)
          .limit(4);
        
        setRecommended(recData?.list?.map(item => item.data ? { ...item.data, id: item.id } : item) || []);
      } catch (err) {
        console.error('Error fetching product details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!loading && product) {
      setTimeout(() => {
        ImageHelper.loadImages(strkImgConfig, pageRef.current);
      }, 100);
    }
  }, [loading, product]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Removed toast due to build issues
  };

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-velmora-bg">
      <div className="w-10 h-10 border-2 border-velmora-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!product) return (
    <div className="h-screen flex flex-col items-center justify-center bg-velmora-bg text-center px-4">
      <h1 className="font-serif text-3xl mb-4">Product not found</h1>
      <Link to="/shop" className="underline underline-offset-4">Return to shop</Link>
    </div>
  );

  const accordionItems = [
    { 
      id: 'description', 
      title: 'Description', 
      content: 'Exquisitely crafted with precision, this piece embodies the quiet sophistication of the Velmora aesthetic. Made from 18k gold vermeil over recycled sterling silver, it features hand-set ethical stones that catch the light with subtle brilliance.' 
    },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: 'Our gold vermeil is a thick layer of 18k solid gold (at least 2.5 microns) over a base of 925 sterling silver. To maintain its luster, avoid contact with perfumes, lotions, and water. Store in the provided Velmora linen pouch.' 
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: 'Enjoy free worldwide express shipping on all orders over $75. If you are not completely satisfied, we offer a 30-day return window for all unworn jewelry in its original packaging.' 
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-velmora-bg" ref={pageRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 mb-32">
          {/* Left: Gallery */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-velmora-grey/5 overflow-hidden col-span-1 md:col-span-2">
                 <img
                    data-strk-img-id={`product-detail-main-${product.id}`}
                    data-strk-img={`${product.image_id || product.name} jewelry editorial lifestyle`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="1200"
                    className="w-full h-full object-cover"
                    alt={product.name}
                 />
              </div>
              <div className="aspect-[1/1] bg-velmora-grey/5 overflow-hidden">
                 <img
                    data-strk-img-id={`product-detail-2-${product.id}`}
                    data-strk-img={`${product.image_id || product.name} metal detail macro`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    alt="Detail 1"
                 />
              </div>
              <div className="aspect-[1/1] bg-velmora-grey/5 overflow-hidden">
                 <img
                    data-strk-img-id={`product-detail-3-${product.id}`}
                    data-strk-img={`${product.image_id || product.name} packaging gift box`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    alt="Detail 2"
                 />
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-2/5 space-y-8 lg:sticky lg:top-32 self-start">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-ultra-wide text-velmora-grey">
                <span>{product.category}</span>
                <div className="flex items-center space-x-1">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-velmora-gold text-velmora-gold" />)}
                   <span className="ml-1">(12 Reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-velmora-base uppercase tracking-widest">{product.name}</h1>
              <p className="text-2xl font-serif text-velmora-charcoal">${product.price}</p>
            </div>

            <p className="text-velmora-grey font-light leading-relaxed">
              Timeless elegance meets modern minimalism. A versatile staple for your daily rotation or a cherished gift for a loved one.
            </p>

            {/* Selectors */}
            <div className="space-y-6 pt-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-velmora-grey block mb-3">Finish: {selectedTone}</span>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setSelectedTone('gold')}
                    className={`px-6 py-2 border text-[10px] uppercase tracking-widest transition-all ${selectedTone === 'gold' ? 'border-velmora-gold bg-velmora-gold text-white' : 'border-black/10 text-velmora-grey hover:border-velmora-base'}`}
                  >
                    Gold Vermeil
                  </button>
                  <button 
                    onClick={() => setSelectedTone('silver')}
                    className={`px-6 py-2 border text-[10px] uppercase tracking-widest transition-all ${selectedTone === 'silver' ? 'border-velmora-gold bg-velmora-gold text-white' : 'border-black/10 text-velmora-grey hover:border-velmora-base'}`}
                  >
                    Sterling Silver
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-black/10 h-14">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 hover:bg-black/5 transition-colors h-full"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 hover:bg-black/5 transition-colors h-full"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button onClick={handleAddToCart} className="flex-1 h-14 text-xs font-semibold">
                  Add to Bag
                </Button>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-black/5 pt-8 mt-12 space-y-4">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-black/5 pb-4">
                  <button 
                    onClick={() => setActiveTab(activeTab === item.id ? null : item.id)}
                    className="w-full flex justify-between items-center py-2"
                  >
                    <span className="font-serif text-sm uppercase tracking-widest">{item.title}</span>
                    {activeTab === item.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                  {activeTab === item.id && (
                    <div className="overflow-hidden">
                      <p className="py-4 text-sm text-velmora-grey font-light leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <section className="border-t border-black/5 pt-24">
           <h2 className="text-3xl md:text-4xl font-serif mb-12">You may also like</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {recommended.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
