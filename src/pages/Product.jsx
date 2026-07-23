import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../store/CartContext';

const ALL_PRODUCTS = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, category: 'earrings', imageId: 'vivid-aura', desc: 'A stunning gold ear cuff adorned with a single radiant crystal. Perfect for stacking or wearing solo for a minimalist statement.', details: '18k Gold Plated Brass, Cubic Zirconia. Hypoallergenic and nickel-free.' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, category: 'necklaces', imageId: 'majestic-flora', desc: 'A delicate necklace featuring a cluster of multicolored floral crystals. Adds a touch of whimsical elegance to any neckline.', details: '18k Gold Plated Sterling Silver, Austrian Crystals. Length: 16" + 2" extender.' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, category: 'huggies', imageId: 'golden-sphere', desc: 'Chunky, curved dome huggies that reflect light beautifully. A modern update to the classic gold hoop.', details: '18k Gold Plated Brass. Lightweight hollow design. Hypoallergenic.' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, category: 'earrings', imageId: 'amber-lace', desc: 'Intricate filigree drops that capture the essence of vintage lacework. Warm gold tones make these a standout piece.', details: '18k Gold Plated Brass. Drop length: 1.5 inches.' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, category: 'necklaces', imageId: 'royal-heirloom', desc: 'A matching necklace and earring set featuring timeless emerald-cut crystals. Arrives in a beautiful gift box.', details: '18k Gold Plated Sterling Silver, Emerald-cut Zirconia.' },
];

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border border-solid bg-transparent">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left border-0 bg-transparent"
      >
        <span className="text-sm font-medium uppercase tracking-widest text-foreground">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-muted-foreground text-sm font-light leading-relaxed border-0 bg-transparent">{children}</p>
      </div>
    </div>
  );
};

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold tone');
  
  // Find product or use a fallback for preview
  const product = ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0];

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 border-0 bg-transparent">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-32 border-0 bg-transparent">
        
        {/* Gallery */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 border-0 bg-transparent">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-4 w-20 flex-shrink-0 border-0 bg-transparent">
            {[1, 2, 3].map((img) => (
              <button key={img} className={`w-full aspect-[3/4] bg-muted relative border-0 bg-transparent ${img === 1 ? 'ring-1 ring-foreground ring-offset-2' : ''}`}>
                 <img 
                    alt={`${product.name} view ${img}`}
                    data-strk-img-id={`p-thumb-${product.imageId}-${img}`}
                    data-strk-img={`[product-desc] [product-title] detail view`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover"
                 />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full relative aspect-[3/4] md:aspect-[4/5] bg-muted overflow-hidden border-0 bg-transparent">
             <img 
                  alt={product.name}
                  data-strk-img-id={`p-main-${product.imageId}`}
                  data-strk-img={`[product-desc] [product-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover"
              />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col border-0 bg-transparent">
          <nav className="text-xs text-muted-foreground mb-6 uppercase tracking-widest border-0 bg-transparent">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/collections" className="hover:text-foreground">Collections</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.category}</span>
          </nav>

          <h1 id="product-title" className="text-3xl md:text-5xl font-serif text-foreground uppercase tracking-wide mb-4 border-0 bg-transparent">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6 border-0 bg-transparent">
            <span className="text-xl text-foreground font-medium border-0 bg-transparent">${product.price}</span>
            <div className="flex items-center text-accent border-0 bg-transparent">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-muted-foreground text-xs ml-2 border-0 bg-transparent">(12)</span>
            </div>
          </div>

          <p id="product-desc" className="text-muted-foreground font-light leading-relaxed mb-8 border-0 bg-transparent">
            {product.desc}
          </p>

          {/* Variant Selector */}
          <div className="mb-8 border-0 bg-transparent">
            <span className="text-xs font-medium uppercase tracking-widest text-foreground block mb-3 border-0 bg-transparent">Metal: <span className="text-muted-foreground capitalize font-normal">{variant}</span></span>
            <div className="flex gap-3 border-0 bg-transparent">
              <button 
                onClick={() => setVariant('gold tone')}
                className={`w-8 h-8 rounded-full border border-solid p-0.5 ${variant === 'gold tone' ? 'border-foreground' : 'border-transparent'}`}
                aria-label="Gold Tone"
              >
                <div className="w-full h-full rounded-full bg-[#D4AF37]"></div>
              </button>
              <button 
                onClick={() => setVariant('silver tone')}
                 className={`w-8 h-8 rounded-full border border-solid p-0.5 ${variant === 'silver tone' ? 'border-foreground' : 'border-transparent'}`}
                 aria-label="Silver Tone"
              >
                <div className="w-full h-full rounded-full bg-[#C0C0C0]"></div>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 border-0 bg-transparent">
            <div className="flex items-center justify-between border border-border sm:w-32 border-solid bg-transparent">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 text-muted-foreground hover:text-foreground border-0 bg-transparent"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-medium text-foreground border-0 bg-transparent">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                 className="px-4 py-3 text-muted-foreground hover:text-foreground border-0 bg-transparent"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-accent text-accent-foreground py-4 px-8 uppercase tracking-widest text-sm font-medium hover:bg-accent/90 transition-colors border-0"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Accordions */}
          <div className="mt-auto border-t border-border border-solid bg-transparent pt-2">
            <Accordion title="Details & Materials" defaultOpen={true}>
              {product.details}
            </Accordion>
            <Accordion title="Shipping & Returns">
              Free standard worldwide shipping on orders over $50. We accept returns in original condition within 30 days of delivery.
            </Accordion>
            <Accordion title="Jewelry Care">
              To keep your pieces looking their best, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not wearing.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-border border-solid pt-20 border-0 bg-transparent">
        <div className="flex justify-between items-end mb-12 border-0 bg-transparent">
          <h2 id="related-title" className="text-3xl md:text-4xl font-serif text-foreground border-0 bg-transparent">You May Also Like</h2>
          <Link to="/collections" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-accent transition-colors text-foreground border-0 bg-transparent">
            Shop All <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 border-0 bg-transparent">
          {ALL_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p, index) => (
            <div key={p.id} className="group relative border-0 bg-transparent flex flex-col h-full">
              <a href={`/product/${p.id}`} className="block relative aspect-[3/4] mb-4 bg-muted overflow-hidden border-0 bg-transparent">
                <img 
                  alt={p.name}
                  data-strk-img-id={`related-prod-${index}`}
                  data-strk-img={`[${p.descId || 'product-desc'}] [related-product-title-${p.id}] [related-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </a>
              <div className="flex-1 flex flex-col text-center border-0 bg-transparent">
                <h3 id={`related-product-title-${p.id}`} className="font-serif text-base mb-1 border-0 bg-transparent text-foreground uppercase tracking-wide">
                  {p.name}
                </h3>
                 <p id={p.descId || `desc-${p.id}`} className="hidden">Beautiful demi-fine {p.category}</p>
                <p className="text-muted-foreground text-sm border-0 bg-transparent">${p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Product;
