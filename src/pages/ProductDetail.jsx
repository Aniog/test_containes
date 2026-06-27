import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants.includes('gold') ? 'gold' : product.variants[0]);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);
  const images = [product.image, product.hoverImage];

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `Materials: ${product.material}\n\nCare Instructions:\n• Store in a cool, dry place\n• Clean with a soft jewelry cloth\n• Avoid contact with water and perfumes\n• Remove before swimming or exercising`
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Shipping:\n• Free worldwide shipping on all orders\n• Standard delivery: 5-7 business days\n• Express delivery: 2-3 business days\n\nReturns:\n• 30-day return policy\n• Items must be unworn and in original packaging\n• Free return shipping on all orders`
    }
  ];

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-wide py-4 border-b border-border">
        <nav className="flex items-center gap-2 text-sm text-warm-gray">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="py-8 md:py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-ivory overflow-hidden">
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 bg-ivory overflow-hidden border-2 transition-colors ${
                      activeImage === index ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              {/* Badge */}
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-charcoal text-white text-xs tracking-wider uppercase mb-4">
                  {product.badge}
                </span>
              )}

              {/* Title */}
              <h1 className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}
                    />
                  ))}
                </div>
                <span className="text-sm text-warm-gray">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-2xl font-medium text-charcoal mb-6">
                ${product.price}
              </p>

              {/* Description */}
              <p className="text-warm-gray leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant Selector */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-charcoal mb-3">
                    Finish: <span className="capitalize">{selectedVariant}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-5 py-2 text-xs font-medium tracking-wider uppercase border transition-colors ${
                          selectedVariant === variant
                            ? 'border-gold bg-gold text-white'
                            : 'border-border text-charcoal hover:border-gold'
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
                <p className="text-sm font-medium text-charcoal mb-3">Quantity</p>
                <div className="flex items-center border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-ivory transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-3 text-center font-medium min-w-[60px]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-ivory transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary mb-4"
              >
                Add to Bag
              </button>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 py-6 border-t border-b border-border text-xs text-warm-gray">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  In Stock
                </span>
                <span>Free Shipping</span>
                <span>30-Day Returns</span>
              </div>

              {/* Accordions */}
              <div className="mt-6">
                {accordions.map((accordion) => (
                  <div key={accordion.id} className="border-b border-border">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="font-medium text-charcoal">{accordion.title}</span>
                      {openAccordion === accordion.id ? (
                        <ChevronUp size={18} className="text-warm-gray" />
                      ) : (
                        <ChevronDown size={18} className="text-warm-gray" />
                      )}
                    </button>
                    {openAccordion === accordion.id && (
                      <div className="pb-4 text-sm text-warm-gray whitespace-pre-line animate-fade-in">
                        {accordion.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-wide">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
