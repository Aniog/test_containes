import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    id: "description",
    title: "Description",
    content: (product) => (
      <p className="text-sm text-text-body leading-relaxed font-light">{product.description}</p>
    ),
  },
  {
    id: "materials",
    title: "Materials & Care",
    content: (product) => (
      <div className="space-y-3">
        <p className="text-sm text-text-body leading-relaxed font-light">{product.materials}</p>
        <div className="text-sm text-text-body leading-relaxed font-light">
          <p className="font-medium mb-1">Care Instructions:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Avoid contact with water, perfume, and lotions</li>
            <li>Store in a dry place, preferably in the included pouch</li>
            <li>Clean gently with a soft, dry cloth</li>
            <li>Remove before sleeping, showering, or exercising</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    content: () => (
      <div className="space-y-3 text-sm text-text-body leading-relaxed font-light">
        <p>Free worldwide shipping on all orders over $75. Standard shipping takes 5-8 business days.</p>
        <p>Express shipping available at checkout (2-3 business days).</p>
        <p>We offer 30-day returns on all unworn items in original packaging. Exchanges are always free.</p>
      </div>
    ),
  },
];

export default function ProductAccordion({ product }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="w-full border-t border-border-light">
      {accordionData.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-border-light">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-accent-gold"
            >
              <span className="text-xs uppercase tracking-widest text-text-primary font-medium">
                {item.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 pb-5" : "max-h-0"
              }`}
            >
              {item.content(product)}
            </div>
          </div>
        );
      })}
    </div>
  );
}