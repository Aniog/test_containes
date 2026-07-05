import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { ChevronLeft, Plus, Minus, Heart, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container-luxury py-32 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-velmora-gold hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div className="container-luxury py-8 md:py-16">
      {/* Breadcrumb */}
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-velmora-text-light hover:text-velmora-gold mb-8">
        <ChevronLeft size={16} />
        Back to Shop
      </Link>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left - Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-velmora-sand overflow-hidden">
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
                className={`w-20 h-20 bg-velmora-sand overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="uppercase tracking-wider text-2xl md:text-3xl font-medium mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-light">${product.price}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-velmora-gold">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-sm text-velmora-text-light">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-velmora-text-light leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wider">Material</p>
            <div className="flex gap-3">
              {['18K Gold Plated', 'Silver Plated', 'Rose Gold'].map(variant => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-2 text-sm border transition-colors ${
                    selectedVariant === variant
                      ? 'border-velmora-gold bg-velmora-gold text-white'
                      : 'border-velmora-border hover:border-velmora-gold'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wider">Quantity</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-velmora-sand transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-2 min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-velmora-sand transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleAddToCart}
              className="flex-grow bg-velmora-gold text-white py-4 uppercase tracking-wider text-sm
                       hover:bg-velmora-gold-dark transition-colors"
            >
              Add to Cart
            </button>
            <button className="px-4 py-4 border border-velmora-border hover:border-velmora-gold transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex gap-6 pt-6 border-t border-velmora-border">
            <div className="flex items-center gap-2 text-sm text-velmora-text-light">
              <Truck size={18} />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-velmora-text-light">
              <RotateCcw size={18} />
              <span>30-Day Returns</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="pt-6 space-y-4">
            <Accordion title="Description" defaultOpen>
              <p className="text-sm text-velmora-text-light leading-relaxed">
                {product.name} is crafted with meticulous attention to detail. 
                Made with {product.material}, this piece is designed for everyday wear 
                and special occasions alike. Hypoallergenic and nickel-free.
              </p>
            </Accordion>
            
            <Accordion title="Materials & Care">
              <div className="text-sm text-velmora-text-light space-y-2">
                <p><strong>Material:</strong> {product.material}</p>
                <p><strong>Care:</strong> Avoid contact with water, perfume, and lotions. 
                Store in a cool, dry place. Clean with a soft jewelry cloth.</p>
              </div>
            </Accordion>
            
            <Accordion title="Shipping & Returns">
              <div className="text-sm text-velmora-text-light space-y-2">
                <p>Free worldwide shipping on all orders.</p>
                <p>30-day return policy. Items must be in original packaging.</p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-velmora-border pt-16">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="uppercase tracking-wider text-sm">{title}</span>
        <Plus size={18} className={`transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="aspect-square bg-velmora-sand mb-4 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="uppercase tracking-wider text-sm font-medium mb-1">{product.name}</h3>
      <p className="text-sm text-velmora-text-light">${product.price}</p>
    </Link>
  );
}

function Link({ to, children, className }) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}
