import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const Accordion = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-velmora-taupe/20">
    <button
      onClick={onToggle}
      className="w-full py-4 flex items-center justify-between text-left"
    >
      <span className="font-serif text-lg">{title}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-velmora-taupe" />
      ) : (
        <ChevronDown className="w-5 h-5 text-velmora-taupe" />
      )}
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-40 pb-4' : 'max-h-0'
      }`}
    >
      <p className="text-velmora-charcoal/70 text-sm leading-relaxed">
        {children}
      </p>
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-sand mb-4">
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
                  className={`w-20 h-24 bg-velmora-sand ${
                    selectedImage === index ? 'ring-2 ring-velmora-gold' : ''
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
            <h1 className="font-serif text-3xl lg:text-4xl uppercase tracking-wider mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-taupe'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-velmora-charcoal/70 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm uppercase tracking-widest text-velmora-taupe mb-3">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm uppercase tracking-widest border transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-taupe/50 text-velmora-charcoal hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm uppercase tracking-widest text-velmora-taupe mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-taupe/50 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-2 border-x border-velmora-taupe/50">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full btn-primary mb-4"
            >
              Add to Cart
            </button>

            {/* Material Info */}
            <p className="text-sm text-velmora-taupe mb-8">
              Material: {product.material}
            </p>

            {/* Accordions */}
            <div className="border-t border-velmora-taupe/20">
              <Accordion 
                title="Description" 
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                {product.description}
                <br /><br />
                Each piece is crafted with attention to detail and designed to be worn and treasured for years to come.
              </Accordion>
              
              <Accordion 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                Made from 18K gold plated on sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.
              </Accordion>
              
              <Accordion 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                Free worldwide shipping on orders over $100. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-serif text-3xl text-center mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;