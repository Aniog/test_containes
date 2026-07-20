import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-sans font-medium text-velmora-charcoal">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-velmora-charcoal" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-charcoal" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm font-sans text-velmora-text-secondary leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="aspect-square bg-velmora-warm overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif text-xs tracking-ultra-wide text-velmora-charcoal group-hover:text-velmora-gold transition-colors mb-1">
        {product.name}
      </h3>
      <p className="text-sm font-sans text-velmora-charcoal">
        ${product.price}
      </p>
    </Link>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setSelectedImage(0);
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="text-sm font-sans text-velmora-gold hover:text-velmora-gold-dark transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-sans">
          <ol className="flex items-center gap-2 text-velmora-text-muted">
            <li>
              <Link to="/" className="hover:text-velmora-gold transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-velmora-gold transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velmora-warm overflow-hidden">
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
                    className={`w-20 h-20 bg-velmora-warm overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? 'border-velmora-gold'
                        : 'border-transparent hover:border-velmora-taupe'
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
            {/* Title */}
            <h1 className="font-serif text-2xl md:text-3xl tracking-ultra-wide text-velmora-charcoal mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-2xl font-sans font-medium text-velmora-charcoal mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-taupe'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-sans text-velmora-text-secondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm font-sans text-velmora-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-sans font-medium text-velmora-charcoal mb-3">
                  Finish: {selectedVariant}
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-sm font-sans border transition-colors ${
                        selectedVariant === variant
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-charcoal'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-sm font-sans font-medium text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm font-sans text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-gold text-white font-sans font-medium text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-velmora-gold-dark transition-colors mb-8"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Bag
            </button>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">
                  <strong>Materials:</strong> {product.materials}
                </p>
                <p>
                  <strong>Care:</strong> {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">
                  <strong>Shipping:</strong> Free worldwide shipping on all orders. 
                  Standard delivery takes 5-10 business days.
                </p>
                <p>
                  <strong>Returns:</strong> We offer free returns within 30 days of purchase. 
                  Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-velmora-sand">
            <h2 className="font-serif text-2xl text-velmora-charcoal mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
