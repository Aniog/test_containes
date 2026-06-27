import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="underline" style={{ color: 'var(--color-velmora-gold)' }}>
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: 'This piece is crafted from 18K gold-plated brass, ensuring a luxurious finish that lasts. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.' }
  ];

  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link to="/" className="hover:opacity-70">Home</Link></li>
            <li style={{ color: 'var(--color-velmora-text-muted)' }}>/</li>
            <li><Link to="/shop" className="hover:opacity-70">Shop</Link></li>
            <li style={{ color: 'var(--color-velmora-text-muted)' }}>/</li>
            <li style={{ color: 'var(--color-velmora-text-muted)' }}>{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-cream-dark rounded-lg overflow-hidden mb-4">
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
                  className={`w-20 h-24 rounded overflow-hidden transition-opacity ${
                    selectedImage === index ? 'ring-2' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ ringColor: 'var(--color-velmora-gold)' }}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4" 
                    fill={i < product.rating ? 'var(--color-velmora-gold)' : 'none'}
                    style={{ color: 'var(--color-velmora-gold)' }}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-text-muted">
                {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-2xl mb-6" style={{ color: 'var(--color-velmora-gold-dark)' }}>
              ${product.price}
            </p>

            <p className="text-velmora-text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm tracking-wider mb-3">
                Color: <span className="capitalize font-semibold">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-sm tracking-wider rounded-full border transition-all ${
                      selectedVariant === variant 
                        ? 'border-velmora-gold' 
                        : 'border-velmora-border hover:border-velmora-text-muted'
                    }`}
                    style={selectedVariant === variant ? { 
                      backgroundColor: 'var(--color-velmora-gold)',
                      color: 'white',
                      borderColor: 'var(--color-velmora-gold)'
                    } : {}}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm tracking-wider mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded" style={{ borderColor: 'var(--color-velmora-border)' }}>
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:opacity-70 transition-opacity"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:opacity-70 transition-opacity"
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
              className="w-full py-4 text-sm tracking-widest transition-all hover:opacity-90 mb-4"
              style={{ 
                backgroundColor: 'var(--color-velmora-gold)',
                color: 'white'
              }}
            >
              ADD TO CART
            </button>

            {/* Accordions */}
            <div className="border-t" style={{ borderColor: 'var(--color-velmora-border)' }}>
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b" style={{ borderColor: 'var(--color-velmora-border)' }}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm tracking-wider">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4 text-sm text-velmora-text-muted leading-relaxed">
                      {item.content}
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
            <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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