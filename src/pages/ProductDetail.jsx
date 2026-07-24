import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#E8E2D9]">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-sans text-sm font-medium text-[#2C2824] tracking-wide">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp size={18} strokeWidth={1.5} className="text-[#6B635A]" />
        ) : (
          <ChevronDown size={18} strokeWidth={1.5} className="text-[#6B635A]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-[#6B635A] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function RelatedProducts({ currentProduct }) {
  const relatedProducts = products
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="container">
        <h2 className="font-serif text-2xl text-[#2C2824] mb-8 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-[3/4] bg-[#F5F1EB] overflow-hidden mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="product-name text-xs mb-1">{product.name}</h3>
              <p className="font-sans text-sm text-[#2C2824]">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart, isAdding } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[#2C2824] mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#6B635A]">
            <li>
              <Link to="/" className="hover:text-[#2C2824] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-[#2C2824] transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                to={`/shop?category=${product.category}`}
                className="hover:text-[#2C2824] transition-colors capitalize"
              >
                {product.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#2C2824]">{product.shortName}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#F5F1EB] overflow-hidden mb-4">
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
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[#C9A962]'
                      : 'border-transparent hover:border-[#C9A962]/50'
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
          <div>
            <h1 className="font-serif text-2xl md:text-3xl text-[#2C2824] mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? '#C9A962' : 'none'}
                    stroke="#C9A962"
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B635A]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-[#2C2824] mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-[#6B635A] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#2C2824] mb-3">
                Color: <span className="font-normal text-[#6B635A]">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-sm font-sans tracking-wide border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#2C2824] bg-[#2C2824] text-[#FAF8F5]'
                        : 'border-[#E8E2D9] text-[#6B635A] hover:border-[#2C2824]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#2C2824] mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-[#E8E2D9]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-[#6B635A] hover:text-[#2C2824] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} strokeWidth={2} />
                </button>
                <span className="w-12 text-center text-[#2C2824]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-[#6B635A] hover:text-[#2C2824] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-accent w-full mb-4"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {isAdding === product.id ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                {product.description} Crafted with attention to detail, this piece exemplifies our commitment to quality and timeless design.
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                Made from 18K gold plated brass with genuine crystals. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.
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
        <RelatedProducts currentProduct={product} />
      </div>
    </main>
  );
}