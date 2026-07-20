import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById, products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen pt-20 md:pt-24 bg-[var(--velmora-ivory)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[var(--velmora-charcoal)] mb-4">
            Product Not Found
          </h1>
          <Link
            to="/collections"
            className="text-[var(--velmora-gold)] hover:text-[var(--velmora-gold-dark)] underline underline-offset-4"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-[var(--velmora-charcoal)] mb-2">Materials</h4>
            <p className="text-[var(--velmora-gray-600)]">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-[var(--velmora-charcoal)] mb-2">Care Instructions</h4>
            <p className="text-[var(--velmora-gray-600)]">{product.care}</p>
          </div>
        </div>
      )
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-[var(--velmora-charcoal)] mb-2">Shipping</h4>
            <p className="text-[var(--velmora-gray-600)]">
              Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express delivery available at checkout.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[var(--velmora-charcoal)] mb-2">Returns</h4>
            <p className="text-[var(--velmora-gray-600)]">
              We offer a 30-day return policy for unworn items in original packaging. Contact us to initiate a return.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-[var(--velmora-ivory)]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/collections"
          className="inline-flex items-center gap-1 text-sm text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)] transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[var(--velmora-cream)] rounded-lg overflow-hidden">
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
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-[var(--velmora-gold)]'
                        : 'border-transparent hover:border-[var(--velmora-gray-200)]'
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
          <div className="lg:py-8">
            {/* Product Name */}
            <h1 className="font-serif text-2xl md:text-3xl text-[var(--velmora-charcoal)] mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating)
                        ? 'fill-[var(--velmora-gold)] text-[var(--velmora-gold)]'
                        : 'text-[var(--velmora-gray-400)]'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-gray-600)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl text-[var(--velmora-gold)] font-medium mb-6">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-[var(--velmora-gray-600)] mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-[var(--velmora-charcoal)] mb-3">
                  Finish
                </label>
                <div className="flex gap-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 rounded-full border text-sm transition-all ${
                        selectedVariant === variant
                          ? 'border-[var(--velmora-gold)] bg-[var(--velmora-gold)] text-white'
                          : 'border-[var(--velmora-gray-200)] text-[var(--velmora-charcoal)] hover:border-[var(--velmora-gold)]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[var(--velmora-charcoal)] mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-[var(--velmora-gray-200)] rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-[var(--velmora-gold)] text-white font-medium tracking-wider uppercase rounded hover:bg-[var(--velmora-gold-dark)] transition-colors mb-4"
            >
              Add to Cart
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--velmora-gray-200)]">
              <span className="text-xs text-[var(--velmora-gray-600)]">
                ✓ Free Shipping
              </span>
              <span className="text-xs text-[var(--velmora-gray-600)]">
                ✓ 30-Day Returns
              </span>
              <span className="text-xs text-[var(--velmora-gray-600)]">
                ✓ Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-[var(--velmora-gray-200)]">
              {accordions.map(accordion => (
                <div key={accordion.id} className="border-b border-[var(--velmora-gray-200)]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium text-[var(--velmora-charcoal)]">
                      {accordion.title}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[var(--velmora-gray-600)] transition-transform ${
                        openAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    {typeof accordion.content === 'string' ? (
                      <p className="text-[var(--velmora-gray-600)]">{accordion.content}</p>
                    ) : (
                      accordion.content
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-[var(--velmora-cream)] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--velmora-charcoal)] text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
