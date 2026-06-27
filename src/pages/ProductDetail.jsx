import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, selectedMaterial, quantity });
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-black">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Image Gallery */}
          <div>
            <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>
            
            <p className="text-2xl font-serif mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{product.details}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm uppercase tracking-wider mb-3">Material</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2 border transition-colors ${
                      selectedMaterial === material
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-gray-300 hover:border-velmora-gold'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-wider mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 hover:border-velmora-gold transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 hover:border-velmora-gold transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mb-8 py-4 text-base"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: `Materials: ${product.materials}\n\nCare: To maintain the beauty of your Velmora jewelry, avoid contact with water, perfume, and cosmetics. Store in a cool, dry place when not worn.` },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. If you\'re not completely satisfied, return your item for a full refund.' },
              ].map((section) => (
                <div key={section.title} className="border-t border-gray-200">
                  <button
                    onClick={() => toggleAccordion(section.title)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-serif text-base uppercase tracking-wider">
                      {section.title}
                    </span>
                    {expandedAccordion === section.title ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {expandedAccordion === section.title && (
                    <div className="pb-4 text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-serif text-3xl uppercase tracking-wider mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group block">
                <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                  {related.name}
                </h3>
                <p className="text-gray-600 text-sm">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
