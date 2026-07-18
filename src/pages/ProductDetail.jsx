import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Star,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  RotateCcw,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from 'sonner';
import ProductCard from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [material, setMaterial] = useState('18k Gold Plated');
  const containerRef = useRef(null);

  const product = useMemo(() => {
    return PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setQuantity(1);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, selectedImage]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, selectedMaterial: material });
    toast.success(`${product.name} added to cart`);
  };

  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
  }, [product.id]);

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white" ref={containerRef}>
      <div className="px-6 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-stone-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setSelectedImage(i)}
                  className={`w-20 md:w-24 aspect-[3/4] flex-shrink-0 border transition-colors ${selectedImage === i ? 'border-primary' : 'border-stone-100 hover:border-stone-300'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-grow aspect-[3/4] bg-stone-50 overflow-hidden relative">
              <img
                data-strk-img-id={`pdp-${product.id}-main`}
                data-strk-img={`[pdp-name] jewelry luxury gold`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="border-b border-stone-100 pb-8 mb-8">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-2">24 Reviews</span>
              </div>

              <h1 id="pdp-name" className="text-3xl md:text-4xl font-serif uppercase tracking-[0.2em] mb-4 text-stone-900">
                {product.name}
              </h1>

              <p className="text-2xl text-stone-600 tabular-nums mb-6">
                ${product.price ? product.price.toFixed(2) : "0.00"}
              </p>

              <p className="text-stone-500 leading-relaxed max-w-md">
                {product.description}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-8 mb-12">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 block mb-4">Material</label>
                <div className="flex gap-3">
                  {['18k Gold Plated', 'Silver Tone'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMaterial(m)}
                      className={`px-6 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all ${material === m ? 'border-primary bg-primary text-white' : 'border-stone-200 hover:border-stone-400 text-stone-600'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 block mb-4">Quantity</label>
                <div className="flex items-center w-32 border border-stone-200 h-14">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="flex-1 flex items-center justify-center hover:bg-stone-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center font-bold text-sm tabular-nums text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="flex-1 flex items-center justify-center hover:bg-stone-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-16 rounded-none uppercase tracking-[0.2em] text-[10px] font-bold mb-12 shadow-md"
            >
              Add to Cart
            </Button>

            {/* Guarantees */}
            <div className="grid grid-cols-1 gap-4 text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-12 border-t border-stone-100 pt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-accent" />
                2 Year Warranty On Tarnish
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4 text-accent" />
                Free Express Worldwide Shipping
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-4 h-4 text-accent" />
                30-Day No Questions Returns
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="border-t border-stone-100">
              <AccordionItem value="description" className="border-stone-100">
                <AccordionTrigger className="text-[10px] uppercase tracking-widest font-bold py-6 hover:no-underline text-stone-900">Description</AccordionTrigger>
                <AccordionContent className="text-stone-500 leading-relaxed">
                  Design meets durability. The {product.name} is a testament to Velmora's commitment to quality craftsmanship. Each piece is hand-finished in our studio, ensuring that every detail is perfect. Layer it for a statement look or wear it alone for quiet elegance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-stone-100">
                <AccordionTrigger className="text-[10px] uppercase tracking-widest font-bold py-6 hover:no-underline text-stone-900">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-stone-500 leading-relaxed">
                  <p className="mb-4">• Base: Responsibly sourced recycled sterling silver.</p>
                  <p className="mb-4">• Plating: Thick 18k Gold Vermeil (2.5 microns) for long-lasting luster.</p>
                  <p className="mb-4">• Care: Avoid direct contact with perfumes and water. Gently polish with the included microfiber cloth to maintain shine.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-stone-100">
                <AccordionTrigger className="text-[10px] uppercase tracking-widest font-bold py-6 hover:no-underline text-stone-900">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-stone-500 leading-relaxed">
                  <p className="mb-4">Free standard shipping on all orders over $50. Express options available at checkout.</p>
                  <p>Returns are accepted within 30 days of delivery. Pieces must be in their original condition and packaging.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related */}
        <div>
          <h2 className="text-2xl font-serif mb-12 text-center uppercase tracking-widest text-stone-900">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
