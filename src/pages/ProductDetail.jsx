import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, isLoading, cartCount } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  // Set default variant on mount
  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
    setSelectedImage(0);
    setQuantity(1);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Product Not Found
          </h1>
          <Link to="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\nCare: ${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders.\n\n30-day returns for unworn items in original packaging.\n\nExpress shipping available at checkout.' }
  ];

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="container py-6 border-b border-[var(--color-border)]">
        <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
          <Link to="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[var(--color-gold)] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[var(--color-charcoal)]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-[var(--color-cream)] overflow-hidden">
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
                      className={`w-20 h-20 border-2 overflow-hidden transition-colors ${
                        selectedImage === index 
                          ? 'border-[var(--color-gold)]' 
                          : 'border-transparent hover:border-[var(--color-border)]'
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
              )}
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              {/* Category */}
              <p 
                className="text-sm tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {product.category}
              </p>

              {/* Name */}
              <h1 
                className="product-name text-2xl mb-4"
                style={{ fontFamily: 'var(--font-serif)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'none'}
                      stroke="var(--color-gold)"
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-2xl font-medium mb-6">
                ${product.price}
              </p>

              {/* Description */}
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant Selector */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <p 
                    className="text-sm tracking-wider mb-3"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Finish: <span className="font-medium">{selectedVariant}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-6 py-3 text-sm tracking-wider uppercase border transition-colors ${
                          selectedVariant === variant
                            ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                            : 'border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-charcoal)]'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-8">
                <p 
                  className="text-sm tracking-wider mb-3"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Quantity
                </p>
                <div className="flex items-center border border-[var(--color-border)] w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-[var(--color-cream)] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} strokeWidth={1.5} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-[var(--color-cream)] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="btn btn-primary w-full mb-4"
              >
                <ShoppingBag size={18} strokeWidth={1.5} className="mr-2" />
                Add to Cart
              </button>

              {/* Wishlist Link */}
              <p className="text-center">
                <button className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors">
                  Add to Wishlist
                </button>
              </p>
            </div>
          </div>

          {/* Accordions */}
          <div className="max-w-2xl mt-16">
            <div className="border-t border-[var(--color-border)]">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-[var(--color-border)]">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span 
                      className="text-sm tracking-wider uppercase"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {accordion.title}
                    </span>
                    <ChevronDown 
                      size={18} 
                      strokeWidth={1.5}
                      className={`transition-transform duration-300 ${activeAccordion === accordion.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === accordion.id ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                      {accordion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section bg-[var(--color-cream)]">
          <div className="container">
            <h2 
              className="text-center mb-12"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              You May Also Like
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] mb-4 overflow-hidden bg-[var(--color-primary)]">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 
                    className="product-name mb-1"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {relatedProduct.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    ${relatedProduct.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
