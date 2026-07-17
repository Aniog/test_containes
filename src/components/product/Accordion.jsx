import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "Description",
    content:
      "Each Velmora piece is crafted with meticulous attention to detail. Our designs are inspired by timeless elegance and modern sophistication, making them perfect for everyday wear and special occasions alike.",
  },
  {
    title: "Materials & Care",
    content:
      "Crafted from 18K gold plated over sterling silver. All crystals are ethically sourced. To preserve your jewelry, avoid contact with water, perfume, and lotions. Store in the included Velmora pouch. Gently polish with a soft cloth to restore shine.",
  },
  {
    title: "Shipping & Returns",
    content:
      "Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. We offer a 30-day return policy for unworn items in original packaging. Exchanges are complimentary. Contact our support team to initiate a return.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-8 space-y-0">
      {sections.map((section, i) => (
        <div key={section.title} className="border-t border-cream-200 last:border-b">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-sans text-xs uppercase tracking-wider text-clay-700">
              {section.title}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-clay-400 transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-48 pb-4" : "max-h-0"
            }`}
          >
            <p className="text-sm text-clay-600 font-sans leading-relaxed">
              {section.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}