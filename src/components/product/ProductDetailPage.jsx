import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductById, getRelatedProducts } from '@/data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart, isLoading } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  const variants = ['Gold', 'Silver'];
  const accordions = [
    { id: 'description', title: 'Description', content: product?.description },
    { id: 'materials', title: 'Materials & Care', content: 'Our jewelry is crafted with 18K gold plating over high-quality brass. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not wearing.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. We offer a 30-day return policy for unworn items in original packaging.' },
  ];

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-warmstone-900">Product not found</h1>
          <Link to="/shop" className="mt-4 text-gold-600 hover:text-gold-700">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-warmstone-500">
          <Link to="/" className="hover:text-warmstone-900">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-warmstone-900">Shop</Link>
          <span>/</span>
          <span className="text-warmstone-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-warmstone-100 overflow-hidden">
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
                  className={`w-20 h-20 bg-warmstone-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-warmstone-900'
                      : 'border-transparent hover:border-warmstone-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              {product.hoverImage && (
                <button
                  onClick={() => setSelectedImage(1)}
                  className={`w-20 h-20 bg-warmstone-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === 1
                      ? 'border-warmstone-900'
                      : 'border-transparent hover:border-warmstone-300'
                  }`}
                >
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} alternate`}
                    className="w-full h-full object-cover"
                  />
                </button>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-warmstone-900 text-cream-50 text-xs font-medium uppercase tracking-wide">
                {product.badge}
              </span>
            )}

            {/* Product Name */}
            <h1 className="mt-4 font-serif text-3xl md:text-4xl text-warmstone-900 uppercase tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'fill-warmstone-200 text-warmstone-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-warmstone-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 font-serif text-3xl text-warmstone-900">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="mt-6 text-warmstone-600 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm font-medium text-warmstone-900 mb-3">
                Finish: <span className="font-normal text-warmstone-600">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border-2 font-medium text-sm tracking-wide transition-all ${
                      selectedVariant === variant
                        ? 'border-warmstone-900 bg-warmstone-900 text-cream-50'
                        : 'border-warmstone-300 text-warmstone-700 hover:border-warmstone-900'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-8">
              <p className="text-sm font-medium text-warmstone-900 mb-3">Quantity</p>
              <div className="flex items-center border border-warmstone-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-warmstone-600 hover:text-warmstone-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 font-medium text-warmstone-900 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-warmstone-600 hover:text-warmstone-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className="mt-8 w-full py-4 bg-warmstone-900 text-cream-50 font-medium tracking-wide hover:bg-warmstone-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                'Adding...'
              ) : (
                <>
                  <span>Add to Cart</span>
                  <Check className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Product Details */}
            <div className="mt-8 pt-8 border-t border-warmstone-200">
              <div className="flex items-center gap-2 text-sm text-warmstone-600">
                <Check className="w-4 h-4 text-gold-500" />
                <span>Free Worldwide Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warmstone-600 mt-2">
                <Check className="w-4 h-4 text-gold-500" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warmstone-600 mt-2">
                <Check className="w-4 h-4 text-gold-500" />
                <span>Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 divide-y divide-warmstone-200">
              {accordions.map((accordion) => (
                <div key={accordion.id}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium text-warmstone-900">{accordion.title}</span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp className="w-5 h-5 text-warmstone-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-warmstone-500" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-4 text-warmstone-600 leading-relaxed">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-warmstone-900 text-center mb-12">
            You May Also Like
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-warmstone-100 overflow-hidden mb-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-sm text-warmstone-900">
                  {product.name}
                </h3>
                <p className="mt-1 font-serif text-warmstone-700">
                  ${product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
