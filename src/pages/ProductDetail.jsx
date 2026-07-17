import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="section-padding pt-32">
        <div className="container-main text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product not found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-ivory py-4">
        <div className="container-main">
          <nav className="font-sans text-sm text-warm-gray">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="aspect-[4/5] bg-ivory mb-4">
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
                    className={`w-20 h-24 bg-ivory overflow-hidden border-2 transition-colors ${
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

              {/* Price */}
              <p className="font-sans text-xl text-charcoal mt-2">
                ${product.price}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      strokeWidth={1.5}
                      className={i < product.rating ? 'text-gold fill-gold' : 'text-border'}
                    />
                  ))}
                </div>
                <span className="font-sans text-sm text-warm-gray">
                  {product.reviews} reviews
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-warm-gray mt-6 leading-relaxed">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mt-8">
                <label className="font-sans text-sm text-charcoal block mb-3">
                  Color: <span className="text-warm-gray capitalize">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 rounded-sm border font-sans text-sm capitalize transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'border-gold bg-gold text-white'
                          : 'border-border text-charcoal hover:border-gold'
                      }`}
                    >
                      {variant} Tone
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <label className="font-sans text-sm text-charcoal block mb-3">
                  Quantity
                </label>
                <div className="flex items-center border border-border rounded-sm w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} strokeWidth={2} />
                  </button>
                  <span className="px-6 font-sans text-charcoal">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary mt-8"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-16 max-w-2xl">
            {/* Description */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-serif text-lg text-charcoal">Description</span>
                {openAccordion === 'description' ? (
                  <ChevronUp size={20} strokeWidth={1.5} className="text-warm-gray" />
                ) : (
                  <ChevronDown size={20} strokeWidth={1.5} className="text-warm-gray" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === 'description' ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="font-sans text-warm-gray leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Materials & Care */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-serif text-lg text-charcoal">Materials & Care</span>
                {openAccordion === 'materials' ? (
                  <ChevronUp size={20} strokeWidth={1.5} className="text-warm-gray" />
                ) : (
                  <ChevronDown size={20} strokeWidth={1.5} className="text-warm-gray" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === 'materials' ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="font-sans text-warm-gray leading-relaxed">
                  Made with 18K gold plating on sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.
                </p>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-serif text-lg text-charcoal">Shipping & Returns</span>
                {openAccordion === 'shipping' ? (
                  <ChevronUp size={20} strokeWidth={1.5} className="text-warm-gray" />
                ) : (
                  <ChevronDown size={20} strokeWidth={1.5} className="text-warm-gray" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === 'shipping' ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="font-sans text-warm-gray leading-relaxed">
                  Free worldwide shipping on all orders. Orders ship within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging. Contact our team to initiate a return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-ivory">
          <div className="container-main">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showQuickAdd={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;