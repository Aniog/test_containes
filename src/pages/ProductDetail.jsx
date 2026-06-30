import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id, 4);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders.\n\n30-day hassle-free returns. Items must be unworn and in original packaging.' },
  ];

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-500">
          <Link to="/" className="hover:text-charcoal-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-charcoal-100 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 bg-charcoal-100 overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-charcoal-900' : 'border-transparent'
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
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] uppercase tracking-[0.15em] font-medium mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.1em] uppercase text-charcoal-900 mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-charcoal-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl text-charcoal-900 mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="text-xs uppercase tracking-[0.1em] text-charcoal-700 mb-3 block">
                  Finish: <span className="font-medium">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-xs uppercase tracking-[0.1em] transition-all border ${
                        selectedVariant === variant
                          ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                          : 'border-charcoal-200 hover:border-charcoal-900'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-[0.1em] text-charcoal-700 mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-charcoal-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-charcoal-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-sm font-medium min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-charcoal-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-[11px] uppercase tracking-[0.15em] font-medium transition-all ${
                addedToCart
                  ? 'bg-green-700 text-white'
                  : 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800'
              }`}
            >
              {addedToCart ? (
                <span className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  Added to Bag
                </span>
              ) : (
                'Add to Bag'
              )}
            </button>

            {/* Product Details Accordions */}
            <div className="mt-10 border-t border-charcoal-200 pt-8">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-charcoal-200">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-[0.1em] font-medium">
                      {accordion.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-charcoal-600 leading-relaxed whitespace-pre-line">
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
        <section className="py-16 md:py-20 border-t border-charcoal-200">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.25em] text-accent mb-3 block">
                You May Also Like
              </span>
              <h2 className="section-title text-2xl md:text-3xl">Complete the Look</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
