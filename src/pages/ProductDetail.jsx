import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, ChevronLeft } from 'lucide-react';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ImageGallery from '@/components/product/ImageGallery';
import Accordion from '@/components/product/Accordion';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-ink-900 mb-4">Product not found</h1>
          <Link
            to="/shop"
            className="text-xs tracking-widest uppercase font-medium text-gold-600 hover:text-gold-700 border-b border-gold-400/30 pb-0.5"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const variants = [
    { id: 'gold', label: 'Gold Tone' },
    { id: 'silver', label: 'Silver Tone' },
  ];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: `${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-ink-400 hover:text-gold-600 transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="-mx-4 sm:mx-0">
            <ImageGallery images={product.images} name={product.name} />
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl lg:text-3xl uppercase tracking-wider text-ink-900 font-semibold">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-cream-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-400">{product.reviewCount} reviews</span>
            </div>

            {/* Price */}
            <p className="text-xl font-medium text-ink-900 mt-4">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-ink-500 leading-relaxed mt-4">
              {product.description}
            </p>

            <div className="h-px bg-cream-200 my-6" />

            {/* Variant */}
            <div>
              <h3 className="text-xs tracking-widest uppercase font-semibold text-ink-700 mb-3">
                Finish
              </h3>
              <div className="flex gap-2">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-medium border transition-all duration-200 ${
                      variant === v.id
                        ? 'bg-ink-900 text-cream-50 border-ink-900'
                        : 'bg-transparent text-ink-600 border-cream-300 hover:border-ink-400'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h3 className="text-xs tracking-widest uppercase font-semibold text-ink-700 mb-3">
                Quantity
              </h3>
              <div className="flex items-center border border-cream-300 w-28">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center text-ink-500 hover:bg-cream-100 transition-colors"
                >
                  -
                </button>
                <span className="flex-1 text-center text-sm font-medium text-ink-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center text-ink-500 hover:bg-cream-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 mt-8 text-xs tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gold-500 hover:bg-gold-600 text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}