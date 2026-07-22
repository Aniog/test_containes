import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const pageRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (pageRef.current) {
      return ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-secondary">Product not found</p>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, quantity, variant);
  };

  const pdTitleId = `pd-title-${product.id}`;
  const pdDescId = `pd-desc-${product.id}`;

  return (
    <div ref={pageRef}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-secondary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-secondary">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-base overflow-hidden">
                <img
                  data-strk-img-id={product.images[selectedImage]?.id || `pd-main-${product.id}`}
                  data-strk-img={`[${pdDescId}] [${pdTitleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-24 sm:w-24 sm:h-28 bg-base overflow-hidden border transition-colors ${
                      selectedImage === idx ? 'border-accent' : 'border-hairline hover:border-secondary'
                    }`}
                  >
                    <img
                      data-strk-img-id={`${img.id}-thumb`}
                      data-strk-img={`[${pdDescId}] [${pdTitleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1
                  id={pdTitleId}
                  className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.15em] text-primary mb-3"
                >
                  {product.name}
                </h1>
                <p id={pdDescId} className="hidden">{product.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-2xl text-primary">${product.price}</span>
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="fill-accent text-accent" />
                    <span className="text-sm text-secondary">{product.rating}</span>
                    <span className="text-sm text-muted">({product.reviews} reviews)</span>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Variant */}
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-muted block mb-3">
                  Metal Tone
                </span>
                <div className="flex gap-3">
                  {['gold', 'silver'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`px-5 py-2 text-xs uppercase tracking-[0.15em] border transition-all ${
                        variant === v
                          ? 'border-accent text-accent'
                          : 'border-hairline text-secondary hover:border-secondary'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-muted block mb-3">
                  Quantity
                </span>
                <div className="flex items-center border border-hairline w-max">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center text-sm text-primary">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAdd}
                className="w-full bg-accent text-base py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent-hover transition-colors"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Trust microcopy */}
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-muted">
                <span>Free Shipping</span>
                <span>30-Day Returns</span>
                <span>Secure Checkout</span>
              </div>

              {/* Accordions */}
              <div className="border-t border-hairline pt-4 space-y-0">
                {[
                  { key: 'description', label: 'Description', content: product.description },
                  { key: 'materials', label: 'Materials & Care', content: product.materialsCare },
                  { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $50. Standard delivery 5-8 business days. Express 2-4 business days. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.' },
                ].map((acc) => (
                  <div key={acc.key} className="border-b border-hairline">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-xs uppercase tracking-[0.15em] text-primary font-medium">
                        {acc.label}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-secondary transition-transform ${
                          openAccordion === acc.key ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openAccordion === acc.key && (
                      <div className="pb-4 text-sm text-secondary leading-relaxed">
                        {acc.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 sm:py-24 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-primary mb-2">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
