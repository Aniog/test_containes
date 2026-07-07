import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { StarRating } from '../ui/StarRating';
import { Plus, Minus, ShoppingBag, ChevronRight } from 'lucide-react';
import products from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-velmora-gold hover:text-velmora-gold-dark transition-colors"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setIsAdded(true);
    openCart();
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-velmora-mist mb-8">
          <a href="/" className="hover:text-velmora-gold transition-colors">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="/shop" className="hover:text-velmora-gold transition-colors">Shop</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velmora-cream rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 bg-velmora-cream rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl tracking-widest uppercase text-velmora-charcoal mb-4">
                {product.name}
              </h1>

              <StarRating rating={product.rating} reviews={product.reviews} />

              <p className="text-3xl text-velmora-gold font-medium mt-6">
                ${product.price}
              </p>
            </div>

            <p className="text-velmora-graphite leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium tracking-wider uppercase text-velmora-charcoal">
                  Finish
                </h3>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-3 border-2 transition-all duration-300 ${
                        selectedVariant.id === variant.id
                          ? 'border-velmora-gold bg-velmora-gold/5'
                          : 'border-velmora-warm hover:border-velmora-gold/50'
                      }`}
                    >
                      <span className="text-sm">{variant.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium tracking-wider uppercase text-velmora-charcoal">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-warm flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-warm flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-medium tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 ${
                isAdded
                  ? 'bg-green-600 text-white'
                  : 'bg-velmora-gold text-white hover:bg-velmora-gold-dark'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{isAdded ? 'Added to Cart!' : 'Add to Cart'}</span>
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-8 border-t border-velmora-warm">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-4 hover:text-velmora-gold transition-colors">
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Description
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <div className="pb-4 text-sm text-velmora-graphite leading-relaxed">
                  <p>{product.description}</p>
                  <ul className="mt-4 space-y-2">
                    {product.features?.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-velmora-gold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-4 hover:text-velmora-gold transition-colors border-t border-velmora-warm">
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Materials & Care
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <div className="pb-4 text-sm text-velmora-graphite leading-relaxed">
                  <p className="mb-4">
                    Our jewelry is crafted with 18K gold plating over high-quality brass,
                    ensuring durability and a luxurious finish. All pieces are hypoallergenic
                    and nickel-free.
                  </p>
                  <p>
                    <strong>Care Instructions:</strong> To maintain the beauty of your jewelry,
                    avoid contact with water, perfume, and cosmetics. Store in a cool, dry place
                    when not in use.
                  </p>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-4 hover:text-velmora-gold transition-colors border-t border-velmora-warm">
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Shipping & Returns
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <div className="pb-4 text-sm text-velmora-graphite leading-relaxed">
                  <p className="mb-4">
                    <strong>Shipping:</strong> Free worldwide shipping on all orders.
                    Standard delivery takes 5-7 business days.
                  </p>
                  <p>
                    <strong>Returns:</strong> We offer a 30-day return policy.
                    Items must be returned in their original packaging and unused condition.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-32 pt-16 border-t border-velmora-warm">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="cursor-pointer"
                >
                  <div className="aspect-[3/4] bg-velmora-cream rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-lg tracking-widest uppercase text-velmora-charcoal">
                    {product.name}
                  </h3>
                  <p className="text-velmora-gold font-medium mt-1">${product.price}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
