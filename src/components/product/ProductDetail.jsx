import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedVariant(foundProduct.variants[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-velmora-stone">Loading...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-velmora-stone">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-square overflow-hidden bg-velmora-ivory mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-gold-light'
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

          {/* Right: Product Info */}
          <div>
            <h1 className="product-name text-3xl mb-4">{product.name}</h1>

            {/* Price */}
            <p className="text-2xl text-velmora-charcoal mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-stone">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Short Description */}
            <p className="text-velmora-stone mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-wide transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-stone/30 hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-stone/30 flex items-center justify-center hover:border-velmora-gold transition-colors duration-300"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-stone/30 flex items-center justify-center hover:border-velmora-gold transition-colors duration-300"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-charcoal text-white py-4 text-sm tracking-widest uppercase hover:bg-velmora-gold transition-all duration-500 flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {/* Description */}
              <div className="border-b border-velmora-gold-light/30">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium">Description</span>
                  {expandedAccordion === 'description' ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {expandedAccordion === 'description' && (
                  <div className="pb-4 text-sm text-velmora-stone leading-relaxed">
                    <p>{product.description}</p>
                    <p className="mt-2">Each piece is carefully crafted with attention to detail, ensuring that you receive jewelry that not only looks beautiful but lasts for years to come.</p>
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div className="border-b border-velmora-gold-light/30">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium">Materials & Care</span>
                  {expandedAccordion === 'materials' ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {expandedAccordion === 'materials' && (
                  <div className="pb-4 text-sm text-velmora-stone leading-relaxed">
                    <p className="mb-2"><strong>Materials:</strong> {product.material}</p>
                    <p className="mb-2"><strong>Features:</strong> {product.features.join(', ')}</p>
                    <p className="mt-4"><strong>Care Instructions:</strong></p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Avoid contact with perfumes, lotions, and chemicals</li>
                      <li>Remove before swimming or showering</li>
                      <li>Store in a cool, dry place when not wearing</li>
                      <li>Clean gently with a soft cloth</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-velmora-gold-light/30">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium">Shipping & Returns</span>
                  {expandedAccordion === 'shipping' ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {expandedAccordion === 'shipping' && (
                  <div className="pb-4 text-sm text-velmora-stone leading-relaxed">
                    <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders.</p>
                    <p className="mb-2">Standard delivery: 5-7 business days</p>
                    <p className="mb-4"><strong>Returns:</strong> 30-day hassle-free returns. Item must be in original packaging and unused condition.</p>
                    <p>For more details, visit our <Link to="/shipping" className="text-velmora-gold hover:underline">Shipping & Returns</Link> page.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-serif text-center mb-12">You May Also Like</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group block"
              >
                <div className="aspect-square overflow-hidden bg-velmora-ivory mb-4">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-sm mb-2">{relatedProduct.name}</h3>
                <p className="text-velmora-stone text-sm">${relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
