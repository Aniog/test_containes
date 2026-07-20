import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Rating from '@/components/ui/Rating';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isCartLoading } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const increaseQty = () => {
    setQuantity(q => q + 1);
  };

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <h1 className="product-name text-charcoal">
        {product.name}
      </h1>

      {/* Price & Rating */}
      <div className="flex items-center gap-4">
        <span className="font-serif text-2xl text-gold">
          {formatPrice(product.price)}
        </span>
        <Rating rating={product.rating} reviews={product.reviews} size="default" />
      </div>

      {/* Short Description */}
      <p className="font-sans text-warmGray leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Variant Selector */}
      {product.variants.length > 1 && (
        <div>
          <label className="block font-sans text-sm font-medium text-charcoal mb-3">
            Finish: <span className="font-normal text-warmGray">{selectedVariant}</span>
          </label>
          <div className="flex gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 rounded-full border-2 font-sans text-sm transition-all ${
                  selectedVariant === variant
                    ? 'border-gold bg-gold text-white'
                    : 'border-border text-charcoal hover:border-gold'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <label className="block font-sans text-sm font-medium text-charcoal mb-3">
          Quantity
        </label>
        <div className="inline-flex items-center border border-border rounded">
          <button
            onClick={decreaseQty}
            disabled={quantity <= 1}
            className="p-3 hover:bg-parchment transition-colors disabled:opacity-50"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 font-sans text-charcoal min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={increaseQty}
            className="p-3 hover:bg-parchment transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        variant="primary"
        size="full"
        loading={isCartLoading}
        onClick={handleAddToCart}
      >
        Add to Bag
      </Button>

      {/* Accordions */}
      <div className="pt-4">
        <Accordion title="Description" defaultOpen>
          <p>{product.description}</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <div className="space-y-2">
            <p><strong>Materials:</strong> {product.materials}</p>
            <p><strong>Care:</strong> {product.care}</p>
          </div>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <div className="space-y-2">
            <p>Free worldwide shipping on all orders over $50.</p>
            <p>Standard delivery: 5-7 business days.</p>
            <p>Express delivery: 2-3 business days.</p>
            <p>30-day hassle-free returns. Items must be unworn with original packaging.</p>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductInfo;
