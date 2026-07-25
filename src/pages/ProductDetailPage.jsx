import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, Check } from 'lucide-react';
import { getProductById, getRelatedProducts, PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

const VARIANTS = [
  { id: 'gold', label: 'Gold Tone' },
  { id: 'silver', label: 'Silver Tone' },
];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-ink-100">
      <button
        className="w-full flex items-center justify-between py-4 text-sm font-sans font-medium tracking-wider uppercase text-ink-700 hover:text-ink-900 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? (
          <ChevronUp className="w-4 h-4 text-ink-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-ink-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-ink-600 font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function RelatedProduct({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group"
    >
      <div className="aspect-square bg-ivory rounded-sm overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-product-name mt-3 group-hover:text-gold-600 transition-colors">
        {product.name}
      </h3>
      <p className="text-price mt-1">${product.price}</p>
    </Link>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-ink-900">Product Not Found</h1>
          <Link to="/collections/all" className="btn-outline mt-6 inline-flex text-xs">
            Browse All Jewelry
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addItem(product.id, variant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQtyChange = (delta) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="py-4 text-xs font-sans text-ink-400 tracking-wider uppercase">
          <Link to="/" className="hover:text-ink-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collections/all" className="hover:text-ink-900 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-700">{product.name}</span>
        </nav>

        {/* Product */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-4">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-ivory rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                      i === selectedImage ? 'border-gold-400' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="md:sticky md:top-28 md:self-start">
            <h1 className="font-serif text-2xl md:text-3xl text-ink-900 tracking-wide uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-ink-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-ink-900 mt-4">
              ${product.price}
            </p>

            <p className="mt-4 text-sm text-ink-600 font-sans leading-relaxed">
              {product.description}
            </p>

            <div className="hairline mt-6" />

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs font-sans font-medium tracking-wider uppercase text-ink-700 mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {VARIANTS.map((v) => (
                  <button
                    key={v.id}
                    className={`px-5 py-2.5 text-xs font-sans font-medium tracking-wider uppercase rounded-full border transition-all duration-300 ${
                      variant === v.id
                        ? 'border-ink-900 bg-ink-900 text-cream'
                        : 'border-ink-200 text-ink-600 hover:border-ink-400'
                    }`}
                    onClick={() => setVariant(v.id)}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-sans font-medium tracking-wider uppercase text-ink-700 mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-ink-200 w-fit">
                <button
                  className="px-4 py-2.5 text-ink-500 hover:text-ink-900 transition-colors"
                  onClick={() => handleQtyChange(-1)}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="w-12 text-center text-sm font-sans text-ink-900">
                  {quantity}
                </span>
                <button
                  className="px-4 py-2.5 text-ink-500 hover:text-ink-900 transition-colors"
                  onClick={() => handleQtyChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mt-8 text-xs"
            >
              {addedToCart ? (
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Added to Cart
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart — ${product.price}
                </span>
              )}
            </button>

            <div className="hairline mt-8" />

            {/* Accordions */}
            <div className="mt-2">
              <Accordion title="Description" defaultOpen={true}>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1.5">
                  {Object.entries(product.details).map(([key, val]) => {
                    if (key === 'care') return null;
                    return (
                      <li key={key} className="flex gap-2">
                        <span className="text-ink-400 capitalize min-w-[100px]">{key.replace('_', ' ')}:</span>
                        <span className="text-ink-700">{val}</span>
                      </li>
                    );
                  })}
                </ul>
                {product.details.care && (
                  <p className="mt-3 text-ink-500">
                    <span className="font-medium text-ink-700">Care:</span> {product.details.care}
                  </p>
                )}
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders. Orders are processed within 1–2 business days.
                  Standard delivery takes 5–8 business days.
                </p>
                <p className="mt-2">
                  Not completely in love? We offer 30-day returns for unworn items in original packaging.
                  Start a return by emailing us at returns@velmora.com.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-20 mb-16">
            <div className="hairline mb-10" />
            <h2 className="font-serif text-2xl text-ink-900 tracking-wide">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
              {related.map((product) => (
                <RelatedProduct key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}