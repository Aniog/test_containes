import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, getSchemaData } from '@/api/products';
import { useCart } from '@/lib/CartContext';
import { Star, ChevronRight, Plus, Minus, Heart, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        const productData = getSchemaData(data);
        if (productData.variants?.length > 0) {
          setSelectedVariant(productData.variants[0]);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) return <div className="min-h-screen pt-32 text-center font-serif italic">Loading...</div>;
  if (!product) return <div className="min-h-screen pt-32 text-center font-serif italic">Product not found.</div>;

  const data = getSchemaData(product);

  const accordions = [
    { id: 'description', title: 'Description', content: data.description },
    { id: 'materials', title: 'Materials & Care', content: data.materials },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $75. 30-day returns on unworn items in original packaging. Earrings are non-returnable for hygiene reasons.' },
  ];

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] tracking-widest uppercase text-muted-foreground mb-12">
          <span>Shop</span>
          <ChevronRight size={10} />
          <span>{data.category}</span>
          <ChevronRight size={10} />
          <span className="text-foreground">{data.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-stone-50 overflow-hidden">
              <img
                src={data.mainImage}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            {data.images?.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {data.images.map((img, i) => (
                  <div key={i} className="aspect-square bg-stone-50 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={img} alt={`${data.name} view ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif tracking-[0.1em] uppercase leading-tight">
                {data.name}
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-serif italic text-stone-700">${data.price}</p>
                <div className="flex items-center space-x-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-[10px] tracking-widest text-muted-foreground ml-2 font-sans uppercase">
                    (12 Reviews)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed font-serif text-lg italic">
              {data.shortDescription}
            </p>

            {/* Variant Selector */}
            {data.variants?.length > 0 && (
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.2em] font-medium uppercase">
                  Finish: {selectedVariant}
                </span>
                <div className="flex space-x-3">
                  {data.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={cn(
                        'px-6 py-2 text-[10px] tracking-widest uppercase border transition-all duration-300',
                        selectedVariant === v ? 'bg-primary text-white border-primary' : 'hover:border-stone-400'
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="space-y-6 pt-6">
              <div className="flex items-center space-x-8">
                 <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.2em] font-medium uppercase">Quantity</span>
                  <div className="flex items-center border w-32 h-12">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="flex-1 h-full flex items-center justify-center hover:text-accent"><Minus size={14} /></button>
                    <span className="flex-1 text-center text-sm">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="flex-1 h-full flex items-center justify-center hover:text-accent"><Plus size={14} /></button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => addToCart(product, selectedVariant, quantity)}
                  className="flex-1 bg-primary text-white py-4 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-accent transition-colors duration-500"
                >
                  Add to Cart
                </button>
                <button className="p-4 border hover:border-accent transition-colors group">
                  <Heart size={20} className="group-hover:text-accent transition-colors" />
                </button>
                <button className="p-4 border hover:border-accent transition-colors group">
                  <Share2 size={20} className="group-hover:text-accent transition-colors" />
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-10 border-t space-y-4">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b last:border-b-0">
                  <button
                    onClick={() => setActiveTab(activeTab === acc.id ? '' : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase font-medium"
                  >
                    <span>{acc.title}</span>
                    <Plus size={16} className={cn('transition-transform duration-300', activeTab === acc.id && 'rotate-45')} />
                  </button>
                  <div className={cn(
                    'overflow-hidden transition-all duration-500 ease-in-out',
                    activeTab === acc.id ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  )}>
                    <p className="text-sm text-stone-600 leading-relaxed font-sans">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
