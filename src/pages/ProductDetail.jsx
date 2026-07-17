import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '../lib/store';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { ProductCard } from '../components/product/ProductCard';

// Seed data mock
const allProducts = [
  { 
    id: '1', 
    name: 'Vivid Aura Jewels', 
    price: 42, 
    description: 'A striking statement piece that captures the light. These jewels are designed to be the centerpiece of any look, featuring intricate details and a brilliant finish.', 
    category: 'earrings' 
  },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, description: 'Elegant and botanical-inspired.', category: 'necklaces' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, description: 'Chunky, modern, and perfect for everyday wear.', category: 'huggies' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, description: 'Delicate filigree work that feels vintage yet contemporary.', category: 'earrings' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, description: 'The ultimate gift set featuring matching necklace and earrings.', category: 'collections' },
];

export const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === id) || allProducts[0];
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [activeImage, setActiveImage] = useState(0);
  
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({ ...product, variant, quantity });
  };

  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6 py-6 border-b border-border/50 text-sm tracking-wider uppercase text-muted-foreground flex gap-2">
        <a href="/" className="hover:text-foreground">Home</a>
        <span>/</span>
        <a href="/shop" className="hover:text-foreground">Shop</a>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
             {/* Thumbnails */}
             <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 hide-scrollbar pb-2 md:pb-0">
               {[0, 1, 2, 3].map((imgIdx) => (
                 <button 
                  key={imgIdx}
                  onClick={() => setActiveImage(imgIdx)}
                  className={`relative aspect-[3/4] w-20 md:w-full flex-shrink-0 border transition-all ${activeImage === imgIdx ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
                 >
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`Thumbnail ${imgIdx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id="pdp-thumb-placeholder"
                      data-strk-img="[pdp-title] jewelry detail"
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="150"
                    />
                 </button>
               ))}
             </div>
             {/* Main Image */}
             <div className="flex-1 bg-muted relative aspect-[3/4]">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="pdp-main-placeholder"
                  data-strk-img="[pdp-title] fine jewelry editorial shot high res"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                />
             </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-accent mb-4">
               {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-muted-foreground text-sm ml-2 font-sans">124 Reviews</span>
            </div>

            <h1 id="pdp-title" className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">{product.name}</h1>
            <p className="text-xl mb-6">${product.price}</p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <span className="block text-sm uppercase tracking-wider font-semibold mb-4">Finish: <span className="text-muted-foreground font-normal capitalize">{variant}</span></span>
              <div className="flex gap-3">
                <button 
                  onClick={() => setVariant('gold')}
                  className={`w-12 h-12 rounded-full bg-[#D4AF37] relative flex items-center justify-center transition-all ${variant === 'gold' ? 'ring-2 ring-offset-2 ring-primary' : 'hover:scale-110'}`}
                  aria-label="Gold"
                />
                <button 
                  onClick={() => setVariant('silver')}
                  className={`w-12 h-12 rounded-full bg-[#C0C0C0] relative flex items-center justify-center transition-all ${variant === 'silver' ? 'ring-2 ring-offset-2 ring-primary' : 'hover:scale-110'}`}
                  aria-label="Silver"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 border-b border-border pb-12">
              <div className="flex items-center border border-primary w-full sm:w-1/3">
                 <button 
                  className="px-4 py-3 hover:bg-muted w-1/3 flex justify-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="w-1/3 text-center">{quantity}</span>
                <button 
                  className="px-4 py-3 hover:bg-muted w-1/3 flex justify-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="w-full sm:w-2/3 bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="text-lg font-serif">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Crafted by our master jewelers, this piece undergoes a rigorous quality check to ensure it meets our high standards. Designed to be lightweight enough for everyday wear while maintaining a substantial, luxurious feel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="text-lg font-serif">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>18K Gold Vermeil over Sterling Silver base</li>
                    <li>Hypoallergenic, nickel-free and lead-free</li>
                    <li>To maintain the shine, avoid contact with water, perfumes, and lotions.</li>
                    <li>Store in the provided velvet pouch when not in use.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-lg font-serif">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-2">Free standard shipping on all orders. Express shipping available at checkout.</p>
                  <p>We offer a 30-day return policy for a full refund. Items must be in unworn condition with original packaging.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 md:px-6 pt-24 border-t border-border mt-12">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
