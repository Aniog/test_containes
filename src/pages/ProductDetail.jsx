import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ProductGallery from '@/components/product/ProductGallery';
import { Accordion } from '@/components/ui/accordion';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openDrawer } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl text-ink">Product not found</h1>
        <p className="mt-3 text-ink/60">The piece you are looking for does not exist.</p>
        <Button className="mt-6" asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images,
        variant: selectedVariant,
      });
    }
    openDrawer();
  };

  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-ink/50 mb-8">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink/80">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.images} productName={product.name} />

          <div className="flex flex-col">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold uppercase tracking-wide text-ink">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-gold-600">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-semibold">{product.rating}</span>
              </div>
              <span className="text-xs text-ink/50">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 font-serif text-2xl text-ink">${product.price}</p>
            <p className="mt-4 text-sm text-ink/70 leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/60 mb-2.5">
                Tone
              </p>
              <div className="flex flex-wrap gap-2.5">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'rounded-full border px-4 py-2 text-sm font-medium capitalize transition-all duration-200',
                      selectedVariant === variant
                        ? 'border-gold-500 bg-gold-50 text-gold-700'
                        : 'border-base-300 bg-cream text-ink/70 hover:border-gold-400',
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/60 mb-2.5">
                Quantity
              </p>
              <div className="inline-flex items-center rounded-full border border-base-300">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2.5 text-ink/70 hover:text-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 text-ink/70 hover:text-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button size="lg" className="mt-8 w-full rounded-full" onClick={handleAddToCart}>
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <div className="mt-8">
              <Accordion
                items={[
                  {
                    title: 'Description',
                    content: product.description,
                    defaultOpen: true,
                  },
                  {
                    title: 'Materials & Care',
                    content: product.details,
                  },
                  {
                    title: 'Shipping & Returns',
                    content:
                      'Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging.',
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-base-100">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink/80">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
