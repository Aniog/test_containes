import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-sm uppercase tracking-widest text-charcoal">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-40 pb-5' : 'max-h-0')}>
        <p className="text-charcoal-light text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-24 text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold hover:underline">Back to shop</Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="container-main py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-charcoal-light">
              <li><Link to="/" className="hover:text-charcoal">Home</Link></li>
              <li>/</li>
              <li><Link to="/shop" className="hover:text-charcoal">Shop</Link></li>
              <li>/</li>
              <li className="text-charcoal">{product.name}</li>
            </ol>
          </nav>

          {/* Product Main */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-cream-dark">
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
                    className={cn(
                      'w-20 h-24 bg-cream-dark border-2 transition-colors',
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
            <div className="lg:pl-8">
              <h1 className="font-serif text-2xl md:text-h2 text-charcoal mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        'w-4 h-4', 
                        i < product.rating ? 'text-gold fill-gold' : 'text-border'
                      )} 
                    />
                  ))}
                </div>
                <span className="text-charcoal-light text-sm">({product.reviews} reviews)</span>
              </div>

              <p className="font-serif text-2xl text-charcoal mb-6">${product.price}</p>

              <p className="text-charcoal-light leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant Selector */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <label className="block font-sans text-xs uppercase tracking-widest text-charcoal-light mb-3">
                    Finish
                  </label>
                  <div className="flex gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={cn(
                          'px-5 py-2 border text-sm uppercase tracking-widest transition-all',
                          selectedVariant === variant 
                            ? 'border-charcoal bg-charcoal text-cream' 
                            : 'border-border text-charcoal hover:border-charcoal'
                        )}
                      >
                        {variant} Tone
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="block font-sans text-xs uppercase tracking-widest text-charcoal-light mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center hover:bg-cream-dark transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-sans">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center hover:bg-cream-dark transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button 
                onClick={handleAddToCart}
                variant="primary" 
                className="w-full mb-4"
              >
                Add to Cart
              </Button>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion
                  title="Description"
                  isOpen={openAccordion === 'description'}
                  onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
                >
                  {product.description}
                </Accordion>
                <Accordion
                  title="Materials & Care"
                  isOpen={openAccordion === 'materials'}
                  onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
                >
                  Materials: {product.materials}<br />
                  Care: {product.care}
                </Accordion>
                <Accordion
                  title="Shipping & Returns"
                  isOpen={openAccordion === 'shipping'}
                  onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                >
                  {product.shipping}
                </Accordion>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16 md:mt-24">
              <h2 className="font-serif text-2xl md:text-h3 text-charcoal mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}