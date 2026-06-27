import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from '../product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'This piece is crafted with 18K gold plating over sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" style={{ color: 'var(--color-text-secondary)' }}>Home</Link>
            </li>
            <li style={{ color: 'var(--color-text-secondary)' }}>/</li>
            <li>
              <Link to="/shop" style={{ color: 'var(--color-text-secondary)' }}>Shop</Link>
            </li>
            <li style={{ color: 'var(--color-text-secondary)' }}>/</li>
            <li style={{ color: 'var(--color-text-primary)' }}>{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] overflow-hidden bg-[var(--color-ivory)]">
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
                  className={`w-20 h-24 overflow-hidden transition-all ${
                    selectedImage === index ? 'ring-2' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ ringColor: 'var(--color-accent)' }}
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
          <div className="md:sticky md:top-24 h-fit">
            {/* Product Name */}
            <h1
              className="product-name text-sm md:text-base mb-2"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < product.rating ? 'var(--color-gold)' : 'none'}
                    style={{
                      color: 'var(--color-gold)',
                      strokeWidth: i < product.rating ? 0 : 1.5
                    }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <p
              className="font-serif text-2xl md:text-3xl mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              ${product.price}
            </p>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label
                className="text-xs tracking-wider mb-3 block"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                METAL
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-sm tracking-wider border transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                        : 'border-[var(--color-border)] hover:border-[var(--color-charcoal)]'
                    }`}
                    style={{
                      color: selectedVariant === variant ? 'white' : 'var(--color-text-primary)'
                    }}
                  >
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label
                className="text-xs tracking-wider mb-3 block"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                QUANTITY
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border" style={{ borderColor: 'var(--color-border)' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} style={{ color: 'var(--color-text-primary)' }} />
                  </button>
                  <span
                    className="w-12 text-center text-sm"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} style={{ color: 'var(--color-text-primary)' }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 text-sm tracking-[0.2em] transition-all hover:opacity-90 mb-4"
              style={{
                backgroundColor: 'var(--color-charcoal)',
                color: 'white'
              }}
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t" style={{ borderColor: 'var(--color-border)' }}>
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span
                      className="text-sm tracking-wider"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp size={18} style={{ color: 'var(--color-text-secondary)' }} />
                    ) : (
                      <ChevronDown size={18} style={{ color: 'var(--color-text-secondary)' }} />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2
              className="font-serif text-2xl md:text-3xl mb-8 text-center"
              style={{ color: 'var(--color-text-primary)' }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}