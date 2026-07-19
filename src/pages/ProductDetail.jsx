import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Heart } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-2">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold text-sm hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(id);

  const handleAdd = () => {
    addItem(product, quantity, variant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbnails = Array.from({ length: product.images }, (_, i) => i);

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: ${product.care}`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. Standard delivery takes 5-8 business days. Express shipping available at checkout.\n\nWe accept returns within 30 days of delivery. Items must be unworn and in original packaging.',
    },
  ];

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-velmora-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-velmora-stone mb-6 md:mb-8">
          <Link to="/" className="hover:text-velmora-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-ink">Shop</Link>
          <span>/</span>
          <span className="text-velmora-ink capitalize">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
              {thumbnails.map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`shrink-0 w-16 h-16 md:w-20 md:h-20 bg-velmora-cream border-2 transition-colors ${
                    selectedImage === i
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-taupe'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23F5F0EA" width="100" height="100"/><circle cx="50" cy="50" r="25" fill="%23C9A96E" opacity="${0.2 + i * 0.1}"/><circle cx="50" cy="50" r="10" fill="%23fff" opacity="0.2"/></svg>')`,
                    }}
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-velmora-cream relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800"><rect fill="%23F5F0EA" width="600" height="800"/><rect x="200" y="300" width="200" height="200" rx="100" fill="%23C9A96E" opacity="${0.25 + selectedImage * 0.08}"/><circle cx="300" cy="400" r="40" fill="%23fff" opacity="0.25"/></svg>')`,
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h1 className="font-serif text-2xl md:text-3xl tracking-wide uppercase text-velmora-ink">
                {product.name}
              </h1>
              <button className="p-2 text-velmora-taupe hover:text-velmora-rose transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium text-velmora-ink">${product.price}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="text-sm text-velmora-stone">{product.rating}</span>
              </div>
              <span className="text-xs text-velmora-stone">({product.reviews} reviews)</span>
            </div>

            <p className="text-sm text-velmora-stone leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mb-6">
              <span className="text-xs tracking-widest uppercase text-velmora-stone font-medium block mb-3">
                Tone
              </span>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all ${
                      variant === v
                        ? 'border-velmora-ink bg-velmora-ink text-white'
                        : 'border-velmora-taupe text-velmora-stone hover:border-velmora-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <span className="text-xs tracking-widest uppercase text-velmora-stone font-medium block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <button
                  className="w-10 h-10 border border-velmora-taupe flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button
                  className="w-10 h-10 border border-velmora-taupe flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 mb-8 ${
                added
                  ? 'bg-velmora-gold text-white'
                  : 'bg-velmora-ink text-white hover:bg-velmora-warm'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-sand">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velmora-sand">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? null : acc.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-widest uppercase font-medium text-velmora-ink">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-velmora-stone transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velmora-stone leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-ink mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
