import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

const accordionData = [
  {
    id: 'description',
    title: 'Description',
    contentKey: 'description',
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    getContent: (product) => (
      <div className="space-y-4">
        <div>
          <h4 className="font-sans font-medium text-espresso mb-2">Materials</h4>
          <p className="text-charcoal-600">{product.materials}</p>
        </div>
        <div>
          <h4 className="font-sans font-medium text-espresso mb-2">Care Instructions</h4>
          <p className="text-charcoal-600">{product.care}</p>
        </div>
      </div>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-sans font-medium text-espresso mb-2">Shipping</h4>
          <ul className="space-y-2 text-charcoal-600">
            <li>Free standard shipping on all orders</li>
            <li>Express shipping available at checkout</li>
            <li>Orders typically ship within 1-2 business days</li>
            <li>Tracking information provided via email</li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-medium text-espresso mb-2">Returns</h4>
          <ul className="space-y-2 text-charcoal-600">
            <li>30-day return window from delivery date</li>
            <li>Items must be unworn and in original packaging</li>
            <li>Free return shipping on all orders</li>
            <li>Refunds processed within 5-7 business days</li>
          </ul>
        </div>
      </div>
    ),
  },
];

function AccordionItem({ item, product, isOpen, onToggle }) {
  const getContent = () => {
    if (item.getContent) {
      return item.getContent(product);
    }
    if (item.content) {
      return item.content;
    }
    if (item.contentKey && product) {
      return <p className="text-charcoal-600">{product[item.contentKey]}</p>;
    }
    return null;
  };

  return (
    <div className="border-b border-charcoal-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-medium text-espresso">{item.title}</span>
        <span className={cn('text-charcoal-500 transition-transform', isOpen && 'rotate-45')}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'
        )}
      >
        {getContent()}
      </div>
    </div>
  );
}

export default function ProductAccordion({ product }) {
  const [openId, setOpenId] = useState('description');

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border-t border-charcoal-200">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          product={product}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
