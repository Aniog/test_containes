import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Star, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products, formatPrice } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="btn-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [product.image, product.imageSecondary || product.image];

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'Our jewelry is crafted with 18K gold plating over sterling silver. To maintain the beauty of your pieces, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.',
    },
  ];

  return (
    <main className="pt-20">
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-stone)' }}>
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop">Shop</Link></li>
            <li>/</li>
            <li style={{ color: 'var(--color-charcoal)' }}>{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-3-4 mb-4 overflow-hidden" style={{ backgroundColor: 'var(--color-ivory)' }}>
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-charcoal' : 'border-transparent'
                  }`}
                  style={{ borderColor: selectedImage === index ? 'var(--color-charcoal)' : 'transparent' }}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1
              className="font-serif text-2xl md:text-3xl mb-2"
              style={{ letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              {product.name}
            </h1>
            
            <p className="text-xl mb-4">{formatPrice(product.price)}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < product.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--color-stone)' }}>
                {product.reviews} reviews
              </span>
            </div>

            <p className="mb-6" style={{ color: 'var(--color-stone)', lineHeight: 1.7 }}>
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    className={`pill ${selectedVariant === variant ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider mb-3">Quantity</p>
              <div className="flex items-center border inline-flex" style={{ borderColor: 'var(--color-border-dark)' }}>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mb-4"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              {accordionItems.map((item) => (
                <div key={item.id} className="accordion-item">
                  <button
                    className="accordion-header"
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                  >
                    {item.title}
                    {openAccordion === item.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <div
                    className="accordion-content"
                    style={{
                      maxHeight: openAccordion === item.id ? '200px' : '0',
                    }}
                  >
                    <p
                      className="pb-6"
                      style={{ color: 'var(--color-stone)', lineHeight: 1.7 }}
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
              style={{ letterSpacing: '0.05em' }}
            >
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
    </main>
  );
};

export default ProductPage;