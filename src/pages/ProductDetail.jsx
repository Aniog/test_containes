import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Heart, Truck, RotateCcw } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [wishlist, setWishlist] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:underline font-sans text-sm">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  const initials = product.name.split(' ').map((w) => w[0]).join('');

  const imageUrls = [
    `https://placehold.co/800x1000/FAF7F2/C5A059?text=${encodeURIComponent(initials)}`,
    `https://placehold.co/800x1000/1C1917/C5A059?text=${encodeURIComponent(initials)}+Alt`,
  ];

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `${product.details}\n\nCare: ${product.care}`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. Standard delivery 5–10 business days. Express delivery 2–4 business days available at checkout.\n\nWe offer free 30-day returns on all unworn items in original packaging.',
    },
  ];

  return (
    <main className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-muted mb-8">
          <Link to="/" className="hover:text-base transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-base transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-base capitalize">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {imageUrls.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border-2 overflow-hidden transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-border'
                  }`}
                >
                  <img
                    src={url}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-cream overflow-hidden">
              <img
                src={imageUrls[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2 lg:py-6">
            {product.badge && (
              <span className="inline-block bg-gold/10 text-gold text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-product uppercase text-base mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl md:text-2xl font-serif font-semibold text-base">
                ${product.price}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm font-sans text-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>
            <p className="text-sm font-sans text-muted leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans font-medium tracking-wide uppercase text-muted mb-3">
                Metal Tone
              </p>
              <div className="flex items-center gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-sm font-sans font-medium tracking-wide uppercase border transition-colors ${
                      variant === v
                        ? 'border-base bg-base text-white'
                        : 'border-border bg-white text-base hover:border-base'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-sans font-medium tracking-wide uppercase text-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-border w-fit">
                <button
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={() => addItem(product, variant, quantity)}
                className="flex-1 bg-gold text-white py-4 text-sm font-sans font-medium tracking-wide uppercase hover:bg-gold-hover transition-colors"
              >
                Add to Cart — ${product.price * quantity}
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`w-14 h-14 border flex items-center justify-center transition-colors ${
                  wishlist
                    ? 'border-gold bg-gold/5 text-gold'
                    : 'border-border bg-white text-base hover:border-base'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${wishlist ? 'fill-gold' : ''}`}
                />
              </button>
            </div>

            {/* Trust mini bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-muted mb-8">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-gold" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-gold" />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? null : acc.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-sans font-medium text-base">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm font-sans text-muted leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12">
            <h2 className="font-serif text-2xl md:text-3xl text-base text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
