import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-serif text-2xl text-brand-ink">Product not found</p>
        <p className="mt-2 text-sm text-brand-muted">ID: {id}</p>
        <Link to="/shop" className="mt-4 inline-block text-sm text-brand-accent hover:underline">Back to shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      variant: selectedVariant,
      quantity,
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="space-y-4">
          <div className="aspect-[3/4] overflow-hidden bg-brand-warm">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square w-20 overflow-hidden border-2 transition-colors ${
                  selectedImage === idx ? 'border-brand-accent' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:py-4">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-ink uppercase">{product.name}</h1>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-brand-muted">({product.reviews} reviews)</span>
          </div>
          <p className="mt-6 text-2xl font-medium text-brand-ink">${product.price}</p>
          <p className="mt-6 text-sm text-brand-muted leading-relaxed">{product.description}</p>

          <div className="mt-8">
            <p className="text-sm font-medium text-brand-ink mb-3">Tone</p>
            <div className="flex gap-3">
              {['gold', 'silver'].map((tone) => (
                <button
                  key={tone}
                  onClick={() => setSelectedVariant(tone)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm capitalize transition-colors ${
                    selectedVariant === tone
                      ? 'border-brand-accent bg-brand-accent/10 text-brand-ink'
                      : 'border-brand-line text-brand-muted hover:border-brand-accent'
                  }`}
                >
                  {selectedVariant === tone && <Check className="h-4 w-4" />}
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-brand-ink mb-3">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-line text-brand-ink transition-colors hover:border-brand-accent"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-line text-brand-ink transition-colors hover:border-brand-accent"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-8 w-full rounded-full bg-brand-accent py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-accent/90"
          >
            Add to Cart
          </button>

          <Accordion type="single" collapsible className="mt-10">
            <AccordionItem value="description">
              <AccordionTrigger className="text-sm font-medium uppercase tracking-wide">Description</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-brand-muted leading-relaxed">{product.description}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="materials">
              <AccordionTrigger className="text-sm font-medium uppercase tracking-wide">Materials & Care</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-brand-muted leading-relaxed">18K gold-plated brass with hypoallergenic finishes. Avoid contact with perfumes, lotions, and water. Store in a dry place when not in use.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger className="text-sm font-medium uppercase tracking-wide">Shipping & Returns</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-brand-muted leading-relaxed">Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="font-serif text-2xl text-brand-ink">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-brand-warm">
                  <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-3 font-serif text-sm uppercase tracking-wide text-brand-ink">{item.name}</h3>
                <p className="mt-1 text-sm text-brand-muted">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
