import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import Button from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/home/ProductCard';
import { cn } from '@/lib/utils';

const Product = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-ink-secondary">Product not found.</p>
          <Link to="/shop" className="text-accent underline mt-4 inline-block">Back to shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-background">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'aspect-square overflow-hidden rounded-sm border-2 transition-colors',
                    selectedImage === idx ? 'border-accent' : 'border-transparent'
                  )}
                >
                  <img src={image} alt={`${product.name} ${idx + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-accent mb-2">{product.category}</p>
              <h1 className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-widest">{product.name}</h1>
              <p className="mt-3 text-xl text-ink">${product.price}</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center gap-1 text-accent">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-ink-secondary">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="text-sm text-ink-secondary leading-relaxed">{product.description}</p>

            <div>
              <p className="text-xs tracking-widest uppercase text-ink mb-3">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-4 py-2 rounded-full border text-xs tracking-widest uppercase transition-all',
                      variant === v ? 'border-accent bg-accent-soft text-ink' : 'border-border text-ink-secondary hover:border-accent'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="inline-flex items-center gap-3 border border-border rounded-full px-3 py-2">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-1 text-ink hover:text-accent">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm text-ink w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="p-1 text-ink hover:text-accent">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button variant="accent" size="lg" className="w-full" onClick={handleAddToCart}>
              {added ? 'Added to Cart' : 'Add to Cart'}
            </Button>

            <div className="border-t border-border pt-6 space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm text-ink">
                  <span className="tracking-widest uppercase">Description</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{product.description}</p>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm text-ink">
                  <span className="tracking-widest uppercase">Materials & Care</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{product.details}. {product.care}</p>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm text-ink">
                  <span className="tracking-widest uppercase">Shipping & Returns</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">Free worldwide shipping on orders over $75. 30-day returns on unworn items in original packaging.</p>
              </details>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-accent mb-2">You May Also Like</p>
                <h2 className="font-serif text-2xl md:text-3xl text-ink">Related Products</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Product;
