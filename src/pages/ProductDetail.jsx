import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, Heart } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCartActions } from '@/lib/cart';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-sand/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left font-sans text-xs tracking-[0.15em] uppercase text-velmora-espresso hover:text-velmora-gold transition-colors"
      >
        {title}
        {open ? (
          <ChevronUp size={14} strokeWidth={1} />
        ) : (
          <ChevronDown size={14} strokeWidth={1} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-velmora-taupe leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function RelatedProductCard({ product }) {
  const { addItem } = useCartActions();

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      <div className="aspect-[3/4] bg-velmora-sand/30 overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23E8E0D5" width="300" height="400"/></svg>';
          }}
        />
      </div>
      <h3 className="font-serif text-xs tracking-[0.12em] uppercase text-velmora-espresso">
        {product.name}
      </h3>
      <p className="mt-1 font-sans text-sm font-medium text-velmora-espresso">
        ${product.price}
      </p>
    </Link>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem, openCart } = useCartActions();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setSelectedImage(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    openCart();
  };

  return (
    <main className="bg-velmora-cream pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-velmora-sand/30 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 533"><rect fill="%23E8E0D5" width="400" height="533"/></svg>';
                }}
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    idx === selectedImage
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23E8E0D5" width="100" height="100"/></svg>';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            {product.badge && (
              <span className="inline-block bg-velmora-gold/10 text-velmora-gold font-sans text-[9px] font-medium uppercase tracking-[0.15em] px-3 py-1 mb-4 w-fit">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.12em] uppercase text-velmora-espresso leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? '#B8860B' : 'none'}
                    stroke={
                      i < Math.floor(product.rating) ? '#B8860B' : '#C0B8A8'
                    }
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-taupe font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-3 font-sans text-xl font-medium text-velmora-espresso">
              ${product.price}
            </p>

            {/* Description */}
            <p className="mt-5 font-sans text-sm text-velmora-taupe leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-7">
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-velmora-taupe mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.tone}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs tracking-wide uppercase transition-all duration-200 border ${
                      selectedVariant?.tone === v.tone
                        ? 'border-velmora-gold text-velmora-gold bg-velmora-gold/5'
                        : 'border-velmora-sand/60 text-velmora-taupe hover:border-velmora-espresso hover:text-velmora-espresso'
                    }`}
                  >
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full mr-2 align-middle"
                      style={{ backgroundColor: v.color }}
                    />
                    {v.tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center border border-velmora-sand/60 self-start">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-taupe hover:text-velmora-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-velmora-espresso font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-taupe hover:text-velmora-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 font-sans text-xs font-medium uppercase tracking-[0.2em] px-8 py-3.5 transition-all duration-300 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-velmora-gold text-white hover:bg-velmora-gold-light'
                }`}
              >
                {added ? 'Added to Bag' : 'Add to Bag'}
              </button>

              <button
                className="p-3.5 border border-velmora-sand/60 text-velmora-taupe hover:text-velmora-espresso hover:border-velmora-espresso transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={18} strokeWidth={1} />
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen={true}>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-24 pt-16 border-t border-velmora-sand/30">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-espresso text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
