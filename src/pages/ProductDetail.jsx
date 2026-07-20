import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const AccordionItem = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-divider">
    <button
      className="w-full py-5 flex items-center justify-between text-left"
      onClick={onToggle}
    >
      <span className="text-sm uppercase tracking-[0.1em] text-charcoal">{title}</span>
      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
      <p className="text-taupe text-sm leading-relaxed">{children}</p>
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container py-section-mobile lg:py-section text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="text-gold mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20">
      <div className="container py-section-mobile lg:py-section">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-taupe">
            <li><Link to="/" className="hover:text-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?category=${product.category}`} className="hover:text-charcoal transition-colors capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-white mb-4">
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
                  className={`w-20 h-24 bg-white border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
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
            <h1 className="font-serif text-2xl md:text-3xl text-charcoal uppercase tracking-wider">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-divider"} 
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            {/* Description */}
            <p className="mt-6 text-taupe leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm uppercase tracking-wider text-taupe mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 text-sm uppercase tracking-wider border transition-all ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-divider text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm uppercase tracking-wider text-taupe mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="px-6 text-charcoal">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold hover:bg-gold-hover text-charcoal py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-colors shadow-button hover:shadow-lg"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12">
              <AccordionItem 
                title="Description" 
                isOpen={openAccordion === 'description'}
                onToggle={() => toggleAccordion('description')}
              >
                This exquisite piece is crafted from premium 18K gold-plated materials, designed to add a touch of elegance to any outfit. Perfect for both everyday wear and special occasions.
              </AccordionItem>
              
              <AccordionItem 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'}
                onToggle={() => toggleAccordion('materials')}
              >
                Made with 18K gold plating over sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.
              </AccordionItem>
              
              <AccordionItem 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'}
                onToggle={() => toggleAccordion('shipping')}
              >
                Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping available at checkout.
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} showQuickAdd={false} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;