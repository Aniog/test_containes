import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ProductCard = ({ product, onRequestQuote }) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="mb-6">
        <div className="w-14 h-14 bg-[#f8f7f4] rounded-xl flex items-center justify-center mb-4">
          <product.icon className="w-7 h-7 text-[#1a1f2e]" />
        </div>
        <h3 className="text-2xl font-semibold text-[#1a1f2e] mb-3">{product.name}</h3>
        <p className="text-[#4a5568] leading-relaxed">{product.description}</p>
      </div>

      <div className="mt-auto">
        <div className="border-t border-[#e2e8f0] pt-6 mb-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            {product.specs.map((spec, index) => (
              <div key={index}>
                <span className="text-[#a0aec0] block">{spec.label}</span>
                <span className="font-medium text-[#2d3748]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => onRequestQuote(product.name)}
        >
          Request Quote
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;