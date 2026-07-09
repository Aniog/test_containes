import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e0db]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && <div className="pb-4 text-sm text-gray-600 leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductDetail({ productId }) {
  const product = products.find((p) => p.id === parseInt(productId));
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.badge))
    .slice(0, 4);

  return (
    <div className="pt-20 md:pt-24">
      <div className="container-padding py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-row-reverse md:flex-col gap-3">
            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#c9a96e]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-[#1a1a1a] text-white text-[10px] tracking-wider uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-4">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="serif-heading text-2xl mb-6">${product.price}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-sm tracking-wider uppercase mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 text-sm tracking-wider uppercase border transition-all ${
                      variant === v
                        ? 'border-[#c9a96e] bg-[#c9a96e] text-white'
                        : 'border-[#e5e0db] hover:border-[#c9a96e]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm tracking-wider uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#e5e0db] flex items-center justify-center hover:border-[#c9a96e] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#e5e0db] flex items-center justify-center hover:border-[#c9a96e] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="btn-dark w-full flex items-center justify-center gap-3 mb-6"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-500 mb-8">
              <div>
                <p className="font-medium text-gray-700 mb-1">Free Shipping</p>
                <p>Worldwide delivery</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">30-Day Returns</p>
                <p>Hassle-free</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">18K Gold</p>
                <p>Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              <Accordion title="Description">
                <p>
                  {product.name} is a stunning piece from our demi-fine collection. 
                  Crafted with precision and care, this piece features {product.material.toLowerCase()} 
                  over a durable brass base. The design draws inspiration from {product.category === 'earrings' ? 'organic forms and delicate geometry' : product.category === 'necklaces' ? 'nature\'s most beautiful elements' : 'timeless silhouettes with a modern twist'}.
                </p>
                <p className="mt-2">
                  Each piece is individually finished by hand, ensuring no two are exactly alike. 
                  The result is jewelry that feels personal, luxurious, and uniquely yours.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K gold plated over recycled brass</li>
                  <li>• Hypoallergenic findings</li>
                  <li>• Nickel-free and lead-free</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Gently polish with a soft cloth to maintain shine</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Orders ship within 1-2 business days</li>
                  <li>• Delivery: 3-7 business days (US), 7-14 days (international)</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                  <li>• Gift sets include complimentary gift wrapping</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="serif-heading text-2xl md:text-3xl text-center mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <div key={p.id} className="group">
                  <a href={`/product/${p.id}`} className="block aspect-[3/4] overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                  <h3 className="product-name text-sm mb-1 group-hover:text-[#c9a96e] transition-colors">{p.name}</h3>
                  <p className="text-sm font-medium">${p.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
