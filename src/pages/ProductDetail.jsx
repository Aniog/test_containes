import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="heading-serif text-2xl">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-velmora">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-cream-dark overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-28 bg-cream-dark overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="space-y-6">
              <div>
                <h1 className="product-name text-2xl mb-2">{product.name}</h1>
                <p className="text-warm-gray">{product.description}</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-serif">${product.price}</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-warm-gray-light'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-warm-gray ml-2">({product.reviews} reviews)</span>
                </div>
              </div>

              <p className="body-text">{product.details}</p>

              {/* Variant Selector */}
              <div className="space-y-3">
                <p className="text-sm font-medium tracking-wider uppercase">Material</p>
                <div className="flex space-x-3">
                  {['Gold', 'Silver'].map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedVariant(material)}
                      className={`px-6 py-3 border transition-colors ${
                        selectedVariant === material
                          ? 'border-charcoal bg-charcoal text-white'
                          : 'border-border hover:border-charcoal'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <p className="text-sm font-medium tracking-wider uppercase">Quantity</p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border border-border flex items-center justify-center hover:border-charcoal transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-xl">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 border border-border flex items-center justify-center hover:border-charcoal transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="btn-primary w-full"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Accordions */}
              <div className="space-y-4 pt-6">
                <details className="border-t border-border pt-4">
                  <summary className="cursor-pointer font-medium tracking-wider uppercase text-sm hover:text-gold transition-colors">
                    Description
                  </summary>
                  <p className="body-text mt-4">{product.details}</p>
                </details>

                <details className="border-t border-border pt-4">
                  <summary className="cursor-pointer font-medium tracking-wider uppercase text-sm hover:text-gold transition-colors">
                    Materials & Care
                  </summary>
                  <div className="body-text mt-4 space-y-2">
                    <p><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> To maintain the beauty of your Velmora pieces, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
                  </div>
                </details>

                <details className="border-t border-border pt-4">
                  <summary className="cursor-pointer font-medium tracking-wider uppercase text-sm hover:text-gold transition-colors">
                    Shipping & Returns
                  </summary>
                  <div className="body-text mt-4 space-y-2">
                    <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Delivery within 5-7 business days.</p>
                    <p><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-20 border-t border-border">
          <h2 className="heading-serif text-3xl mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <a key={product.id} href={`/product/${product.id}`} className="group block">
                <div className="aspect-[3/4] bg-cream-dark overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="product-name text-sm">{product.name}</h3>
                <p className="font-serif mt-2">${product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
