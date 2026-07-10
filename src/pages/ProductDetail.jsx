import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-velmora-accent hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? 'fill-velmora-accent text-velmora-accent'
                : i === fullStars && hasHalfStar
                ? 'fill-velmora-accent/50 text-velmora-accent'
                : 'text-velmora-border-dark'
            }`}
          />
        ))}
      </div>
    );
  };

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const AccordionItem = ({ id, title, content }) => {
    const isOpen = activeAccordion === id;
    
    return (
      <div className="border-b border-velmora-border">
        <button
          onClick={() => setActiveAccordion(isOpen ? null : id)}
          className="w-full flex items-center justify-between py-4 text-left"
        >
          <span className="text-sm tracking-wide font-medium">{title}</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-velmora-text-muted" />
          ) : (
            <ChevronDown className="w-4 h-4 text-velmora-text-muted" />
          )}
        </button>
        {isOpen && (
          <div className="pb-4 text-sm text-velmora-text-secondary leading-relaxed">
            {content}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-velmora-bg-primary">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-velmora-text-muted">
          <Link to="/" className="hover:text-velmora-text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velmora-bg-secondary overflow-hidden">
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
                        ? 'border-velmora-text-primary'
                        : 'border-transparent hover:border-velmora-border-dark'
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
          <div className="lg:py-8">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block bg-velmora-accent text-white text-xs px-3 py-1 tracking-wider mb-4">
                {product.badge}
              </span>
            )}

            {/* Title */}
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-velmora-text-primary mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              {renderStars(product.rating)}
              <span className="text-sm text-velmora-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl md:text-3xl">${product.price}</span>
              {product.comparePrice && (
                <span className="text-lg text-velmora-text-muted line-through">
                  ${product.comparePrice}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-velmora-text-secondary leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">
                Color: <span className="font-normal text-velmora-text-secondary">{selectedVariant.name}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => setSelectedVariant(variant)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedVariant.name === variant.name
                        ? 'border-velmora-text-primary scale-110'
                        : 'border-velmora-border-dark hover:border-velmora-text-muted'
                    }`}
                    style={{ backgroundColor: variant.color }}
                    title={variant.name}
                    aria-label={`Select ${variant.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velmora-bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-center min-w-[3rem]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velmora-bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Bag
            </button>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-4 py-6 border-y border-velmora-border">
              <div className="flex items-center gap-2 text-sm text-velmora-text-secondary">
                <Truck className="w-4 h-4 text-velmora-accent" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-sm text-velmora-text-secondary">
                <RotateCcw className="w-4 h-4 text-velmora-accent" />
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-sm text-velmora-text-secondary">
                <Shield className="w-4 h-4 text-velmora-accent" />
                Hypoallergenic
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <AccordionItem
                id="description"
                title="Description"
                content={product.description}
              />
              <AccordionItem
                id="materials"
                title="Materials & Care"
                content={
                  <>
                    <p className="mb-3"><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </>
                }
              />
              <AccordionItem
                id="shipping"
                title="Shipping & Returns"
                content={product.shipping}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-velmora-bg-secondary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
