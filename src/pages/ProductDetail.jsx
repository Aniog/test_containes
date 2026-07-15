import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const images = [product.image, product.imageHover || product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: `The ${product.name} is a stunning piece that embodies timeless elegance. ${product.description}. Crafted with attention to detail, this piece is perfect for both everyday luxury and special occasions.`
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'All Velmora jewelry is crafted from 18K gold-plated brass, ensuring a luxurious look with lasting durability. To maintain the beauty of your piece, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.'
    }
  ];

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-[#8B8580]">
          <Link to="/" className="hover:text-[#1A1A1A]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#1A1A1A]">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-[#F5F0E8] overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-[#F5F0E8] overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#C9A962]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-8">
            <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] uppercase tracking-wider mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < product.rating ? 'fill-[#C9A962] text-[#C9A962]' : 'text-[#8B8580]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8B8580]">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl text-[#1A1A1A] font-serif mb-6">${product.price}</p>

            <p className="text-[#8B8580] mb-8 leading-relaxed">
              {product.description}. Crafted with precision and designed to bring joy for years to come.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm text-[#1A1A1A] mb-3">Color</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setVariant('gold')}
                  className={`px-6 py-3 border transition-all ${
                    variant === 'gold'
                      ? 'border-[#C9A962] bg-[#C9A962] text-white'
                      : 'border-[#8B8580]/30 text-[#1A1A1A] hover:border-[#C9A962]'
                  }`}
                >
                  Gold
                </button>
                <button
                  onClick={() => setVariant('silver')}
                  className={`px-6 py-3 border transition-all ${
                    variant === 'silver'
                      ? 'border-[#8B8580] bg-[#8B8580] text-white'
                      : 'border-[#8B8580]/30 text-[#1A1A1A] hover:border-[#8B8580]'
                  }`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm text-[#1A1A1A] mb-3">Quantity</label>
              <div className="flex items-center border border-[#8B8580]/30 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[#C9A962] transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="px-6 text-[#1A1A1A]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[#C9A962] transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-gold mb-4"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-[#8B8580]/20 mt-8">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-[#8B8580]/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-[#1A1A1A] uppercase tracking-wider text-sm">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp size={18} className="text-[#8B8580]" />
                    ) : (
                      <ChevronDown size={18} className="text-[#8B8580]" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-[#8B8580] text-sm leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-[#1A1A1A]">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}