import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-velmora-gold hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-velmora-charcoal mb-8">
        <Link to="/" className="hover:text-velmora-gold">Home</Link>
        <ChevronRight size={16} />
        <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
        <ChevronRight size={16} />
        <span className="text-velmora-deep">{product.name}</span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-square overflow-hidden bg-velmora-soft-gray mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
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

        {/* Product Info */}
        <div>
          <h1 className="font-serif text-3xl lg:text-4xl uppercase tracking-wide mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex text-velmora-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-sm text-velmora-charcoal">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="font-serif text-2xl mb-8">${product.price}</p>

          <p className="text-velmora-charcoal leading-relaxed mb-8">
            {product.description}. Crafted with 18K gold plating, our demi-fine jewelry combines
            luxury with accessibility. Hypoallergenic and nickel-free, perfect for sensitive skin.
          </p>

          {/* Material Selector */}
          <div className="mb-8">
            <label className="block text-sm tracking-wide mb-3">Material</label>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-2 border text-sm tracking-wide transition-colors ${
                    selectedMaterial === material
                      ? 'bg-velmora-deep text-white border-velmora-deep'
                      : 'bg-transparent text-velmora-deep border-velmora-gold-light hover:border-velmora-gold'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm tracking-wide mb-3">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-velmora-gold-light flex items-center justify-center hover:border-velmora-gold transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-velmora-gold-light flex items-center justify-center hover:border-velmora-gold transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => {
              addToCart({ ...product, selectedMaterial, quantity });
              setQuantity(1);
            }}
            className="w-full bg-velmora-gold hover:bg-velmora-gold/90 text-white py-4 text-sm tracking-wide transition-colors duration-300 mb-12"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4">
            <Accordion title="Description" defaultOpen>
              <p className="text-velmora-charcoal leading-relaxed">
                {product.name} features exquisite craftsmanship with 18K gold plating.
                Each piece is carefully designed to bring elegance to your everyday style.
                The {product.description.toLowerCase()} makes this piece perfect for both
                daily wear and special occasions.
              </p>
            </Accordion>

            <Accordion title="Materials & Care">
              <div className="text-velmora-charcoal leading-relaxed space-y-3">
                <p><strong className="text-velmora-deep">Materials:</strong> 18K Gold Plated, Hypoallergenic, Nickel-Free</p>
                <p><strong className="text-velmora-deep">Care:</strong> Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.</p>
              </div>
            </Accordion>

            <Accordion title="Shipping & Returns">
              <div className="text-velmora-charcoal leading-relaxed space-y-3">
                <p><strong className="text-velmora-deep">Shipping:</strong> Free worldwide shipping on all orders. Delivery within 5-7 business days.</p>
                <p><strong className="text-velmora-deep">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-serif text-3xl mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group block">
                <div className="relative overflow-hidden bg-velmora-soft-gray aspect-square mb-4">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wide mb-2">{related.name}</h3>
                <p className="font-serif text-lg">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-velmora-gold-light">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-lg">{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <Plus size={20} />
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
