import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[11px] tracking-wider uppercase font-medium text-velvet-800">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velvet-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className="text-sm text-velvet-600 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.slug === slug);

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velvet-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold-600 underline underline-offset-4 text-sm">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gold-200/60 via-velvet-100 to-velvet-200/50" />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-velvet-100 rounded-sm overflow-hidden transition-all duration-200 ${i === activeImage ? 'ring-1 ring-gold-500 ring-offset-2' : 'opacity-60 hover:opacity-100'}`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gold-200/50 to-velvet-200/40" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pt-4">
            {/* Category */}
            <p className="text-gold-600 text-[10px] tracking-[0.2em] uppercase font-medium mb-2">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-2xl lg:text-3xl tracking-[0.15em] text-velvet-900 font-medium mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-xl font-medium text-velvet-900 mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-velvet-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-velvet-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-velvet-700 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-[11px] tracking-wider uppercase font-medium text-velvet-800 mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2.5 text-sm border transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-velvet-900 bg-velvet-900 text-white'
                        : 'border-velvet-200 text-velvet-700 hover:border-velvet-400'
                    }`}
                  >
                    {color} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-velvet-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-11 flex items-center justify-center text-velvet-600 hover:text-velvet-900 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 h-11 flex items-center justify-center text-sm font-medium text-velvet-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-11 flex items-center justify-center text-velvet-600 hover:text-velvet-900 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    color: selectedColor,
                    quantity,
                  })
                }
                className="flex-1 py-3.5 bg-gold-600 text-white text-xs tracking-wider uppercase font-medium hover:bg-gold-500 transition-colors"
              >
                Add to Bag — ${(product.price * quantity).toFixed(0)}
              </button>
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              <Accordion title="Description" defaultOpen>
                {product.details}
              </Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-3"><strong className="text-velvet-800">Materials:</strong> {product.materials}</span>
                <span className="block"><strong className="text-velvet-800">Care:</strong> {product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24">
          <h2 className="font-serif text-2xl text-velvet-900 font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${related.slug}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-gold-200/50 to-velvet-200/40 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <h3 className="font-serif text-[11px] tracking-[0.15em] text-velvet-800 mb-1 truncate">
                    {related.name}
                  </h3>
                  <p className="text-sm font-medium text-velvet-900">${related.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
