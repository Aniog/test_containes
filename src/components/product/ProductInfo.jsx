import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const accordionData = [
  {
    title: 'Description',
    content: '',
  },
  {
    title: 'Materials & Care',
    content: '',
  },
  {
    title: 'Shipping & Returns',
    content: '',
  },
];

export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('Description');
  const { addItem } = useCart();

  const getContent = (title) => {
    switch (title) {
      case 'Description':
        return product.description;
      case 'Materials & Care':
        return (
          <>
            <p className="mb-2"><strong className="text-velvet-700">Materials:</strong> {product.materials}</p>
            <p><strong className="text-velvet-700">Care:</strong> {product.care}</p>
          </>
        );
      case 'Shipping & Returns':
        return (
          <>
            <p className="mb-2"><strong className="text-velvet-700">Shipping:</strong> {product.shipping}</p>
            <p><strong className="text-velvet-700">Returns:</strong> {product.returns}</p>
          </>
        );
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Product name */}
      <div>
        <h1 id="pdp-name" className="font-serif text-2xl md:text-3xl font-medium tracking-widest-plus uppercase text-velvet-900">
          {product.name}
        </h1>
        <p className="mt-2 text-2xl font-light text-velvet-700">
          ${product.price}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-gold-400 text-gold-400'
                  : 'text-velvet-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-velvet-500">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-velvet-600 text-sm leading-relaxed">
        {product.description}
      </p>

      {/* Color selector */}
      <div>
        <p className="text-xs tracking-widest uppercase text-velvet-500 mb-3">
          Finish: <span className="text-velvet-700 font-medium capitalize">{selectedColor}</span>
        </p>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-5 py-2 text-xs tracking-wider uppercase rounded-sm border transition-all duration-300 ${
                selectedColor === color
                  ? 'border-velvet-900 bg-velvet-900 text-velvet-50'
                  : 'border-velvet-200 text-velvet-600 hover:border-velvet-400'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs tracking-widest uppercase text-velvet-500 mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-velvet-200 rounded-sm w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-velvet-500 hover:text-velvet-800 transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-12 text-center text-sm text-velvet-700">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-velvet-500 hover:text-velvet-800 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={() => {
          for (let i = 0; i < quantity; i++) {
            addItem(product, selectedColor);
          }
        }}
        className="btn-accent w-full py-4 text-sm"
      >
        Add to Cart — ${(product.price * quantity).toFixed(0)}
      </button>

      {/* Accordions */}
      <div className="border-t border-velvet-200 pt-4 mt-2">
        {accordionData.map(({ title }) => (
          <div key={title} className="border-b border-velvet-100">
            <button
              onClick={() => setOpenAccordion(openAccordion === title ? '' : title)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-xs tracking-widest uppercase text-velvet-600 font-medium">
                {title}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-velvet-400 transition-transform duration-300 ${
                  openAccordion === title ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === title ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <div className="text-sm text-velvet-600 leading-relaxed">
                {getContent(title)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}