import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Plus, Minus, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const { addItem } = useCart();

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

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-velmora-graphite hover:text-velmora-gold mb-8"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square overflow-hidden bg-white mb-4">
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
                  className={`w-20 h-20 overflow-hidden border-2 ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-graphite">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif mb-6">${product.price}</p>

            <p className="text-velmora-graphite mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Material Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Material</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2 border ${
                      selectedMaterial === material
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-border hover:border-velmora-gold'
                    } transition-colors`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-velmora-border hover:border-velmora-gold transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-velmora-border hover:border-velmora-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-charcoal text-velmora-cream py-4 font-serif tracking-wider hover:bg-velmora-gold transition-colors mb-4"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-12 space-y-4">
              {[
                {
                  title: 'Description',
                  content: 'Each Velmora piece is crafted with meticulous attention to detail. Our demi-fine jewelry uses 18k gold plating over high-quality brass, ensuring longevity and a luxurious finish that rivals solid gold pieces.'
                },
                {
                  title: 'Materials & Care',
                  content: '18k gold plated brass. Hypoallergenic and nickel-free. To maintain plating, avoid contact with water, perfumes, and lotions. Store in provided pouch when not worn.'
                },
                {
                  title: 'Shipping & Returns',
                  content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be returned in original packaging. Custom or personalized items cannot be returned.'
                },
              ].map(({ title, content }) => (
                <details key={title} className="border-b border-velmora-border pb-4">
                  <summary className="font-serif text-lg cursor-pointer hover:text-velmora-gold transition-colors">
                    {title}
                  </summary>
                  <p className="mt-4 text-velmora-graphite leading-relaxed">{content}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="aspect-square overflow-hidden bg-white mb-4">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-2">{related.name}</h3>
                <p className="text-velmora-graphite">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
