import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from '../product/ProductCard';

const Accordion = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-velmora-border">
    <button
      onClick={onToggle}
      className="w-full py-4 flex items-center justify-between text-left"
    >
      <span className="font-medium text-velmora-charcoal">{title}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-velmora-warm-gray" strokeWidth={1.5} />
      ) : (
        <ChevronDown className="w-5 h-5 text-velmora-warm-gray" strokeWidth={1.5} />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-40 pb-4' : 'max-h-0'
      }`}
    >
      <p className="text-velmora-warm-gray text-sm leading-relaxed">{children}</p>
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
          <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
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
    <div className="min-h-screen bg-velmora-cream pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-velmora-warm-gray">
            <li><Link to="/" className="hover:text-velmora-charcoal">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-charcoal">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?category=${product.category}`} className="hover:text-velmora-charcoal capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-velmora-light-gray overflow-hidden">
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
                  className={`w-20 h-24 bg-velmora-light-gray overflow-hidden transition-all ${
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
          <div className="lg:pl-4">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.1em] text-velmora-charcoal mb-2">
              {product.name}
            </h1>
            
            {/* Price */}
            <p className="text-xl font-medium text-velmora-charcoal mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-border'
                    }`}
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-velmora-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-velmora-charcoal mb-3">
                Finish: <span className="font-normal text-velmora-warm-gray">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-sm border transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-charcoal'
                        : 'border-velmora-border text-velmora-warm-gray hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-velmora-charcoal mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="px-6 text-velmora-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-velmora-charcoal py-4 font-medium hover:bg-velmora-gold-light transition-colors mb-4"
            >
              Add to Cart
            </button>

            {/* Material Info */}
            <p className="text-sm text-velmora-warm-gray text-center">
              Material: {product.material}
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-2xl mx-auto mb-16">
          <Accordion
            title="Description"
            isOpen={openAccordion === 'description'}
            onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
          >
            {product.description}
            <br /><br />
            Each piece is crafted with attention to detail and packaged in our signature velvet pouch, perfect for gifting or personal use.
          </Accordion>
          
          <Accordion
            title="Materials & Care"
            isOpen={openAccordion === 'materials'}
            onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
          >
            Our jewelry is crafted from 18K gold plated brass, ensuring a luxurious look with lasting durability. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.
          </Accordion>
          
          <Accordion
            title="Shipping & Returns"
            isOpen={openAccordion === 'shipping'}
            onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
          >
            We offer free worldwide shipping on all orders. Orders are processed within 1-2 business days. We provide a 30-day return policy for unworn items in original packaging. Simply contact our team to initiate a return.
          </Accordion>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showQuickAdd={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;