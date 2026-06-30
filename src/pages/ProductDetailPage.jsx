import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react';
import products from '../data/products';

export default function ProductDetailPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/collection" className="text-velmora-gold hover:underline">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, material: selectedMaterial, quantity });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-velmora-gold">Home</Link>
        <ChevronRight size={14} />
        <Link to="/collection" className="hover:text-velmora-gold">Shop</Link>
        <ChevronRight size={14} />
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-velmora-lightGray mb-4 overflow-hidden">
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
                className={`w-20 h-20 bg-velmora-lightGray overflow-hidden border-2 ${
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
          <h1 className="font-serif text-3xl tracking-widest mb-4">{product.name}</h1>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              <Star size={16} className="fill-velmora-gold text-velmora-gold" />
              <span className="text-sm">{product.rating}</span>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
            <span className="text-2xl font-serif">${product.price}</span>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">{product.details}</p>

          {/* Material Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Material</label>
            <div className="flex space-x-3">
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-2 border ${
                    selectedMaterial === material
                      ? 'border-velmora-gold bg-velmora-gold text-white'
                      : 'border-gray-300 hover:border-velmora-gold'
                  } transition-colors`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">Quantity</label>
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

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-black text-white py-4 hover:bg-velmora-charcoal transition-colors tracking-wider mb-4 flex items-center justify-center space-x-2"
          >
            <ShoppingBag size={20} />
            <span>Add to Cart</span>
          </button>

          {/* Accordions */}
          <div className="space-y-4 mt-8">
            {[
              { title: 'Description', content: product.details },
              { title: 'Materials & Care', content: `Materials: ${product.materials}\n\nCare: To maintain the beauty of your Velmora jewelry, avoid contact with water, perfume, and cosmetics. Store in the provided pouch when not wearing.` },
              { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. Returns are free and easy — simply initiate a return through your account or contact our customer service team.' },
            ].map((section, index) => (
              <div key={index} className="border-t border-velmora-border">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-semibold tracking-wide">{section.title}</span>
                  <span className="text-velmora-gold">{activeAccordion === index ? '−' : '+'}</span>
                </button>
                {activeAccordion === index && (
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
      <section>
        <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              to={`/product/${related.id}`}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-velmora-lightGray mb-4 overflow-hidden">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm tracking-widest mb-2">{related.name}</h3>
              <p className="text-gray-600 text-sm">${related.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
