import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';
import Footer from '../components/layout/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="container-custom py-8 md:py-12">
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

        {/* Product Main Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-velmora-light-gray">
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
                  className={`w-20 h-24 bg-velmora-light-gray ${
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
          <div className="md:sticky md:top-24 h-fit">
            <h1 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-light-gray'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-velmora-charcoal mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-velmora-warm-gray leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm text-velmora-warm-gray mb-2">
                Finish: <span className="text-velmora-charcoal">{selectedVariant}</span>
              </label>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-light-gray text-velmora-warm-gray hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm text-velmora-warm-gray mb-2">Quantity</label>
              <div className="flex items-center border border-velmora-light-gray w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velmora-light-gray transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velmora-light-gray transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-charcoal text-white py-4 uppercase tracking-widest text-sm hover:bg-velmora-gold transition-colors duration-300 flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag className="w-5 h-5" />
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
          <div className="border-t border-velmora-light-gray">
            {/* Description */}
            <div className="border-b border-velmora-light-gray">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-medium text-velmora-charcoal">Description</span>
                {openAccordion === 'description' ? (
                  <ChevronUp className="w-5 h-5 text-velmora-warm-gray" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-velmora-warm-gray" />
                )}
              </button>
              {openAccordion === 'description' && (
                <div className="pb-4 text-velmora-warm-gray leading-relaxed">
                  {product.description}
                </div>
              )}
            </div>

            {/* Materials & Care */}
            <div className="border-b border-velmora-light-gray">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-medium text-velmora-charcoal">Materials & Care</span>
                {openAccordion === 'materials' ? (
                  <ChevronUp className="w-5 h-5 text-velmora-warm-gray" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-velmora-warm-gray" />
                )}
              </button>
              {openAccordion === 'materials' && (
                <div className="pb-4 text-velmora-warm-gray leading-relaxed">
                  <p className="mb-2">Made with {product.material}.</p>
                  <p className="mb-2">To maintain the beauty of your jewelry:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Avoid contact with water, perfume, and lotions</li>
                    <li>Store in a cool, dry place</li>
                    <li>Clean gently with a soft cloth</li>
                    <li>Remove before sleeping or exercising</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Shipping & Returns */}
            <div className="border-b border-velmora-light-gray">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-medium text-velmora-charcoal">Shipping & Returns</span>
                {openAccordion === 'shipping' ? (
                  <ChevronUp className="w-5 h-5 text-velmora-warm-gray" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-velmora-warm-gray" />
                )}
              </button>
              {openAccordion === 'shipping' && (
                <div className="pb-4 text-velmora-warm-gray leading-relaxed">
                  <p className="mb-2">Free worldwide shipping on all orders.</p>
                  <p className="mb-2">Orders are processed within 1-2 business days.</p>
                  <p className="mb-2">Free returns within 30 days of delivery.</p>
                  <p>Express shipping options available at checkout.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;