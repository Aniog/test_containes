import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

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
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-sm text-bronze underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-muted">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-cream overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-name] gold jewelry product photo`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-cream overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb1-${product.id}`}
                  data-strk-img={`[pdp-${product.id}-name] gold jewelry detail`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail 1`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-cream overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb2-${product.id}`}
                  data-strk-img={`[pdp-${product.id}-name] gold jewelry worn on model`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail 2`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-cream overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb3-${product.id}`}
                  data-strk-img={`[pdp-${product.id}-name] gold jewelry packaging gift box`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail 3`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-bronze text-bronze' : 'text-hairline'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            <p
              id={`pdp-${product.id}-desc`}
              className="mt-6 text-sm text-muted leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest transition-colors ${
                      selectedVariant === v
                        ? 'bg-charcoal text-white'
                        : 'border border-hairline text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-hairline w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-bronze text-white py-4 text-sm uppercase tracking-widest hover:bg-bronze-dark transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              {[
                { key: 'description', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: product.materials },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Delivered in 5-7 business days. 30-day hassle-free returns — simply contact us and we\'ll arrange everything.' },
              ].map((item) => (
                <div key={item.key} className="border-b border-hairline">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-sm text-charcoal hover:text-bronze transition-colors"
                  >
                    <span className="uppercase tracking-wider text-xs">{item.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 text-sm text-muted leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-hairline">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
