import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  const relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="text-accent mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const accordionData = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}. ${product.care}`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders over $50. Estimated delivery: 3–7 business days. We offer a 30-day return policy for all unworn items in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 lg:pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Breadcrumb */}
        <div className="text-xs text-muted-foreground tracking-widest uppercase mb-8">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] bg-warm-100 rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails row */}
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-20 bg-warm-100 rounded-sm overflow-hidden cursor-pointer border border-transparent hover:border-accent transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${i}-${product.imgId}`}
                    data-strk-img={`[${product.titleId}] jewelry detail ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Hidden text for image search */}
            <span id={product.titleId} className="hidden">{product.name}</span>
            <span id={product.descId} className="hidden">{product.description}</span>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.08em] uppercase leading-snug">
              {product.name}
            </h1>
            <p className="mt-2 text-xl md:text-2xl font-light text-foreground">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mt-8">
              <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-accent bg-accent/5 text-accent'
                        : 'border-border text-muted-foreground hover:border-foreground/30'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-border/50 w-fit rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:text-accent transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="px-5 text-sm min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:text-accent transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-accent text-white py-4 text-xs tracking-[0.15em] uppercase font-medium hover:bg-warm-600 transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(0)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border/30 pt-6">
              {accordionData.map((item) => (
                <div key={item.key} className="border-b border-border/20">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === item.key ? '' : item.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-xs tracking-[0.08em] uppercase font-medium hover:text-accent transition-colors"
                  >
                    {item.title}
                    {activeAccordion === item.key ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === item.key ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {relatedProducts.map((rp) => (
            <ProductCard key={rp.id} product={rp} />
          ))}
        </div>
      </div>
    </div>
  );
}
