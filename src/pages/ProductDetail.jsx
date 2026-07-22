import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';
import { Accordion } from '@/components/ui/accordion';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, isLoading } = useCart();
  
  const product = getProductBySlug(slug);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (product) {
      window.scrollTo(0, 0);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: `Our ${product.name} is crafted with premium 18K gold plating over hypoallergenic sterling silver. To maintain its beauty, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.`
    },
    {
      title: 'Shipping & Returns',
      content: `Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express delivery: 2-3 business days. We offer a 30-day return policy for unworn items in original packaging.`
    }
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
  };

  return (
    <div className="min-h-screen pt-[72px]">
      {/* Breadcrumb */}
      <div className="container-narrow py-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-charcoal-light hover:text-gold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          Back
        </button>
      </div>

      {/* Product Section */}
      <section className="container-narrow pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white overflow-hidden">
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
                  className={`w-20 h-20 bg-white overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent hover:border-taupe'
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

          {/* Product Info */}
          <div className="lg:py-8">
            {/* Category */}
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal-light mb-3">
              {product.category}
            </p>

            {/* Product Name */}
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-taupe'}`}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-light">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal mb-8">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-charcoal-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-sm font-medium text-charcoal mb-3">
                Finish: <span className="font-normal text-charcoal-light">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      selectedColor === color
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-taupe text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-taupe w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="px-6 text-charcoal font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {isLoading ? 'Adding...' : 'Add to Cart'}
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 border transition-colors ${
                  isWishlisted ? 'border-gold bg-gold/5 text-gold' : 'border-taupe text-charcoal hover:border-gold hover:text-gold'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} strokeWidth={1.5} />
              </button>
            </div>

            {/* Material Badge */}
            <div className="flex items-center gap-4 py-4 border-t border-b border-taupe">
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal-light">
                18K Gold Plated
              </span>
              <span className="text-taupe">·</span>
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal-light">
                Hypoallergenic
              </span>
              <span className="text-taupe">·</span>
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal-light">
                Free Shipping
              </span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-xl mt-16">
          <Accordion items={accordionItems} defaultOpen={0} />
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold mb-4">
              Complete the Look
            </p>
            <h2 className="section-heading">You May Also Like</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
