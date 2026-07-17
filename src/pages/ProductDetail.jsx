import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [product, activeImg]);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-linen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-velmora-stone mb-4">Product not found</p>
          <Button variant="outlined-dark" onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials} To maintain the gold plating, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Delivered in 3–7 business days. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.',
    },
  ];

  return (
    <div className="bg-velmora-linen min-h-screen pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-14">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1 font-inter text-xs tracking-widest uppercase text-velmora-ash hover:text-velmora-gold transition-colors">
            <ChevronLeft size={12} /> Shop
          </Link>
          <span className="text-velmora-sand">/</span>
          <span className="font-inter text-xs tracking-widest uppercase text-velmora-stone">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-square bg-velmora-cream rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeImg}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] ${product.images[activeImg]?.query || ''}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    'w-16 h-16 md:w-20 md:h-20 bg-velmora-cream rounded-sm overflow-hidden border-2 transition-all duration-200 flex-shrink-0',
                    activeImg === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}] ${img.query}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.badge && (
              <span className="inline-block font-inter text-[9px] tracking-widest uppercase bg-velmora-gold text-velmora-obsidian px-3 py-1">
                {product.badge}
              </span>
            )}

            <div>
              <h1 id={`pdp-title-${product.id}`} className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-velmora-obsidian leading-tight">
                {product.name}
              </h1>
              <p id={`pdp-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
            </div>

            <div className="flex items-center gap-4">
              <StarRating rating={product.rating} count={product.reviewCount} size={14} />
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-cormorant text-4xl text-velmora-obsidian">${product.price}</span>
              {product.originalPrice && (
                <span className="font-inter text-base text-velmora-ash line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="font-inter text-sm text-velmora-stone leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="divider" />

            {/* Variant selector */}
            <div>
              <p className="font-inter text-[10px] tracking-widest uppercase text-velmora-obsidian mb-3">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      'font-inter text-xs tracking-wide px-5 py-2.5 border transition-all duration-200',
                      selectedVariant === v
                        ? 'bg-velmora-obsidian text-velmora-linen border-velmora-obsidian'
                        : 'border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="font-inter text-[10px] tracking-widest uppercase text-velmora-obsidian mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-velmora-ash hover:text-velmora-obsidian transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 font-inter text-sm text-velmora-obsidian min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-velmora-ash hover:text-velmora-obsidian transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
              className={cn('transition-all', added && 'bg-velmora-gold-dark')}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </Button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 pt-2">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-inter text-[10px] tracking-widest uppercase text-velmora-ash flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-velmora-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            <div className="divider" />

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* You may also like */}
        <RelatedProducts products={related} />
      </div>
    </div>
  );
}

function RelatedProducts({ products: items }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [items]);

  return (
    <div className="mt-20 md:mt-28">
      <div className="text-center mb-10">
        <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">Complete the Look</p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
          You May Also Like
        </h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
      </div>

      <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map(product => (
          <div key={product.id} className="group">
            <Link to={`/product/${product.slug}`}>
              <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4] rounded-sm mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={(e) => { e.preventDefault(); addItem(product); }}
                    className="w-full bg-velmora-obsidian/90 text-velmora-linen font-inter text-[10px] tracking-widest uppercase py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
            </Link>
            <p id={`related-title-${product.id}`} className="font-cormorant text-sm uppercase tracking-[0.12em] text-velmora-obsidian">
              {product.name}
            </p>
            <p id={`related-desc-${product.id}`} className="hidden">{product.shortDescription}</p>
            <p className="font-inter text-sm text-velmora-stone mt-0.5">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
