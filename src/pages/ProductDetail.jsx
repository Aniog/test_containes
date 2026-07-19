import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Minus, Plus, Heart, Truck, RefreshCcw, ShieldCheck } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductImage from '@/components/ProductImage';
import ProductCard from '@/components/ProductCard';
import StarRating from '@/components/StarRating';

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-xs tracking-[0.2em] uppercase font-medium text-ink">
          {title}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            'text-warmgray-500 transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        )}
      >
        <div className="text-sm text-warmgray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id, selectedVariant, selectedImage]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const galleryImages = [
    { imgId: `${product.imgId}-main`, query: `[${product.descId}] [${product.titleId}] gold jewelry` },
    { imgId: `${product.imgId}-alt1`, query: `[${product.titleId}] gold jewelry detail` },
    { imgId: `${product.imgId}-alt2`, query: `[${product.titleId}] gold jewelry worn` },
    { imgId: `${product.imgId}-alt3`, query: `[${product.titleId}] gold jewelry packaging` },
  ];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div ref={containerRef}>
      <main className="pt-20 md:pt-24 pb-16 md:pb-24 bg-cream-100">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="py-5 text-xs text-warmgray-500">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-ink">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible hide-scrollbar">
                {galleryImages.map((img, index) => (
                  <button
                    key={img.imgId}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'flex-shrink-0 w-20 h-24 md:w-24 md:h-28 bg-cream-200 overflow-hidden border transition-colors duration-200',
                      selectedImage === index
                        ? 'border-ink'
                        : 'border-transparent hover:border-hairline'
                    )}
                    aria-label={`View image ${index + 1}`}
                  >
                    <ProductImage
                      imgId={img.imgId}
                      query={img.query}
                      ratio="4x5"
                      width={200}
                      alt={`${product.name} view ${index + 1}`}
                    />
                  </button>
                ))}
              </div>

              <div className="relative flex-1 aspect-[4/5] bg-cream-200 overflow-hidden">
                {galleryImages.map((img, index) => (
                  <div
                    key={img.imgId}
                    className={cn(
                      'absolute inset-0 transition-opacity duration-500',
                      selectedImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    )}
                  >
                    <ProductImage
                      imgId={img.imgId}
                      query={img.query}
                      ratio="4x5"
                      width={900}
                      alt={`${product.name} view ${index + 1}`}
                      className="animate-fade-in"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:pl-8">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">
                {product.category}
              </p>
              <h1
                id={product.titleId}
                className="font-serif text-3xl md:text-5xl font-medium product-name"
              >
                {product.name}
              </h1>
              <p id={product.descId} className="sr-only">
                {product.description}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span className="font-serif text-2xl md:text-3xl">
                  {formatPrice(product.price)}
                </span>
                <div className="flex items-center gap-2">
                  <StarRating rating={product.rating} size={14} />
                  <span className="text-xs text-warmgray-500">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <p className="mt-6 text-warmgray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mt-8">
                <span className="font-sans text-xs tracking-[0.2em] uppercase font-medium text-ink">
                  Metal Tone
                </span>
                <div className="mt-3 flex gap-3">
                  {['gold', 'silver'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        'px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 capitalize',
                        selectedVariant === variant
                          ? 'border-ink bg-ink text-cream-50'
                          : 'border-hairline text-warmgray-600 hover:border-ink'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <span className="font-sans text-xs tracking-[0.2em] uppercase font-medium text-ink">
                  Quantity
                </span>
                <div className="mt-3 inline-flex items-center border border-hairline bg-cream-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-cream-200 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-cream-200 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={cn(
                    'flex-1 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300',
                    added
                      ? 'bg-ink text-cream-50'
                      : 'bg-gold text-white hover:bg-gold-dark'
                  )}
                >
                  {added ? 'Added to Cart' : 'Add to Cart'}
                </button>
                <button
                  className="px-4 border border-hairline text-ink hover:border-ink transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>

              {/* Trust mini bar */}
              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <div className="p-3 bg-cream-50 border border-hairline">
                  <Truck size={18} className="mx-auto text-gold mb-1" strokeWidth={1.5} />
                  <p className="text-[10px] uppercase tracking-wide text-warmgray-600">Free Shipping</p>
                </div>
                <div className="p-3 bg-cream-50 border border-hairline">
                  <RefreshCcw size={18} className="mx-auto text-gold mb-1" strokeWidth={1.5} />
                  <p className="text-[10px] uppercase tracking-wide text-warmgray-600">30-Day Returns</p>
                </div>
                <div className="p-3 bg-cream-50 border border-hairline">
                  <ShieldCheck size={18} className="mx-auto text-gold mb-1" strokeWidth={1.5} />
                  <p className="text-[10px] uppercase tracking-wide text-warmgray-600">Hypoallergenic</p>
                </div>
              </div>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion title="Description" defaultOpen>
                  {product.description}
                </Accordion>
                <Accordion title="Materials & Care">
                  <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p className="mb-2"><strong>Shipping:</strong> {product.shipping}</p>
                  <p><strong>Returns:</strong> {product.returns}</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related products */}
      <section className="py-14 md:py-20 bg-cream-50 border-t border-hairline">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-center mb-10 md:mb-14">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
