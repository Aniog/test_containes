import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/shared/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium uppercase tracking-widest">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-taupe transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[600px] pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-taupe leading-relaxed space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductById(productId), [productId]);
  const related = useMemo(
    () => (product ? getRelatedProducts(product.id, 4) : []),
    [product]
  );
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState(product?.tone || 'gold');

  if (!product) {
    return (
      <main className="pt-24 min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const handleAdd = () => {
    addItem(product, quantity, tone);
  };

  return (
    <main className="pt-20 md:pt-24 bg-ivory min-h-screen">
      <div className="container-main py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-taupe mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left — Gallery */}
          <div>
            <div className="relative aspect-square bg-[#F2EDE6] overflow-hidden mb-4">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={`detail-main-${product.id}`}
                data-strk-img={`[detail-title-${product.id}] [detail-desc-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-[#F2EDE6] overflow-hidden border-2 transition-colors ${
                    selectedImage === idx
                      ? 'border-charcoal'
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={img.id}
                    data-strk-img={`[detail-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — Info */}
          <div className="md:pt-4">
            <h1
              id={`detail-title-${product.id}`}
              className="product-name text-2xl md:text-3xl font-medium mb-2"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-champagne text-champagne'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl md:text-3xl font-medium mb-6">
              ${product.price}
            </p>

            <p
              id={`detail-desc-${product.id}`}
              className="text-sm text-taupe leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-taupe font-medium block mb-3">
                Tone
              </span>
              <div className="flex gap-3">
                {['gold', 'silver'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium border transition-all ${
                      tone === t
                        ? 'bg-charcoal text-ivory border-charcoal'
                        : 'bg-white text-charcoal border-border hover:border-charcoal'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-taupe font-medium block mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-border bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-ivory transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-ivory transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="btn-primary w-full text-center mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(0)}
            </button>

            {/* Trust mini */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              <div className="flex flex-col items-center text-center p-3 bg-white border border-border">
                <Truck className="w-5 h-5 text-taupe mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-taupe">
                  Free Shipping
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-white border border-border">
                <RotateCcw className="w-5 h-5 text-taupe mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-taupe">
                  30-Day Returns
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-white border border-border">
                <ShieldCheck className="w-5 h-5 text-taupe mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-taupe">
                  2-Year Warranty
                </span>
              </div>
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-1">
                  {product.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <p className="mt-3 font-medium text-charcoal">Care:</p>
                <ul className="list-disc list-inside space-y-1">
                  {product.care.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders over $50. Orders are
                  processed within 1–2 business days and shipped via tracked
                  courier.
                </p>
                <p className="mt-2">
                  Not completely in love? We offer free 30-day returns on all
                  unworn items in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
