import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <main className="min-h-screen bg-velmora-cream pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-velmora-taupe">
            <li><Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?category=${product.category}`} className="hover:text-velmora-gold transition-colors capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
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
                  className={`w-20 h-24 bg-velmora-sand overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? 'ring-2 ring-velmora-gold' : 'opacity-60 hover:opacity-100'
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
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl tracking-wider text-velmora-charcoal">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) 
                        ? 'fill-velmora-gold text-velmora-gold' 
                        : 'text-velmora-taupe/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl font-serif text-velmora-charcoal">
              ${product.price}
            </p>

            {/* Description */}
            <p className="mt-6 text-velmora-charcoal/70 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <label className="block text-sm tracking-wider uppercase text-velmora-charcoal/60 mb-3">
                  Finish
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'bg-velmora-charcoal text-velmora-cream'
                          : 'border border-velmora-taupe/30 text-velmora-charcoal hover:border-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm tracking-wider uppercase text-velmora-charcoal/60 mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-taupe/30 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-velmora-charcoal">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full mt-8 btn-primary flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 space-y-0">
              {/* Description */}
              <div className="border-t border-velmora-taupe/20">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-sm tracking-wider uppercase text-velmora-charcoal">Description</span>
                  {openAccordion === 'description' ? (
                    <ChevronUp className="w-5 h-5 text-velmora-taupe" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-velmora-taupe" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === 'description' ? 'max-h-40 pb-4' : 'max-h-0'
                }`}>
                  <p className="text-velmora-charcoal/70 leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Materials & Care */}
              <div className="border-t border-velmora-taupe/20">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-sm tracking-wider uppercase text-velmora-charcoal">Materials & Care</span>
                  {openAccordion === 'materials' ? (
                    <ChevronUp className="w-5 h-5 text-velmora-taupe" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-velmora-taupe" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === 'materials' ? 'max-h-40 pb-4' : 'max-h-0'
                }`}>
                  <div className="text-velmora-charcoal/70 leading-relaxed text-sm space-y-2">
                    <p><strong>Material:</strong> {product.material}</p>
                    <p><strong>Care:</strong> Store in a dry place. Avoid contact with water, perfumes, and cosmetics. Clean gently with a soft cloth.</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="border-t border-b border-velmora-taupe/20">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-sm tracking-wider uppercase text-velmora-charcoal">Shipping & Returns</span>
                  {openAccordion === 'shipping' ? (
                    <ChevronUp className="w-5 h-5 text-velmora-taupe" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-velmora-taupe" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === 'shipping' ? 'max-h-40 pb-4' : 'max-h-0'
                }`}>
                  <div className="text-velmora-charcoal/70 leading-relaxed text-sm space-y-2">
                    <p>Free worldwide shipping on all orders.</p>
                    <p>30-day returns for unworn items in original packaging.</p>
                    <p>Express shipping available at checkout.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-charcoal text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((item) => (
                <Link 
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
                    <img 
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="product-name text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-velmora-charcoal">
                      ${item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}