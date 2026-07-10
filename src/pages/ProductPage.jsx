import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductPage.css';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <>
        <Navigation />
        <div className="product-not-found container">
          <h1>Product Not Found</h1>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <>
      <Navigation />
      <main className="product-page">
        <div className="container">
          <div className="product-page__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <div className="product-page__content">
            {/* Image Gallery */}
            <div className="product-page__gallery">
              <div className="product-page__main-image">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                />
              </div>
              <div className="product-page__thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`product-page__thumbnail ${selectedImage === index ? 'product-page__thumbnail--active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-page__info">
              <h1 className="product-page__name">{product.name}</h1>
              
              <div className="product-page__rating">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    strokeWidth={1.5}
                  />
                ))}
                <span>{product.rating} ({product.reviews} reviews)</span>
              </div>

              <p className="product-page__price">{formatPrice(product.price)}</p>

              <p className="product-page__description">{product.description}</p>

              {/* Variant Selector */}
              <div className="product-page__variants">
                <span className="product-page__variant-label">Finish:</span>
                <div className="product-page__variant-options">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      className={`product-page__variant-btn ${selectedVariant === variant ? 'product-page__variant-btn--active' : ''}`}
                      onClick={() => setSelectedVariant(variant)}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="product-page__quantity">
                <span className="product-page__quantity-label">Quantity:</span>
                <div className="product-page__quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} strokeWidth={1.5} />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <Plus size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button 
                className="btn btn-accent product-page__add-to-cart"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                Add to Cart
              </button>

              {/* Accordions */}
              <div className="product-page__accordions">
                <div className="product-page__accordion">
                  <button 
                    className="product-page__accordion-header"
                    onClick={() => toggleAccordion('description')}
                  >
                    <span>Description</span>
                    {openAccordion === 'description' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openAccordion === 'description' && (
                    <div className="product-page__accordion-content">
                      <p>{product.description}</p>
                      <p>Each piece is crafted with attention to detail and designed to be cherished for years to come.</p>
                    </div>
                  )}
                </div>

                <div className="product-page__accordion">
                  <button 
                    className="product-page__accordion-header"
                    onClick={() => toggleAccordion('materials')}
                  >
                    <span>Materials & Care</span>
                    {openAccordion === 'materials' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openAccordion === 'materials' && (
                    <div className="product-page__accordion-content">
                      <p>18K gold plated on sterling silver or brass</p>
                      <p>Hypoallergenic and nickel-free</p>
                      <p>Store in the provided pouch when not wearing</p>
                      <p>Avoid contact with water, perfumes, and lotions</p>
                    </div>
                  )}
                </div>

                <div className="product-page__accordion">
                  <button 
                    className="product-page__accordion-header"
                    onClick={() => toggleAccordion('shipping')}
                  >
                    <span>Shipping & Returns</span>
                    {openAccordion === 'shipping' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="product-page__accordion-content">
                      <p>Free worldwide shipping on all orders</p>
                      <p>Orders ship within 1-2 business days</p>
                      <p>30-day returns for unworn items in original packaging</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="product-page__related">
              <h2>You May Also Like</h2>
              <div className="product-page__related-grid">
                {relatedProducts.map(p => (
                  <Link key={p.id} to={`/product/${p.id}`} className="product-page__related-card">
                    <div className="product-page__related-image">
                      <img src={p.images[0]} alt={p.name} />
                    </div>
                    <h3>{p.name}</h3>
                    <p>{formatPrice(p.price)}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}