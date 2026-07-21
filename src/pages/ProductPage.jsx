import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: '18K gold plated on sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a dry place.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. 30-day returns for unworn items in original packaging. Express shipping available at checkout.' }
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[#6B6B6B]">
          <Link to="/" className="hover:text-[#C9A962]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#C9A962]">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#E8E4DE] mb-4 overflow-hidden">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 bg-[#E8E4DE] overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-[#C9A962]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="product-name text-sm mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < product.rating ? 'fill-[#C9A962] text-[#C9A962]' : 'text-[#D4CFC7]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6B6B]">({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-3xl mb-6">${product.price}</p>

            <p className="text-[#6B6B6B] mb-6">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm mb-3">Finish: <span className="capitalize">{selectedVariant}</span></p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 border text-sm capitalize transition-colors ${
                      selectedVariant === variant 
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' 
                        : 'border-[#E8E4DE] hover:border-[#1A1A1A]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm mb-3">Quantity</p>
              <div className="flex items-center border border-[#E8E4DE] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[#C9A962]"
                >
                  <Minus size={18} />
                </button>
                <span className="px-6">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[#C9A962]"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn-accent w-full justify-center mb-4"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-2xl mx-auto mb-16">
          {accordionItems.map((item) => (
            <div key={item.id} className="border-b border-[#E8E4DE]">
              <button
                onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="font-serif text-lg">{item.title}</span>
                {openAccordion === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
              }`}>
                <p className="text-[#6B6B6B]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
