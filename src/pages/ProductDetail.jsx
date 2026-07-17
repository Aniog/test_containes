import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';
import { cn } from '../lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-white mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-light">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const variants = [
    { id: 'gold', name: 'Gold', color: '#C9A962' },
    { id: 'silver', name: 'Silver', color: '#C0C0C0' },
  ];

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'All our jewelry is crafted from 18K gold plating over sterling silver or brass. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping available at checkout.',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/shop" className="text-muted text-sm hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-muted text-sm mx-2">/</span>
          <span className="text-white text-sm capitalize">{product.category}</span>
          <span className="text-muted text-sm mx-2">/</span>
          <span className="text-white text-sm">{product.name}</span>
        </div>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-surface-light overflow-hidden">
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
                    'w-20 h-24 bg-surface-light overflow-hidden border-2 transition-colors',
                    selectedImage === index ? 'border-gold' : 'border-transparent'
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
          <div className="space-y-6">
            {/* Title & Price */}
            <div>
              <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest-plus text-white mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-gold text-2xl font-medium">${product.price}</span>
                <div className="flex items-center gap-1 text-white/50">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-sm">{product.rating}</span>
                  <span className="text-sm">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div>
              <label className="block text-white text-sm uppercase tracking-widest mb-3">
                Color: <span className="text-muted normal-case">{variants.find(v => v.id === selectedVariant)?.name}</span>
              </label>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={cn(
                      'px-4 py-2 border text-sm uppercase tracking-widest transition-all',
                      selectedVariant === variant.id
                        ? 'border-gold text-gold'
                        : 'border-border text-muted hover:border-white/30'
                    )}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-white text-sm uppercase tracking-widest mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-background py-4 uppercase tracking-widest text-sm hover:bg-gold-light transition-all hover:shadow-[0_0_30px_rgba(201,169,0.3)] flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-border pt-6 space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-white uppercase tracking-widest text-sm">
                      {accordion.title}
                    </span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp className="w-5 h-5 text-muted" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted" />
                    )}
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openAccordion === accordion.id ? 'max-h-40 pb-4' : 'max-h-0'
                    )}
                  >
                    <p className="text-white/70 text-sm leading-relaxed">
                      {accordion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;