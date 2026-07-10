import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Minus, Plus, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t hairline">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium tracking-wide uppercase">{title}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <div className="text-sm text-warmgray leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, galleryRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedImage, id]);

  if (!product) {
    return (
      <div className="pt-32 text-center px-5">
        <h1 className="font-serif text-3xl">Product Not Found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm tracking-widest uppercase text-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, quantity, variant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-16 md:pt-20 bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-8 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div ref={galleryRef} className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible hide-scrollbar">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-parchment overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[pd-title] [pd-desc]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              <span id="pd-title" className="sr-only">{product.name}</span>
              <span id="pd-desc" className="sr-only">{product.description}</span>
            </div>
            <div className="flex-1 aspect-[4/5] md:aspect-auto md:min-h-[540px] bg-parchment overflow-hidden">
              <img
                data-strk-img-id={`main-${product.images[selectedImage].id}`}
                data-strk-img={`[pd-title] [pd-desc]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide uppercase">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <span className="font-serif text-2xl">${product.price}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <p className="mt-5 text-warmgray leading-relaxed">{product.description}</p>

            {/* Variant */}
            <div className="mt-6">
              <span className="text-xs tracking-widest uppercase text-lightgray">Tone</span>
              <div className="mt-2 flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs font-medium tracking-widest uppercase border transition-colors ${
                      variant === v
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-divider text-warmgray hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs tracking-widest uppercase text-lightgray">Quantity</span>
              <div className="mt-2 inline-flex items-center border hairline">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 hover:bg-parchment transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 hover:bg-parchment transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`mt-8 w-full py-4 text-sm font-medium tracking-widest uppercase transition-colors flex items-center justify-center gap-2 ${
                added
                  ? 'bg-espresso text-cream'
                  : 'bg-gold text-white hover:bg-golddark'
              }`}
            >
              {added ? (
                <>
                  <Check size={16} strokeWidth={2} />
                  Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">{product.shipping}</p>
                <p>{product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
