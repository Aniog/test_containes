import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const accordions = [
    { key: 'description', title: 'Description', content: product.longDescription },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  return (
    <main className="pt-20 lg:pt-24">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Breadcrumb */}
        <nav className="py-4 text-xs text-charcoal-400">
          <Link to="/" className="hover:text-charcoal-600 transition-colors" style={{ textDecoration: 'none' }}>Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal-600 transition-colors" style={{ textDecoration: 'none' }}>Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-16 lg:pb-24">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-warm-200 overflow-hidden">
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
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors bg-transparent ${
                      selectedImage === i ? 'border-brand' : 'border-transparent hover:border-charcoal-200'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block text-[10px] font-medium tracking-ultrawide uppercase text-brand bg-gold-50 border border-gold-200 px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl lg:text-3xl font-semibold tracking-megawide uppercase text-charcoal-800">
              {product.name}
            </h1>

            <p className="font-serif text-2xl text-charcoal-800 mt-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.round(product.rating) ? '#C9A84C' : 'none'}
                    className={i < Math.round(product.rating) ? 'text-brand' : 'text-charcoal-200'}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="hairline-gold my-6" />

            <p className="text-sm text-charcoal-500 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-label text-charcoal-500 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs font-medium tracking-wider uppercase transition-all bg-transparent ${
                      selectedVariant === v
                        ? 'border-2 border-charcoal-800 text-charcoal-800'
                        : 'border border-charcoal-200 text-charcoal-500 hover:border-charcoal-400'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-label text-charcoal-500 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-charcoal-500 hover:text-charcoal-800 transition-colors bg-transparent border-none"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-charcoal-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-charcoal-500 hover:text-charcoal-800 transition-colors bg-transparent border-none"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-accent w-full text-center"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust features */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-charcoal-100">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: '18K Gold Plated' },
              ].map((f) => (
                <div key={f.label} className="text-center">
                  <f.icon size={18} strokeWidth={1.5} className="text-brand mx-auto mb-1.5" />
                  <span className="text-[10px] text-charcoal-500 uppercase tracking-wider">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-t border-charcoal-100">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="text-label text-charcoal-700">{acc.title}</span>
                    {openAccordion === acc.key ? (
                      <ChevronUp size={16} className="text-charcoal-400" />
                    ) : (
                      <ChevronDown size={16} className="text-charcoal-400" />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-charcoal-500 leading-relaxed whitespace-pre-line animate-fade-in">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="pb-16 lg:pb-24">
          <div className="hairline mb-12" />
          <div className="text-center mb-10">
            <h2 className="heading-serif text-2xl lg:text-3xl text-charcoal-800">
              You May Also Like
            </h2>
            <div className="w-12 h-[1px] bg-brand mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
