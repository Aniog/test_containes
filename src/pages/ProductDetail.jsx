import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

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
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/collection" className="mt-4 inline-block text-gold hover:text-gold-dark transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: product.materials + ' To maintain shine, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days. 30-day returns — items must be unworn and in original packaging.',
    },
  ];

  return (
    <main ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-taupe">
          <Link to="/" className="hover:text-charcoal transition-colors no-underline text-taupe">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collection" className="hover:text-charcoal transition-colors no-underline text-taupe">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-sand overflow-hidden rounded-sm">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-sand overflow-hidden rounded-sm">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="md:sticky md:top-28 md:self-start">
            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal"
            >
              {product.name}
            </h1>

            <p className="mt-3 text-xl text-charcoal">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-gold"
                    fill={i < Math.floor(product.rating) ? '#C4A265' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">({product.reviewCount} reviews)</span>
            </div>

            {/* Description */}
            <p id={`pdp-${product.id}-desc`} className="mt-6 text-sm text-taupe leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs uppercase tracking-wider border rounded-sm transition-all cursor-pointer ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-stone text-taupe hover:border-charcoal bg-transparent'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-stone rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-charcoal transition-colors bg-transparent border-none cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-charcoal border-x border-stone">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-charcoal transition-colors bg-transparent border-none cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 py-4 bg-gold hover:bg-gold-dark text-cream text-sm uppercase tracking-wider font-medium transition-colors border-none rounded-sm cursor-pointer"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-stone/50">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-stone/50">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="text-sm text-charcoal font-medium">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-taupe transition-transform duration-200 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-taupe leading-relaxed">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-32 border-t border-stone/50 pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
