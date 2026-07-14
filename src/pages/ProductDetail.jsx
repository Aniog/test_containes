import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const accordions = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordions, setOpenAccordions] = useState(['description']);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setOpenAccordions(['description']);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-espresso/40 tracking-wide">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-espresso/60 capitalize">{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-[3/4] bg-sand-200 overflow-hidden">
              <img
                data-strk-img-id={`${product.id}-detail-main-${selectedImage}`}
                data-strk-img={`[${product.id}-title] [${product.id}-desc] gold jewelry product detail photo`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'w-16 h-20 md:w-20 md:h-24 bg-sand-200 overflow-hidden border-2 transition-all',
                    selectedImage === index
                      ? 'border-gold'
                      : 'border-transparent hover:border-espresso/20'
                  )}
                >
                  <img
                    data-strk-img-id={`${product.id}-thumb-${index}`}
                    data-strk-img={`[${product.id}-title] jewelry product thumbnail view ${index + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col lg:pt-4">
            {/* Text references */}
            <span id={`${product.id}-title`} className="hidden">{product.name}</span>
            <span id={`${product.id}-desc`} className="hidden">{product.shortDescription}</span>

            <h1 className="font-serif text-3xl md:text-4xl tracking-wider uppercase text-espresso mb-3">
              {product.name}
            </h1>

            <p className="font-sans text-xl font-medium text-espresso mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-espresso/20'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-espresso/50">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-sans text-sm text-espresso/60 leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-espresso/50 mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-5 py-2 text-xs tracking-widest uppercase border transition-all',
                      variant === v
                        ? 'border-espresso bg-espresso text-sand-50'
                        : 'border-espresso/20 text-espresso/60 hover:border-espresso/40'
                    )}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-espresso/50 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-espresso/20">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-espresso/50 hover:text-espresso transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm font-medium text-espresso tabular-nums min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-espresso/50 hover:text-espresso transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-8">
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-espresso/10 mb-8">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto text-gold mb-1.5" strokeWidth={1.5} />
                <p className="text-[10px] text-espresso/50 tracking-wide uppercase">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 mx-auto text-gold mb-1.5" strokeWidth={1.5} />
                <p className="text-[10px] text-espresso/50 tracking-wide uppercase">30-Day Returns</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-5 h-5 mx-auto text-gold mb-1.5" strokeWidth={1.5} />
                <p className="text-[10px] text-espresso/50 tracking-wide uppercase">Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-0 divide-y divide-espresso/10">
              {accordions.map(({ key, label }) => (
                <div key={key}>
                  <button
                    onClick={() => toggleAccordion(key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-widest uppercase text-espresso/70">
                      {label}
                    </span>
                    {openAccordions.includes(key) ? (
                      <ChevronUp className="w-4 h-4 text-espresso/40" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-espresso/40" />
                    )}
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openAccordions.includes(key) ? 'max-h-40 pb-4' : 'max-h-0'
                    )}
                  >
                    <p className="font-sans text-sm text-espresso/50 leading-relaxed">
                      {key === 'description' && product.longDescription}
                      {key === 'materials' && `${product.materials} ${product.care}`}
                      {key === 'shipping' && `${product.shipping} ${product.returns}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl md:text-3xl mb-2">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i + 10} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
