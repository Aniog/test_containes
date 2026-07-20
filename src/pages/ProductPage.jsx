import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const { productId } = useParams();
  const product = useMemo(() => getProductById(productId), [productId]);
  const related = useMemo(() => getRelatedProducts(productId, 4), [productId]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="font-serif text-2xl text-ink-900">Product not found</h2>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold-700 underline underline-offset-4">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p><strong className="text-ink-800">Materials:</strong> {product.materials}</p>
          <p><strong className="text-ink-800">Care:</strong> {product.care}</p>
        </div>
      ),
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p><strong className="text-ink-800">Shipping:</strong> {product.shipping}</p>
          <p><strong className="text-ink-800">Returns:</strong> {product.returns}</p>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-14 sm:pb-20 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-ink-500 mb-6 sm:mb-8">
          <Link to="/" className="hover:text-ink-800">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink-800">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink-800 capitalize">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-md overflow-hidden border transition-colors ${
                    selectedImage === idx ? 'border-gold-500' : 'border-cream-200'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`[product-${product.id}-name] ${img.alt}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative flex-1 aspect-[4/5] md:aspect-auto md:h-[520px] lg:h-[640px] rounded-sm overflow-hidden bg-cream-200">
              <img
                data-strk-img-id={`${product.images[selectedImage].id}-main`}
                data-strk-img={`[product-${product.id}-name] ${product.images[selectedImage].alt}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="py-0 md:py-4">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-widest uppercase text-ink-900">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-lg sm:text-xl font-medium text-ink-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-ink-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
              <div className="ml-auto flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                <span className="text-sm text-ink-700">{product.rating}</span>
                <span className="text-xs text-ink-400">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-ink-600 leading-relaxed">
              {product.tagline}
            </p>

            {/* Variants */}
            <div className="mt-6">
              <p className="text-xs font-medium tracking-wider uppercase text-ink-500 mb-2">
                Tone
              </p>
              <div className="flex items-center gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase border transition-colors ${
                      selectedVariant === v
                        ? 'bg-ink-900 text-white border-ink-900'
                        : 'bg-white text-ink-700 border-cream-300 hover:border-ink-400'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium tracking-wider uppercase text-ink-500 mb-2">
                Quantity
              </p>
              <div className="inline-flex items-center border border-cream-300 rounded-full bg-white px-2 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-ink-600 hover:text-ink-900"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="w-8 text-center text-sm font-medium text-ink-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-ink-600 hover:text-ink-900"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`mt-7 w-full py-3.5 rounded-sm text-sm font-medium tracking-widest uppercase transition-colors ${
                added
                  ? 'bg-ink-800 text-white'
                  : 'bg-gold-600 hover:bg-gold-700 text-white'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-cream-200">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-cream-200">
                  <button
                    onClick={() =>
                      setOpenAccordion((prev) => (prev === acc.key ? null : acc.key))
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-ink-800">{acc.title}</span>
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4 text-ink-500" strokeWidth={1.5} />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-ink-500" strokeWidth={1.5} />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-ink-600 leading-relaxed">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <h2 className="font-serif text-xl sm:text-2xl text-ink-900 mb-6 sm:mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
