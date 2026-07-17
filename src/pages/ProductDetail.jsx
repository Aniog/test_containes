import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-32 pb-section text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-velmora-accent hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const images = [product.image, product.hoverImage];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="py-4 text-sm text-velmora-text-secondary">
          <Link to="/" className="hover:text-velmora-text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-text-primary">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-text-primary">{product.name}</span>
        </nav>

        {/* Product Main */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-product bg-velmora-bg-secondary">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 bg-velmora-bg-secondary ${
                    selectedImage === idx ? 'ring-2 ring-velmora-accent' : ''
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pt-4">
            <h1 className="font-serif text-2xl md:text-3xl text-velmora-text-primary uppercase tracking-wider">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? 'fill-velmora-accent text-velmora-accent'
                        : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-text-secondary">
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-velmora-text-primary mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-velmora-text-secondary mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-6">
              <p className="text-sm text-velmora-text-secondary mb-2">Metal Tone</p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-accent bg-velmora-accent text-white'
                        : 'border-velmora-border text-velmora-text-secondary hover:border-velmora-accent'
                    }`}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm text-velmora-text-secondary mb-2">Quantity</p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-6 bg-velmora-accent hover:bg-velmora-accent-hover text-white py-4 px-6 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-button"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-border">
              {/* Description */}
              <div className="border-b border-velmora-border">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-velmora-text-primary">Description</span>
                  {openAccordion === 'description' ? (
                    <ChevronUp className="w-5 h-5 text-velmora-text-secondary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-velmora-text-secondary" />
                  )}
                </button>
                {openAccordion === 'description' && (
                  <div className="pb-4 text-velmora-text-secondary leading-relaxed">
                    {product.description}
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div className="border-b border-velmora-border">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-velmora-text-primary">Materials & Care</span>
                  {openAccordion === 'materials' ? (
                    <ChevronUp className="w-5 h-5 text-velmora-text-secondary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-velmora-text-secondary" />
                  )}
                </button>
                {openAccordion === 'materials' && (
                  <div className="pb-4 text-velmora-text-secondary leading-relaxed">
                    <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-velmora-text-primary">Shipping & Returns</span>
                  {openAccordion === 'shipping' ? (
                    <ChevronUp className="w-5 h-5 text-velmora-text-secondary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-velmora-text-secondary" />
                  )}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pb-4 text-velmora-text-secondary leading-relaxed">
                    <p className="mb-2">Free worldwide shipping on all orders over $100.</p>
                    <p className="mb-2">Orders are processed within 1-2 business days.</p>
                    <p>Free 30-day returns for all orders. Items must be unworn and in original packaging.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="font-serif text-section text-velmora-text-primary mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={false} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}