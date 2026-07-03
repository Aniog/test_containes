import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordionItems = [
  {
    id: 'description',
    title: 'Description',
  },
  {
    id: 'materials',
    title: 'Materials & Care',
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
  },
];

export default function ProductAccordion({ product }) {
  const [openId, setOpenId] = useState('description');

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const renderContent = (id) => {
    switch (id) {
      case 'description':
        return (
          <div className="text-[#6B6560] leading-relaxed">
            <p>{product.description}</p>
          </div>
        );
      case 'materials':
        return (
          <div className="space-y-4 text-[#6B6560] leading-relaxed">
            <div>
              <h4 className="font-medium text-[#2D2926] mb-1">Materials</h4>
              <p>{product.materials}</p>
            </div>
            <div>
              <h4 className="font-medium text-[#2D2926] mb-1">Care Instructions</h4>
              <p>{product.care}</p>
            </div>
          </div>
        );
      case 'shipping':
        return (
          <div className="space-y-4 text-[#6B6560] leading-relaxed">
            <div>
              <h4 className="font-medium text-[#2D2926] mb-1">Shipping</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Free standard shipping on orders over $75</li>
                <li>Express shipping available at checkout</li>
                <li>International shipping to 50+ countries</li>
                <li>Orders typically ship within 1-2 business days</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[#2D2926] mb-1">Returns & Exchanges</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>30-day return window for unworn items</li>
                <li>Free return shipping on US orders</li>
                <li>Exchange for different size or color</li>
                <li>Final sale items are not eligible for return</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border-t border-[#E8E4DC]">
      {accordionItems.map((item) => (
        <div key={item.id} className="border-b border-[#E8E4DC]">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span 
              className="font-medium text-[#2D2926]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}
            >
              {item.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#6B6560] transition-transform duration-300 ${
                openId === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === item.id ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
          >
            {renderContent(item.id)}
          </div>
        </div>
      ))}
    </div>
  );
}
