import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [material, setMaterial] = useState('Gold');
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, material });
    setQuantity(1);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: '18K gold plated over brass. Hypoallergenic and nickel-free. To maintain the beauty of your jewelry, avoid contact with water, perfume, and cosmetics. Store in a cool, dry place.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. If you\'re not completely satisfied, return your item for a full refund.'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-warm-gray">
        <Link to="/" className="hover:text-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-gold">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div>
          <div className="mb-4">
            <img 
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 border-2 ${
                  selectedImage === index ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img 
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-serif text-3xl uppercase tracking-wider mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-gold">
              {'★'.repeat(Math.floor(product.rating))}
            </div>
            <span className="text-sm text-warm-gray">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="font-serif text-2xl mb-6">${product.price}</p>

          {/* Description */}
          <p className="text-warm-gray mb-8">{product.description}</p>

          {/* Material Selector */}
          <div className="mb-6">
            <label className="block text-sm mb-3">Material</label>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((mat) => (
                <button
                  key={mat}
                  onClick={() => setMaterial(mat)}
                  className={`px-6 py-2 border ${
                    material === mat 
                      ? 'border-charcoal bg-charcoal text-cream' 
                      : 'border-border hover:border-charcoal'
                  } transition-colors`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm mb-3">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-border hover:border-charcoal transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-border hover:border-charcoal transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-charcoal text-cream py-4 font-serif tracking-wider hover:bg-gold transition-colors mb-8"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-t border-border">
                <button
                  onClick={() => setExpandedAccordion(
                    expandedAccordion === index ? null : index
                  )}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-serif">{item.title}</span>
                  {expandedAccordion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedAccordion === index && (
                  <div className="pb-4 text-warm-gray text-sm leading-relaxed">
                    {item.content}
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
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={related.image}
                  alt={related.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                {related.name}
              </h3>
              <p className="text-warm-gray text-sm mb-1">{related.description}</p>
              <p className="font-serif text-lg">${related.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
