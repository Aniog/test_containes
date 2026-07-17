import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from '../shop/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'This piece is crafted from 18K gold-plated brass with a protective coating. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging. Free return shipping on all orders.'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[#8A8A8A]">
          <Link to="/" className="hover:text-[#1A1A1A]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#1A1A1A]">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-[#F5F0E8] mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-[#F5F0E8] overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#C9A962]' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="font-serif text-3xl md:text-4xl mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{
                      color: i < Math.floor(product.rating) ? '#C9A962' : '#E8E4DE',
                      fill: i < Math.floor(product.rating) ? '#C9A962' : 'none'
                    }}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8A8A8A]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl mb-6" style={{ color: 'var(--color-gold-dark)' }}>
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-[#8A8A8A] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm font-sans tracking-wide mb-3 block">
                Metal Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 text-sm font-sans tracking-wider uppercase border transition-colors ${
                      selectedVariant === variant
                        ? 'border-[#C9A962] bg-[#C9A962] text-[#0D0D0D]'
                        : 'border-[#E8E4DE] hover:border-[#C9A962]'
                    }`}
                  >
                    {variant} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm font-sans tracking-wide mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#E8E4DE]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[#F5F0E8] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[#F5F0E8] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, quantity, selectedVariant)}
              className="btn-accent w-full justify-center mb-4"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-[#E8E4DE] mt-8">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-[#E8E4DE]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-sans text-sm tracking-wide">{accordion.title}</span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <p className="pb-4 text-sm text-[#8A8A8A] leading-relaxed">
                      {accordion.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}