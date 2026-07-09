import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

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

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-brand-gold font-sans underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.`,
    },
    {
      title: 'Shipping & Returns',
      content: "Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days. 30-day hassle-free returns — simply contact us and we'll arrange everything.",
    },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-brand-taupe list-none p-0 m-0">
            <li><Link to="/" className="hover:text-brand-charcoal transition-colors no-underline text-brand-taupe">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors no-underline text-brand-taupe">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-brand-ivory rounded-sm overflow-hidden relative">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-brand-ivory rounded-sm overflow-hidden relative cursor-pointer border border-transparent hover:border-brand-gold-muted/40 transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-2 md:py-4">
            <h1
              id={`pdp-${product.id}-title`}
              className="text-sm md:text-base tracking-widest-plus uppercase font-sans font-medium text-brand-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-gold-muted/40'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-taupe font-sans">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-4 text-2xl font-serif text-brand-charcoal">${product.price}</p>

            <p
              id={`pdp-${product.id}-desc`}
              className="mt-4 text-sm text-brand-stone leading-relaxed font-sans"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase font-sans font-medium text-brand-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase font-sans font-medium rounded-sm transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                        : 'bg-transparent text-brand-charcoal border-brand-charcoal/30 hover:border-brand-charcoal'
                    } border`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase font-sans font-medium text-brand-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-brand-charcoal/20 bg-transparent rounded-sm hover:border-brand-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-brand-charcoal" />
                </button>
                <span className="text-base font-sans font-medium text-brand-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-brand-charcoal/20 bg-transparent rounded-sm hover:border-brand-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-brand-charcoal" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-brand-charcoal text-brand-cream py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-brand-warm transition-colors duration-300 border-none rounded-sm"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-brand-gold-muted/20">
              {accordions.map((acc, idx) => (
                <div key={idx} className="border-b border-brand-gold-muted/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left"
                  >
                    <span className="text-xs tracking-wider uppercase font-sans font-medium text-brand-charcoal">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-taupe transition-transform duration-300 ${
                        openAccordion === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === idx && (
                    <div className="pb-4 text-sm text-brand-stone leading-relaxed font-sans whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-brand-gold-muted/20 pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal font-light text-center mb-10">
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
