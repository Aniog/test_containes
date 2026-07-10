import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-velmora-charcoal/10">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-serif text-lg text-velmora-charcoal">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-velmora-charcoal/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-velmora-charcoal/60" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-velmora-charcoal/70 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function RelatedProducts({ currentProduct }) {
  const related = products
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  return (
    <section className="py-16 bg-velmora-creamDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-velmora-charcoal text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-velmora-cream">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-serif text-xs uppercase tracking-wider text-velmora-charcoal">
                  {product.name}
                </h3>
                <p className="mt-1 text-velmora-gold text-sm">${product.price}</p>
              </div>
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
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal">Product not found</h1>
          <Link to="/shop" className="text-velmora-gold mt-4 inline-block">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-velmora-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-velmora-charcoal/60">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] overflow-hidden bg-velmora-creamDark">
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
                  className={`w-20 h-24 overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? 'ring-2 ring-velmora-gold'
                      : 'opacity-60 hover:opacity-100'
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
            <h1 className="font-serif text-3xl lg:text-4xl text-velmora-charcoal uppercase tracking-wider">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-gray-light'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-charcoal/60">
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl text-velmora-gold font-sans">${product.price}</p>

            {/* Description */}
            <p className="mt-6 text-velmora-charcoal/70 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm text-velmora-charcoal/80 mb-3">
                Metal: <span className="font-semibold capitalize">{selectedVariant} Gold</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-wider transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-charcoal/20 text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm text-velmora-charcoal/80 mb-3">Quantity</label>
              <div className="flex items-center border border-velmora-charcoal/20 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-velmora-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-velmora-gold text-white font-sans text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              ADD TO CART
            </button>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                {product.description}
                Each piece is crafted with attention to detail and made to last. Our demi-fine jewelry combines the beauty of fine materials with accessible luxury.
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                Made with 18K gold plating on sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.
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
      </div>

      {/* Related Products */}
      <RelatedProducts currentProduct={product} />
    </div>
  );
}