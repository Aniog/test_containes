import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, ShoppingBag, Heart, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0] || 'Gold');
    }
    setSelectedImage(0);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container text-center">
          <h1 className="mb-4">Product Not Found</h1>
          <p className="text-slate mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, selectedVariant, quantity);
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };

  const accordions = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      <div className="container">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-slate hover:text-gold transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Shop</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-5 aspect-square bg-cream rounded border border-sand overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded border overflow-hidden transition-all ${
                    selectedImage === index
                      ? 'border-gold ring-1 ring-gold'
                      : 'border-sand hover:border-stone'
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

          <div>
            <div className="mb-6">
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-gold text-white text-xs uppercase tracking-wide mb-3">
                  {product.badge}
                </span>
              )}
              <h1 className="text-charcoal mb-3">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold fill-gold'
                          : 'text-sand'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="text-2xl font-medium text-charcoal">${product.price.toFixed(2)}</p>
            </div>

            <div className="divider mb-6" />

            <p className="text-slate leading-relaxed mb-6">
              {product.description}
            </p>

            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-charcoal mb-3">
                  Finish: <span className="font-normal text-slate">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-sm border rounded-sm transition-all ${
                        selectedVariant === variant
                          ? 'bg-gold border-gold text-white'
                          : 'bg-transparent border-sand text-charcoal hover:border-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <p className="text-sm font-medium text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-sand rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-slate hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 py-3 text-charcoal font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-slate hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="flex-1 btn-primary flex items-center justify-center gap-3"
              >
                {isAdding ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>
              <button
                className="p-4 border border-sand rounded-sm text-slate hover:text-gold hover:border-gold transition-all"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="divider mb-8" />

            <div className="space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-sand">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === accordion.id ? null : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-charcoal">{accordion.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate transition-transform duration-300 ${
                        activeAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-slate text-sm leading-relaxed whitespace-pre-line">
                      {accordion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-12">
              <h2 className="mb-3">You May Also Like</h2>
              <p className="text-slate">Complete your collection</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
