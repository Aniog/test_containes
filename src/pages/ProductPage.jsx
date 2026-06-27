import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';
import { cn } from '../lib/utils';

const accordionItems = [
  {
    id: 'description',
    title: 'Description',
    content: 'Each Velmora piece is designed with intention. We believe jewelry should feel as special as the moments you wear it for — from everyday elegance to occasion-ready statements.',
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: 'Our demi-fine jewelry is crafted from 18K gold-plated brass with ethically sourced crystals. To keep your pieces looking their best, avoid contact with water, perfume, and harsh chemicals. Store in a dry place when not in use.',
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on orders over $75. Standard delivery takes 5-10 business days. We offer 30-day hassle-free returns on all unworn items in original packaging.',
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem, openCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      image: product.images[0],
      quantity,
    });
    openCart();
  };

  return (
    <div className="bg-velmora-pearl">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <nav className="flex items-center gap-2 text-xs text-velmora-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Image gallery */}
          <div className="space-y-3 sm:space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-velmora-sand">
              <img
                src={`https://placehold.co/800x1000/f7f4ef/c9a96e?text=${encodeURIComponent(product.images[activeImage]?.alt || product.name)}`}
                alt={product.images[activeImage]?.alt || product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'aspect-square overflow-hidden rounded-sm bg-velmora-sand transition-all duration-200',
                    activeImage === index ? 'ring-2 ring-velmora-gold ring-offset-2' : 'opacity-70 hover:opacity-100'
                  )}
                >
                  <img
                    src={`https://placehold.co/200x200/f7f4ef/c9a96e?text=${encodeURIComponent(image.alt)}`}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-velmora-charcoal text-velmora-white text-[10px] font-semibold tracking-editorial uppercase mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-ultra-wide uppercase text-velmora-charcoal mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
                <span className="text-sm font-medium text-velmora-charcoal">{product.rating}</span>
              </div>
              <span className="text-xs text-velmora-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl text-velmora-charcoal mb-6">${product.price}</p>
            <p className="text-sm text-velmora-ink leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-editorial uppercase text-velmora-ink mb-3">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-4 py-2 text-xs font-medium tracking-editorial uppercase border rounded-sm transition-all duration-200',
                      selectedVariant === variant
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-white'
                        : 'border-velmora-border text-velmora-ink hover:border-velmora-charcoal'
                    )}
                  >
                    {variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-medium tracking-editorial uppercase text-velmora-ink mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velmora-border rounded-sm">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2.5 text-velmora-ink hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 text-sm font-medium text-velmora-charcoal min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 text-velmora-ink hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-charcoal text-velmora-white text-xs font-semibold tracking-editorial uppercase hover:bg-velmora-gold transition-colors duration-300 mb-4"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="hairline-top pt-6 space-y-0">
              {accordionItems.map((item) => (
                <div key={item.id} className="hairline-bottom">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium tracking-editorial uppercase text-velmora-charcoal">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 text-velmora-muted transition-transform duration-300',
                        openAccordion === item.id ? 'rotate-180' : ''
                      )}
                    />
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4">
                      <p className="text-sm text-velmora-ink leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-velmora-charcoal tracking-wide mb-8 sm:mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
