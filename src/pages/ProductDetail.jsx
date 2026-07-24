import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductBySlug, products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="container-luxury py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="btn-outline">Continue Shopping</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, selectedVariant, quantity);
    setTimeout(() => setIsAdding(false), 1500);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express delivery: 2-3 business days.\n\nWe offer free returns within 30 days of purchase. Items must be unworn and in original packaging.' }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-luxury pt-8 pb-4">
        <nav className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-taupe)' }}>
          <Link to="/" className="hover:text-[var(--color-gold-dark)]">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[var(--color-gold-dark)]">Shop</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-espresso)' }}>{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container-luxury pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden" style={{ backgroundColor: 'var(--color-sand)' }}>
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 overflow-hidden transition-all ${
                      selectedImage === index ? 'ring-2 ring-[var(--color-gold)]' : ''
                    }`}
                    style={{ backgroundColor: 'var(--color-sand)' }}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="py-4">
            {/* Name & Price */}
            <h1 className="product-title text-xl md:text-2xl mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-medium mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{ 
                      fill: i < Math.floor(product.rating) ? 'var(--color-gold)' : 'transparent',
                      color: 'var(--color-gold)'
                    }}
                  />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--color-taupe)' }}>
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Short Description */}
            <p className="mb-6" style={{ color: 'var(--color-walnut)' }}>
              {product.shortDescription}
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">
                  Finish: <span style={{ color: 'var(--color-taupe)' }}>{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all ${
                        selectedVariant === variant
                          ? 'bg-[var(--color-espresso)] text-[var(--color-cream)]'
                          : 'border hover:border-[var(--color-espresso)]'
                      }`}
                      style={{ borderColor: selectedVariant === variant ? 'var(--color-espresso)' : 'var(--color-sand)' }}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center border w-fit" style={{ borderColor: 'var(--color-sand)' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 transition-colors hover:bg-[var(--color-sand)]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 transition-colors hover:bg-[var(--color-sand)]"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full py-4 text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all mb-4"
              style={{
                backgroundColor: isAdding ? 'var(--color-gold)' : 'var(--color-espresso)',
                color: isAdding ? 'var(--color-espresso)' : 'var(--color-cream)'
              }}
            >
              <ShoppingBag className="w-5 h-5" />
              {isAdding ? 'ADDED TO BAG' : 'ADD TO BAG'}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-sm pt-4 border-t" style={{ borderColor: 'var(--color-sand)', color: 'var(--color-taupe)' }}>
              <span>✓ Free Worldwide Shipping</span>
              <span>✓ 30-Day Returns</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-t" style={{ borderColor: 'var(--color-sand)' }}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium">{accordion.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openAccordion === accordion.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-6 text-sm whitespace-pre-line" style={{ color: 'var(--color-walnut)' }}>
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
          <div className="container-luxury">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
