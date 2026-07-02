import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Truck, RefreshCw, Shield } from 'lucide-react';
import { PRODUCTS, getProductById, getRelatedProducts, formatPrice, getCategoryLabel } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ProductGallery } from '@/components/shop/ProductGallery';
import { RelatedProducts } from '@/components/shop/RelatedProducts';
import { Button } from '@/components/ui/Button';
import { StarRating } from '@/components/ui/StarRating';
import { QuantityStepper } from '@/components/ui/QuantityStepper';
import { Accordion } from '@/components/ui/Accordion';
import { cn } from '@/lib/utils';

export function ProductDetail() {
  const { productId } = useParams();
  const product = useMemo(() => getProductById(productId), [productId]);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const variant = product.variants.find((v) => v.id === selectedVariant) || product.variants[0];
  const related = getRelatedProducts(product.id, 4);

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $75. Standard delivery arrives in 5–8 business days. Need it sooner? Express options available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.',
    },
  ];

  const handleAddToCart = () => {
    addItem(product, variant.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 py-6 pt-24 text-xs text-velmora-taupe sm:px-6 lg:px-8">
        <Link to="/" className="hover:text-velmora-gold">
          Home
        </Link>
        <ChevronRight className="mx-1 inline h-3 w-3" />
        <Link to="/shop" className="hover:text-velmora-gold">
          Shop
        </Link>
        <ChevronRight className="mx-1 inline h-3 w-3" />
        <span className="text-velmora-base">{product.name}</span>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />

          <div className="flex flex-col lg:py-8">
            <span className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.22em] text-velmora-gold">
              {getCategoryLabel(product.category)}
            </span>
            <h1 className="font-serif text-3xl uppercase tracking-widest text-velmora-base sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <p className="mt-5 font-serif text-3xl text-velmora-base">
              {formatPrice(product.price)}
            </p>
            <p className="mt-6 font-sans text-sm leading-relaxed text-velmora-taupe">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
                Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    disabled={!v.inStock}
                    onClick={() => setSelectedVariant(v.id)}
                    className={cn(
                      'h-11 min-w-[80px] border px-4 font-sans text-xs font-semibold uppercase tracking-widest transition-all',
                      selectedVariant === v.id
                        ? 'border-velmora-gold bg-velmora-gold/5 text-velmora-gold'
                        : 'border-velmora-base/15 text-velmora-base hover:border-velmora-gold/50',
                      !v.inStock && 'cursor-not-allowed opacity-40 line-through'
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
                Quantity
              </span>
              <QuantityStepper value={quantity} onChange={setQuantity} />
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <Button size="full" onClick={handleAddToCart} disabled={!variant.inStock}>
                {added ? 'Added to Cart' : variant.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <p className="text-center text-xs text-velmora-taupe">
                Free shipping over $75 · 30-day returns
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-velmora-base/10 pt-8">
              <div className="text-center">
                <Truck className="mx-auto h-5 w-5 text-velmora-gold" />
                <span className="mt-2 block text-[10px] uppercase tracking-widest text-velmora-taupe">
                  Free Shipping
                </span>
              </div>
              <div className="text-center">
                <Shield className="mx-auto h-5 w-5 text-velmora-gold" />
                <span className="mt-2 block text-[10px] uppercase tracking-widest text-velmora-taupe">
                  18k Plated
                </span>
              </div>
              <div className="text-center">
                <RefreshCw className="mx-auto h-5 w-5 text-velmora-gold" />
                <span className="mt-2 block text-[10px] uppercase tracking-widest text-velmora-taupe">
                  Easy Returns
                </span>
              </div>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={related} />
    </div>
  );
}
