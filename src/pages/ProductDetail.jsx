import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useProductBySlug, useProducts } from '@/hooks/useProducts';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-charcoal-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-sm uppercase tracking-wide text-charcoal-800 font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-charcoal-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-charcoal-500" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-charcoal-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.round(rating)
                ? 'fill-gold-500 text-gold-500'
                : 'fill-charcoal-200 text-charcoal-200'
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-charcoal-500">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { product, loading } = useProductBySlug(slug);
  const { products } = useProducts();
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const images = useMemo(() => {
    if (!product) return [];
    const list = [product.image_url];
    if (product.image_hover_url) list.push(product.image_hover_url);
    return list;
  }, [product]);

  const related = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [products, product]);

  React.useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariant(product.variants[0]);
    }
    setSelectedImage(0);
    setQuantity(1);
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-50 pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-charcoal-200 border-t-gold-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-cream-50 pt-24 text-center px-4">
        <h1 className="font-serif text-2xl text-charcoal-950">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold-700 underline">
          Browse all jewelry
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, selectedVariant || product.variants?.[0] || 'Gold', quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <div className="aspect-[4/5] bg-charcoal-100 overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-20 bg-charcoal-100 overflow-hidden border-2 transition-colors ${
                      selectedImage === idx
                        ? 'border-charcoal-950'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="md:py-6">
            <p className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal-950 uppercase tracking-wide">
              {product.name}
            </h1>
            <p className="mt-3 text-xl text-charcoal-800 font-light">
              ${product.price}
            </p>
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.review_count} />
            </div>

            <p className="mt-6 text-sm text-charcoal-600 leading-relaxed">
              {product.description}
            </p>

            {product.variants?.length > 0 && (
              <div className="mt-6">
                <p className="text-xs uppercase tracking-extra-wide text-charcoal-500 mb-3">
                  Finish
                </p>
                <div className="flex gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-xs uppercase tracking-wide border transition-colors ${
                        selectedVariant === variant
                          ? 'bg-charcoal-950 text-cream-50 border-charcoal-950'
                          : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-400'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <p className="text-xs uppercase tracking-extra-wide text-charcoal-500 mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-charcoal-200 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 hover:bg-charcoal-100 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4 text-charcoal-600" />
                </button>
                <span className="px-4 text-sm text-charcoal-800 min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2.5 hover:bg-charcoal-100 transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4 text-charcoal-600" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className={`mt-8 w-full py-4 text-sm uppercase tracking-extra-wide font-medium transition-colors ${
                added
                  ? 'bg-charcoal-800 text-cream-50'
                  : 'bg-charcoal-950 text-cream-50 hover:bg-charcoal-800'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Cart'}
            </button>

            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping_info}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-2">
                You May Also Like
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal-950 font-light">
                Complete the Look
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.slug}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-charcoal-100 overflow-hidden">
                    <img
                      src={p.image_url}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-sm uppercase tracking-wide text-charcoal-950">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-charcoal-600">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
