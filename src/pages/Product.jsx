import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, ChevronLeft, Plus, Minus } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-muted">Product not found.</p>
          <Link to="/shop" className="mt-4 inline-block text-sm font-semibold text-brand-ink underline">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link to="/shop" className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-brand-muted hover:text-brand-ink mb-6">
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-sm bg-brand-warm">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-sm border-2 transition-colors ${
                    activeImage === index ? 'border-brand-ink' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="product-name text-xl md:text-2xl">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 text-brand-gold">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-brand-ink">${product.price}</p>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-2">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition-colors ${
                      selectedVariant === variant
                        ? 'border-brand-ink bg-brand-ink text-white'
                        : 'border-brand-divider text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-2">Quantity</p>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-divider px-3 py-2">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="text-brand-ink">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="text-brand-ink">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button onClick={handleAddToCart} className="mt-8 w-full rounded-full" size="lg">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <Accordion type="single" collapsible className="mt-8 border-t border-brand-divider">
              <AccordionItem value="description">
                <AccordionTrigger className="text-sm font-semibold uppercase tracking-widest">Description</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-brand-muted leading-relaxed">{product.description}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="text-sm font-semibold uppercase tracking-widest">Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-brand-muted leading-relaxed">{product.details}</p>
                  <p className="text-sm text-brand-muted leading-relaxed mt-2">{product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm font-semibold uppercase tracking-widest">Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-brand-muted leading-relaxed">Free worldwide shipping on all orders. 30-day returns for unworn items in original packaging.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="section-title mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
