import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById, fetchProducts } from '@/api/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Minus, Plus, Star, Heart, Share2, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Badge } from '@/components/ui/badge';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold Tone');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [pData, allProducts] = await Promise.all([
          fetchProductById(id),
          fetchProducts()
        ]);
        setProduct(pData);
        setRelatedProducts(allProducts.filter(p => p.id !== id).slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!loading && product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, product]);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
    toast.success(`${product.name} added to cart!`);
  };

  if (loading) return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse">
      <div className="aspect-[3/4] bg-velmora-sand" />
      <div className="space-y-8">
        <div className="h-10 bg-velmora-sand w-3/4" />
        <div className="h-6 bg-velmora-sand w-1/4" />
        <div className="h-32 bg-velmora-sand" />
        <div className="h-14 bg-velmora-sand" />
      </div>
    </div>
  );

  if (!product) return (
    <div className="pt-32 pb-24 text-center space-y-4">
      <h1 className="text-2xl font-serif">Product Not Found</h1>
      <Link to="/shop">
        <Button variant="outline" className="rounded-none border-velmora-charcoal">Back to Shop</Button>
      </Link>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-24 font-sans bg-velmora-base">
      <div className="px-6 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-velmora-gray/60 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop All</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-velmora-charcoal transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-velmora-charcoal truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="aspect-[3/4] overflow-hidden bg-velmora-sand relative group">
                <img 
                  data-strk-img-id="pdp-main-image-8f2a9c"
                  data-strk-img="[product-name] [product-category]"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src={product.image_url} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-velmora-charcoal" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map(num => (
                  <div key={num} className="aspect-[3/4] overflow-hidden bg-velmora-sand">
                    <img 
                      data-strk-img-id={`pdp-gallery-img-${num}-8f2a9c`}
                      data-strk-img={`jewelry detail [product-name] [product-category] angle ${num}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="800"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                      alt={`${product.name} detail ${num}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 self-start animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="space-y-4 border-b border-border pb-8">
              <div className="flex justify-between items-start">
                <h1 id="product-name" className="text-3xl md:text-5xl font-serif tracking-[0.05em] leading-tight uppercase">
                  {product.name}
                </h1>
                <Badge variant="outline" className="border-velmora-gold text-velmora-gold uppercase tracking-tighter text-[9px] mt-2">
                  18K Gold Vermeil
                </Badge>
              </div>
              
              <div className="flex items-center gap-4">
                <p className="text-2xl font-light text-velmora-charcoal">${product.price}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-velmora-gold fill-velmora-gold" />
                  ))}
                  <span className="text-[10px] text-velmora-gray uppercase tracking-widest ml-2">(24 Reviews)</span>
                </div>
              </div>

              <p id="product-category" className="hidden">{product.category}</p>
              <p className="text-velmora-gray text-base leading-relaxed font-light">
                {product.description || "A masterfully crafted piece designed to elevate your everyday. Made with high-quality materials and intended for lifelong wear."}
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-velmora-charcoal flex justify-between">
                  Finish: <span className="font-light tracking-widest">{variant}</span>
                </label>
                <div className="flex gap-3">
                  {['Gold Tone', 'Silver Tone'].map(v => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`h-12 flex-1 border px-6 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                        variant === v ? 'bg-velmora-charcoal text-white border-velmora-charcoal' : 'border-border text-velmora-gray hover:border-velmora-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-velmora-charcoal">
                  Quantity
                </label>
                <div className="flex items-center border border-border w-fit h-14 bg-white/50">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-14 h-full flex items-center justify-center hover:text-velmora-gold transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-14 h-full flex items-center justify-center hover:text-velmora-gold transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 rounded-none bg-velmora-charcoal text-white hover:bg-velmora-charcoal/90 h-16 uppercase tracking-[0.3em] text-xs shadow-xl transition-all hover:-translate-y-1 active:scale-95"
                >
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" className="w-16 h-16 p-0 border-border hover:border-velmora-gold hover:text-velmora-gold transition-colors rounded-none">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Info Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck className="w-5 h-5 text-velmora-gold" />
                <p className="text-[9px] uppercase tracking-widest text-velmora-gray">Free Global Shipping</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck className="w-5 h-5 text-velmora-gold" />
                <p className="text-[9px] uppercase tracking-widest text-velmora-gray">2 Year Warranty</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <RefreshCw className="w-5 h-5 text-velmora-gold" />
                <p className="text-[9px] uppercase tracking-widest text-velmora-gray">30-Day Returns</p>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description" className="border-border">
                <AccordionTrigger className="uppercase tracking-[0.2em] text-[10px] font-bold hover:no-underline hover:text-velmora-gold transition-colors">Description</AccordionTrigger>
                <AccordionContent className="text-sm font-light leading-relaxed text-velmora-gray space-y-4">
                  <p>Elevate your collection with this masterfully designed piece. Striking a perfect balance between bold expression and refined elegance, it’s crafted for those who find beauty in the intentional.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hand-finished for a liquid-gold sheen</li>
                    <li>Ethically sourced semi-precious stones</li>
                    <li>Lightweight design for all-day comfort</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-border">
                <AccordionTrigger className="uppercase tracking-[0.2em] text-[10px] font-bold hover:no-underline hover:text-velmora-gold transition-colors">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-sm font-light leading-relaxed text-velmora-gray space-y-4">
                  <p><strong>18K Gold Vermeil:</strong> Not your average gold plating. Vermeil is a thick layer of 18k solid gold (at least 2.5 microns) on sterling silver.</p>
                  <p><strong>Care:</strong> To maintain its luster, avoid direct contact with perfumes, lotions, and salt water. Store in your Velmora protective pouch when not in wear.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-border">
                <AccordionTrigger className="uppercase tracking-[0.2em] text-[10px] font-bold hover:no-underline hover:text-velmora-gold transition-colors">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-sm font-light leading-relaxed text-velmora-gray">
                  <p>Enjoy free standard shipping on all international orders. Ready-to-ship orders are processed within 24-48 hours. Returns are accepted within 30 days of delivery, provided the security tag is still attached.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32 pb-24 border-t border-border pt-24">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight">Complete the Look</h2>
            <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-velmora-charcoal/20 pb-1 hover:border-velmora-gold transition-colors">
              Shop All Jewelry
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
