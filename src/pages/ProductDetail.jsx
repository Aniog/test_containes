import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Minus, Plus, ChevronDown, Star, Truck, ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, cartItems } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
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

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description + '. Crafted with care using premium materials for everyday wear.'
    },
    {
      title: 'Materials & Care',
      content: '18K gold plated over high-quality brass. Nickel-free and hypoallergenic. To maintain plating, avoid contact with water, perfumes, and lotions. Store in provided pouch when not wearing.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be returned in original packaging, unworn and in sellable condition.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <Link
        to="/shop"
        className="inline-flex items-center text-sm text-velmora-warm-gray hover:text-velmora-gold mb-8 font-sans"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Shop
      </Link>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden bg-velmora-light-gray">
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
                className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                  selectedImage === index
                    ? 'border-velmora-gold'
                    : 'border-transparent hover:border-velmora-taupe'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-soft-black tracking-widest uppercase mb-2">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'text-velmora-taupe'
                  }`}
                />
              ))}
              <span className="text-sm text-velmora-warm-gray ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="font-serif text-3xl text-velmora-soft-black">${product.price}</p>
          </div>

          <p className="font-sans text-base text-velmora-charcoal leading-relaxed">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="space-y-3">
            <label className="font-sans text-sm tracking-wide uppercase text-velmora-charcoal">
              Tone
            </label>
            <div className="flex space-x-3">
              {['Gold', 'Silver'].map(variant => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-2.5 border text-sm tracking-wide font-sans transition-all ${
                    selectedVariant === variant
                      ? 'border-velmora-gold bg-velmora-gold text-white'
                      : 'border-velmora-taupe hover:border-velmora-gold text-velmora-charcoal'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <label className="font-sans text-sm tracking-wide uppercase text-velmora-charcoal">
              Quantity
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-velmora-taupe hover:border-velmora-gold transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="font-sans text-lg w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-velmora-taupe hover:border-velmora-gold transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-soft-black hover:bg-velmora-gold text-white py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300"
          >
            Add to Cart
          </button>

          {/* Shipping Info */}
          <div className="flex items-center space-x-2 text-sm text-velmora-warm-gray pt-4 border-t border-velmora-taupe/30">
            <Truck size={16} />
            <span>Free shipping on orders over $50</span>
          </div>

          {/* Accordions */}
          <div className="space-y-4 pt-6">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-b border-velmora-taupe/30">
                <button
                  onClick={() =>
                    setExpandedAccordion(expandedAccordion === index ? null : index)
                  }
                  className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-wide uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  {item.title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      expandedAccordion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedAccordion === index && (
                  <p className="pb-4 font-sans text-sm text-velmora-warm-gray leading-relaxed">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-serif text-3xl font-light text-velmora-soft-black mb-8 tracking-wide text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(related => (
              <Link
                key={related.id}
                to={`/product/${related.id}`}
                className="group"
              >
                <div className="aspect-square overflow-hidden bg-velmora-light-gray mb-4">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-lg tracking-widest uppercase text-velmora-soft-black mb-1">
                  {related.name}
                </h3>
                <p className="font-sans text-sm text-velmora-warm-gray">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
