import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import products from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50 pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-ink-900">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-xs uppercase tracking-widest text-gold-600 hover:text-gold-700">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordionItems = [
    {
      key: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      label: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-ink-600 leading-relaxed"><strong className="text-ink-800">Material:</strong> {product.material}</p>
          <p className="text-sm text-ink-600 leading-relaxed"><strong className="text-ink-800">Care:</strong> {product.care}</p>
        </div>
      ),
    },
    {
      key: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <div className="space-y-3 text-sm text-ink-600 leading-relaxed">
          <p>Free worldwide shipping on all orders. Estimated delivery: 5-8 business days.</p>
          <p>30-day return policy for unworn items in original packaging. We also offer free exchanges.</p>
        </div>
      ),
    },
  ];

  return (
    <main className="bg-cream-50 min-h-screen pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-ink-400">
          <Link to="/" className="hover:text-ink-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink-800">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[4/5] bg-gradient-to-br from-gold-200/20 via-ink-100 to-ink-200 rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-gold-400/20" />
                <div className="absolute w-28 h-28 rounded-full border border-gold-400/30" />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-gold-500'
                      : 'border-transparent hover:border-ink-300'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gold-200/20 via-ink-100 to-ink-200" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl text-ink-900 font-semibold tracking-wider">
              {product.name.toUpperCase()}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-ink-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl font-serif text-ink-900">${product.price}</p>

            {/* Short description */}
            <p className="mt-4 text-sm text-ink-600 leading-relaxed font-light">
              {product.description}
            </p>

            <div className="w-full h-px bg-ink-100 my-6" />

            {/* Variant selector */}
            <div>
              <label className="text-xs uppercase tracking-widest text-ink-700 font-medium">
                Finish: <span className="text-ink-500">{selectedVariant}</span>
              </label>
              <div className="flex gap-3 mt-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-widest font-medium border transition-all ${
                      selectedVariant === variant
                        ? 'border-ink-900 bg-ink-900 text-cream-50'
                        : 'border-ink-200 text-ink-700 hover:border-ink-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-ink-100 my-6" />

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-ink-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-gold-600 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-ink-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-gold-600 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => {
                  addItem(product, selectedVariant, quantity);
                  setQuantity(1);
                }}
                className="flex-1 py-3.5 bg-ink-900 text-cream-50 text-xs uppercase tracking-widestplus font-medium hover:bg-ink-800 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Cart — ${(product.price * quantity).toFixed(0)}
              </button>
            </div>

            <div className="w-full h-px bg-ink-100 my-6" />

            {/* Accordion */}
            <div className="space-y-0">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-t border-ink-100 last:border-b">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? null : item.key)}
                    className="w-full flex items-center justify-between py-4 text-sm text-ink-800 hover:text-ink-600 transition-colors"
                  >
                    <span className="text-xs uppercase tracking-widest font-medium">{item.label}</span>
                    {openAccordion === item.key ? (
                      <ChevronUp className="w-3.5 h-3.5 text-ink-400" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-ink-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.key ? 'max-h-80 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm text-ink-600 leading-relaxed">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 lg:mt-28">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-ink-900 font-light tracking-wide">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold-400/50 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-[3/4] bg-gradient-to-br from-gold-200/20 via-ink-100 to-ink-200 rounded-sm overflow-hidden relative">
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-3">
                  <h3 className="text-[11px] uppercase tracking-widestplus font-medium text-ink-800 truncate">
                    {rp.name}
                  </h3>
                  <p className="text-sm font-medium text-ink-900 mt-0.5">${rp.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}