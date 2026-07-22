import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/home/Bestsellers';

const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-velmora-text font-medium">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-velmora-muted" />
        ) : (
          <ChevronDown className="w-5 h-5 text-velmora-muted" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-velmora-muted text-sm leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container py-32 text-center">
        <h1 className="font-serif text-2xl text-velmora-text mb-4">Product Not Found</h1>
        <Link to="/collections" className="text-velmora-gold hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, variant);
  };

  return (
    <div className="pt-20">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-velmora-muted">
            <li><Link to="/" className="hover:text-velmora-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/collections" className="hover:text-velmora-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-text">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-card mb-4 overflow-hidden">
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
                  className={`w-20 h-24 bg-velmora-card overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl text-velmora-text mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}`} 
                  />
                ))}
              </div>
              <span className="text-velmora-muted text-sm">({product.reviews} reviews)</span>
            </div>

            <p className="text-velmora-gold text-2xl mb-6">${product.price}</p>

            <p className="text-velmora-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm text-velmora-muted mb-3">Color</label>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 border text-sm uppercase tracking-wider transition-all duration-300 ${
                      variant === v
                        ? 'border-velmora-gold text-velmora-gold'
                        : 'border-velmora-border text-velmora-muted hover:border-velmora-gold'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm text-velmora-muted mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-velmora-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-velmora-muted hover:text-velmora-gold transition-colors duration-300"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-velmora-text">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-velmora-muted hover:text-velmora-gold transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              variant="primary" 
              size="full" 
              onClick={handleAddToCart}
              className="mb-8"
            >
              Add to Cart
            </Button>

            {/* Accordions */}
            <div className="border-t border-velmora-border">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                {product.description}
                <br /><br />
                Each piece is crafted with care and comes beautifully packaged in our signature box, perfect for gifting or treating yourself.
              </Accordion>
              
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                Made from 18K gold-plated brass with a protective coating to prevent tarnishing. 
                To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. 
                Store in the provided pouch when not in use.
              </Accordion>
              
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                Free worldwide shipping on orders over $100. 
                We offer a 30-day return policy for unworn items in original packaging. 
                Express shipping options available at checkout.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-text mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickAdd={() => {}} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;