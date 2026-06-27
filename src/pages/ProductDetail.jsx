import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Minus, Plus, Truck, ArrowLeftRight } from 'lucide-react';
import { useCartStore } from '../store/useCart';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addItem } = useCartStore();
  
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const found = PRODUCTS.find(p => p.slug === slug);
    if (found) {
      setProduct(found);
      setSelectedColor(found.colors[0]);
      setQuantity(1);
      setActiveImage(0);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!product) return (
    <div className="min-h-screen pt-32 pb-24 text-center">
      <h2 className="font-serif text-3xl mb-6">Product Not Found</h2>
      <Button asChild className="uppercase tracking-widest"><Link to="/shop">Back to Shop</Link></Button>
    </div>
  );

  const images = [product.image, product.imageHover];
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
    toast.success(`${quantity}x ${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-8 flex gap-2">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          
          {/* Images */}
          <div className="flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-32 lg:h-max">
            {/* Thumbnails */}
            <div className="flex justify-center md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0 hiddden-scrollbar">
              {images.map((img, i) => (
                <button 
                  key={i} 
                  className={`relative aspect-[3/4] w-20 md:w-auto shrink-0 overflow-hidden border-2 transition-colors ${activeImage === i ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-muted">
              <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col py-6 lg:py-12">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] mb-4">{product.name}</h1>
            
            <div className="flex items-center justify-between mb-6">
              <p className="text-xl font-medium text-muted-foreground">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium ml-2">{product.rating}</span>
                <span className="text-sm text-muted-foreground ml-1">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-8">
              <p className="uppercase tracking-widest text-xs font-semibold mb-4 flex items-center justify-between">
                <span>Color: <span className="text-muted-foreground font-normal capitalize ml-1">{selectedColor}</span></span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => {
                  let bgClass = "bg-yellow-400";
                  if (color === "silver") bgClass = "bg-gray-300";
                  if (color === "rose-gold") bgClass = "bg-rose-300";
                  
                  return (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor === color ? 'border-primary p-[2px]' : 'border-transparent'}`}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color}`}
                    >
                      <span className={`w-full h-full rounded-full ${bgClass} shadow-inner bg-gradient-to-tr from-black/10 to-transparent`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="flex gap-4 mb-10">
              <div className="flex items-center border border-border shrink-0">
                <button 
                  className="w-12 h-14 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button 
                  className="w-12 h-14 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <Button 
                size="lg" 
                className="flex-1 h-14 uppercase tracking-widest rounded-none shadow-md hover:shadow-lg transition-all"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-12 py-6 border-y border-border/50">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 flex-shrink-0" />
                <span>Free global shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3">
                <ArrowLeftRight className="w-5 h-5 flex-shrink-0" />
                <span>Free 30-day returns & exchanges</span>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full" defaultValue="description">
              <AccordionItem value="description" className="border-border">
                <AccordionTrigger className="uppercase tracking-widest text-sm hover:no-underline font-semibold">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">Designed for the modern romantic. {product.description} Wear it solo for a touch of quiet luxury, or layer it heavily for an editorial statement.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Base material: Brass</li>
                    <li>Plating: {product.material}</li>
                    <li>Hypoallergenic, nickel-free</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care" className="border-border">
                <AccordionTrigger className="uppercase tracking-widest text-sm hover:no-underline font-semibold">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  To keep your Velmora pieces looking their best, avoid direct contact with perfumes, lotions, and harsh chemicals. We recommend removing your jewelry before swimming, exercising, or sleeping. Store in the provided pouch when not in use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-border">
                <AccordionTrigger className="uppercase tracking-widest text-sm hover:no-underline font-semibold">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-2">We offer free worldwide shipping on orders over $50.</p>
                  <p>Standard delivery takes 3-5 business days. If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>

        {/* Related Products */}
        <section className="border-t border-border/50 pt-24">
          <h2 className="font-serif text-3xl text-center uppercase tracking-[0.1em] mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group flex flex-col">
                <Link to={`/product/${p.slug}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </Link>
                <Link to={`/product/${p.slug}`} className="hover:text-primary transition-colors">
                  <h3 className="font-serif uppercase tracking-wider text-sm mb-1 line-clamp-1">{p.name}</h3>
                </Link>
                <p className="text-muted-foreground text-sm">${p.price}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductDetail;
