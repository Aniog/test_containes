import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-champagne hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
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
      content: 'All our jewelry is crafted from premium 18K gold plating on sterling silver or brass. To maintain the beauty of your pieces, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.'
    }
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-content mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-stone">
          <Link to="/" className="hover:text-charcoal">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-ivory overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-ivory overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-champagne' : 'border-transparent'
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
          <div className="lg:pl-8">
            <h1 className="product-name text-lg text-charcoal mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < product.rating ? 'text-champagne fill-champagne' : 'text-light-stone'}`}
                  />
                ))}
              </div>
              <span className="text-stone text-sm">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-charcoal mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-stone leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm text-charcoal mb-3">Metal Tone</label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-wide transition-colors ${
                      selectedVariant === variant
                        ? 'border-champagne bg-champagne text-charcoal'
                        : 'border-light-stone text-stone hover:border-champagne'
                    }`}
                  >
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm text-charcoal mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-light-stone">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-light-stone transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-charcoal">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-light-stone transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-champagne text-charcoal font-medium text-sm tracking-widest hover:bg-soft-gold transition-colors flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-light-stone">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-light-stone">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-charcoal">{accordion.title}</span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp className="w-5 h-5 text-stone" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-4 text-stone leading-relaxed">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-3xl text-charcoal mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} index={0} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}