import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProductBySlug, getFeatured } from '../../data/products';
import ProductCard from '../shop/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem, openCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-900 mb-4">Product not found</h1>
          <Link to="/shop" className="btn-secondary text-xs">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getFeatured()
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    openCart();
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-charcoal-900 mb-2">Materials</h4>
            <p className="text-charcoal-600">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal-900 mb-2">Care Instructions</h4>
            <p className="text-charcoal-600">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-charcoal-900 mb-2">Shipping</h4>
            <p className="text-charcoal-600">
              Free worldwide shipping on all orders. Standard delivery: 5-7 business days. 
              Express delivery: 2-3 business days.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal-900 mb-2">Returns</h4>
            <p className="text-charcoal-600">
              We offer a 30-day return policy for unworn items in original packaging. 
              Contact us for a prepaid return label.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="container-luxury py-4 border-b border-cream-200">
        <nav className="flex items-center gap-2 text-xs font-sans text-charcoal-500">
          <Link to="/" className="hover:text-charcoal-900">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-900">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="py-8 md:py-12">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-cream-100 overflow-hidden">
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
                      className={`w-20 h-20 md:w-24 md:h-24 border-2 overflow-hidden transition-all duration-200 ${
                        selectedImage === index
                          ? 'border-charcoal-900'
                          : 'border-cream-200 hover:border-charcoal-400'
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
            <div className="lg:sticky lg:top-24 lg:self-start">
              {/* Badge */}
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-charcoal-900 text-cream-50 
                                 text-xs font-sans font-medium tracking-wider uppercase mb-4">
                  {product.badge}
                </span>
              )}

              {/* Name */}
              <h1 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-3 uppercase tracking-wide">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold-500 fill-gold-500'
                          : 'text-charcoal-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-charcoal-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-serif text-2xl text-charcoal-900 mb-6">
                ${product.price}
              </p>

              {/* Short Description */}
              <p className="text-charcoal-600 font-sans text-sm leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {/* Variant Selector */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <label className="block text-xs font-sans font-medium text-charcoal-700 uppercase tracking-wider mb-3">
                    Finish: <span className="text-charcoal-500">{selectedVariant}</span>
                  </label>
                  <div className="flex gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-5 py-2 border-2 font-sans text-sm transition-all duration-200 ${
                          selectedVariant === variant
                            ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                            : 'border-charcoal-300 text-charcoal-700 hover:border-charcoal-900'
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
                <label className="block text-xs font-sans font-medium text-charcoal-700 uppercase tracking-wider mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-charcoal-300">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-cream-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-sans text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-cream-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-charcoal-900 text-cream-50 font-sans text-sm 
                           font-medium tracking-widest uppercase hover:bg-charcoal-800 
                           transition-colors flex items-center justify-center gap-2 mb-4"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>

              {/* Wishlist */}
              <button className="w-full py-3 border border-charcoal-300 text-charcoal-700 
                                 font-sans text-sm font-medium tracking-wider uppercase 
                                 hover:border-charcoal-900 transition-colors flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                Add to Wishlist
              </button>

              {/* Accordions */}
              <div className="mt-10 border-t border-cream-200 pt-8">
                {accordions.map((accordion) => (
                  <div key={accordion.id} className="border-b border-cream-200">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                      className="w-full py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-sans text-sm font-medium text-charcoal-900 uppercase tracking-wider">
                        {accordion.title}
                      </span>
                      {openAccordion === accordion.id ? (
                        <ChevronUp className="w-4 h-4 text-charcoal-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-charcoal-500" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                      }`}
                    >
                      <div className="font-sans text-sm text-charcoal-600 leading-relaxed">
                        {accordion.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
              Complete Your Look
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mt-3">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
