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
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-serif text-2xl text-[#F5F5F0]">Product not found</h1>
        <Link to="/shop" className="text-[#C9A962] mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#A8A8A0]">
            <li><Link to="/" className="hover:text-[#C9A962]">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-[#C9A962]">Shop</Link></li>
            <li>/</li>
            <li className="text-[#F5F5F0]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-[#242424] mb-4">
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
                  className={`w-20 h-20 bg-[#242424] border-2 transition-colors duration-300 ${
                    selectedImage === index ? 'border-[#C9A962]' : 'border-transparent'
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
          <div className="lg:pl-8">
            <h1 className="font-serif text-2xl md:text-3xl text-[#F5F5F0] tracking-[0.15em] uppercase">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#C9A962] text-[#C9A962]'
                        : 'text-[#333333]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#A8A8A0]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl text-[#C9A962] font-medium">
              ${product.price}
            </p>

            <p className="mt-6 text-[#A8A8A0] leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm text-[#A8A8A0] mb-3">
                Finish: <span className="text-[#F5F5F0]">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm border transition-colors duration-300 ${
                      selectedVariant === variant
                        ? 'border-[#C9A962] text-[#C9A962]'
                        : 'border-[#333333] text-[#A8A8A0] hover:border-[#C9A962]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm text-[#A8A8A0] mb-3">Quantity</label>
              <div className="flex items-center border border-[#333333] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-[#F5F5F0]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-[#C9A962] text-[#0D0D0D] text-sm font-medium uppercase tracking-[0.15em] hover:bg-[#D4B978] transition-colors duration-300"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-[#333333]">
              {/* Description */}
              <div className="border-b border-[#333333]">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-sm text-[#F5F5F0] uppercase tracking-wider">Description</span>
                  {openAccordion === 'description' ? (
                    <ChevronUp className="w-4 h-4 text-[#A8A8A0]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#A8A8A0]" />
                  )}
                </button>
                {openAccordion === 'description' && (
                  <div className="pb-4 text-sm text-[#A8A8A0] leading-relaxed">
                    {product.description}
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div className="border-b border-[#333333]">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-sm text-[#F5F5F0] uppercase tracking-wider">Materials & Care</span>
                  {openAccordion === 'materials' ? (
                    <ChevronUp className="w-4 h-4 text-[#A8A8A0]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#A8A8A0]" />
                  )}
                </button>
                {openAccordion === 'materials' && (
                  <div className="pb-4 text-sm text-[#A8A8A0] leading-relaxed">
                    <p>Material: {product.material}</p>
                    <p className="mt-2">Care: Store in a cool, dry place. Avoid contact with water, perfumes, and cosmetics. Clean gently with a soft cloth.</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-[#333333]">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-sm text-[#F5F5F0] uppercase tracking-wider">Shipping & Returns</span>
                  {openAccordion === 'shipping' ? (
                    <ChevronUp className="w-4 h-4 text-[#A8A8A0]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#A8A8A0]" />
                  )}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pb-4 text-sm text-[#A8A8A0] leading-relaxed">
                    <p>Free worldwide shipping on all orders.</p>
                    <p className="mt-2">30-day returns. Items must be unworn and in original packaging.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl md:text-3xl text-[#F5F5F0] text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
