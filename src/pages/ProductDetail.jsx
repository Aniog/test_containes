import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Plus, Minus, ChevronRight, Star } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === parseInt(id));
    if (found) {
      setProduct(found);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#8A8580]">Loading...</p>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      title: 'Description',
      content: product.description + ' Each piece is carefully crafted with attention to detail, using premium materials that are gentle on sensitive skin.',
    },
    {
      title: 'Materials & Care',
      content: '18K gold plated over brass. Hypoallergenic and nickel-free. To care for your Velmora jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch when not worn.',
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Your order will be gift-wrapped in our signature Velmora packaging.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-20 md:pt-24">
      <div className="container-luxury py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-[#8A8580] mb-8">
          <Link to="/" className="hover:text-[#C9A96E]">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-[#C9A96E]">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#F5F0EB] overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://placehold.co/600x800/C9A96E/FAF8F5?text=' + product.name.replace(/\s/g, '+'); }}
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 bg-[#F5F0EB] overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-[#C9A96E]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="py-4">
            <h1
              className="text-3xl md:text-4xl font-light mb-2 product-name"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {product.name}
            </h1>

            <p className="text-xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-[#C9A96E] fill-[#C9A96E]' : 'text-[#E8E2D9] fill-[#E8E2D9]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8A8580]">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#8A8580] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-[0.15em] font-medium mb-3 block">Tone</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 text-sm border transition-all ${
                      variant === v
                        ? 'border-[#C9A96E] bg-[#C9A96E] text-white'
                        : 'border-[#E8E2D9] text-[#1A1A1A] hover:border-[#C9A96E]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-[0.15em] font-medium mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#E8E2D9]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:text-[#C9A96E] transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 py-2 text-sm w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:text-[#C9A96E] transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, quantity, variant)}
              className="w-full bg-[#1A1A1A] text-white py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#C9A96E] transition-colors duration-300 mb-4"
            >
              Add to Cart — ${((product.price * quantity).toFixed(2))}
            </button>

            {/* Accordions */}
            <div className="mt-10 space-y-0">
              {accordions.map((acc, i) => (
                <div key={acc.title} className="border-t border-[#E8E2D9]">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-[0.15em] font-medium"
                  >
                    {acc.title}
                    <span className="text-[#C9A96E] text-lg">
                      {activeAccordion === i ? '−' : '+'}
                    </span>
                  </button>
                  {activeAccordion === i && (
                    <div className="pb-4 text-sm text-[#8A8580] leading-relaxed">{acc.content}</div>
                  )}
                </div>
              ))}
              <div className="border-t border-b border-[#E8E2D9]" />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2
            className="text-2xl md:text-3xl font-light mb-8 text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3/4] bg-[#F5F0EB] overflow-hidden mb-3">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://placehold.co/400x533/C9A96E/FAF8F5?text=' + p.name.replace(/\s/g, '+'); }}
                  />
                </div>
                <h3
                  className="text-sm font-light product-name"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-[#8A8580] mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
