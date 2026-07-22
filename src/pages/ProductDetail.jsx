import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light">You May Also Like</h2>
          <div className="w-8 h-px bg-gold mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-ivory mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] [related-${product.descId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-${product.titleId}`} className="product-name text-xs text-charcoal group-hover:text-gold transition-colors duration-200 mb-1">
                {product.name}
              </p>
              <p id={`related-${product.descId}`} className="font-sans text-xs text-muted-warm mb-1">{product.shortDescription}</p>
              <p className="font-serif text-sm text-charcoal">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const images = [
    { id: `pdp-main-${product?.imgId}`, query: `[pdp-desc] [pdp-title]`, ratio: '3x4', width: '800' },
    { id: `pdp-alt1-${product?.img2Id}`, query: `[pdp-title] gold jewelry detail close up`, ratio: '3x4', width: '800' },
    { id: `pdp-alt2-${product?.imgId}-2`, query: `[pdp-title] gold jewelry worn on model`, ratio: '3x4', width: '800' },
  ];

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal mb-4">Product not found</p>
          <Button variant="outline" onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.material}. ${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      content: product.shipping + ' We offer free returns within 30 days of purchase. Items must be unworn and in original packaging.',
    },
  ];

  return (
    <div className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-muted-warm hover:text-gold transition-colors duration-200">Home</Link>
          <span className="text-divider">/</span>
          <Link to="/shop" className="font-sans text-xs text-muted-warm hover:text-gold transition-colors duration-200">Shop</Link>
          <span className="text-divider">/</span>
          <span className="font-sans text-xs text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Main content */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3 w-20 flex-shrink-0">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    'aspect-square overflow-hidden border transition-all duration-200',
                    activeImg === i ? 'border-gold' : 'border-divider hover:border-muted-warm'
                  )}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-cream">
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={cn(
                    'absolute inset-0 w-full h-full object-cover transition-opacity duration-400',
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  )}
                />
              ))}

              {/* Mobile nav arrows */}
              <div className="md:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3">
                <button
                  onClick={() => setActiveImg(i => (i - 1 + images.length) % images.length)}
                  className="w-8 h-8 bg-white-warm/80 flex items-center justify-center"
                >
                  <ChevronLeft className="w-4 h-4 text-charcoal" />
                </button>
                <button
                  onClick={() => setActiveImg(i => (i + 1) % images.length)}
                  className="w-8 h-8 bg-white-warm/80 flex items-center justify-center"
                >
                  <ChevronRight className="w-4 h-4 text-charcoal" />
                </button>
              </div>

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                {product.tags.includes('bestseller') && (
                  <span className="font-sans text-xs tracking-widest uppercase bg-gold text-white-warm px-2 py-0.5">
                    Bestseller
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p id="pdp-title" className="product-name text-xl md:text-2xl text-charcoal mb-2">
                {product.name}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif text-2xl text-charcoal">${product.price}</span>
                <div className="flex items-center gap-2">
                  <StarRating rating={product.rating} size="md" />
                  <span className="font-sans text-xs text-muted-warm">({product.reviewCount} reviews)</span>
                </div>
              </div>
              <div className="h-px bg-divider" />
            </div>

            {/* Short description */}
            <p id="pdp-desc" className="font-sans text-sm text-muted-warm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      'px-5 py-2 font-sans text-xs tracking-widest uppercase border transition-all duration-200',
                      selectedVariant === v
                        ? 'border-gold bg-gold text-white-warm'
                        : 'border-divider text-muted-warm hover:border-gold hover:text-gold'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4 border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted-warm hover:text-gold transition-colors duration-200"
                >
                  −
                </button>
                <span className="font-sans text-sm text-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted-warm hover:text-gold transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={cn(
                'w-full flex items-center justify-center gap-3 py-4 font-sans text-xs tracking-widest uppercase transition-all duration-300',
                added
                  ? 'bg-charcoal text-white-warm'
                  : 'bg-gold text-white-warm hover:bg-gold-dark'
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              <span className="font-sans text-xs text-muted-warm">Free Shipping</span>
              <span className="w-px h-3 bg-divider" />
              <span className="font-sans text-xs text-muted-warm">30-Day Returns</span>
              <span className="w-px h-3 bg-divider" />
              <span className="font-sans text-xs text-muted-warm">Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-divider">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
