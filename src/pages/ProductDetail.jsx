import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ChevronRight, Star } from 'lucide-react';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="container-premium py-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-velmora-gold hover:text-velmora-gold-dark transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container-premium py-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-velmora-warm-gray mb-8">
        <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
        <ChevronRight size={14} />
        <span className="text-velmora-charcoal">{product.name}</span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div>
          <div className="mb-4 img-hover-zoom">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 border-2 transition-colors ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h1 className="product-name text-2xl mb-2">{product.name}</h1>
          <p className="text-velmora-warm-gray mb-4">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-velmora-warm-gray">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="font-serif text-3xl mb-8">${product.price}</p>

          {/* Material Selector */}
          <div className="mb-6">
            <label className="block text-sm uppercase tracking-wide mb-3">Material</label>
            <div className="flex space-x-3">
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-2 border transition-all duration-300 ${
                    selectedMaterial === material
                      ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                      : 'border-velmora-charcoal/30 hover:border-velmora-charcoal'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm uppercase tracking-wide mb-3">Quantity</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-velmora-charcoal/30 hover:border-velmora-charcoal transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-velmora-charcoal/30 hover:border-velmora-charcoal transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => {
              addItem({ ...product, material: selectedMaterial, quantity });
            }}
            className="w-full bg-velmora-charcoal text-white py-4 font-sans text-sm tracking-wider uppercase hover:bg-velmora-gold transition-colors duration-300 mb-4"
          >
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="space-y-4 mt-12">
            {[
              { title: 'Description', content: product.description },
              { title: 'Materials & Care', content: '18K gold plated over high-quality brass. Hypoallergenic and nickel-free. To maintain plating, avoid contact with water, perfumes, and lotions.' },
              { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. See our returns page for full details.' },
            ].map((accordion, index) => (
              <details key={index} className="border-t border-velmora-charcoal/10">
                <summary className="py-4 cursor-pointer font-sans text-sm uppercase tracking-wide hover:text-velmora-gold transition-colors">
                  {accordion.title}
                </summary>
                <p className="pb-4 text-sm text-velmora-warm-gray leading-relaxed">
                  {accordion.content}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-serif text-3xl mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.images[0]} alt={product.name} className="w-full aspect-[3/4] object-cover mb-4 img-hover-zoom" />
                  <h3 className="product-name text-sm">{product.name}</h3>
                  <p className="font-serif">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
