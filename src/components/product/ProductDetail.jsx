import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');

  // Find product by ID
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, material: selectedMaterial }, quantity);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-velmora-beige">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl tracking-wider uppercase mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-light">${product.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-velmora-gold">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-charcoal/60">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-velmora-charcoal/80 leading-relaxed">
              {product.description}. Crafted with care using premium materials.
            </p>

            {/* Material Selector */}
            <div>
              <label className="block text-sm tracking-wide mb-3">Material</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2 border text-sm tracking-wide transition-colors ${
                      selectedMaterial === material
                        ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                        : 'border-velmora-warm hover:border-velmora-charcoal'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm tracking-wide mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-warm flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-warm flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-charcoal hover:bg-velmora-gold text-white py-4 text-sm tracking-wider uppercase transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-6 border-t border-velmora-warm/30">
              <Accordion title="Description">
                <p className="text-sm leading-relaxed text-velmora-charcoal/80">
                  {product.name} is crafted with meticulous attention to detail.
                  This {product.category.toLowerCase()} features premium 18K gold plating
                  over sustainable brass, ensuring longevity and a luxurious finish.
                  Perfect for everyday wear or special occasions.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="text-sm space-y-2 text-velmora-charcoal/80">
                  <p><strong>Materials:</strong> 18K Gold Plated, Sustainable Brass</p>
                  <p><strong>Care:</strong> Avoid contact with water, perfume, and lotions. Store in a cool, dry place.</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="text-sm space-y-2 text-velmora-charcoal/80">
                  <p>Free worldwide shipping on all orders.</p>
                  <p>30-day return policy. Items must be unworn and in original packaging.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-velmora-warm/30">
          <h2 className="font-serif text-3xl mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map(related => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-square overflow-hidden bg-velmora-beige">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="mt-3 text-sm tracking-wider uppercase group-hover:text-velmora-gold transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-lg font-light">${related.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 text-sm tracking-wide"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}

// Import products data
import products from '../../data/products';
