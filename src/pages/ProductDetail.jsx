import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, Shield, RotateCcw, Sparkles, Heart } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

const variants = ['Gold', 'Silver'];

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="text-[#C8A45C] mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, quantity, variant);
    setQuantity(1);
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-[#6B6B6B] hover:text-[#C8A45C] tracking-wide uppercase transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Gallery */}
          <ProductGallery images={product.images} />

          {/* Info */}
          <div className="md:sticky md:top-28 md:self-start">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C8A45C] font-medium mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] font-light tracking-[0.05em] uppercase mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#C8A45C] text-[#C8A45C]'
                        : 'text-[#E8E2D8]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#6B6B6B]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-medium text-[#1A1A1A] mb-6">
              ${product.price}
            </p>

            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-3">
                Finish: <span className="text-[#1A1A1A] font-medium">{variant}</span>
              </p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase border transition-all duration-200 ${
                      variant === v
                        ? 'border-[#C8A45C] bg-[#C8A45C] text-white'
                        : 'border-[#E8E2D8] text-[#6B6B6B] hover:border-[#C8A45C]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-[#E8E2D8]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-sm hover:bg-[#FBF8F4]"
                >
                  -
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium border-x border-[#E8E2D8]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-sm hover:bg-[#FBF8F4]"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 bg-[#C8A45C] text-white py-3 uppercase tracking-[0.2em] text-sm font-medium hover:bg-[#B8944E] transition-all duration-300"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Trust features */}
            <div className="grid grid-cols-2 gap-4 py-6 border-t border-[#E8E2D8] mb-6">
              {[
                { icon: Sparkles, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' },
                { icon: Shield, text: '18K Gold Plated' },
                { icon: Heart, text: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="w-3.5 h-3.5 text-[#C8A45C]" />
                  <span className="text-xs text-[#6B6B6B]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <ProductAccordion product={product} />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-[#E8E2D8]">
        <RelatedProducts currentId={product.id} />
      </div>
    </main>
  );
}