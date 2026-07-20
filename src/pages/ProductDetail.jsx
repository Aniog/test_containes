import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Gem, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const accordionItems = [
  { key: 'description', title: 'Description' },
  { key: 'materials', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordions, setOpenAccordions] = useState({ description: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-ivory">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.bestseller))
    .slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getAccordionContent = (key) => {
    switch (key) {
      case 'description': return product.longDescription;
      case 'materials': return `${product.materials}\n\n${product.care}`;
      case 'shipping': return product.shipping;
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-velmora-ivory pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-velmora-warm-gray">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-sm overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-velmora-sand via-velmora-cream to-velmora-sand flex items-center justify-center">
                    <Gem className="w-6 h-6 text-velmora-gold/30" />
                  </div>
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-gradient-to-br from-velmora-cream via-velmora-sand to-velmora-cream rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-velmora-gold/20 to-velmora-gold/5 flex items-center justify-center">
                  <Gem className="w-16 h-16 md:w-20 md:h-20 text-velmora-gold/40" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-gold/5 to-transparent" />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl text-velmora-gold font-medium mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-velmora-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="h-px bg-velmora-sand mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-3">
                Tone: <span className="text-velmora-warm-gray capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 font-sans text-xs tracking-ultra-wide uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                        : 'bg-transparent text-velmora-charcoal border-velmora-sand hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-sand">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-velmora-charcoal w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="w-full btn-primary flex items-center justify-center gap-3 py-4"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 py-4 border-t border-b border-velmora-sand">
              <span className="font-sans text-[10px] tracking-ultra-wide uppercase text-velmora-warm-gray">
                Free Shipping
              </span>
              <span className="w-1 h-1 rounded-full bg-velmora-sand" />
              <span className="font-sans text-[10px] tracking-ultra-wide uppercase text-velmora-warm-gray">
                30-Day Returns
              </span>
              <span className="w-1 h-1 rounded-full bg-velmora-sand" />
              <span className="font-sans text-[10px] tracking-ultra-wide uppercase text-velmora-warm-gray">
                Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {accordionItems.map(item => (
                <div key={item.key} className="border-b border-velmora-sand">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal">
                      {item.title}
                    </span>
                    {openAccordions[item.key] ? (
                      <ChevronUp className="w-4 h-4 text-velmora-warm-gray" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-warm-gray" />
                    )}
                  </button>
                  {openAccordions[item.key] && (
                    <div className="pb-4 font-sans text-sm text-velmora-warm-gray leading-relaxed whitespace-pre-line">
                      {getAccordionContent(item.key)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="h-px bg-velmora-sand mb-14" />
            <div className="text-center mb-10">
              <p className="section-subheading mb-3">You May Also Like</p>
              <h2 className="section-heading text-2xl md:text-3xl">Related Pieces</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(rp => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[3/4] bg-velmora-cream rounded-sm overflow-hidden mb-3 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-velmora-sand via-velmora-cream to-velmora-sand" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-velmora-gold/20 to-velmora-gold/5 flex items-center justify-center">
                        <Gem className="w-8 h-8 text-velmora-gold/30" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-velmora-gold/0 group-hover:bg-velmora-gold/5 transition-colors duration-500" />
                  </div>
                  <h3 className="product-name text-sm">{rp.name}</h3>
                  <p className="price-text text-sm mt-1">{formatPrice(rp.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
