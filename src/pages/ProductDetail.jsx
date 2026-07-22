import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      window.scrollTo(0, 0);
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setSelectedImage(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">
            Product Not Found
          </h1>
          <Link to="/collection" className="text-velmora-gold underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, selectedVariant, quantity);
    setTimeout(() => setIsAdding(false), 2000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          'w-4 h-4',
          i < Math.floor(rating)
            ? 'fill-velmora-gold text-velmora-gold'
            : 'fill-velmora-sand text-velmora-sand'
        )}
      />
    ));
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.details,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `Materials: ${product.material}, Hypoallergenic
Care: Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Free shipping on orders over $75. Standard delivery 5-7 business days.
30-day returns on unworn items in original packaging.`,
    },
  ];

  return (
    <main className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-velmora-taupe">
            <li>
              <Link to="/" className="hover:text-velmora-charcoal transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/collection" className="hover:text-velmora-charcoal transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velmora-sand/50 rounded-lg overflow-hidden">
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
                  className={cn(
                    'w-20 h-20 rounded overflow-hidden border-2 transition-all',
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-sand'
                  )}
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
          <div className="lg:pl-4">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-velmora-gold text-velmora-espresso text-xs tracking-wider mb-4">
                {product.badge}
              </span>
            )}

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal uppercase tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-velmora-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-charcoal mt-4">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-velmora-taupe mt-4">
              {product.description}
            </p>

            <div className="hairline my-8" />

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm text-velmora-taupe mb-2 block">
                Finish: <span className="text-velmora-charcoal">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-5 py-2 border text-sm transition-all',
                      selectedVariant === variant
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                        : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-charcoal'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="text-sm text-velmora-taupe mb-2 block">Quantity</label>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-velmora-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
              className="mb-4"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              {isAdding ? 'Added to Bag!' : 'Add to Bag'}
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-6 text-xs text-velmora-taupe">
              <span>✓ Free Shipping over $75</span>
              <span>✓ 30-Day Returns</span>
              <span>✓ Hypoallergenic</span>
            </div>

            <div className="hairline my-8" />

            {/* Accordions */}
            <div className="space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-velmora-sand">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === accordion.id ? null : accordion.id
                      )
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-velmora-charcoal font-medium">
                      {accordion.title}
                    </span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp className="w-4 h-4 text-velmora-taupe" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-taupe" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-4 text-sm text-velmora-taupe whitespace-pre-line">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal">
              You May Also Like
            </h2>
            <div className="hairline w-16 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetail;
