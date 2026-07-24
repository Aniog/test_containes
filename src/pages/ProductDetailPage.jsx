import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingBag, ChevronDown, ChevronRight, Minus, Plus } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.value || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-xl text-brand-text-secondary mb-2">Product not found</p>
          <Link to="/shop" className="text-brand-accent text-sm underline">Back to Shop</Link>
        </div>
      </main>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.details },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20 md:pt-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-sans text-xs text-brand-text-muted mb-8">
          <Link to="/" className="hover:text-brand-text transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-brand-text transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-text-secondary">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-brand-surface-alt rounded-sm overflow-hidden mb-3">
              <img
                data-strk-img-id={`${product.imgId}-main`}
                data-strk-img={`[pdp-name-${product.id}] [pdp-desc-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-colors ${
                    i === selectedImage ? 'border-brand-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[pdp-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="md:pl-4">
            <span id={`pdp-name-${product.id}`} className="hidden">{product.name}</span>
            <span id={`pdp-desc-${product.id}`} className="hidden">{product.description}</span>

            <p className="font-sans text-xs uppercase tracking-widest text-brand-accent mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl text-brand-text mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'text-brand-accent fill-brand-accent' : 'text-brand-border'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-brand-text mb-6">${product.price}</p>

            <p className="font-sans text-sm text-brand-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-brand-text mb-3">
                Finish: <span className="capitalize text-brand-accent">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => setSelectedVariant(v.value)}
                    className={`px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                      selectedVariant === v.value
                        ? 'bg-brand-text text-white'
                        : 'border border-brand-border text-brand-text-secondary hover:border-brand-text'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-brand-border rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-brand-surface-alt transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-sans text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-brand-surface-alt transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn-primary flex-1">
                <ShoppingBag className="w-4 h-4" />
                Add to Cart — ${(product.price * quantity).toFixed(0)}
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8 py-4 border-y border-brand-border-light">
              <span className="font-sans text-[11px] text-brand-text-muted uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                Free Shipping over $50
              </span>
              <span className="font-sans text-[11px] text-brand-text-muted uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                30-Day Returns
              </span>
              <span className="font-sans text-[11px] text-brand-text-muted uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                Gift Ready
              </span>
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-brand-border-light">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 font-sans text-xs uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors"
                  >
                    {acc.title}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-brand-text-secondary leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-20 pt-16 hairline">
            <h2 className="section-heading text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((r) => (
                <RelatedProductCard key={r.id} product={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function RelatedProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group card-hover block">
      <div className="aspect-square bg-brand-surface-alt rounded-sm overflow-hidden mb-3">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-name-${product.id}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <span id={`related-name-${product.id}`} className="hidden">{product.name}</span>
      <h3 className="product-name text-xs mb-0.5">{product.name}</h3>
      <p className="price">${product.price}</p>
    </Link>
  );
}