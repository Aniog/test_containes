import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
];

const ProductInfo = ({ product }) => {
  const [tone, setTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, tone);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Name & Price */}
      <div>
        <h1 className="product-name text-xl md:text-2xl tracking-widest mb-2">{product.name}</h1>
        <div className="flex items-center gap-4">
          <span className="product-price text-xl">${product.price}</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                className={i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-charcoal-200'}
              />
            ))}
            <span className="text-xs text-charcoal-400 ml-1">({product.reviews})</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-charcoal-500 leading-relaxed">{product.description}</p>

      {/* Tone selector */}
      <div>
        <p className="text-[10px] tracking-widest uppercase text-charcoal-500 mb-3">Finish</p>
        <div className="flex gap-3">
          <button
            onClick={() => setTone('gold')}
            className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-colors ${
              tone === 'gold'
                ? 'border-gold-500 text-gold-600 bg-gold-50'
                : 'border-charcoal-200 text-charcoal-500 hover:border-charcoal-400'
            }`}
          >
            18K Gold
          </button>
          <button
            onClick={() => setTone('silver')}
            className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-colors ${
              tone === 'silver'
                ? 'border-gold-500 text-gold-600 bg-gold-50'
                : 'border-charcoal-200 text-charcoal-500 hover:border-charcoal-400'
            }`}
          >
            Silver Tone
          </button>
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-charcoal-200">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="px-4 py-2.5 text-sm font-medium text-charcoal-700 min-w-[40px] text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
          <span className="text-xs text-charcoal-400">Qty</span>
        </div>

        <button onClick={handleAdd} className="btn-accent w-full">
          {added ? 'Added to Bag' : 'Add to Bag'}
        </button>
      </div>

      {/* Accordions */}
      <div className="border-t border-charcoal-100 pt-4">
        {accordionItems.map((item) => (
          <div key={item.key} className="border-b border-charcoal-100">
            <button
              onClick={() => toggleAccordion(item.key)}
              className="flex items-center justify-between w-full py-4 text-left"
            >
              <span className="text-xs tracking-widest uppercase text-charcoal-700 font-medium">{item.label}</span>
              <ChevronDown
                size={14}
                className={`text-charcoal-400 transition-transform duration-300 ${
                  openAccordion === item.key ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === item.key ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-charcoal-500 leading-relaxed">
                {product[item.key]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;