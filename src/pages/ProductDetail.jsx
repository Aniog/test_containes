import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Star, ChevronLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedMaterial, setSelectedMaterial] = React.useState('Gold');
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [activeAccordion, setActiveAccordion] = React.useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="btn-outline"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, selectedMaterial }, selectedMaterial);
    setQuantity(1);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} fill="#C9A96E" stroke="#C9A96E" />);
    }
    return stars;
  };

  const accordionItems = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: `Materials: ${product.materials}\n\nCare: Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.` },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. See our returns page for full details.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm uppercase tracking-wider mb-8 hover:text-velmora-gold transition-colors"
      >
        <ChevronLeft size={16} />
        Back
      </button>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left - Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden bg-velmora-warm">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-20 h-20 overflow-hidden border-2 transition-all ${
                  selectedImageIndex === index ? 'border-velmora-gold' : 'border-transparent'
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
            <h1 className="product-name text-3xl md:text-4xl mb-2">{product.name}</h1>
            <p className="text-velmora-stone uppercase tracking-wider text-sm">{product.category}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-velmora-stone">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-light">${product.price}</p>

          {/* Description */}
          <p className="text-velmora-charcoalLight leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wider">Material</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-2 border text-sm uppercase tracking-wider transition-all ${
                    selectedMaterial === material
                      ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                      : 'border-velmora-stone hover:border-velmora-charcoal'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wider">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-velmora-stone hover:border-velmora-charcoal transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-velmora-stone hover:border-velmora-charcoal transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-charcoal text-white py-4 uppercase tracking-widest text-sm 
                       hover:bg-velmora-charcoalLight transition-all duration-300 
                       flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            {accordionItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between py-3 text-left"
                >
                  <span className="uppercase tracking-wider text-sm">{item.title}</span>
                  <span className="text-velmora-gold">{activeAccordion === index ? '−' : '+'}</span>
                </button>
                {activeAccordion === index && (
                  <div className="pb-4 text-sm text-velmora-charcoalLight leading-relaxed whitespace-pre-line">
                    {item.content}
                  </div>
                )}
                {index < accordionItems.length - 1 && <div className="hairline" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="font-serif text-3xl mb-8 tracking-wide text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <div key={related.id} className="group cursor-pointer">
              <Link to={`/product/${related.id}`} className="block">
                <div className="relative img-hover-zoom mb-4 bg-velmora-warm aspect-square">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="product-name text-sm">{related.name}</h3>
                <p className="text-sm font-medium mt-1">${related.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
