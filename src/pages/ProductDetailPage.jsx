import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart: addToCartContext } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-[#C9A96E] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCartContext({ ...product, material: selectedMaterial }, quantity);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description + '. Each piece is carefully crafted with attention to detail, ensuring that you receive a product of the highest quality. Perfect for gifting or treating yourself.'
    },
    {
      title: 'Materials & Care',
      content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not in use.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. If you\'re not completely satisfied with your purchase, you can return it for a full refund or exchange.'
    }
  ];

  return (
    <div className="px-6 lg:px-12 py-12 max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-12 text-sm opacity-70">
        <Link to="/" className="hover:text-[#C9A96E]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-[#C9A96E]">Shop</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
        {/* Image Gallery */}
        <div className="space-y-6">
          <div className="aspect-square overflow-hidden bg-[#F5F0E8]">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-[#C9A96E]' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="product-name text-3xl lg:text-4xl mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'fill-[#C9A96E] text-[#C9A96E]' : 'text-[#E8DDD0]'}
                  />
                ))}
              </div>
              <span className="text-sm opacity-70">({product.reviews} reviews)</span>
            </div>
            <p className="text-3xl font-light mb-8">${product.price}</p>
          </div>

          <p className="text-lg leading-relaxed opacity-80">{product.description}</p>

          {/* Variant Selector */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-[0.15em] uppercase opacity-90">Material</h3>
            <div className="flex space-x-4">
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-8 py-3 border text-sm tracking-[0.1em] uppercase transition-all ${
                    selectedMaterial === material
                      ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                      : 'bg-transparent text-[#2C2C2C] border-[#E8DDD0] hover:border-[#C9A96E]'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-[0.15em] uppercase opacity-90">Quantity</h3>
            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-[#E8DDD0]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-[#F5F0E8] transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-3 min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-[#F5F0E8] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#2C2C2C] text-white py-5 text-sm tracking-[0.2em] uppercase hover:bg-[#C9A96E] transition-all duration-500"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4 pt-8 border-t border-[#E8DDD0]">
            {accordionItems.map((item, index) => (
              <div key={item.title} className="border-b border-[#E8DDD0] pb-4">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === index ? null : index)}
                  className="flex items-center justify-between w-full py-4 text-left"
                >
                  <span className="text-sm tracking-[0.15em] uppercase">{item.title}</span>
                  {expandedAccordion === index ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {expandedAccordion === index && (
                  <p className="pb-4 text-sm leading-relaxed opacity-80">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="pt-20 border-t border-[#E8DDD0]">
        <h2 className="font-serif text-3xl lg:text-4xl font-light text-center mb-12">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((relatedProduct) => (
            <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 bg-[#F5F0E8]">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="product-name text-sm mb-2">{relatedProduct.name}</h3>
                <p className="text-lg font-medium">${relatedProduct.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
