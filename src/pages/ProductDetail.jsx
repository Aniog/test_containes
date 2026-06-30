import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || null);
      setActiveImage(0);
      setQuantity(1);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

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
            <h4 className="font-sans text-sm uppercase tracking-wide text-charcoal mb-2">Materials</h4>
            <p className="text-warm-gray">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wide text-charcoal mb-2">Care Instructions</h4>
            <p className="text-warm-gray">{product.care}</p>
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
            <h4 className="font-sans text-sm uppercase tracking-wide text-charcoal mb-2">Shipping</h4>
            <p className="text-warm-gray">Free standard shipping on orders over $50. Express shipping available at checkout.</p>
          </div>
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wide text-charcoal mb-2">Returns</h4>
            <p className="text-warm-gray">We accept returns within 30 days of purchase. Items must be unworn and in original packaging.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 lg:px-12 mb-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-sans text-sm text-warm-gray hover:text-charcoal transition-colors"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-content mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-divider rounded overflow-hidden">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === index ? 'border-gold' : 'border-transparent'
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
          <div className="lg:pt-8">
            {/* Badge */}
            {product.badge && (
              <div className="inline-block bg-gold text-white px-3 py-1 text-xs font-sans uppercase tracking-wider mb-4">
                {product.badge}
              </div>
            )}

            {/* Product Name */}
            <h1 className="font-serif text-2xl lg:text-3xl uppercase tracking-wider text-charcoal mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    className={i < Math.floor(product.rating) ? 'text-gold' : 'text-border'}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal mb-8">
              {formatPrice(product.price)}
            </p>

            {/* Short Description */}
            <p className="font-sans text-warm-gray leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <p className="font-sans text-sm uppercase tracking-wide text-charcoal mb-3">
                  Finish: <span className="text-warm-gray font-normal">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-3 text-sm font-sans border transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'border-charcoal bg-charcoal text-white'
                          : 'border-border text-charcoal hover:border-charcoal'
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
              <p className="font-sans text-sm uppercase tracking-wide text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-divider transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} strokeWidth={1.5} />
                </button>
                <span className="px-6 font-sans text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-divider transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-3 mb-4"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              Add to Bag
            </button>

            {/* Wishlist Button */}
            <button className="btn-secondary w-full flex items-center justify-center gap-3">
              <Heart size={18} strokeWidth={1.5} />
              Add to Wishlist
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-border pt-8">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-sans text-sm uppercase tracking-wide text-charcoal">
                      {accordion.title}
                    </span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp size={18} strokeWidth={1.5} className="text-gold" />
                    ) : (
                      <ChevronDown size={18} strokeWidth={1.5} className="text-warm-gray" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === accordion.id ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    {typeof accordion.content === 'string' ? (
                      <p className="font-sans text-sm text-warm-gray leading-relaxed">
                        {accordion.content}
                      </p>
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
        <section className="max-w-content mx-auto px-6 lg:px-12 mt-20 lg:mt-28">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
