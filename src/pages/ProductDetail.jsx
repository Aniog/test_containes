import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { ChevronDown, Plus, Minus, Star, Heart, Share2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{title}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <div className={cn("overflow-hidden transition-all duration-500 ease-in-out", isOpen ? "max-h-96 pb-6" : "max-h-0")}>
        <div className="text-sm text-muted leading-relaxed font-light">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState('18K Gold');

  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 mb-32">
        {/* Gallery */}
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[3/4] bg-secondary/30 overflow-hidden">
                <img
                  data-strk-img-id={`detail-img-${product.id}-${i}`}
                  data-strk-img={`an editorial closeup photo of ${product.name} jewelry on a model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 md:sticky top-32 h-fit">
          <div className="flex flex-col gap-8">
            <nav className="flex gap-2 text-[10px] uppercase tracking-widest text-muted mb-2">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-primary transition-colors">{product.category}</Link>
              <span>/</span>
              <span className="text-primary">{product.name}</span>
            </nav>

            <div>
              <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl font-light">${product.price}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                  <span className="text-[10px] uppercase tracking-widest text-muted ml-2">(12 Reviews)</span>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed font-light max-w-md">
                {product.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold block mb-4">Finish: {selectedFinish}</span>
                <div className="flex gap-4">
                  {['18K Gold', 'Silver'].map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setSelectedFinish(finish)}
                      className={cn(
                        "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300",
                        selectedFinish === finish ? "border-primary bg-primary text-white" : "border-border hover:border-primary"
                      )}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center border border-border px-4 py-3 justify-between md:justify-start gap-8">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-grow button-premium text-sm py-4"
                >
                  Add to Bag
                </button>
              </div>
              
              <div className="flex gap-6 mt-4">
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted hover:text-primary transition-colors">
                  <Heart className="w-4 h-4" /> Wishlist
                </button>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>

            <div className="mt-12">
              <Accordion title="Description">
                <p>Meticulously crafted with a focus on longevity and shine. Each piece is designed to transition effortlessly from morning to evening, making it a versitile addition to your jewelry wardrobe.</p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>Premium 18K Gold plating</li>
                  <li>Hypoallergenic materials</li>
                  <li>Ethically sourced stones</li>
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>Our demi-fine jewelry is crafted from 18K gold plated brass with high-quality crystals. To maintain its brilliance, avoid contact with perfumes, lotions, and chlorine. Store in your provided Velmora pouch when not in wear.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>We offer free worldwide shipping on all orders over $75. Returns are accepted within 30 days of delivery. Pieces must be in their original condition and packaging.</p>
              </Accordion>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-sm mt-8">
              <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-muted leading-relaxed uppercase tracking-wider">
                Due to artisanal handcrafted processes, subtle variations in texture and polish are hallmarks of the Velmora aesthetic, ensuring each piece is truly unique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended */}
      <section className="max-w-7xl mx-auto border-t border-border pt-24">
        <h2 className="text-2xl md:text-4xl font-serif uppercase tracking-widest mb-12 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-0">
          {relatedProducts.map((p) => (
            <div key={p.id} className="group">
              <div className="relative aspect-[3/4] bg-secondary/30 overflow-hidden mb-6">
                <Link to={`/product/${p.id}`}>
                  <img
                    data-strk-img-id={`rel-prod-${p.id}`}
                    data-strk-img={`an editorial photo of ${p.name} jewelry on a neutral background`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <button
                  onClick={() => {
                    addToCart(p);
                    toast.success(`${p.name} added to bag`);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 text-primary py-3 text-[10px] uppercase tracking-widest translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-white"
                >
                  Quick Add
                </button>
              </div>
              <Link to={`/product/${p.id}`} className="text-center block">
                <h3 className="text-[10px] uppercase tracking-widest mb-2 font-bold">{p.name}</h3>
                <p className="text-sm font-light text-muted">${p.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
