import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-cream-dark">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-sm tracking-[0.1em] uppercase font-medium">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-velmora-stone" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-stone" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 text-sm text-velmora-stone leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link
            to="/shop"
            className="text-velmora-gold text-sm tracking-[0.1em] uppercase font-sans hover:underline"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
  };

  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 sm:mb-12">
          <ol className="flex items-center gap-2 text-xs font-sans text-velmora-stone">
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
            <li className="text-velmora-black">{product.name}</li>
          </ol>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-velmora-cream rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-cream-dark'
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

          {/* Product info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.08em] uppercase text-velmora-black mb-4">
              {product.name}
            </h1>

            <p className="font-sans text-xl sm:text-2xl text-velmora-black mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-cream-dark fill-velmora-cream-dark'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-velmora-stone">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-sm sm:text-base text-velmora-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase font-sans font-medium mb-3">
                Tone: {product.variants[selectedVariant]}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase font-sans font-medium border transition-colors ${
                      selectedVariant === index
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-cream-dark text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase font-sans font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-cream-dark">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-velmora-cream transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-3 text-sm font-sans min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-velmora-cream transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-black text-white py-4 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-velmora-charcoal transition-colors mb-6"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-velmora-cream-dark">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: '1 Year Warranty' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon className="w-5 h-5 mx-auto mb-1.5 text-velmora-stone" />
                  <span className="text-[10px] tracking-[0.1em] uppercase font-sans text-velmora-stone">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-2">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-velmora-charcoal mb-1">Materials</p>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <p className="font-medium text-velmora-charcoal mb-1">Care Instructions</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 sm:mt-24">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-velmora-black">
                You May Also Like
              </h2>
              <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
