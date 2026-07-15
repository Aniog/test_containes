import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronRight, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const product = {
    id: parseInt(id),
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop"
    ],
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 124,
    variants: ["Gold", "Silver"],
    inStock: true,
    fullDescription: "Elevate your everyday style with our Vivid Aura Jewels ear cuff. Featuring a delicate crystal accent that catches the light beautifully, this piece is designed for those who appreciate subtle elegance.",
    materials: "18K Gold Plated on Brass Base\nHypoallergenic\nNickel-Free\nCrystal Accent",
    care: "To maintain the beauty of your Velmora jewelry:\n\n• Remove before swimming, showering, or exercising\n• Avoid contact with perfumes, lotions, and chemicals\n• Store in the provided jewelry pouch when not in use",
    shipping: "Free standard shipping on all orders\n\n• Standard: 5-7 business days\n• Express: 2-3 business days\n• 30-Day Returns: Not satisfied? Return within 30 days for a full refund."
  };

  const relatedProducts = [
    { id: 2, name: "Majestic Flora Nectar", price: 68, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=400&fit=crop" },
    { id: 3, name: "Golden Sphere Huggies", price: 38, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop" },
    { id: 4, name: "Amber Lace Earrings", price: 54, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop" }
  ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      images: [product.images[0]],
      variant: selectedVariant
    }, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-charcoal/60 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-cream overflow-hidden">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-cream overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="product-name text-2xl lg:text-3xl mb-4">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "#C9A96E" : "none"} />
                  ))}
                </div>
                <span className="text-sm text-charcoal/60">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <p className="text-2xl font-medium mb-6">${product.price}</p>
              <p className="text-charcoal/70 leading-relaxed mb-8">{product.description}</p>
            </div>

            {/* Variant Selector */}
            <div>
              <p className="text-sm uppercase tracking-wider mb-3">Tone</p>
              <div className="flex space-x-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm uppercase tracking-wider transition-all ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-charcoal/20 hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-sm uppercase tracking-wider mb-3">Quantity</p>
              <div className="quantity-input">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="w-full btn-primary flex items-center justify-center space-x-2">
              <ShoppingBag size={18} />
              <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
            </button>

            {/* Shipping Info */}
            <div className="flex items-center space-x-4 text-sm text-charcoal/60">
              <div className="flex items-center space-x-2">
                <Truck size={16} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw size={16} />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              {['description', 'materials', 'shipping'].map((section) => (
                <div key={section} className="accordion-item">
                  <button onClick={() => toggleAccordion(section)} className="accordion-trigger">
                    <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                    <span>{expandedAccordion === section ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === section && (
                    <div className="pb-6 text-sm text-charcoal/70 leading-relaxed">
                      <p className="whitespace-pre-line">
                        {section === 'description' ? product.fullDescription : section === 'materials' ? product.materials : product.shipping}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 lg:mt-32">
          <h2 className="font-serif text-3xl lg:text-4xl mb-12 text-center" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="product-card group">
                <div className="aspect-square bg-cream overflow-hidden">
                  <img src={related.image} alt={related.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="product-name text-sm mb-2">{related.name}</h3>
                  <p className="text-sm font-medium">${related.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
