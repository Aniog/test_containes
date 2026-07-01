import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-velmora-warm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wide text-velmora-charcoal">{title}</span>
        {isOpen ? <ChevronUp size={18} className="text-velmora-stone" /> : <ChevronDown size={18} className="text-velmora-stone" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-velmora-stone text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-base mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold underline text-sm">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      ...product,
      variant: product.variants[selectedVariant],
      quantity,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.bestseller))
    .slice(0, 4);

  return (
    <main className="bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-stone-light'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-velmora-warm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <h1 className="font-serif text-2xl sm:text-3xl text-velmora-base tracking-wide mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-stone-light'}
                  />
                ))}
              </div>
              <span className="text-velmora-stone text-sm">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-base mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-velmora-stone text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-xs tracking-wide text-velmora-charcoal mb-3 block">
                Color: {product.variants[selectedVariant]}
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2 text-xs tracking-wide border transition-all duration-300 ${
                      selectedVariant === index
                        ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-base'
                        : 'border-velmora-stone-light text-velmora-stone hover:border-velmora-base'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-wide text-velmora-charcoal mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-stone-light hover:bg-velmora-warm transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-stone-light hover:bg-velmora-warm transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-ultra-wide uppercase transition-all duration-300 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-velmora-base text-white hover:bg-velmora-gold hover:text-velmora-base'
              }`}
            >
              {addedToCart ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                title="Description"
                isOpen={openAccordion === 0}
                onToggle={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}
              >
                <p>{product.description}</p>
                <p className="mt-2">Each piece comes in our signature Velmora gift box, ready for gifting or treating yourself.</p>
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 1}
                onToggle={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}
              >
                <p className="mb-2"><strong>Material:</strong> {product.material}</p>
                <p>To keep your jewelry looking its best:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Clean gently with a soft cloth</li>
                </ul>
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 2}
                onToggle={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}
              >
                <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders. Delivery within 5-7 business days.</p>
                <p><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-velmora-warm">
            <h2 className="font-serif text-2xl sm:text-3xl text-velmora-base font-light tracking-wide mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} to={`/product/${related.slug}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-velmora-warm mb-3">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-sm tracking-wide text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-velmora-base font-medium mt-1">${related.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
