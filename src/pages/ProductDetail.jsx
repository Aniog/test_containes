import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductBySlug, getRelatedProducts } from '@/data/products';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-linen">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-velvet">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-mocha transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-mocha leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-cream rounded overflow-hidden mb-3">
        <img
          src={product.images[0].primary}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[0].secondary ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {product.images[0].secondary && (
          <img
            src={product.images[0].secondary}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
      <h3 className="font-serif text-product text-velvet text-sm mb-1">
        {product.name}
      </h3>
      <p className="text-mocha">${product.price}</p>
    </Link>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id, 4);
  const { addToCart, isLoading } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImage(0);
      setOpenAccordion('description');
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velvet mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 md:pt-22">
      {/* Breadcrumb */}
      <div className="container-main py-4">
        <nav className="flex items-center gap-2 text-sm text-taupe">
          <Link to="/" className="hover:text-velvet transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-velvet transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-velvet">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container-main pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-cream rounded overflow-hidden">
              <img
                src={product.images[0][activeImage === 0 ? 'primary' : 'secondary'] || product.images[0].primary}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images[0].secondary && (
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveImage(0)}
                  className={`w-20 h-24 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === 0 ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    src={product.images[0].primary}
                    alt={`${product.name} view 1`}
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setActiveImage(1)}
                  className={`w-20 h-24 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === 1 ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    src={product.images[0].secondary}
                    alt={`${product.name} view 2`}
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-24 md:self-start">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="font-serif text-product text-velvet mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-medium text-velvet mb-3">${product.price}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'star-filled fill-current'
                          : 'star-empty'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-taupe">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-mocha leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm text-velvet mb-3">
                  Finish: <span className="capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`pill-btn capitalize ${
                        selectedVariant === variant ? 'active' : ''
                      }`}
                    >
                      {variant} {variant === 'gold' ? '✨' : '✨'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm text-velvet mb-3">Quantity</p>
              <div className="flex items-center border border-linen rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-mocha hover:text-velvet transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-velvet min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-mocha hover:text-velvet transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                {isLoading ? 'Adding...' : 'Add to Bag'}
              </button>
              <button
                className="p-4 border border-linen rounded hover:border-mocha transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5 text-mocha" />
              </button>
            </div>

            {/* Accordions */}
            <div className="divide-y divide-linen">
              <AccordionItem
                title="Description"
                isOpen={openAccordion === 'description'}
                onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                {product.description}
              </AccordionItem>
              <AccordionItem
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onClick={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                <strong>Materials:</strong> {product.materials}<br /><br />
                <strong>Care Instructions:</strong> {product.care}
              </AccordionItem>
              <AccordionItem
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                <strong>Shipping:</strong> Free worldwide shipping on orders over $75. Standard delivery 5-7 business days.<br /><br />
                <strong>Returns:</strong> 30-day returns. Items must be unworn and in original packaging.
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-cream py-16 md:py-24">
          <div className="container-main">
            <h2 className="font-serif text-section text-velvet text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
