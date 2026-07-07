import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Accordion from '@/components/ui/Accordion';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const variants = ['Gold', 'Silver'];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="space-y-8">
      {/* Title & Price */}
      <div>
        <h1 className="product-name text-espresso-900 mb-2">
          {product.name}
        </h1>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-medium text-espresso-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'text-gold fill-gold'
                    : 'text-border'
                }`}
                strokeWidth={1.5}
              />
            ))}
            <span className="text-xs text-taupe ml-1">({product.reviews})</span>
          </div>
        </div>
        <p className="text-sm text-taupe">{product.material}</p>
      </div>

      {/* Variant Selector */}
      <div>
        <label className="block text-sm text-taupe mb-3">Finish</label>
        <div className="flex gap-3">
          {variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-3 border text-sm uppercase tracking-wider transition-all ${
                selectedVariant === variant
                  ? 'border-espresso-900 bg-espresso-900 text-white'
                  : 'border-border text-espresso-900 hover:border-espresso-900'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div>
        <label className="block text-sm text-taupe mb-3">Quantity</label>
        <div className="flex items-center border border-border rounded w-fit">
          <button
            onClick={decrementQuantity}
            className="p-3 text-taupe hover:text-espresso-900 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" strokeWidth={2} />
          </button>
          <span className="px-6 text-sm min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="p-3 text-taupe hover:text-espresso-900 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-gold text-white text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-gold-hover transition-colors"
      >
        <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
        Add to Cart
      </button>

      {/* Accordions */}
      <div className="pt-4">
        <Accordion title="Description" defaultOpen>
          <p>{product.description}</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <ul className="space-y-2">
            <li>• 18K gold-plated sterling silver base</li>
            <li>• Hypoallergenic and nickel-free</li>
            <li>• Store in original box or soft pouch</li>
            <li>• Avoid contact with water, perfume, and chemicals</li>
            <li>• Clean gently with a soft polishing cloth</li>
          </ul>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <ul className="space-y-2">
            <li>• Free worldwide shipping on all orders</li>
            <li>• Standard delivery: 5-7 business days</li>
            <li>• Express delivery: 2-3 business days</li>
            <li>• 30-day hassle-free returns</li>
            <li>• Free return shipping label included</li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductInfo;
