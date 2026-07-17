import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById, fetchProducts } from '../api/products';
import { products as fallbackProducts } from '../lib/data';
import { useCart } from '../lib/CartContext';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      window.scrollTo(0, 0);
    } else {
        fetchProductById(id).then(data => {
            if (data) {
                setProduct(data);
                window.scrollTo(0, 0);
            }
        }).catch(err => {
            console.error(err);
            const fallback = fallbackProducts.find(p => p.id === id);
            if (fallback) setProduct(fallback);
        });
    }

    fetchProducts().then(data => {
        setRecommended(data.length > 0 ? data : fallbackProducts);
    });
  }, [id]);

  if (!product) return <div className="pt-40 text-center font-serif text-2xl h-screen">Loading...</div>;

  const images = [product.image, product.hoverImage, product.image, product.hoverImage].filter(Boolean);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
    toast.success(`${product.name} added to your bag`);
  };

  const Accordion = ({ id, title, children }) => (
    <div className="border-b border-neutral-100">
      <button 
        onClick={() => setOpenAccordion(openAccordion === id ? null : id)}
        className="w-full py-6 flex items-center justify-between text-xs uppercase tracking-widest font-bold text-neutral-800"
      >
        <span>{title}</span>
        {openAccordion === id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        openAccordion === id ? "max-h-96 pb-8" : "max-h-0"
      )}>
        <p className="text-sm text-neutral-500 font-light leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-20 md:pb-32 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Images Section */}
          <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-20 lg:w-24">
               {images.map((img, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "flex-shrink-0 aspect-[3/4] transition-all bg-neutral-100",
                    activeImage === idx ? "border border-[#C5A059] opacity-100" : "opacity-60 grayscale hover:grayscale-0"
                  )}
                 >
                   <img src={img} alt={`${product.name} shadow`} className="w-full h-full object-cover" />
                 </button>
               ))}
            </div>

            {/* Main Image */}
            <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-neutral-100 relative overflow-hidden group">
               <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
               />
               <span className="absolute top-6 left-6 bg-[#C5A059] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">Limited Release</span>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-2/5 space-y-10">
            <div className="space-y-4">
              <nav className="text-[10px] uppercase tracking-widest text-neutral-400 flex space-x-2">
                <Link to="/" className="hover:text-neutral-900">Home</Link>
                <span>/</span>
                <Link to="/shop" className="hover:text-neutral-900">{product.category}</Link>
              </nav>
              <h1 className="text-3xl md:text-5xl font-serif uppercase tracking-widest leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-[#C5A059]">${product.price}.00</p>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">(24 Reviews)</span>
                </div>
              </div>
              <p className="text-neutral-500 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-8 py-8 border-y border-neutral-100">
               <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Tone</h4>
                  <div className="flex space-x-3">
                    {['Gold', 'Silver'].map(tone => (
                      <button 
                        key={tone}
                        onClick={() => setSelectedVariant(tone)}
                        className={cn(
                          "px-10 py-3 border transition-all uppercase tracking-widest text-[10px] font-bold rounded-full",
                          selectedVariant === tone ? "bg-[#111] text-white border-black" : "border-neutral-200 text-neutral-400 hover:border-neutral-400"
                        )}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
               </div>

               <div className="flex items-end gap-6">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold">Quantity</h4>
                    <div className="flex items-center space-x-4 h-12 border border-neutral-100 px-4">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="w-3 h-3" /></button>
                      <span className="text-sm font-bold w-4 text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)}><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                  <button 
                    onClick={handleAddToCart}
                    className="flex-grow h-12 bg-[#C5A059] text-white uppercase tracking-widest text-xs font-bold transition-all hover:bg-[#B38D46] hover:scale-[1.01] active:scale-100 shadow-lg"
                  >
                    Add to Bag
                  </button>
               </div>
            </div>

            {/* Details Accordion */}
            <div className="pt-2">
               <Accordion id="description" title="Product Details">
                  {product.description} Each piece is hand-finished for a unique textured look that catches the light beautifully.
               </Accordion>
               <Accordion id="materials" title="Materials & Care">
                  Material: {product.materials}. <br /><br />
                  Care: {product.care} We recommend removing your jewelry before swimming, bathing, or using perfumes.
               </Accordion>
               <Accordion id="shipping" title="Shipping & Returns">
                  Complimentary worldwide shipping on all orders over $100. <br /><br />
                  Returns are accepted within 30 days of delivery. The item must be in its original, unworn condition with all packaging intact.
               </Accordion>
            </div>
          </div>
        </div>

        {/* Recommended Row */}
        <section className="mt-32">
           <h3 className="text-2xl font-serif text-center mb-16">You May Also Like</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {recommended.filter(p => p.id !== id).slice(0, 4).map(p => (
                 <Link key={p.id} to={`/product/${p.id}`} className="group">
                    <div className="aspect-[3/4] bg-neutral-100 overflow-hidden mb-4">
                       <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <p className="text-[10px] font-serif uppercase tracking-widest text-center">{p.name}</p>
                    <p className="text-xs font-bold text-neutral-400 text-center mt-1">${p.price}</p>
                 </Link>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
