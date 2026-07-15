import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

// --- Placeholder Data ---
const products = [
  { 
    id: '1', 
    name: 'VIVID AURA JEWELS', 
    price: 42, 
    type: 'Ear Cuff',
    description: 'A striking statement piece designed to wrap intuitively around your ear. Crafted in 18K gold vermeil and punctuated with a single brilliant-cut crystal for an unexpected catch of light.',
    material: '18K Gold Vermeil on Sterling Silver. Cubic Zirconia accent.',
    images: ['cart-item-1', 'bestseller-img-1'], // Mock IDs for strk-img
  },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, type: 'Necklace', description: 'A delicate necklace.', material: '18K Gold Vermeil.', images: ['cart-item-2'] },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, type: 'Huggies', description: 'Chunky dome huggies.', material: '18K Gold Vermeil.', images: ['cart-item-3'] },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, type: 'Earrings', description: 'Textured drop earrings.', material: '18K Gold Vermeil.', images: ['cart-item-4'] },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, type: 'Set', description: 'Matching necklace and earring set.', material: '18K Gold Vermeil.', images: ['cart-item-5'] },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('18K Gold');

  useEffect(() => {
    // Simulate API fetch
    const found = products.find(p => p.id === id) || products[0];
    setProduct(found);
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    addItem({ ...product, quantity, variant });
    toast.success("Added to cart", {
      description: `${quantity}x ${product.name} (${variant})`,
      duration: 3000,
    });
  };

  if (!product) return <div className="py-32 text-center text-muted-foreground">Loading...</div>;

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Images Left */}
          <div className="md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0">
              {[1, 2, 3].map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "relative aspect-[3/4] w-20 md:w-full overflow-hidden border-2 bg-secondary",
                    activeImage === idx ? "border-primary" : "border-transparent"
                  )}
                >
                  <img 
                    alt={`Thumbnail ${idx + 1}`}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={`prod-thumb-${product.id}-${idx}`}
                    data-strk-img={`[product-title] detail view ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative aspect-[3/4] flex-1 bg-secondary overflow-hidden">
               <img 
                  alt={product.name}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`prod-main-${product.id}-${activeImage}`}
                  data-strk-img={`[product-title] close up`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                />
            </div>
          </div>

          {/* Details Right */}
          <div className="md:w-1/2 flex flex-col">
            <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-6 flex gap-2">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-foreground">Shop</Link>
              <span>/</span>
              <span className="text-foreground">{product.type}</span>
            </nav>

            <h1 id="product-title" className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xl">${product.price}</p>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-muted-foreground text-xs ml-2 uppercase tracking-widest mt-0.5">(14)</span>
              </div>
            </div>

            <p className="text-muted-foreground font-light mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-3">Metal Finish: {variant}</span>
              <div className="flex gap-3">
                {['18K Gold', 'Sterling Silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-2 border text-sm uppercase tracking-widest transition-colors",
                      variant === v 
                        ? "border-primary bg-primary text-primary-foreground" 
                        : "border-border hover:border-primary/50 text-foreground bg-transparent"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border h-14 bg-white self-start sm:self-auto">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 h-full text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 h-full text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="h-14 flex-1 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-sm transition-colors"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-serif text-lg py-4 hover:no-underline hover:text-primary">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  {product.description} All of our pieces are designed in-house to ensure the perfect fit and comfort for everyday wear.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-serif text-lg py-4 hover:no-underline hover:text-primary">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  <p className="mb-2"><strong className="text-foreground font-normal">Material:</strong> {product.material}</p>
                  <p><strong className="text-foreground font-normal">Care:</strong> To keep your pieces looking their best, avoid direct contact with water, perfumes, and lotions. Store in the provided Velmora pouch when not in use.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-serif text-lg py-4 hover:no-underline hover:text-primary">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  Free standard shipping on all orders over $100. We accept returns within 30 days of delivery in their original, unworn condition.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-24 px-4 md:px-8 bg-secondary/30 mt-12 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto">
          <h2 id="related-title" className="font-serif text-3xl md:text-4xl text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.slice(0, 4).filter(p => p.id !== product.id).slice(0,4).map(related => (
               <div key={related.id} className="group cursor-pointer flex flex-col">
               <Link to={`/product/${related.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary w-full block">
                 <img 
                   alt={related.name}
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   data-strk-img-id={`related-img-${related.id}`}
                   data-strk-img={`[related-title-${related.id}] [related-title]`}
                   data-strk-img-ratio="3x4"
                   data-strk-img-width="400"
                 />
               </Link>
               <div className="text-center md:text-left">
                 <h3 id={`related-title-${related.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 line-clamp-1">{related.name}</h3>
                 <p className="text-foreground tracking-wide mt-2">${related.price}</p>
               </div>
             </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;