import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: 'Our jewelry is crafted with 18K gold plating over sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.' }
  ];

  return (
    <main className="pt-[72px]">
      <div className="container py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-stone" style={{ color: 'var(--color-stone)' }}>
          <Link to="/" className="hover:text-charcoal">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product Main Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div 
              className="aspect-[4/5] overflow-hidden bg-warm-white mb-4"
              style={{ backgroundColor: 'var(--color-warm-white)' }}
            >
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
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                  style={{ borderColor: selectedImage === index ? 'var(--color-gold)' : 'transparent' }}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 
              className="product-name text-xl md:text-2xl mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < product.rating ? 'var(--color-gold)' : 'none'}
                    stroke="var(--color-gold)"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-stone" style={{ color: 'var(--color-stone)' }}>
                {product.reviews} reviews
              </span>
            </div>

            <p 
              className="text-2xl font-serif mb-6"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold)' }}
            >
              ${product.price}
            </p>

            <p className="text-stone leading-relaxed mb-6" style={{ color: 'var(--color-stone)' }}>
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm text-stone mb-2 block" style={{ color: 'var(--color-stone)' }}>
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-sm tracking-wider border transition-colors ${
                      selectedVariant === variant 
                        ? 'bg-charcoal text-cream border-charcoal' 
                        : 'bg-transparent text-charcoal border-border hover:border-charcoal'
                    }`}
                    style={{ 
                      borderColor: selectedVariant === variant ? 'var(--color-charcoal)' : 'var(--color-border)',
                      backgroundColor: selectedVariant === variant ? 'var(--color-charcoal)' : 'transparent',
                      color: selectedVariant === variant ? 'var(--color-cream)' : 'var(--color-charcoal)'
                    }}
                  >
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm text-stone mb-2 block" style={{ color: 'var(--color-stone)' }}>
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border hover:bg-warm-white transition-colors"
                  style={{ borderColor: 'var(--color-border)' }}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border hover:bg-warm-white transition-colors"
                  style={{ borderColor: 'var(--color-border)' }}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="btn-primary w-full mb-4"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t mt-8" style={{ borderColor: 'var(--color-border)' }}>
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-serif text-sm tracking-wider" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
                      {accordion.title.toUpperCase()}
                    </span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-4 text-sm text-stone leading-relaxed" style={{ color: 'var(--color-stone)' }}>
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
          <section className="mt-16 md:mt-24">
            <h2 
              className="font-serif text-2xl md:text-3xl text-center mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
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
    </main>
  );
}