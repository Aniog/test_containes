import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, products, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b" style={{ borderColor: 'var(--color-light-gray)' }}>
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-sans text-sm font-medium tracking-wide" style={{ color: 'var(--color-charcoal)' }}>
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" style={{ color: 'var(--color-muted)' }} />
        ) : (
          <ChevronDown className="w-4 h-4" style={{ color: 'var(--color-muted)' }} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          {children}
        </p>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory)] mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="text-center">
        <h3 className="text-product-name text-xs" style={{ color: 'var(--color-charcoal)' }}>
          {product.name}
        </h3>
        <p className="mt-1 font-serif text-sm" style={{ color: 'var(--color-charcoal)' }}>
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4" style={{ color: 'var(--color-charcoal)' }}>
            Product not found
          </h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="container-narrow">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            <li><Link to="/" className="hover:opacity-70">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:opacity-70">Shop</Link></li>
            <li>/</li>
            <li style={{ color: 'var(--color-charcoal)' }}>{product.name}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-[var(--color-ivory)] mb-4">
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
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[var(--color-gold)]' : 'border-transparent'
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
          <div className="md:pl-4">
            <h1 className="font-serif text-2xl md:text-3xl" style={{ color: 'var(--color-charcoal)' }}>
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'none'}
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl mt-4" style={{ color: 'var(--color-charcoal)' }}>
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-6">
              <p className="text-xs font-medium tracking-wide mb-3" style={{ color: 'var(--color-charcoal)' }}>
                COLOR: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-xs font-medium tracking-wide border transition-colors ${
                      selectedVariant === variant
                        ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                        : 'border-[var(--color-light-gray)] hover:border-[var(--color-charcoal)]'
                    }`}
                    style={{ color: selectedVariant === variant ? 'white' : 'var(--color-charcoal)' }}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium tracking-wide mb-3" style={{ color: 'var(--color-charcoal)' }}>
                QUANTITY
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border hover:opacity-70 transition-opacity"
                  style={{ borderColor: 'var(--color-light-gray)', color: 'var(--color-charcoal)' }}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium" style={{ color: 'var(--color-charcoal)' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border hover:opacity-70 transition-opacity"
                  style={{ borderColor: 'var(--color-light-gray)', color: 'var(--color-charcoal)' }}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="btn-primary w-full mt-8 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => toggleAccordion('description')}
              >
                {product.description}
                <br /><br />
                Each piece is crafted with attention to detail and made to last. Our demi-fine jewelry is designed to be worn and treasured every day.
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => toggleAccordion('materials')}
              >
                Made from 18K gold plated brass with a protective coating. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => toggleAccordion('shipping')}
              >
                Free worldwide shipping on orders over $100. Standard shipping takes 5-10 business days. We offer a 30-day return policy for unworn items in original packaging. Free return shipping on all orders.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8" style={{ color: 'var(--color-charcoal)' }}>
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
};

export default ProductDetail;