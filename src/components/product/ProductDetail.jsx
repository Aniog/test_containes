import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag, Heart } from 'lucide-react';
import { getProductById, products } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import ProductCard from './ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-2 text-[var(--color-charcoal)] mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.hoverImage, product.image].filter(Boolean);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.details,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-[var(--color-charcoal)] mb-1">Materials</h4>
            <p className="text-[var(--color-warm-gray)]">{product.material}</p>
          </div>
          <div>
            <h4 className="font-medium text-[var(--color-charcoal)] mb-1">Care Instructions</h4>
            <p className="text-[var(--color-warm-gray)]">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <p className="text-[var(--color-warm-gray)]">{product.shipping}</p>
          <div>
            <h4 className="font-medium text-[var(--color-charcoal)] mb-1">Returns</h4>
            <p className="text-[var(--color-warm-gray)]">
              We want you to love your jewelry. If you&apos;re not completely satisfied, 
              return it within 30 days for a full refund or exchange.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)]">
                Home
              </Link>
            </li>
            <li className="text-[var(--color-taupe)]">/</li>
            <li>
              <Link to="/shop" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)]">
                Shop
              </Link>
            </li>
            <li className="text-[var(--color-taupe)]">/</li>
            <li className="text-[var(--color-charcoal)]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[var(--color-ivory)] rounded-lg overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[var(--color-gold)]'
                      : 'border-transparent hover:border-[var(--color-sand)]'
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
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Product Name */}
            <h1 className="product-name text-[var(--color-charcoal)] text-xl mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                        : 'text-[var(--color-sand)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-warm-gray)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-[var(--color-charcoal)] mb-6">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-[var(--color-warm-gray)] body-md mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants?.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-[var(--color-charcoal)] mb-3">
                  Finish: <span className="font-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                        selectedVariant === variant
                          ? 'bg-[var(--color-charcoal)] text-white'
                          : 'bg-[var(--color-ivory)] text-[var(--color-charcoal)] hover:bg-[var(--color-sand)]'
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
              <p className="text-sm font-medium text-[var(--color-charcoal)] mb-3">Quantity</p>
              <div className="flex items-center border border-[var(--color-sand)] rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[var(--color-ivory)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[var(--color-ivory)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="btn btn-primary flex-1"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
              <button
                className="p-3 border border-[var(--color-sand)] rounded hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 py-4 border-t border-b border-[var(--color-sand)] mb-8">
              <span className="text-xs text-[var(--color-warm-gray)]">
                ✓ 18K Gold Plated
              </span>
              <span className="text-xs text-[var(--color-warm-gray)]">
                ✓ Hypoallergenic
              </span>
              <span className="text-xs text-[var(--color-warm-gray)]">
                ✓ Free Shipping Over $75
              </span>
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-[var(--color-sand)]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-[var(--color-charcoal)]">
                      {accordion.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[var(--color-warm-gray)] transition-transform ${
                        openAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="text-[var(--color-warm-gray)] body-sm">
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
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="heading-3 text-[var(--color-charcoal)]">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  showQuickAdd={true}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
