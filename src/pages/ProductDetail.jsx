import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-widest">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 text-sm text-stone-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h2 className="font-serif text-3xl">Product Not Found</h2>
        <Link to="/shop" className="mt-4 inline-block text-velmora-gold underline">Back to Shop</Link>
      </div>
    );
  }

  const images = [
    product.imageQuery,
    product.hoverQuery,
    product.imageQuery + ' alternate angle',
  ];

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 md:pt-24 bg-velmora-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-8 uppercase tracking-widest">
          <Link to="/" className="hover:text-velmora-dark">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-velmora-dark">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velmora-dark">{product.shortName}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 overflow-hidden transition-colors ${
                    selectedImage === idx ? 'border-velmora-dark' : 'border-transparent'
                  }`}
                >
                  <img
                    src={`https://image.pollinations.ai/prompt/${encodeURIComponent(img)}?width=200&height=250&nologo=true`}
                    alt={`${product.shortName} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-stone-100 aspect-[4/5]">
              <img
                src={`https://image.pollinations.ai/prompt/${encodeURIComponent(images[selectedImage])}?width=800&height=1000&nologo=true`}
                alt={product.shortName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'fill-stone-200 text-stone-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-light">${product.price.toFixed(2)}</p>
            <p className="mt-5 text-sm text-stone-600 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-sm uppercase tracking-widest border transition-colors ${
                      variant === v
                        ? 'border-velmora-dark bg-velmora-dark text-white'
                        : 'border-stone-300 text-stone-600 hover:border-velmora-dark'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Quantity</p>
              <div className="flex items-center border border-stone-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-stone-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm tabular-nums min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-stone-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="mt-8 w-full py-4 bg-velmora-gold text-white text-sm uppercase tracking-widest hover:bg-velmora-dark transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders over $50. Standard delivery 5–10 business days. 
                  Express delivery available at checkout. 30-day hassle-free returns — items must be unused 
                  and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} showAddToCart={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
