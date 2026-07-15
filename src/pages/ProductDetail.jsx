import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-charcoal-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-body font-medium text-charcoal-800 uppercase tracking-wider">{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-charcoal-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-charcoal-500" />
        )}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div className="text-body text-charcoal-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product?.variants[0]?.id || 'gold');
    setQuantity(1);
    setSelectedImage(0);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-body-lg text-charcoal-600">Product not found</p>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <nav className="max-w-[1440px] mx-auto flex items-center gap-2 text-body-sm text-charcoal-400">
          <Link to="/" className="hover:text-charcoal-700 transition-colors no-underline text-charcoal-400">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-700 transition-colors no-underline text-charcoal-400">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-700">{product.name}</span>
        </nav>
      </div>

      <div className="section-padding pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image gallery */}
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
                {product.images.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded overflow-hidden border-2 transition-all',
                      selectedImage === index
                        ? 'border-gold-500'
                        : 'border-transparent hover:border-charcoal-300'
                    )}
                  >
                    {index === 0 && (
                      <img
                        data-strk-img-id={product.images[0].id}
                        data-strk-img={product.images[0].query}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="80"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} view 1`}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index === 1 && (
                      <img
                        data-strk-img-id={product.images[1].id}
                        data-strk-img={product.images[1].query}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="80"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} view 2`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 aspect-[3/4] bg-cream-200 rounded-lg overflow-hidden relative">
                {product.images.map((img, index) => (
                  <React.Fragment key={img.id}>
                    {index === 0 && (
                      <img
                        data-strk-img-id={product.images[0].id}
                        data-strk-img={product.images[0].query}
                        data-strk-img-ratio={product.images[0].ratio}
                        data-strk-img-width={900}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} view 1`}
                        className={cn(
                          'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                          selectedImage === 0 ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    )}
                    {index === 1 && (
                      <img
                        data-strk-img-id={product.images[1].id}
                        data-strk-img={product.images[1].query}
                        data-strk-img-ratio={product.images[1].ratio}
                        data-strk-img-width={900}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} view 2`}
                        className={cn(
                          'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                          selectedImage === 1 ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    )}
                  </React.Fragment>
                ))}
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal-800 text-cream-100 text-caption uppercase tracking-wider font-sans z-10">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-2 font-sans">
                {product.category}
              </p>
              <h1 className="text-product-name text-heading-2 md:text-heading-1 text-charcoal-800">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-4 h-4',
                        i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-charcoal-300'
                      )}
                    />
                  ))}
                </div>
                <span className="text-body-sm text-charcoal-500">{product.rating}</span>
                <span className="text-body-sm text-charcoal-400">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <p className="text-heading-2 text-charcoal-800 mt-4">
                {formatPrice(product.price)}
              </p>

              {/* Description */}
              <p className="text-body-lg text-charcoal-600 mt-4 leading-relaxed">
                {product.description}
              </p>

              <div className="hairline-divider my-6" />

              {/* Variant selector */}
              <div className="mb-6">
                <p className="text-body-sm text-charcoal-600 mb-3 uppercase tracking-wider">
                  Tone: <span className="font-medium capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      className={cn(
                        'px-6 py-2.5 border rounded-full text-body-sm uppercase tracking-wider transition-all',
                        selectedVariant === variant.id
                          ? 'border-charcoal-800 bg-charcoal-800 text-cream-100'
                          : 'border-charcoal-300 text-charcoal-700 hover:border-charcoal-500'
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full border border-charcoal-200"
                          style={{ backgroundColor: variant.color }}
                        />
                        {variant.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-body-sm text-charcoal-600 mb-3 uppercase tracking-wider">Quantity</p>
                <div className="inline-flex items-center border border-charcoal-200 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-cream-200 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4 text-charcoal-600" />
                  </button>
                  <span className="px-6 py-3 text-body font-medium text-charcoal-800 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-cream-200 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4 text-charcoal-600" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary py-4 text-center"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-body-sm text-charcoal-500">
                  <Truck className="w-4 h-4" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-body-sm text-charcoal-500">
                  <RotateCcw className="w-4 h-4" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2 text-body-sm text-charcoal-500">
                  <Shield className="w-4 h-4" />
                  <span>1 Year Warranty</span>
                </div>
              </div>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description" defaultOpen>
                  <p>{product.longDescription}</p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p>{product.shipping}</p>
                </Accordion>
              </div>
            </div>
          </div>

          {/* Related products */}
          <div className="mt-20 md:mt-28">
            <div className="hairline-divider mb-10 md:mb-14" />
            <div className="text-center mb-10">
              <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-2 font-sans">
                You May Also Like
              </p>
              <h2 className="text-heading-1 text-charcoal-800">
                Complete Your Look
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
