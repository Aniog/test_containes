import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus, Star } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product.id, selectedVariant, quantity);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `This piece is crafted from 18K gold plated sterling silver, ensuring both beauty and durability. To maintain its luster, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.`
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Free worldwide shipping on all orders. Orders are processed within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging.`
    }
  ];

  return (
    <div className="pt-[var(--header-height)]">
      {/* Breadcrumb */}
      <div className="bg-[#F5F0E8] py-4">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link to="/" className="hover:text-[#1A1A1A]">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-[#1A1A1A]">Shop</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[4/5] bg-[#F5F0E8] overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 bg-[#F5F0E8] overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-[#C9A962]' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:pl-8">
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase mb-2">
                {product.name}
              </h1>
              
              {/* Price */}
              <p className="text-2xl font-medium mb-4">${product.price}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-[#C9A962] text-[#C9A962]' : 'text-[#D4CFC7]'}
                    />
                  ))}
                </div>
                <span className="text-sm text-[#6B6B6B]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-[#6B6B6B] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mb-6">
                <label className="block text-sm tracking-wider uppercase mb-3">
                  Finish: <span className="text-[#6B6B6B] font-normal">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-sm tracking-wider uppercase border transition-colors ${
                        selectedVariant === variant
                          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                          : 'border-[#E8E4DE] text-[#6B6B6B] hover:border-[#1A1A1A]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm tracking-wider uppercase mb-3">Quantity</label>
                <div className="flex items-center border border-[#E8E4DE] w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-[#C9A962] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} strokeWidth={2} />
                  </button>
                  <span className="px-6 py-2 border-x border-[#E8E4DE]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-[#C9A962] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="btn-accent w-full mb-6"
              >
                Add to Cart
              </button>

              {/* Accordions */}
              <div className="border-t border-[#E8E4DE]">
                {accordionItems.map((item) => (
                  <div key={item.id} className="border-b border-[#E8E4DE]">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                      className="w-full py-4 flex items-center justify-between text-left"
                    >
                      <span className="text-sm tracking-wider uppercase">{item.title}</span>
                      {openAccordion === item.id ? (
                        <ChevronUp size={18} strokeWidth={1.5} />
                      ) : (
                        <ChevronDown size={18} strokeWidth={1.5} />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-sm text-[#6B6B6B] leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section bg-[#F5F0E8]">
        <div className="container">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}