import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronRight, Minus, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ProductCard from '@/components/products/ProductCard';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container-custom py-24 text-center">
        <p className="text-ink-500">Product not found.</p>
        <Link to="/shop" className="btn-primary mt-4 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    toast.success(`${product.name} added to cart`);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8 md:py-12">
        <nav className="flex items-center gap-2 text-xs text-ink-500 mb-8">
          <Link to="/" className="hover:text-ink-900">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-ink-900">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-16 w-16 md:h-20 md:w-20 rounded-xl overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-brand-500' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="font-display text-3xl md:text-4xl text-ink-950 uppercase tracking-widest">{product.name}</h1>
              <p className="mt-2 text-lg text-ink-700">${product.price}</p>
              <div className="mt-2 flex items-center gap-2 text-sm text-ink-600">
                <div className="flex gap-0.5 text-brand-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className={`h-4 w-4 ${idx < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span>{product.rating} ({product.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="text-sm text-ink-600 leading-relaxed">{product.description}</p>

            <div>
              <p className="text-xs uppercase tracking-widest text-ink-500 mb-2">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                      selectedVariant === variant
                        ? 'border-brand-500 bg-brand-500 text-white'
                        : 'border-brand-200 text-ink-700 hover:border-brand-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-ink-500 mb-2">Quantity</p>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-200 px-3 py-2">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="text-ink-600 hover:text-ink-900">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="text-ink-600 hover:text-ink-900">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button className="w-full rounded-full" size="lg" onClick={handleAddToCart}>
              Add to Cart — ${product.price * quantity}
            </Button>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="text-sm uppercase tracking-widest">Description</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-ink-600 leading-relaxed">{product.details}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="text-sm uppercase tracking-widest">Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-ink-600 leading-relaxed">{product.materials}</p>
                  <p className="text-sm text-ink-600 leading-relaxed mt-2">{product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm uppercase tracking-widest">Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-ink-600 leading-relaxed">{product.shipping}</p>
                  <p className="text-sm text-ink-600 leading-relaxed mt-2">{product.returns}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h3 className="font-display text-2xl md:text-3xl text-ink-950 mb-6">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
