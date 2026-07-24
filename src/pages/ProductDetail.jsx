import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--color-charcoal)] border-opacity-10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm tracking-wide text-[var(--color-charcoal)]">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp size={18} strokeWidth={1.5} />
        ) : (
          <ChevronDown size={18} strokeWidth={1.5} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-[var(--color-stone)] leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

function RelatedProducts({ currentProduct }) {
  const { addToCart } = useCart();
  const relatedProducts = products
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  return (
    <section className="py-16 bg-[var(--color-cream-dark)]">
      <div className="container">
        <h2 className="font-serif text-3xl text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-[3/4] bg-[var(--color-cream)] overflow-hidden mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="product-name text-[var(--color-charcoal)] text-xs">
                {product.name}
              </h3>
              <p className="text-sm text-[var(--color-charcoal)] mt-1">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl">Product Not Found</h1>
        <Link to="/shop" className="btn-primary mt-6">
          Back to Shop
        </Link>
      </div>
    );
  }

  const accordionContent = {
    description: product.description,
    materials: 'All our jewelry is crafted from 18K gold-plated brass or sterling silver. Our gold plating is 2-3 microns thick, ensuring lasting shine. All pieces are nickel-free and hypoallergenic. To maintain your jewelry\'s beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. Standard delivery takes 5-10 business days. Express shipping available at checkout. We offer a 30-day return policy for unworn items in original packaging.'
  };

  return (
    <div className="pt-[72px]">
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-[var(--color-stone)]">
          <Link to="/" className="hover:text-[var(--color-warm-gold)]">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[var(--color-warm-gold)]">Shop</Link>
          <span>/</span>
          <span className="text-[var(--color-charcoal)]">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Image Gallery */}
            <div className="animate-fade-in">
              {/* Main Image */}
              <div className="aspect-[3/4] bg-[var(--color-cream-dark)] mb-4 overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 bg-[var(--color-cream-dark)] overflow-hidden transition-all ${
                      selectedImage === index
                        ? 'ring-2 ring-[var(--color-warm-gold)]'
                        : 'opacity-60 hover:opacity-100'
                    }`}
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
            <div className="animate-slide-in">
              <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.floor(product.rating) ? 'var(--color-warm-gold)' : 'none'}
                      stroke="var(--color-warm-gold)"
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--color-stone)]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-serif text-2xl text-[var(--color-charcoal)] mt-4">
                ${product.price}
              </p>

              {/* Description */}
              <p className="text-[var(--color-stone)] mt-6 leading-relaxed">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mt-8">
                <p className="text-sm text-[var(--color-charcoal)] mb-3">
                  Finish: <span className="font-medium">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-sm border transition-all ${
                        selectedVariant === variant
                          ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-cream)]'
                          : 'border-[var(--color-charcoal)] border-opacity-30 text-[var(--color-charcoal)] hover:border-opacity-100'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <p className="text-sm text-[var(--color-charcoal)] mb-3">Quantity</p>
                <div className="flex items-center border border-[var(--color-charcoal)] border-opacity-30 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-[var(--color-warm-gold)] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} strokeWidth={2} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-[var(--color-warm-gold)] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(product, selectedVariant, quantity)}
                className="w-full btn-primary mt-8"
              >
                Add to Cart
              </button>

              {/* Accordions */}
              <div className="mt-12">
                {Object.entries({
                  description: 'Description',
                  materials: 'Materials & Care',
                  shipping: 'Shipping & Returns'
                }).map(([key, title]) => (
                  <Accordion
                    key={key}
                    title={title}
                    isOpen={openAccordion === key}
                    onToggle={() => setOpenAccordion(openAccordion === key ? null : key)}
                  >
                    {accordionContent[key]}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts currentProduct={product} />
    </div>
  );
}