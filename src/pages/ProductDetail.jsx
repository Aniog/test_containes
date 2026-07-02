import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Truck, ShieldCheck, RotateCcw, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products, getProductBySlug, formatPrice } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import ImageLoader from '@/components/ImageLoader';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const { addItem } = useCart();

  const [selectedTone, setSelectedTone] = useState(product?.tones[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedTone(product?.tones[0] || 'gold');
    setQuantity(1);
    setActiveImage(0);
    setAdded(false);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-espresso px-4">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-gold underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const related = useMemo(
    () => products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4),
    [product]
  );

  const gallery = product.detailImgIds.map((id, idx) => ({
    id,
    query: product.images.detailQueries[idx],
  }));

  const handleAdd = () => {
    addItem(product, selectedTone, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: product.materialsAndCare },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shippingAndReturns },
  ];

  return (
    <ImageLoader>
      <main className="pt-20 lg:pt-24 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="relative aspect-[4/5] bg-sand overflow-hidden mb-4">
                {gallery.map((img, idx) => (
                  <img
                    key={img.id}
                    data-strk-img-id={img.id}
                    data-strk-img={img.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="800"
                    src={PLACEHOLDER}
                    alt={`${product.name} view ${idx + 1}`}
                    className={cn(
                      'absolute inset-0 w-full h-full object-cover transition-opacity duration-600',
                      activeImage === idx ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                {gallery.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      'relative flex-shrink-0 w-20 h-24 bg-sand overflow-hidden border-2 transition-colors',
                      activeImage === idx ? 'border-gold' : 'border-transparent'
                    )}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img
                      data-strk-img-id={`${img.id}-thumb`}
                      data-strk-img={img.query}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:py-6">
              <p className="text-xs uppercase tracking-extra-wide text-gold mb-2">{product.category}</p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-extra-wide text-espresso mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-5">
                <StarRating rating={product.rating} showValue reviewCount={product.reviews} />
              </div>
              <p className="font-serif text-2xl text-espresso mb-6">{formatPrice(product.price)}</p>
              <p className="text-taupe leading-relaxed mb-8">{product.description}</p>

              <div className="mb-8">
                <p className="text-xs uppercase tracking-extra-wide text-taupe mb-3">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        'px-6 py-2.5 text-xs uppercase tracking-extra-wide border transition-colors',
                        selectedTone === tone
                          ? 'bg-espresso text-cream border-espresso'
                          : 'bg-transparent text-espresso border-hairline hover:border-espresso'
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs uppercase tracking-extra-wide text-taupe mb-3">Quantity</p>
                <div className="inline-flex items-center border border-hairline bg-linen">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 hover:bg-sand transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 hover:bg-sand transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className={cn(
                  'w-full py-4 text-xs uppercase tracking-extra-wide font-medium transition-colors',
                  added
                    ? 'bg-espresso text-cream'
                    : 'bg-gold text-cream hover:bg-gold-hover'
                )}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>

              <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                <div className="flex flex-col items-center gap-2 text-taupe">
                  <Truck size={18} />
                  <span className="text-[10px] uppercase tracking-wide">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-taupe">
                  <ShieldCheck size={18} />
                  <span className="text-[10px] uppercase tracking-wide">Hypoallergenic</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-taupe">
                  <RotateCcw size={18} />
                  <span className="text-[10px] uppercase tracking-wide">30-Day Returns</span>
                </div>
              </div>

              <div className="mt-10 border-t border-hairline divide-y divide-hairline">
                {accordionItems.map((item) => (
                  <div key={item.key}>
                    <button
                      onClick={() => setOpenAccordion(openAccordion === item.key ? null : item.key)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-xs uppercase tracking-extra-wide text-espresso font-medium">
                        {item.title}
                      </span>
                      <ChevronDown
                        size={16}
                        className={cn(
                          'text-taupe transition-transform duration-300',
                          openAccordion === item.key ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        openAccordion === item.key ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
                      )}
                    >
                      <p className="text-sm text-taupe leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="border-t border-hairline bg-sand py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-3xl lg:text-4xl text-espresso mb-10">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </ImageLoader>
  );
}
