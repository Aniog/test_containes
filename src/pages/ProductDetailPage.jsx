import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Plus, Minus, ChevronRight, Truck, RefreshCw, Shield } from 'lucide-react';
import products from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, items } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedVariant(foundProduct.variants[0]);
      // Get related products (same category, excluding current)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    } else {
      navigate('/shop');
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-velmora-gold" />
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(product, selectedVariant, quantity);
    setTimeout(() => setIsAddingToCart(false), 1000);
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
      content: `Materials: ${product.details.materials}\n\nCare Instructions: ${product.details.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.details.shipping,
    },
  ];

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <div className="container-velmora py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-velmora-stone mb-8">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-velmora-ivory mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-velmora-ivory overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
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

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* Product Name */}
            <h1
              className="product-name text-2xl md:text-3xl mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-stone'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-stone">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium mb-8">${product.price}.00</p>

            {/* Short Description */}
            <p className="text-velmora-charcoal/80 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-sm text-velmora-stone mb-3">Tone</p>
              <div className="flex space-x-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${
                      selectedVariant === variant ? 'active' : ''
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm text-velmora-stone mb-3">Quantity</p>
              <div className="quantity-input">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="w-full bg-velmora-charcoal text-velmora-cream py-4 text-sm tracking-widest hover:bg-velmora-gold transition-colors disabled:opacity-50 btn-premium mb-6"
            >
              {isAddingToCart ? 'ADDED!' : 'ADD TO CART'}
            </button>

            {/* Trust Badges */}
            <div className="space-y-3 mb-10">
              <div className="flex items-center space-x-3 text-sm text-velmora-charcoal/80">
                <Truck size={18} className="text-velmora-gold" />
                <span>Free worldwide shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-velmora-charcoal/80">
                <RefreshCw size={18} className="text-velmora-gold" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-velmora-charcoal/80">
                <Shield size={18} className="text-velmora-gold" />
                <span>Hypoallergenic materials</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-sand">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-velmora-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium">{accordion.title}</span>
                    <Plus
                      size={18}
                      className={`transition-transform duration-300 ${
                        openAccordion === accordion.id ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`accordion-content ${openAccordion === accordion.id ? 'open' : ''}`}
                  >
                    <div className="pb-4 text-sm text-velmora-charcoal/80 leading-relaxed whitespace-pre-line">
                      {accordion.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-32">
            <h2
              className="font-serif text-3xl md:text-4xl mb-12 text-center"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((product, index) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group block animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden bg-velmora-ivory aspect-[3/4] mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="product-name text-sm mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-base font-medium">${product.price}.00</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
