import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductGallery({ images, name }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`thumbnail w-16 h-20 md:w-20 md:h-24 bg-[var(--color-ivory)] ${activeImage === index ? 'active' : ''}`}
          >
            <img
              src={image}
              alt={`${name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      {/* Main Image */}
      <div className="flex-1 aspect-[3/4] bg-[var(--color-ivory)] overflow-hidden">
        <img
          src={images[activeImage]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--color-border-light)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="pb-4 text-[var(--color-muted)] text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div>
      <h1 className="font-serif text-2xl md:text-3xl mb-2">{product.name}</h1>
      
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-0.5 stars">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="text-sm text-[var(--color-muted)]">
          ({product.reviews} reviews)
        </span>
      </div>

      <p className="text-2xl font-serif mb-6">${product.price}</p>

      <p className="text-[var(--color-muted)] leading-relaxed mb-6">
        {product.description}
      </p>

      {/* Variant Selector */}
      <div className="mb-6">
        <p className="text-sm mb-3">Finish: <span className="font-medium">{selectedVariant}</span></p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <p className="text-sm mb-3">Quantity</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="quantity-btn"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="quantity-btn"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="btn btn-accent w-full mb-8"
      >
        Add to Cart
      </button>

      {/* Accordions */}
      <div className="border-t border-[var(--color-border-light)]">
        <Accordion
          title="Description"
          isOpen={openAccordion === 'description'}
          onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
        >
          {product.description}
          <br /><br />
          Each piece from Velmora is crafted with attention to detail and made to last. Our demi-fine jewelry combines the elegance of fine materials with accessible pricing, allowing you to build your jewelry collection without compromise.
        </Accordion>

        <Accordion
          title="Materials & Care"
          isOpen={openAccordion === 'materials'}
          onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
        >
          <strong>Materials:</strong>
          <br />• 18K Gold Plated on Sterling Silver
          <br />• Hypoallergenic (nickel-free)
          <br />• Cubic Zirconia accents
          <br /><br />
          <strong>Care Instructions:</strong>
          <br />• Store in a dry, cool place
          <br />• Clean gently with a soft cloth
          <br />• Avoid contact with water, perfumes, and lotions
          <br />• Remove before swimming or showering
        </Accordion>

        <Accordion
          title="Shipping & Returns"
          isOpen={openAccordion === 'shipping'}
          onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
        >
          <strong>Shipping:</strong>
          <br />• Free worldwide shipping on orders over $100
          <br />• Standard shipping: 5-10 business days
          <br />• Express shipping: 2-5 business days
          <br /><br />
          <strong>Returns:</strong>
          <br />• 30-day returns on unworn items
          <br />• Free return shipping
          <br />• Full refund or exchange
        </Accordion>
      </div>
    </div>
  );
}

function RelatedProducts({ currentProduct }) {
  const related = products.filter(p => p.id !== currentProduct.id).slice(0, 4);
  const { addToCart } = useCart();

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container">
        <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`}>
                <div className="aspect-[3/4] bg-[var(--color-ivory)] relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="secondary-image">
                    <img
                      src={product.images[1]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="quick-view-overlay">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="btn btn-primary text-xs"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <div className="mt-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-xs">{product.name}</h3>
                </Link>
                <p className="text-sm mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn btn-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[var(--color-muted)]">
          <Link to="/" className="hover:text-[var(--color-charcoal)]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[var(--color-charcoal)]">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-charcoal)]">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      <RelatedProducts currentProduct={product} />
    </main>
  );
}