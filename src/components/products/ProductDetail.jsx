import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from '../products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/collections" className="text-[#C9A962] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: 'Our jewelry is crafted from 18K gold-plated brass, ensuring a luxurious look with lasting durability. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <li><Link to="/" className="hover:text-[#C9A962]">Home</Link></li>
            <li>/</li>
            <li><Link to="/collections" className="hover:text-[#C9A962]">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/collections?category=${product.category}`} className="hover:text-[#C9A962] capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-[#1A1A1A]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-[#F5F0E8] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[product.image, product.imageHover].map((img, i) => (
                <button 
                  key={i}
                  className="aspect-square bg-[#F5F0E8] overflow-hidden border border-transparent hover:border-[#C9A962] transition-colors"
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="product-name text-sm mb-2">{product.name}</h1>
            <p className="text-[#6B6B6B] mb-4">{product.description}</p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < product.rating ? "#C9A962" : "none"}
                    stroke={i < product.rating ? "#C9A962" : "#A8A29E"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6B6B]">({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl mb-6">${product.price}</p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm text-[#6B6B6B] mb-2">Finish</p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-sm uppercase tracking-wider border transition-all ${
                        selectedVariant === variant
                          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                          : 'border-[#E5E0D8] text-[#6B6B6B] hover:border-[#1A1A1A]'
                      }`}
                    >
                      {variant} Tone
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm text-[#6B6B6B] mb-2">Quantity</p>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[#C9A962] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[#C9A962] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full btn-primary mb-4"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-[#E5E0D8] mt-8">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-[#E5E0D8]">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm tracking-wider uppercase">{item.title}</span>
                    {activeAccordion === item.id ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}