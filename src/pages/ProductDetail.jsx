import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@/lib/sdk_mock';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { Minus, Plus, ChevronDown, ChevronUp, Star, Heart, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [selectedTone, setSelectedTone] = useState('gold');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setQuantity(1);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, selectedImage]);

  if (!product) return <div className="pt-40 text-center">Product not found.</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} ${product.name} added to bag`);
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard shipping on all orders. 30-day returns on unworn items in original packaging.' }
  ];

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32">
        {/* Left: Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar pb-2 md:pb-0 shrink-0">
            {[0, 1, 2].map((i) => (
              <button 
                key={i}
                onClick={() => setSelectedImage(i)}
                className={cn(
                  "w-20 md:w-24 aspect-[3/4] bg-secondary shrink-0 overflow-hidden transition-all duration-300",
                  selectedImage === i ? "border border-stone-900" : "opacity-60 hover:opacity-100"
                )}
              >
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`pdp-thumb-${id}-${i}`}
                  data-strk-img={`[pdp-name] gold jewelry ${i === 0 ? 'model close-up' : 'still life luxury'}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                />
              </button>
            ))}
          </div>
          <div className="flex-grow aspect-[3/4] bg-secondary overflow-hidden relative">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000"
              data-strk-img-id={`pdp-main-${id}-${selectedImage}`}
              data-strk-img={`[pdp-name] gold jewelry editorial ${selectedImage === 0 ? 'on model' : 'high end background'}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
            />
            <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-stone-400">
              <Link to="/shop" className="hover:text-stone-900 transition-colors">Shop</Link>
              <span>/</span>
              <Link to={`/collections/${product.category.toLowerCase()}`} className="hover:text-stone-900 transition-colors">{product.category}</Link>
            </div>
            <h1 id="pdp-name" className="text-3xl md:text-4xl font-serif uppercase tracking-ultra-wide leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-xl font-medium">$${product.price}</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
                <span className="text-[10px] uppercase tracking-widest text-stone-400 ml-2">(24 Reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-sm font-light leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-ultra-wide font-medium">Finish</p>
              <div className="flex space-x-3">
                {['gold', 'silver'].map(tone => (
                  <button 
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest transition-all",
                      selectedTone === tone ? "bg-stone-900 text-white" : "border border-border hover:border-stone-900"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-ultra-wide font-medium">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 px-4 hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 px-4 hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-stone-900 text-white py-5 text-xs uppercase tracking-ultra-wide font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10"
          >
            Add to Bag
          </button>

          <div className="pt-8 space-y-4">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-t border-border">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                  className="w-full flex items-center justify-between py-6 group"
                >
                  <span className="text-xs uppercase tracking-ultra-wide font-medium group-hover:opacity-70 transition-opacity">{acc.title}</span>
                  {openAccordion === acc.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordion === acc.id && (
                  <div className="pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-sm font-light text-muted-foreground leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-border" />
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-ultra-wide text-stone-400 hover:text-stone-900 transition-colors">
              <Share2 className="w-3 h-3" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-serif">You May Also Like</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
