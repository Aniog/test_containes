import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, ChevronDown, Minus, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const variants = ['Gold', 'Silver'];

const accordionData = [
  {
    title: 'Description',
    content:
      'Each Velmora piece is designed in our New York atelier and handcrafted by skilled artisans using responsibly sourced materials. The 18K gold plating provides a luminous finish that endures.',
  },
  {
    title: 'Materials & Care',
    content:
      '18K Gold Plated over Brass. Hypoallergenic and nickel-free. To preserve the plating, avoid contact with water, perfume, lotions, and harsh chemicals. Store in the provided pouch away from direct sunlight.',
  },
  {
    title: 'Shipping & Returns',
    content:
      'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. 30-day return window for unworn items in original packaging. Exchanges are complimentary.',
  },
];

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-beige">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-medium text-charcoal">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-taupe transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <p className="text-sm text-taupe leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
    setAddedToCart(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cormorant text-3xl uppercase tracking-wider mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest text-gold hover:text-gold-dark"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: selectedVariant,
      quantity,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-taupe mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div>
            <div className="aspect-[3/4] bg-beige overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      'w-16 h-16 sm:w-20 sm:h-20 bg-beige overflow-hidden border-2 transition-all',
                      selectedImage === i
                        ? 'border-gold'
                        : 'border-transparent hover:border-beige'
                    )}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="font-cormorant text-2xl sm:text-3xl uppercase tracking-wider text-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating)
                        ? 'text-gold fill-gold'
                        : 'text-beige'
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-cormorant text-2xl sm:text-3xl text-charcoal mt-4">
              ${product.price}
            </p>

            <p className="text-sm text-taupe leading-relaxed mt-4">
              {product.description}
            </p>

            <div className="h-px bg-beige my-6" />

            {/* Variant selector */}
            <div>
              <p className="text-xs uppercase tracking-widest text-charcoal mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-6 py-2.5 text-xs uppercase tracking-widest border transition-all duration-200',
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-beige text-charcoal hover:border-charcoal'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-beige w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-beige transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="flex-1 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-beige transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={cn(
                'w-full py-3.5 uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300 mt-8',
                addedToCart
                  ? 'bg-green-muted text-white'
                  : 'bg-gold text-white hover:bg-gold-dark'
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              {addedToCart ? 'Added to Cart!' : 'Add to Cart — $' + product.price * quantity}
            </button>

            <div className="mt-4 text-center">
              <p className="text-[11px] text-taupe">
                Free Worldwide Shipping &middot; 30-Day Returns
              </p>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-beige">
              <Accordion title="Description" content={product.description} />
              <Accordion
                title="Materials & Care"
                content={`${product.material}. ${product.care}`}
              />
              <Accordion
                title="Shipping & Returns"
                content={accordionData[2].content}
              />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 sm:mt-20 lg:mt-24">
            <div className="text-center mb-10">
              <h2 className="font-cormorant text-2xl sm:text-3xl uppercase tracking-wider text-charcoal">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${related.id}`}
                  className="group product-card"
                >
                  <div className="relative aspect-[3/4] bg-beige overflow-hidden mb-3">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="product-image-overlay" />
                  </div>
                  <h3 className="text-[11px] uppercase tracking-widest font-medium text-charcoal truncate">
                    {related.name}
                  </h3>
                  <p className="text-sm font-medium text-charcoal mt-1">
                    ${related.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}