import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-border'}`} />
        ))}
      </div>
      <span className="font-inter text-xs text-taupe">{rating} ({count} reviews)</span>
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-border">
      <div className="mb-10">
        <h2 className="font-cormorant font-light text-3xl text-charcoal">You May Also Like</h2>
        <div className="w-8 h-px bg-gold mt-4" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group">
            <div className="overflow-hidden aspect-[3/4] bg-ivory-dark mb-3">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-${product.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 id={`related-${product.titleId}`} className="font-cormorant font-medium text-xs uppercase tracking-widest text-charcoal group-hover:text-gold transition-colors mb-1">
              {product.name}
            </h3>
            <p className="font-inter text-sm text-charcoal">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImage(0);
      setAdded(false);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-charcoal mb-4">Product not found</p>
          <Button variant="outline" onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[pdp-desc] [pdp-title]` },
    { id: product.imgId2, query: `[pdp-title] gold jewelry styled flat lay` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="bg-ivory min-h-screen pt-16 md:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-inter text-xs text-taupe hover:text-charcoal transition-colors">Home</Link>
          <span className="text-border">/</span>
          <Link to="/shop" className="font-inter text-xs text-taupe hover:text-charcoal transition-colors">Shop</Link>
          <span className="text-border">/</span>
          <span className="font-inter text-xs text-charcoal uppercase tracking-widest">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden aspect-[3/4] bg-ivory-dark">
              {/* Hidden text for image queries */}
              <span id="pdp-title" className="sr-only">{product.name}</span>
              <span id="pdp-desc" className="sr-only">{product.shortDesc}</span>

              <img
                data-strk-img-id={images[activeImage].id}
                data-strk-img={images[activeImage].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <Badge variant="gold">{product.badge}</Badge>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <h1 className="font-cormorant font-medium text-2xl md:text-3xl uppercase tracking-widest text-charcoal mb-3 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-inter text-2xl font-medium text-charcoal">${product.price}</span>
                <StarRating rating={product.rating} count={product.reviewCount} />
              </div>
              <p className="font-inter text-sm text-taupe leading-relaxed">{product.shortDesc}</p>
            </div>

            <hr className="border-border mb-6" />

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-inter text-xs tracking-widest uppercase text-charcoal mb-3">
                  Tone: <span className="text-taupe capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 font-inter text-xs tracking-widest uppercase border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-charcoal bg-charcoal text-ivory'
                          : 'border-border text-taupe hover:border-charcoal hover:text-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-xs tracking-widest uppercase text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-border w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 text-taupe hover:text-charcoal transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-inter text-sm text-charcoal w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 text-taupe hover:text-charcoal transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-inter text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? 'bg-charcoal-mid text-ivory'
                  : 'bg-gold text-ivory hover:bg-gold-light'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </>
              )}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5 mb-8">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-inter text-xs text-taupe-light flex items-center gap-1">
                  <Check className="w-3 h-3 text-gold" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}
