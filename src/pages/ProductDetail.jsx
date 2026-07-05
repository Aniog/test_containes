import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { Star, ChevronRight, Minus, Plus, Heart, Shield, Truck, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  useEffect(() => {
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedVariant(found.variants[0]);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return null;

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `Material: ${product.material}. \n\nTo maintain the luster of your Velmora pieces, avoid contact with perfumes, lotions, and chlorine. Store in a cool, dry place when not in use.` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. Deliveries typically arrive within 3-5 business days. We offer a 30-day return policy for unused items in original packaging.' }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-velmora-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-stone overflow-hidden">
              <img
                data-strk-img-id={`product-detail-${product.id}`}
                data-strk-img={`[pd-name] ${product.image}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-velmora-stone overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                        <img 
                            data-strk-img-id={`product-thumb-${product.id}-${i}`}
                            data-strk-img={`[pd-name] detail view ${i}`}
                            data-strk-img-ratio="1x1"
                            data-strk-img-width="300"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="w-full h-full object-cover"
                        />
                    </div>
               ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="space-y-4 mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold">{product.category}</span>
              <h1 id="pd-name" className="text-4xl md:text-5xl font-serif uppercase tracking-widest">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-light">${product.price}</span>
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-velmora-gold text-velmora-gold" />
                    ))}
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">(24 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-10 font-light">
              {product.description}
            </p>

            <div className="space-y-8 mb-12">
              {/* Variant selector */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold">Finish: {selectedVariant}</span>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        "px-6 py-2 border text-[10px] uppercase tracking-[0.2em] transition-all",
                        selectedVariant === variant ? "border-velmora-black bg-velmora-black text-white" : "border-velmora-black/10 hover:border-velmora-black"
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold">Quantity</span>
                <div className="flex items-center border border-velmora-black/10 w-32">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 flex-1 flex justify-center hover:text-velmora-gold">
                    <Minus size={16} />
                  </button>
                  <span className="flex-1 text-center font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 flex-1 flex justify-center hover:text-velmora-gold">
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                    onClick={() => addToCart(product, quantity, selectedVariant)}
                    className="flex-grow py-5 text-sm"
                >
                    Add to Bag — ${product.price * quantity}
                </Button>
                <button className="px-5 border border-velmora-black/10 hover:bg-velmora-black hover:text-white transition-all">
                    <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-black/5">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-black/5">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? '' : acc.id)}
                    className="w-full flex items-center justify-between py-6 text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] font-bold">{acc.title}</span>
                    {activeAccordion === acc.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {activeAccordion === acc.id && (
                    <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-sm text-muted-foreground leading-relaxed font-light whitespace-pre-line underline-offset-4">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Trust features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 py-8 bg-velmora-stone/50 px-6">
                <div className="flex flex-col items-center text-center gap-2">
                    <Shield size={20} className="text-velmora-gold opacity-60" />
                    <span className="text-[9px] uppercase tracking-widest">Lifetime Luster Guarantee</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <Truck size={20} className="text-velmora-gold opacity-60" />
                    <span className="text-[9px] uppercase tracking-widest">Insured Tracked Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <RotateCcw size={20} className="text-velmora-gold opacity-60" />
                    <span className="text-[9px] uppercase tracking-widest">Effortless 30-Day Returns</span>
                </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;