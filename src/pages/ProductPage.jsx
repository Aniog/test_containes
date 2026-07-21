import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';

const Accordion = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b" style={{ borderColor: 'var(--color-border)' }}>
    <button
      className="w-full py-5 flex items-center justify-between text-left"
      onClick={onToggle}
    >
      <span className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{title}</span>
      {isOpen ? (
        <ChevronUp size={20} style={{ color: 'var(--color-text-secondary)' }} />
      ) : (
        <ChevronDown size={20} style={{ color: 'var(--color-text-secondary)' }} />
      )}
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {children}
      </p>
    </div>
  </div>
);

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link to="/" style={{ color: 'var(--color-text-muted)' }}>Home</Link></li>
            <li style={{ color: 'var(--color-text-muted)' }}>/</li>
            <li><Link to="/shop" style={{ color: 'var(--color-text-muted)' }}>Shop</Link></li>
            <li style={{ color: 'var(--color-text-muted)' }}>/</li>
            <li style={{ color: 'var(--color-text-secondary)' }}>{product.name}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] overflow-hidden bg-[var(--color-bg-secondary)]">
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
                  className={`w-20 h-24 overflow-hidden transition-opacity ${
                    selectedImage === index ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                  }`}
                  style={{
                    border: selectedImage === index ? '2px solid var(--color-accent)' : '2px solid transparent'
                  }}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-32 h-fit">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? 'var(--color-accent)' : 'transparent'}
                    color="var(--color-accent)"
                  />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                Color: <span className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-sm tracking-wider transition-all ${
                      selectedVariant === variant
                        ? 'bg-[var(--color-base)] text-white'
                        : 'bg-transparent border'
                    }`}
                    style={{ 
                      borderColor: selectedVariant === variant ? 'var(--color-base)' : 'var(--color-border)',
                      color: selectedVariant === variant ? 'var(--color-white)' : 'var(--color-text-secondary)'
                    }}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>Quantity</p>
              <div className="flex items-center border inline-flex" style={{ borderColor: 'var(--color-border)' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:opacity-60 transition-opacity"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:opacity-60 transition-opacity"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn btn-primary mb-4"
              style={{ 
                backgroundColor: 'var(--color-base)', 
                color: 'var(--color-white)',
                padding: '1.25rem'
              }}
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                {product.description}
                <br /><br />
                Each piece is crafted with attention to detail and made to last. Our 18K gold plated jewelry offers the look of solid gold at an accessible price point.
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                Material: {product.material}
                <br />
                Care: Store in a dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                Free worldwide shipping on orders over $100.
                <br />
                30-day returns for unworn items in original packaging.
                <br />
                Express shipping available at checkout.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">You May Also Like</h2>
            <div className="grid-products">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductPage;