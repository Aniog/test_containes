import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, Minus, Plus } from 'lucide-react';
import StarRating from '../components/ui/StarRating';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/product/ProductCard';
import { getProductById, products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]?.value || null);
      setSelectedImage(0);
      setQuantity(1);
      setAddedToCart(false);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso mb-4">Product not found</h1>
          <Link to="/collection" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product.id, selectedVariant, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || Math.random() > 0.5))
    .slice(0, 4);

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-main py-4">
        <Link 
          to="/collection" 
          className="inline-flex items-center gap-1 text-sm text-stone hover:text-gold transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="container-main pb-section">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-ivory overflow-hidden">
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
                    className={`w-20 h-20 bg-ivory overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-gold' : 'border-transparent'
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
            {/* Name & Price */}
            <h1 className="font-serif text-3xl md:text-4xl text-espresso uppercase tracking-[0.1em] mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <p className="font-serif text-2xl text-espresso">
                {formatPrice(product.price)}
              </p>
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} size="sm" />
                <span className="text-xs text-stone">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="text-stone leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block font-sans text-sm font-medium text-espresso mb-3">
                Finish: {selectedVariant && product.variants.find(v => v.value === selectedVariant)?.name}
              </label>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`px-6 py-2.5 border transition-all ${
                      selectedVariant === variant.value
                        ? 'border-gold bg-gold text-white'
                        : 'border-taupe text-espresso hover:border-gold'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-sans text-sm font-medium text-espresso mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-taupe w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-stone hover:text-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-stone hover:text-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans font-medium tracking-wide transition-all flex items-center justify-center gap-2 mb-4 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-gold text-white hover:bg-gold-hover'
              }`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {addedToCart ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            <p className="text-xs text-stone text-center">
              Free shipping on orders over $75 · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-espresso mb-1">Materials</h4>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-espresso mb-1">Care Instructions</h4>
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
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-ivory">
          <div className="container-main">
            <h2 className="section-title mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
