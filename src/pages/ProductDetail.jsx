import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
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
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-accent font-sans text-sm underline">
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
      content: `${product.materials}\n\nCare: Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days. 30-day returns — items must be unworn and in original packaging.',
    },
  ];

  return (
    <div className="pt-20 lg:pt-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-f1g2h3`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-i4j5k6`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="250"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail ${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <nav className="mb-4">
              <span className="font-sans text-xs text-muted-fg">
                <Link to="/" className="hover:text-accent transition-colors no-underline text-muted-fg">Home</Link>
                {' / '}
                <Link to="/shop" className="hover:text-accent transition-colors no-underline text-muted-fg">Shop</Link>
                {' / '}
                <span className="text-charcoal">{product.name}</span>
              </span>
            </nav>

            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-3xl sm:text-4xl text-charcoal uppercase tracking-product"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent-light text-accent-light' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-muted-fg">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-4 font-serif text-2xl text-charcoal">${product.price}</p>

            <p id={`pdp-${product.id}-desc`} className="mt-4 font-sans text-sm text-muted-fg leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 font-sans text-xs uppercase tracking-wider transition-all border ${
                      selectedVariant === variant
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-charcoal border-border hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-accent transition-colors bg-transparent border-none"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-charcoal border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-accent transition-colors bg-transparent border-none"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-accent text-cream py-4 font-sans text-sm uppercase tracking-wider hover:bg-accent-light transition-colors border-none"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left"
                  >
                    <span className="font-sans text-sm text-charcoal">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-fg transition-transform ${openAccordion === acc.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4">
                      <p className="font-sans text-sm text-muted-fg leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 sm:mt-24 border-t border-border pt-16">
          <h2 className="font-serif text-3xl text-charcoal text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
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
