import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <p className="font-sans text-muted-fg">Product not found.</p>
        <Link to="/shop" className="text-gold underline mt-4 inline-block font-sans text-sm">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: product.materials + ' To maintain shine, avoid contact with water, perfume, and lotions. Store in a cool, dry place.',
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Delivery within 5–7 business days. 30-day hassle-free returns — items must be unworn and in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-z1a2b3`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-c4d5e6`}
                    data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-2xl md:text-3xl tracking-product uppercase text-charcoal"
            >
              {product.name}
            </h1>
            <p className="font-serif text-2xl text-charcoal mt-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-muted-fg">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-muted-fg mt-6 leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-wide uppercase text-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 font-sans text-xs tracking-wide-btn uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-cream'
                        : 'border-border text-charcoal hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-wide uppercase text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border text-charcoal hover:border-gold transition-colors duration-300"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border text-charcoal hover:border-gold transition-colors duration-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-gold text-cream py-4 font-sans text-xs tracking-wide-btn uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm text-charcoal">{acc.title}</span>
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4 text-muted-fg" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-fg" />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4">
                      <p className="font-sans text-sm text-muted-fg leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-border pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
