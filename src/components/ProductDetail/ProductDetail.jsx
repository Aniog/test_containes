import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import products from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
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
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/" className="text-sm text-velmora-text-secondary hover:text-velmora-gold">Home</Link>
          <span className="text-sm text-velmora-text-secondary mx-2">/</span>
          <Link to="/shop" className="text-sm text-velmora-text-secondary hover:text-velmora-gold">Shop</Link>
          <span className="text-sm text-velmora-text-secondary mx-2">/</span>
          <span className="text-sm text-velmora-text">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[3/4] bg-velmora-cream mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-light tracking-[0.15em] uppercase text-velmora-text mb-4">
              {product.name}
            </h1>

            <p className="text-2xl text-velmora-gold font-light mb-6">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-velmora-gold">★</span>
                ))}
              </div>
              <span className="text-sm text-velmora-text-secondary">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-velmora-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm tracking-wider uppercase text-velmora-text mb-3">
                Material
              </label>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm tracking-wider uppercase transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-velmora-gold text-white border-velmora-gold'
                        : 'border-velmora-border text-velmora-text hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm tracking-wider uppercase text-velmora-text mb-3">
                Quantity
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-velmora-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-velmora-cream transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-2 text-center min-w-[60px]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-velmora-cream transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold hover:bg-velmora-gold-hover text-white py-4 tracking-[0.2em] text-sm uppercase transition-all duration-300 mb-8"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-border">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
                <div key={section} className="border-b border-velmora-border">
                  <button
                    onClick={() => toggleAccordion(section)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-serif text-sm tracking-wider uppercase text-velmora-text">
                      {section}
                    </span>
                    {expandedAccordion === section ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  {expandedAccordion === section && (
                    <div className="pb-4 text-sm text-velmora-text-secondary leading-relaxed">
                      {section === 'Description' && (
                        <p>
                          {product.name} - {product.description}. This exquisite piece embodies
                          quiet luxury and timeless elegance. Crafted with meticulous attention
                          to detail, it's designed to be treasured for years to come.
                        </p>
                      )}
                      {section === 'Materials & Care' && (
                        <div>
                          <p className="mb-2"><strong>Materials:</strong> 18K Gold Plated, Hypoallergenic</p>
                          <p className="mb-2"><strong>Care:</strong> Avoid contact with water, perfume, and chemicals. Store in a cool, dry place.</p>
                          <p>Clean gently with a soft cloth to maintain shine.</p>
                        </div>
                      )}
                      {section === 'Shipping & Returns' && (
                        <div>
                          <p className="mb-2">Free worldwide shipping on all orders.</p>
                          <p className="mb-2">30-day return policy. Items must be unworn and in original packaging.</p>
                          <p>Returns are processed within 5-7 business days.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-serif text-3xl font-light tracking-wider text-velmora-text mb-12 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
              <Link key={related.id} to={`/product/${related.id}`}>
                <div className="aspect-[3/4] bg-velmora-cream mb-3 overflow-hidden">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-velmora-text">
                  {related.name}
                </h3>
                <p className="text-velmora-gold text-sm mt-1">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
