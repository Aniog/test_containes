import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/home/ProductCard';

const Accordion = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-[#333333]">
    <button
      onClick={onToggle}
      className="w-full py-5 flex items-center justify-between text-left"
    >
      <span className="font-serif text-lg text-[#F5F5F0]">{title}</span>
      {isOpen ? (
        <ChevronUp size={20} strokeWidth={1.5} className="text-[#A8A8A0]" />
      ) : (
        <ChevronDown size={20} strokeWidth={1.5} className="text-[#A8A8A0]" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-40 pb-5' : 'max-h-0'
      }`}
    >
      <p className="text-[#A8A8A0] text-sm leading-relaxed">{children}</p>
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[#F5F5F0] mb-4">Product Not Found</h1>
          <Link to="/collections" className="text-[#C9A962] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-20">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-[#333333]">/</li>
            <li>
              <Link to="/collections" className="text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors">
                Shop
              </Link>
            </li>
            <li className="text-[#333333]">/</li>
            <li className="text-[#F5F5F0]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#1A1A1A] mb-4 overflow-hidden">
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
                  className={`w-20 h-24 bg-[#1A1A1A] overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#C9A962]' : 'border-transparent'
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
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-[#F5F5F0] mb-2">
              {product.name}
            </h1>
            
            {/* Price */}
            <p className="text-2xl text-[#C9A962] font-medium mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#C9A962' : 'transparent'}
                    stroke="#C9A962"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-sm text-[#A8A8A0]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-[#A8A8A0] mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm text-[#A8A8A0] mb-3">
                Finish: <span className="text-[#F5F5F0]">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-sm uppercase tracking-wider border transition-colors ${
                      selectedVariant === variant
                        ? 'border-[#C9A962] text-[#C9A962]'
                        : 'border-[#333333] text-[#A8A8A0] hover:border-[#666]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm text-[#A8A8A0] mb-3">Quantity</label>
              <div className="flex items-center border border-[#333333] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} strokeWidth={2} />
                </button>
                <span className="w-12 text-center text-[#F5F5F0]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingBag size={20} strokeWidth={2} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-[#333333]">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                {product.description}
                <br /><br />
                Each piece is crafted with attention to detail and quality, ensuring you have jewelry that lasts.
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                Made with 18K gold plating on a sterling silver base. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                Free worldwide shipping on orders over $100. We offer a 30-day return policy for unworn items in original packaging. Express shipping available at checkout.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl md:text-3xl text-[#F5F5F0] text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={false} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;