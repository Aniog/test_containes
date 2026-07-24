import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import { Plus, Minus, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-velmora-gold hover:underline">
          Return to Shop
        </Link>
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
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-velmora-stone mb-8">
        <Link to="/" className="hover:text-velmora-gold">Home</Link>
        <ChevronRight size={16} />
        <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
        <ChevronRight size={16} />
        <span className="text-velmora-charcoal">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-lg shadow-premium mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index
                    ? 'border-velmora-gold'
                    : 'border-transparent'
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
        <div>
          <h1 className="product-name text-3xl mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-medium">${product.price}</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-sm text-velmora-stone ml-2">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="text-velmora-charcoal/80 mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <label className="text-sm uppercase tracking-wider mb-3 block">
                Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border-2 uppercase text-sm tracking-wider ${
                      selectedVariant === variant
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-ivory'
                        : 'border-velmora-sand hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <label className="text-sm uppercase tracking-wider mb-3 block">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-velmora-sand hover:border-velmora-charcoal"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-velmora-sand hover:border-velmora-charcoal"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-charcoal text-velmora-ivory py-4 uppercase tracking-wider text-sm hover:bg-velmora-gold transition-colors mb-8"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4">
            {/* Description */}
            <div className="border-t border-velmora-sand">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="uppercase tracking-wider text-sm">Description</span>
                <span className="text-velmora-gold">
                  {activeAccordion === 'description' ? '−' : '+'}
                </span>
              </button>
              {activeAccordion === 'description' && (
                <div className="pb-4 text-sm text-velmora-charcoal/80">
                  <p>
                    Each {product.name} is crafted with meticulous attention to detail, 
                    featuring {product.material} for a luxurious finish that lasts. 
                    Our demi-fine jewelry combines affordability with exceptional quality, 
                    making it perfect for everyday wear or special occasions.
                  </p>
                </div>
              )}
            </div>

            {/* Materials & Care */}
            <div className="border-t border-velmora-sand">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="uppercase tracking-wider text-sm">Materials & Care</span>
                <span className="text-velmora-gold">
                  {activeAccordion === 'materials' ? '−' : '+'}
                </span>
              </button>
              {activeAccordion === 'materials' && (
                <div className="pb-4 text-sm text-velmora-charcoal/80">
                  <p className="mb-2">
                    <strong>Materials:</strong> {product.material}, hypoallergenic base metal
                  </p>
                  <p className="mb-2">
                    <strong>Care Instructions:</strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Avoid contact with water, perfume, and cosmetics</li>
                    <li>Remove before sleeping and exercising</li>
                    <li>Store in a cool, dry place when not wearing</li>
                    <li>Clean gently with a soft jewelry cloth</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Shipping & Returns */}
            <div className="border-t border-b border-velmora-sand">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="uppercase tracking-wider text-sm">Shipping & Returns</span>
                <span className="text-velmora-gold">
                  {activeAccordion === 'shipping' ? '−' : '+'}
                </span>
              </button>
              {activeAccordion === 'shipping' && (
                <div className="pb-4 text-sm text-velmora-charcoal/80">
                  <p className="mb-2">
                    <strong>Shipping:</strong> Free worldwide shipping on all orders. 
                    Delivery within 5-7 business days.
                  </p>
                  <p>
                    <strong>Returns:</strong> 30-day hassle-free returns. 
                    Item must be in original packaging and unworn condition.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-3xl font-serif mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="aspect-square overflow-hidden rounded-lg shadow-premium mb-4">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
                <h3 className="product-name text-sm mb-2">{relatedProduct.name}</h3>
                <p className="text-lg font-medium">${relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
