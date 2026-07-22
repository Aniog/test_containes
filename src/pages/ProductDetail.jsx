import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-[#A0988E]">Product not found</p>
          <Link to="/shop" className="text-[#C9A96E] text-sm mt-4 inline-block hover:text-[#D4B87A]">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. Standard shipping 5-8 business days. 30-day return policy for unworn items in original packaging.' },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-[#1A1A1A] overflow-hidden rounded-sm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 md:w-20 md:h-20 bg-[#1A1A1A] overflow-hidden rounded-sm border-2 transition-colors ${
                      selectedImage === idx ? 'border-[#C9A96E]' : 'border-transparent hover:border-[#2A2A2A]'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product info */}
          <div className="md:pt-8">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#6B6560] mb-3 font-sans">
              {product.category}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#F5F0EB] font-serif tracking-widest uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#C9A96E] text-[#C9A96E]'
                        : 'text-[#2A2A2A]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#6B6560]">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl text-[#C9A96E] mt-6 font-medium">${product.price}</p>
            <p className="text-sm text-[#A0988E] mt-4 leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs tracking-widest uppercase text-[#A0988E] mb-3">Variant: <span className="text-[#F5F0EB]">{selectedVariant}</span></p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-[#C9A96E] text-[#C9A96E] bg-[#C9A96E]/10'
                        : 'border-[#2A2A2A] text-[#A0988E] hover:border-[#6B6560]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-[#A0988E] mb-3">Quantity</p>
              <div className="flex items-center border border-[#2A2A2A] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-6 py-2.5 text-sm text-[#F5F0EB] font-medium min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-[#C9A96E] text-[#0F0F0F] py-4 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#D4B87A] transition-all duration-300 flex items-center justify-center gap-2 mt-8"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#2A2A2A]">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-[#2A2A2A]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.id
                      ? <ChevronUp className="w-3.5 h-3.5" />
                      : <ChevronDown className="w-3.5 h-3.5" />
                    }
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[#A0988E] leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-28 mb-16">
            <div className="border-t border-[#2A2A2A] pt-12 md:pt-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl text-[#F5F0EB] font-serif">You May Also Like</h2>
                <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mt-3" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((rp) => (
                  <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                    <div className="aspect-[3/4] bg-[#1A1A1A] overflow-hidden rounded-sm">
                      <img
                        src={rp.images[0]}
                        alt={rp.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="text-[10px] md:text-xs tracking-widest uppercase text-[#F5F0EB] font-sans group-hover:text-[#C9A96E] transition-colors">
                        {rp.name}
                      </h3>
                      <p className="text-xs text-[#C9A96E] mt-1">${rp.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}