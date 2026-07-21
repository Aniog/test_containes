import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/api/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Star, Minus, Plus, Heart, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);

  const product = useMemo(() => PRODUCTS.find(p => p.id === parseInt(id)), [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setActiveImage(0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center space-y-4">
        <h2 className="text-3xl font-serif">Product not found</h2>
        <Link to="/shop">
          <Button variant="link" className="tracking-widest uppercase text-xs">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    toast.success(`Added ${quantity} ${product.name} to your bag`, {
      description: `Variant: ${selectedVariant}`
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-bold uppercase text-muted-foreground mb-12">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-primary">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative flex-none w-20 aspect-[3/4] bg-muted border-2 transition-all ${
                    activeImage === idx ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img 
                    data-strk-img-id={`product-${product.id}-thumb-${idx}`}
                    data-strk-img={`close up luxury gold ${product.category} ${product.name} view ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 relative aspect-[3/4] bg-muted overflow-hidden group cursor-zoom-in">
              <img 
                data-strk-img-id={`product-${product.id}-main-detail-${activeImage}`}
                data-strk-img={`model wearing ${product.name} jewelry close up professional editorial lighting view ${activeImage}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button size="icon" variant="secondary" className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-none h-10 w-10">
                  <Heart size={18} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-none h-10 w-10">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-primary uppercase leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-medium font-serif">${product.price}</span>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-widest text-muted-foreground uppercase">(48 Reviews)</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed italic font-serif text-lg">
                {product.description}
              </p>
              
              {/* Variant Selector */}
              <div className="space-y-4">
                <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-primary">Finish</h4>
                <div className="flex space-x-2">
                  {['Gold', 'Silver'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-xs tracking-widest uppercase border transition-all ${
                        selectedVariant === variant 
                          ? 'border-primary bg-primary text-primary-foreground font-bold' 
                          : 'border-border hover:border-accent text-muted-foreground'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4">
                <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-primary">Quantity</h4>
                <div className="flex items-center border border-border w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-accent transition-colors disabled:opacity-20"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-accent transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-none py-8 text-xs font-bold tracking-[0.3em] uppercase shadow-lg border-none"
              >
                ADD TO BAG
              </Button>
            </div>

            <Separator />

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description" className="border-border">
                <AccordionTrigger className="text-[10px] tracking-[0.2em] font-bold uppercase hover:no-underline hover:text-accent py-6">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2 pb-6">
                  {product.description} A timeless addition to your everyday rotation. This piece is designed to be worn alone for a minimalist look or stacked with your favorites for an editorial edge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-border">
                <AccordionTrigger className="text-[10px] tracking-[0.2em] font-bold uppercase hover:no-underline hover:text-accent py-6">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2 pb-6 space-y-4">
                  <p>• 18K Gold Plated or 925 Sterling Silver</p>
                  <p>• Hypoallergenic and Nickel-free</p>
                  <p>• Durable high-polish finish</p>
                  <p className="pt-2 italic">To maintain the luster, avoid contact with perfumes, lotions, and chlorine. Store in a cool, dry place when not in use.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-border">
                <AccordionTrigger className="text-[10px] tracking-[0.2em] font-bold uppercase hover:no-underline hover:text-accent py-6">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2 pb-6 space-y-2">
                  <p>Free worldwide shipping on orders over $100.</p>
                  <p>We accept returns and exchanges within 30 days of delivery. Pieces must be in their original condition and packaging.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32 pt-24 border-t border-border">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-serif tracking-tight">You May Also Like</h2>
            <Link to="/shop">
              <Button variant="link" className="p-0 h-auto text-[10px] tracking-[0.2em] font-bold uppercase hover:text-accent transition-colors">
                VIEW ALL —
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
