import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight, Minus, Plus, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // Scroll to top when product changes
    window.scrollTo(0, 0);
    const foundProduct = seedProducts.find(p => p.id === id);
    setProduct(foundProduct);
    setActiveImage(0);
    setQuantity(1);
    setSelectedVariant('gold');
  }, [id]);

  if (!product) {
    return <div className="min-h-screen pt-32 flex justify-center"><p className="font-serif text-xl">Loading...</p></div>;
  }

  const images = [product.image, product.hoverImage].filter(Boolean);
  const relatedProducts = seedProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, variant: selectedVariant }, quantity);
  };

  return (
    <div className="pt-24 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4 h-[600px] lg:h-[800px]">
             {/* Desktop Thumbnails (Left side) */}
             <div className="hidden md:flex flex-col gap-4 w-24 shrink-0 overflow-y-auto scrollbar-hide py-1">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[4/5] overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent hover:border-border'}`}
                >
                  <img src={img} alt={`${product.name} detail`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-grow relative bg-secondary overflow-hidden">
               <img 
                  src={images[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
            </div>

            {/* Mobile Thumbnails (Bottom) */}
             <div className="flex md:hidden gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 aspect-[4/5] shrink-0 snap-start overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                >
                  <img src={img} alt={`${product.name} detail`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-2/5 flex flex-col pt-4">
            
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-4">{product.name}</h1>
            
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
              <span className="text-xl md:text-2xl">${product.price}</span>
              <div className="flex items-center gap-2">
                 <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                 </div>
                 <span className="text-xs text-muted-foreground uppercase tracking-widest">(24)</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-widest font-medium mb-4 flex items-center gap-2">
                Metal: <span className="text-muted-foreground font-normal capitalize">{selectedVariant}</span>
              </span>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedVariant('gold')}
                  className={`w-8 h-8 rounded-full border border-background shadow-[0_0_0_1px_rgba(0,0,0,0.1)] flex items-center justify-center transition-transform ${selectedVariant === 'gold' ? 'scale-110 ring-1 ring-primary ring-offset-2' : 'hover:scale-105'}`}
                  aria-label="Select Gold"
                >
                  <span className="w-full h-full rounded-full bg-[#D4AF37]"></span>
                </button>
                <button 
                  onClick={() => setSelectedVariant('silver')}
                  className={`w-8 h-8 rounded-full border border-background shadow-[0_0_0_1px_rgba(0,0,0,0.1)] flex items-center justify-center transition-transform ${selectedVariant === 'silver' ? 'scale-110 ring-1 ring-border ring-offset-2' : 'hover:scale-105'}`}
                  aria-label="Select Silver"
                >
                  <span className="w-full h-full rounded-full bg-[#C0C0C0]"></span>
                </button>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-border w-32 shrink-0 justify-between px-2">
                  <button 
                    className="p-3 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                  <button 
                    className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors py-4 shadow-sm"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="uppercase tracking-widest text-sm font-medium hover:no-underline hover:text-primary">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  Every Velmora piece is thoughtfully designed. {product.description} Intended to be stacked seamlessly with your current collection or worn as a subtle standalone statement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="uppercase tracking-widest text-sm font-medium hover:no-underline hover:text-primary">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  Crafted with a thick layer of 18k gold over a premium sterling silver or brass core. Hypoallergenic and nickel-free. To maintain the finish, avoid contact with water, perfumes, and lotions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="uppercase tracking-widest text-sm font-medium hover:no-underline hover:text-primary">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  Free extended worldwide shipping on all orders. We offer a 30-day return policy for unworn items in their original packaging. 
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-border mt-16">
            <h2 className="text-center font-serif text-3xl mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;
