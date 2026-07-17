import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const Accordion = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-pebble">
    <button
      onClick={onToggle}
      className="w-full py-5 flex items-center justify-between text-left"
    >
      <span className="font-medium text-warm-black">{title}</span>
      {isOpen ? (
        <ChevronUp size={20} strokeWidth={1.5} className="text-stone" />
      ) : (
        <ChevronDown size={20} strokeWidth={1.5} className="text-stone" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-5' : 'max-h-0'
      }`}
    >
      <p className="text-stone leading-relaxed">{children}</p>
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-warm-black mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="text-champagne hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.imageHover].filter(Boolean);

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-stone">
            <li>
              <Link to="/" className="hover:text-champagne transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-champagne transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-mist overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-mist overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-champagne'
                      : 'border-transparent hover:border-pebble'
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
            <h1 className="font-serif text-2xl lg:text-3xl tracking-wide text-warm-black uppercase mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    strokeWidth={1.5}
                    className={
                      i < product.rating
                        ? 'text-champagne fill-champagne'
                        : 'text-pebble'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-stone">
                {product.reviews} reviews
              </span>
            </div>

            <p className="text-2xl font-medium text-warm-black mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="text-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-warm-black mb-3">
                Metal Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 text-sm uppercase tracking-wider border transition-colors ${
                      selectedVariant === variant
                        ? 'border-champagne bg-champagne text-white'
                        : 'border-pebble text-charcoal hover:border-champagne'
                    }`}
                  >
                    {variant} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-warm-black mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-pebble">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-mist transition-colors"
                  >
                    <Minus size={18} strokeWidth={1.5} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-mist transition-colors"
                  >
                    <Plus size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full h-14 bg-champagne text-white font-medium text-sm uppercase tracking-wider hover:bg-antique-gold transition-colors duration-200 mb-4"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() =>
                  setOpenAccordion(
                    openAccordion === 'description' ? null : 'description'
                  )
                }
              >
                Crafted with precision and care, this piece is made from
                premium 18K gold-plated materials with hypoallergenic
                properties. Perfect for everyday wear or special occasions.
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() =>
                  setOpenAccordion(
                    openAccordion === 'materials' ? null : 'materials'
                  )
                }
              >
                18K gold plating over sterling silver base. To maintain
                longevity, avoid contact with water, perfumes, and lotions.
                Store in a dry place and clean gently with a soft cloth.
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() =>
                  setOpenAccordion(
                    openAccordion === 'shipping' ? null : 'shipping'
                  )
                }
              >
                Free worldwide shipping on orders over $100. Express shipping
                available at checkout. 30-day returns for unworn items in
                original packaging. International duties may apply.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 lg:mt-24">
          <h2 className="font-serif text-2xl lg:text-3xl text-warm-black mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;