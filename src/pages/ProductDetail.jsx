import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0] || 'gold');
      setSelectedImage(0);
      setQuantity(1);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="section bg-bg">
        <div className="container mx-auto px-4 md:px-8 text-center py-20">
          <h1 className="font-serif text-3xl text-text mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-accent hover:text-accent-dark transition-colors">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, quantity, selectedVariant);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
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
        <div className="space-y-3">
          <p><strong>Materials:</strong> Premium 18K gold plating over hypoallergenic sterling silver. Crystal accents.</p>
          <p><strong>Care:</strong> {product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p>{product.shipping}</p>
          <p><strong>Returns:</strong> We offer a 30-day return policy for unworn items in original packaging.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-bg">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="container mx-auto px-4 md:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-bg-alt rounded overflow-hidden">
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
                    className={`w-20 h-20 md:w-24 md:h-24 rounded overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index
                        ? 'border-accent'
                        : 'border-transparent hover:border-border'
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
          <div className="flex flex-col">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="font-serif text-2xl md:text-3xl text-text mb-2">
                {product.name.toUpperCase()}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-medium text-text">
                  ${product.price}
                </span>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-accent fill-current'
                            : 'text-border'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-muted">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm text-text-muted mb-3">
                  Finish: <span className="text-text capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-xs font-medium tracking-extra-wide uppercase border transition-all duration-200 ${
                        selectedVariant === variant
                          ? 'border-text bg-text text-white'
                          : 'border-border text-text-muted hover:border-text'
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
              <p className="text-sm text-text-muted mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-text-muted hover:text-text transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-text">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-text-muted hover:text-text transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium tracking-extra-wide uppercase transition-all duration-200 ${
                isAdding
                  ? 'bg-accent-dark text-white'
                  : 'bg-accent text-white hover:bg-accent-dark'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {isAdding ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-border">
              <span className="text-xs text-text-muted">Free Shipping</span>
              <span className="text-xs text-text-muted">30-Day Returns</span>
              <span className="text-xs text-text-muted">Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-border">
                  <button
                    onClick={() => setActiveAccordion(
                      activeAccordion === accordion.id ? null : accordion.id
                    )}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm font-medium text-text">
                      {accordion.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-text-muted transition-transform duration-200 ${
                        activeAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm text-text-muted leading-relaxed">
                      {typeof accordion.content === 'string' ? (
                        <p>{accordion.content}</p>
                      ) : (
                        accordion.content
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section bg-bg-alt">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-text text-center mb-10">
              You May Also Like
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
