import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seedProducts } from '@/lib/data';
import { useCartStore } from '@/lib/cart';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = seedProducts.find(p => p.id === id) || seedProducts[0];
  const addItem = useCartStore(state => state.addItem);
  
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  // Accordion state
  const [openSections, setOpenSections] = useState({
    description: true,
    materials: false,
    shipping: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleAddToCart = () => {
    addItem({ ...product, variant: selectedVariant, quantity });
  };

  // Quick related products
  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collection" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground uppercase tracking-widest">{product.name}</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Images */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 md:flex-shrink-0 hide-scrollbar">
              {[product.image, product.hoverImage].map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-24 flex-shrink-0 border-2 transition-all ${activeImage === img ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} view ${i+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 bg-muted">
              <img src={activeImage} alt={product.name} className="w-full h-auto object-cover aspect-[3/4]" />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col pt-2 lg:pt-8">
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center text-primary">
                {[...Array(Math.floor(product.rating))].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-sm text-muted-foreground ml-2">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-sm tracking-wide uppercase text-muted-foreground mb-3">
                Color: <span className="text-foreground">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-sm tracking-wide uppercase border transition-colors ${
                      selectedVariant === v 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-border text-foreground hover:border-gray-400'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm tracking-wide uppercase text-muted-foreground mb-3">Quantity</p>
              <div className="flex items-center border border-border w-32 rounded-sm overflow-hidden">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground bg-white"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1 text-center bg-white py-3">{quantity}</div>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground bg-white"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button onClick={handleAddToCart} className="btn-primary w-full py-4 text-base mb-12 uppercase tracking-widest">
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion 
                title="Description" 
                isOpen={openSections.description} 
                onToggle={() => toggleSection('description')}
              >
                <p className="text-muted-foreground leading-relaxed font-light">{product.description}</p>
              </Accordion>
              
              <Accordion 
                title="Materials & Care" 
                isOpen={openSections.materials} 
                onToggle={() => toggleSection('materials')}
              >
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed font-light space-y-2">
                  <li>{product.material} on surgical steel core</li>
                  <li>Hypoallergenic, nickel and lead free</li>
                  <li>To maintain the piece's longevity, avoid contact with water, perfumes, and harsh chemicals</li>
                  <li>Store in the provided Velmora pouch when not in use</li>
                </ul>
              </Accordion>

              <Accordion 
                title="Shipping & Returns" 
                isOpen={openSections.shipping} 
                onToggle={() => toggleSection('shipping')}
              >
                <p className="text-muted-foreground leading-relaxed font-light mb-4">
                  Complimentary worldwide shipping on all orders. Orders are processed within 1-2 business days.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  We gladly accept returns of unworn items in their original packaging within 30 days of delivery.
                </p>
              </Accordion>
            </div>

          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
               <div key={p.id} className="group flex flex-col">
               <Link to={`/product/${p.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted block">
                 <img 
                   src={p.image} 
                   alt={p.name}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
               </Link>
               <div className="flex flex-col items-center text-center">
                 <Link to={`/product/${p.id}`} className="font-serif text-sm uppercase tracking-wider mb-2">
                   {p.name}
                 </Link>
                 <p className="text-muted-foreground text-sm">${p.price}</p>
               </div>
             </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function Accordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-border">
      <button 
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between font-serif tracking-widest uppercase text-sm"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}