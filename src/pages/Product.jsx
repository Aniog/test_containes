import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import ProductCard from '@/components/common/ProductCard';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 focus:outline-none"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-bold">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="pb-8 text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [activeImage, setActiveImage] = useState(0);

  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setQuantity(1);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${product.name} to your bag`);
  };

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 mb-32">
          {/* Left: Gallery */}
          <div className="flex-1 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-20">
              {product.images?.concat(['alt-1', 'alt-2']).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "flex-none w-16 h-16 md:w-20 md:h-24 bg-muted overflow-hidden border transition-colors",
                    activeImage === idx ? "border-accent" : "border-transparent"
                  )}
                >
                  <img
                    data-strk-img-id={`prod-detail-thumb-${product.id}-${idx}`}
                    data-strk-img={`[prod-title] jewelry detail view ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-muted overflow-hidden relative">
              <img
                data-strk-img-id={`prod-detail-main-${product.id}`}
                data-strk-img={`[prod-title] jewelry detailed high-end photography focus ${activeImage}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                className="w-full h-full object-cover transition-all duration-500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              />
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                18K Gold Vermeil
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 lg:max-w-md">
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-foreground">Shop</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>

            <h1 id="prod-title" className="text-3xl md:text-4xl font-serif uppercase tracking-[0.1em] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-sans tracking-widest">${product.price}</span>
              <div className="w-[1px] h-4 bg-border" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" className="text-accent" />
                ))}
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest ml-2">(12 Reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-10 italic">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-10">
              <span className="block text-[10px] uppercase tracking-widest font-bold mb-4">Finish</span>
              <div className="flex gap-4">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-8 py-3 text-[10px] uppercase tracking-widest border transition-all",
                      variant === v ? "border-accent bg-accent/5 font-bold" : "border-border text-muted-foreground hover:border-foreground"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-10">
              <span className="block text-[10px] uppercase tracking-widest font-bold mb-4">Quantity</span>
              <div className="flex items-center border border-border w-max">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 font-sans text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-muted"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-5 uppercase tracking-[0.25em] text-xs font-bold hover:bg-primary/90 transition-all shadow-xl active:scale-[0.98] mb-12"
            >
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="border-t border-border">
              <AccordionItem title="Description">
                <p>{product.description}</p>
                <p className="mt-4">{product.details}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <ul className="list-disc pl-4 flex flex-col gap-2">
                  <li>Base Metal: Sustainable brass / bronze</li>
                  <li>Plate: 18K Yellow Gold / Sterling Silver</li>
                  <li>To keep clean, wipe with a soft cloth after wear</li>
                  <li>Avoid contact with perfumes and water</li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>Free worldwide shipping on all orders over $100. Delivered in our signature eco-friendly jewelry boxes. Returns accepted within 30 days of delivery.</p>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-bold">The Ensemble</h2>
            <h3 className="text-3xl font-serif">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
