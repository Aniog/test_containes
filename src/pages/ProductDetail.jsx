import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Minus, Plus, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { StarRating } from '@/components/ui/StarRating';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import StrkImage from '@/components/ui/StrkImage';
import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const variants = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('gold');

  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId]
  );

  const related = useMemo(
    () => products.filter((p) => p.id !== productId).slice(0, 4),
    [productId]
  );

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold hover:underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, quantity, selectedVariant);
  };

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 py-6 text-xs uppercase tracking-widest text-warm-gray">
          <Link to="/" className="hover:text-charcoal">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-charcoal">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-cream">
              <StrkImage
                id={`product-gallery-${product.images[selectedImage].id}`}
                query={`[product-title]`}
                ratio="4x5"
                width={800}
                alt={product.images[selectedImage].alt}
                className="transition-opacity duration-500"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'aspect-square w-20 overflow-hidden border bg-cream transition-colors',
                    selectedImage === idx
                      ? 'border-gold'
                      : 'border-transparent hover:border-taupe'
                  )}
                  aria-label={`View ${img.alt}`}
                >
                  <StrkImage
                    id={`product-thumb-${img.id}`}
                    query={`[product-title]`}
                    ratio="1x1"
                    width={160}
                    alt={img.alt}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col lg:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              {product.category}
            </p>
            <h1
              id="product-title"
              className="mt-2 font-serif text-3xl font-light uppercase tracking-[0.12em] text-charcoal md:text-4xl"
            >
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} count={product.reviews} />
            </div>
            <p className="mt-5 font-serif text-2xl font-light text-charcoal">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-warm-gray">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-7">
              <span className="text-xs font-medium uppercase tracking-widest text-charcoal">
                Tone
              </span>
              <div className="mt-3 flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={cn(
                      'rounded-full px-6 py-2.5 text-xs font-medium uppercase tracking-widest transition-all',
                      selectedVariant === variant.id
                        ? 'bg-charcoal text-ivory'
                        : 'bg-transparent text-charcoal border border-taupe/40 hover:border-charcoal'
                    )}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <span className="text-xs font-medium uppercase tracking-widest text-charcoal">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-taupe/30 bg-ivory">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
              <button
                className="flex aspect-square w-14 items-center justify-center border border-taupe/30 text-charcoal hover:border-gold hover:text-gold transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8">
              <Accordion type="single" collapsible defaultValue="description" className="w-full">
                <AccordionItem value="description">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>{product.description}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Care</AccordionTrigger>
                  <AccordionContent>
                    <strong className="text-charcoal">Materials:</strong>{' '}
                    {product.materials}
                    <br className="mb-2" />
                    <strong className="text-charcoal">Care:</strong> {product.care}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    <strong className="text-charcoal">Shipping:</strong>{' '}
                    {product.shipping}
                    <br className="mb-2" />
                    <strong className="text-charcoal">Returns:</strong>{' '}
                    {product.returns}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 border-t border-taupe/20 pt-14">
          <h2 className="mb-8 font-serif text-2xl font-light text-charcoal md:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
