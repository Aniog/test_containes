import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b" style={{ borderColor: 'var(--color-border)' }}>
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-sans text-sm font-medium" style={{ color: 'var(--color-warm-black)' }}>
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
          isOpen ? 'max-h-40 pb-5' : 'max-h-0'
        }`}
      >
        <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          {children}
        </p>
      </div>
    </div>
  );
}

function RelatedProducts({ currentProductId }) {
  const relatedProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="py-16 bg-[var(--color-ivory)]">
      <div className="container-custom">
        <h2 className="font-serif text-2xl mb-10 text-center" style={{ color: 'var(--color-warm-black)' }}>
          You May Also Like
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[4/5] bg-[var(--color-cream)] overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="product-name text-xs mb-1" style={{ color: 'var(--color-warm-black)' }}>
                {product.name}
              </h3>
              <p className="font-sans text-sm" style={{ color: 'var(--color-warm-black)' }}>
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
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4" style={{ color: 'var(--color-warm-black)' }}>
            Product Not Found
          </h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.hoverImage];

  return (
    <div className="min-h-screen pt-[72px]">
      <div className="container-custom py-12 lg:py-20">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-sm">
            <li>
              <Link to="/" style={{ color: 'var(--color-muted)' }}>Home</Link>
            </li>
            <li style={{ color: 'var(--color-muted)' }}>/</li>
            <li>
              <Link to="/shop" style={{ color: 'var(--color-muted)' }}>Shop</Link>
            </li>
            <li style={{ color: 'var(--color-muted)' }}>/</li>
            <li style={{ color: 'var(--color-warm-black)' }}>{product.name}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/5] bg-[var(--color-ivory)] overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4">
              {images.map((image, index) => (
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
          <div className="lg:pl-8">
            <h1 className="font-serif text-2xl md:text-3xl mb-2" style={{ color: 'var(--color-warm-black)' }}>
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < product.rating ? 'var(--color-gold)' : 'none'}
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>
              <span className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl mb-6" style={{ color: 'var(--color-warm-black)' }}>
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
              {product.description}. Crafted with attention to detail, this piece embodies the quiet luxury that defines Velmora. Perfect for everyday wear or special occasions.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="font-sans text-sm font-medium mb-3 block" style={{ color: 'var(--color-warm-black)' }}>
                Color: <span className="font-normal capitalize">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border font-sans text-sm capitalize transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-white'
                        : 'border-[var(--color-border)] hover:border-[var(--color-gold)]'
                    }`}
                    style={{ 
                      color: selectedVariant === variant ? 'white' : 'var(--color-warm-black)',
                      borderColor: selectedVariant === variant ? 'var(--color-gold)' : 'var(--color-border)'
                    }}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans text-sm font-medium mb-3 block" style={{ color: 'var(--color-warm-black)' }}>
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border" style={{ borderColor: 'var(--color-border)' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-[var(--color-ivory)] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" style={{ color: 'var(--color-warm-black)' }} />
                  </button>
                  <span className="w-12 text-center font-sans" style={{ color: 'var(--color-warm-black)' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-[var(--color-ivory)] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" style={{ color: 'var(--color-warm-black)' }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product, quantity, selectedVariant)}
              className="w-full btn-primary flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div>
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                This exquisite piece is crafted from 18K gold-plated materials, ensuring a luxurious look that lasts. Each Velmora piece is designed to be treasured for years to come, making it perfect for both self-purchase and gifting.
              </Accordion>
              
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                Made with 18K gold plating on sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.
              </Accordion>
              
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}