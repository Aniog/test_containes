import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';
import { ProductCard } from '@/components/ProductCard';
import { useCart } from '../context/CartContext';
import { getProductById, getProductsByCategory } from '@/lib/data';

export const Product = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const { addToCart } = useCart();
  
  // Reset state when product changes
  useEffect(() => {
    setActiveImage(0);
    setQuantity(1);
    setVariant('Gold');
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center font-serif text-2xl">Product not found.</div>;
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex items-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Images */}
          <div className="md:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible lg:w-24 shrink-0">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-[4/5] overflow-hidden rounded-sm border-2 transition-colors ${activeImage === i ? 'border-accent' : 'border-transparent hover:border-border'}`}
                >
                  <img src={img} alt={`${product.name} view ${i+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            <div className="flex-1 aspect-[4/5] bg-muted relative overflow-hidden">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Details */}
          <div className="md:w-1/2 flex flex-col justify-start">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center text-accent text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'text-accent' : 'text-muted'}>★</span>
                ))}
                <span className="text-muted-foreground ml-2">({product.reviews})</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <span className="block text-sm font-medium uppercase tracking-widest mb-4">Metal Finish: {variant}</span>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 border rounded-full text-sm font-medium tracking-wide transition-all
                      ${variant === v 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-border hover:border-primary text-primary'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-primary px-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:text-accent transition-colors"
                >-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:text-accent transition-colors"
                >+</button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                variant="accent" 
                className="flex-1 uppercase tracking-widest text-sm lg:text-base h-auto py-4"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
              
              <button className="border border-border p-4 hover:border-accent hover:text-accent transition-all rounded-sm flex items-center justify-center">
                <Heart size={20} />
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion type="single" collapsible defaultValue="details">
                <AccordionItem value="details">
                  <AccordionTrigger className="uppercase tracking-widest text-sm font-semibold">Description</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger className="uppercase tracking-widest text-sm font-semibold">Materials & Care</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <ul className="list-disc pl-4 space-y-2 mb-4">
                      {product.materials.map((m, i) => <li key={i}>{m}</li>)}
                    </ul>
                    <p>To preserve your piece, avoid contact with water, lotion, and perfume. Store in the provided pouch when not in use.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger className="uppercase tracking-widest text-sm font-semibold">Shipping & Returns</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p className="mb-2">Free standard shipping on all orders. Expedited shipping options available at checkout.</p>
                    <p>We accept returns within 30 days of delivery in unworn, original condition.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-muted py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl mb-12 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
