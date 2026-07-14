import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Minus, Plus, Heart, Share2 } from 'lucide-react';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-serif text-4xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-velmora-taupe">
          <Link to="/" className="hover:text-velmora-espresso">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-espresso">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-espresso">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velmora-cream rounded-lg overflow-hidden">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'w-20 h-20 rounded overflow-hidden border-2 transition-colors',
                    activeImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-sand'
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Title & Price */}
            <h1 className="font-serif text-2xl md:text-3xl text-velmora-charcoal uppercase tracking-wide mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <p className="text-2xl md:text-3xl font-medium text-velmora-espresso mb-6">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-velmora-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm font-medium text-velmora-charcoal mb-3 block">
                Finish: <span className="capitalize">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-6 py-2.5 rounded-full border-2 text-sm font-medium uppercase tracking-wide transition-all',
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-sand text-velmora-espresso hover:border-velmora-taupe'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="text-sm font-medium text-velmora-charcoal mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-sand rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-velmora-taupe hover:text-velmora-espresso transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-velmora-taupe hover:text-velmora-espresso transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button onClick={handleAddToCart} size="lg" className="w-full mb-4">
              Add to Cart — ${product.price * quantity}
            </Button>

            {/* Secondary Actions */}
            <div className="flex gap-4 mb-8">
              <button className="flex items-center gap-2 text-sm text-velmora-taupe hover:text-velmora-gold transition-colors">
                <Heart size={18} />
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-velmora-taupe hover:text-velmora-gold transition-colors">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-sand">
              <AccordionItem
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                <p className="text-velmora-taupe leading-relaxed">{product.description}</p>
              </AccordionItem>

              <AccordionItem
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <div className="space-y-3 text-velmora-taupe">
                  <p><strong className="text-velmora-espresso">Materials:</strong> {product.materials}</p>
                  <p><strong className="text-velmora-espresso">Care Instructions:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Store in a cool, dry place away from direct sunlight</li>
                    <li>Remove before swimming, showering, or exercising</li>
                    <li>Clean gently with a soft jewelry cloth</li>
                    <li>Apply perfume and lotions before wearing</li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <div className="space-y-3 text-velmora-taupe">
                  <p><strong className="text-velmora-espresso">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
                  <p><strong className="text-velmora-espresso">Returns:</strong> We offer a 30-day return policy. Items must be unworn and in original packaging.</p>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function AccordionItem({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-velmora-charcoal">{title}</span>
        <ChevronDown
          size={20}
          className={cn(
            'text-velmora-taupe transition-transform duration-300',
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
        {children}
      </div>
    </div>
  );
}
