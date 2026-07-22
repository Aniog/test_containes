import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl">Product not found</h1>
          <Link to="/shop" className="text-[var(--color-gold)] mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordionItems = [
    { 
      id: 'description', 
      title: 'Description', 
      content: product.description 
    },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: 'Our jewelry is crafted from 18K gold-plated sterling silver, ensuring both beauty and durability. To maintain its luster, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.' 
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.' 
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--color-taupe)]">
            <li><Link to="/" className="hover:text-[var(--color-gold)]">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-[var(--color-gold)]">Shop</Link></li>
            <li>/</li>
            <li className="text-[var(--color-charcoal)]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-[var(--color-sand)] overflow-hidden">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-[var(--color-gold)]' 
                      : 'border-transparent hover:border-[var(--color-taupe)]'
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
          <div className="md:sticky md:top-24 h-fit">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-[var(--color-charcoal)]">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < Math.floor(product.rating) ? "var(--color-gold)" : "none"} 
                    stroke="var(--color-gold)" 
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-taupe)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl font-serif">${product.price}</p>

            <p className="mt-6 text-[var(--color-charcoal)]/80 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm tracking-widest uppercase text-[var(--color-taupe)] mb-3">
                Color
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-sm tracking-widest uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                        : 'border-[var(--color-taupe)] text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm tracking-widest uppercase text-[var(--color-taupe)] mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-[var(--color-taupe)]/30 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[var(--color-gold)] transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[var(--color-gold)] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="w-full mt-8 py-4 bg-[var(--color-charcoal)] text-white text-sm tracking-widest uppercase hover:bg-[var(--color-gold)] transition-colors"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-[var(--color-taupe)]/20">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-[var(--color-taupe)]/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm tracking-widest uppercase">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[var(--color-charcoal)]/70 leading-relaxed">
                      {item.content}
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
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}