import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-gold hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, material: selectedMaterial }, quantity);
  };

  const accordions = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: '18K Gold Plated over hypoallergenic base metal. Nickel-free. Avoid contact with water, perfumes, and lotions. Store in provided pouch.' },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. See our Returns page for full details.' }
  ];

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left: Image Gallery */}
        <div>
          <div className="aspect-square overflow-hidden bg-warm mb-4">
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
                className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h1 className="font-sans text-2xl tracking-widest uppercase mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-charcoal/60">{product.reviews} reviews</span>
          </div>

          <p className="font-serif text-3xl mb-8">${product.price}</p>

          <p className="text-charcoal/70 font-light leading-relaxed mb-8">
            {product.details}
          </p>

          {/* Variant Selector */}
          <div className="mb-8">
            <label className="block text-sm tracking-wider uppercase mb-4">Material</label>
            <div className="flex gap-4">
              {['Gold', 'Silver'].map(material => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-3 border-2 transition-colors ${
                    selectedMaterial === material
                      ? 'border-gold bg-gold text-cream'
                      : 'border-gold/30 text-charcoal hover:border-gold'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm tracking-wider uppercase mb-4">Quantity</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border-2 border-gold/30 hover:border-gold transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="text-xl w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border-2 border-gold/30 hover:border-gold transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gold text-cream py-4 text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300 mb-12"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4">
            {accordions.map((accordion, index) => (
              <div key={index} className="border-t border-gold/20">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-sans text-sm tracking-wider uppercase">{accordion.title}</span>
                  {openAccordion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openAccordion === index && (
                  <div className="pb-4 text-sm text-charcoal/70 font-light leading-relaxed">
                    {accordion.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="font-serif text-3xl font-light tracking-wide mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(related => (
            <Link key={related.id} to={`/product/${related.id}`} className="group">
              <div className="aspect-square overflow-hidden bg-warm mb-4">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-sans text-sm tracking-widest uppercase mb-2">{related.name}</h3>
              <p className="font-serif text-lg">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
