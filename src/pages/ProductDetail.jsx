import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Heart, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const found = products.find((p) => p.id === parseInt(id));
    setProduct(found);
    if (found) {
      setSelectedVariant(found.variants[0]);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-800 mb-4">Product not found</h1>
          <Link to="/collection" className="btn-outline text-xs">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.shortDescription },
    { id: 'materials', title: 'Materials & Care', content: (
      <div className="space-y-3">
        <div>
          <h4 className="font-sans text-xs tracking-wider uppercase text-charcoal-500 mb-2">Details</h4>
          <ul className="space-y-1.5">
            {product.details.map((detail, i) => (
              <li key={i} className="text-sm text-charcoal-600 flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-3 border-t border-charcoal-100">
          <h4 className="font-sans text-xs tracking-wider uppercase text-charcoal-500 mb-2">Care Instructions</h4>
          <p className="text-sm text-charcoal-600">{product.care}</p>
        </div>
      </div>
    )},
    { id: 'shipping', title: 'Shipping & Returns', content: (
      <div className="space-y-4 text-sm text-charcoal-600">
        <p><strong className="text-charcoal-800">Free Shipping:</strong> On all orders over $50</p>
        <p><strong className="text-charcoal-800">Standard Delivery:</strong> 5-7 business days</p>
        <p><strong className="text-charcoal-800">Express Delivery:</strong> 2-3 business days (additional $10)</p>
        <p><strong className="text-charcoal-800">Returns:</strong> 30-day hassle-free returns. Items must be unworn with original packaging.</p>
      </div>
    )},
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs text-charcoal-500">
          <Link to="/" className="hover:text-charcoal-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-charcoal-800 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-800">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-cream-100 overflow-hidden">
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
                  className={`w-20 h-20 border-2 overflow-hidden transition-all ${
                    selectedImage === index ? 'border-gold-500' : 'border-transparent'
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
          <div className="lg:pt-4">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="font-serif text-2xl sm:text-3xl text-charcoal-800 mb-2 product-name">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-serif text-2xl text-charcoal-800">${product.price}</span>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-gold-500 fill-gold-500'
                            : 'text-charcoal-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-charcoal-500">({product.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-sm text-charcoal-600">{product.description}</p>
            </div>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="font-sans text-xs tracking-wider uppercase text-charcoal-600 mb-3 block">
                  Finish: <span className="text-charcoal-800">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 border font-sans text-xs tracking-wider transition-all ${
                        selectedVariant === variant
                          ? 'border-charcoal-800 bg-charcoal-800 text-cream-50'
                          : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="font-sans text-xs tracking-wider uppercase text-charcoal-600 mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-charcoal-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-sans text-sm font-medium min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 font-sans text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                  isAdded
                    ? 'bg-green-600 text-cream-50'
                    : 'bg-charcoal-800 text-cream-50 hover:bg-charcoal-700'
                }`}
              >
                {isAdded ? 'Added to Bag!' : 'Add to Bag'}
              </button>
              <button
                className="p-4 border border-charcoal-200 text-charcoal-500 hover:text-charcoal-800 hover:border-charcoal-400 transition-all"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="p-4 border border-charcoal-200 text-charcoal-500 hover:text-charcoal-800 hover:border-charcoal-400 transition-all"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 py-4 border-t border-b border-charcoal-100">
              <span className="text-xs text-charcoal-500 flex items-center gap-1">
                <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                Free Shipping
              </span>
              <span className="text-xs text-charcoal-500 flex items-center gap-1">
                <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                30-Day Returns
              </span>
              <span className="text-xs text-charcoal-500 flex items-center gap-1">
                <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                Hypoallergenic
              </span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-12 max-w-2xl">
          {accordions.map((accordion) => (
            <div key={accordion.id} className="border-b border-charcoal-100">
              <button
                onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-sans text-sm tracking-wider uppercase text-charcoal-800">
                  {accordion.title}
                </span>
                {openAccordion === accordion.id ? (
                  <ChevronUp className="w-5 h-5 text-charcoal-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-charcoal-500" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === accordion.id ? 'max-h-[500px] pb-6' : 'max-h-0'
                }`}
              >
                {typeof accordion.content === 'string' ? (
                  <p className="text-sm text-charcoal-600 leading-relaxed">{accordion.content}</p>
                ) : (
                  accordion.content
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* You May Also Like */}
      <section className="section-padding bg-cream-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-800">
              You May Also Love
            </h2>
            <div className="w-16 h-px bg-gold-500 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
