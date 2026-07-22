import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Heart, Share2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import ProductCard from '../home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-title mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
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
      content: `Materials: ${product.material}
• 18K gold plating over hypoallergenic sterling silver
• Cubic zirconia crystals
• Lead and nickel free

Care Instructions:
• Store in the provided jewelry pouch when not wearing
• Avoid contact with water, perfumes, and lotions
• Clean gently with a soft, dry cloth
• Remove before swimming or exercising`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Shipping:
• Free worldwide shipping on all orders
• Standard delivery: 5-10 business days
• Express delivery: 2-3 business days (additional fee)

Returns:
• 30-day return policy for unworn items
• Free return shipping
• Full refund to original payment method
• Contact our support team for return instructions`,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center gap-2 text-sm text-charcoal-500">
          <Link to="/" className="hover:text-warmblack transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-warmblack transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-warmblack">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-charcoal-50 overflow-hidden">
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
                    className={`w-20 h-20 border-2 transition-colors overflow-hidden ${
                      selectedImage === index
                        ? 'border-warmblack'
                        : 'border-transparent hover:border-charcoal-300'
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
              <span className="inline-block bg-gold-100 text-gold-700 text-xs tracking-extra-wide uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-extra-wide text-warmblack mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-current'
                        : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-light text-warmblack mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="text-sm font-medium text-charcoal-800 mb-3 block">
                  Finish: <span className="font-normal text-charcoal-600">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 border-2 text-sm tracking-wide transition-colors ${
                        selectedVariant === variant
                          ? 'border-warmblack bg-warmblack text-white'
                          : 'border-charcoal-200 hover:border-charcoal-400'
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
              <label className="text-sm font-medium text-charcoal-800 mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-charcoal-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-charcoal-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-medium min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-charcoal-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mb-4 flex items-center justify-center gap-2"
            >
              Add to Cart
            </button>

            {/* Secondary Actions */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-charcoal-200 text-charcoal-600 hover:border-charcoal-400 transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-sm tracking-wide">Wishlist</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-charcoal-200 text-charcoal-600 hover:border-charcoal-400 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm tracking-wide">Share</span>
              </button>
            </div>

            {/* Material Badge */}
            <div className="mt-8 pt-8 border-t border-charcoal-100">
              <div className="flex items-center gap-4 text-sm text-charcoal-600">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gold-400" />
                  {product.material}
                </span>
                <span>·</span>
                <span>Hypoallergenic</span>
                <span>·</span>
                <span>Free Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-2xl">
          {accordions.map((accordion) => (
            <div key={accordion.id} className="border-b border-charcoal-100">
              <button
                onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm tracking-extra-wide uppercase font-medium">
                  {accordion.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openAccordion === accordion.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === accordion.id && (
                <div className="pb-6 text-charcoal-600 leading-relaxed whitespace-pre-line animate-slide-up">
                  {accordion.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-16 border-t border-charcoal-100">
          <h2 className="section-title mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
