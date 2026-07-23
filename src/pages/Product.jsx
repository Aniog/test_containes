import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-amber-700 underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8 text-sm text-stone-500">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-stone-800">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-stone-100 mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-stone-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-stone-900' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wider mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-stone-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">({product.reviewCount} reviews)</span>
            </div>
            <p className="text-2xl mb-6">${product.price}</p>
            <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm tracking-widest uppercase mb-3 block">Tone</label>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 border text-sm tracking-widest uppercase transition-colors ${
                      variant === v
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-300 text-stone-700 hover:border-stone-900'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm tracking-widest uppercase mb-3 block">Quantity</label>
              <div className="flex items-center border border-stone-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-stone-500 hover:text-stone-800"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-3 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-stone-500 hover:text-stone-800"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-stone-900 text-white py-4 text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors mb-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-stone-200">
              {[
                { id: 'description', label: 'Description', content: product.description },
                { id: 'materials', label: 'Materials & Care', content: product.details },
                { id: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day return policy. Items must be unworn and in original packaging.' },
              ].map((item) => (
                <div key={item.id} className="border-b border-stone-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-widest uppercase">{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openAccordion === item.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-stone-600 text-sm leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-12 tracking-wide">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-sm tracking-wider text-center">{related.name}</h3>
                  <p className="text-stone-500 text-sm text-center mt-1">${related.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
