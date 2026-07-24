import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product by slug
  const product = useMemo(() => {
    return products.find(p => p.slug === slug);
  }, [slug]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-4xl mb-4">Product Not Found</h2>
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

  const accordions = [
    {
      id: 'description',
      title: 'DESCRIPTION',
      content: product.description
    },
    {
      id: 'materials',
      title: 'MATERIALS & CARE',
      content: `Material: ${product.material}\n\nCare Instructions: Avoid contact with water, perfume, and cosmetics. Store in a cool, dry place. Clean gently with a soft cloth.`
    },
    {
      id: 'shipping',
      title: 'SHIPPING & RETURNS',
      content: 'Free worldwide shipping on all orders. 30-day return policy. See our returns page for full details.'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden bg-gray-100">
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
                className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-4xl tracking-[0.15em] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
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
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-3xl font-light mb-8">${product.price}</p>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          {product.variants.length > 1 && (
            <div className="space-y-4">
              <h3 className="text-sm tracking-wide">TONE</h3>
              <div className="flex space-x-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-wide transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-gray-300 hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-wide">QUANTITY</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 hover:border-velmora-gold transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 hover:border-velmora-gold transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-black text-white py-4 text-sm tracking-[0.2em] hover:bg-velmora-charcoal transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingBag size={20} />
            <span>ADD TO CART</span>
          </button>

          {/* Accordions */}
          <div className="space-y-4 pt-8 border-t">
            {accordions.map((accordion) => (
              <div key={accordion.id} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setActiveAccordion(
                    activeAccordion === accordion.id ? null : accordion.id
                  )}
                  className="w-full flex items-center justify-between py-2 text-sm tracking-wide"
                >
                  <span>{accordion.title}</span>
                  <span className="text-velmora-gold">
                    {activeAccordion === accordion.id ? '−' : '+'}
                  </span>
                </button>
                {activeAccordion === accordion.id && (
                  <div className="pt-2 pb-4 text-sm text-gray-600 leading-relaxed">
                    {accordion.content.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 pt-12 border-t">
        <h2 className="font-display text-3xl tracking-wide text-center mb-12">
          YOU MAY ALSO LIKE
        </h2>
        <RelatedProducts currentSlug={product.slug} />
      </div>
    </section>
  );
}

function RelatedProducts({ currentSlug }) {
  const related = products
    .filter(p => p.slug !== currentSlug)
    .slice(0, 4);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {related.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.slug}`}
          className="group"
        >
          <div className="aspect-square overflow-hidden bg-gray-100 mb-3">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-sm tracking-[0.1em] mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
