import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = seedProducts.find(p => p.id === id);
  
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-heading text-4xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-accent underline hover:text-accent/80">Return to Shop</Link>
      </div>
    );
  }

  const images = [product.image, product.image2];
  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center text-xs tracking-widest uppercase text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4 h-max sticky top-32">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 aspect-[4/5] overflow-hidden border transition-all",
                    activeImage === idx ? "border-accent opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-secondary overflow-hidden">
              <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col py-4 md:py-8 lg:pr-12">
            
            <div className="mb-6">
              <h1 className="font-heading text-4xl lg:text-5xl uppercase tracking-widest mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">${product.price.toFixed(2)}</span>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn("w-4 h-4", i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted")} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              {product.description}
            </p>

            {/* Variant Selection */}
            <div className="mb-8">
              <span className="block text-sm tracking-widest uppercase mb-3 text-muted-foreground">Color / Finish</span>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedVariant('gold')}
                  className={cn(
                    "px-6 py-2 border rounded-full text-sm font-medium transition-all",
                    selectedVariant === 'gold' ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/50"
                  )}
                >
                  Gold
                </button>
                <button 
                  onClick={() => setSelectedVariant('silver')}
                  className={cn(
                    "px-6 py-2 border rounded-full text-sm font-medium transition-all",
                    selectedVariant === 'silver' ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/50"
                  )}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-12 h-14">
              <div className="flex items-center border border-border">
                <button 
                  className="px-4 text-muted-foreground hover:text-foreground h-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button 
                  className="px-4 text-muted-foreground hover:text-foreground h-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="flex-1 rounded-none bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-widest font-medium h-full"
              >
                Add to Cart
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="font-heading text-xl uppercase tracking-wider hover:no-underline">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-light">
                  {product.description} This piece is carefully crafted to ensure lasting beauty and shine. Avoid contact with water and perfume to maintain its luster.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="font-heading text-xl uppercase tracking-wider hover:no-underline">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-light">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>18K Gold Plated over brass core</li>
                    <li>Hypoallergenic and nickel-free</li>
                    <li>Store in provided pouch when not in use</li>
                    <li>Gently wipe with soft cloth after wear</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="font-heading text-xl uppercase tracking-wider hover:no-underline">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-light">
                  Free standard shipping on all orders. Express options available at checkout. 
                  Returns are accepted within 30 days of unworn items in original packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 border-t border-border pt-16">
          <h2 className="font-heading text-3xl uppercase tracking-widest text-center mb-12">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ShopProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Reusing basic product card for related items
function ShopProductCard({ product, addToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative flex flex-col text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
        <img 
          src={isHovered ? product.image2 : product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        
        <div className={`absolute bottom-0 left-0 w-full p-4 transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white text-foreground hover:bg-black hover:text-white py-3 text-sm tracking-widest uppercase font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col">
        <Link to={`/product/${product.id}`} className="font-heading text-lg tracking-wider uppercase mb-1 hover:text-accent transition-colors">
          {product.name}
        </Link>
        <span className="text-muted-foreground">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}