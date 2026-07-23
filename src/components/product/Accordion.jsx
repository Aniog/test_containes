import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const items = [
  {
    title: 'Description',
    content:
      'Each piece is crafted with precision and care. Our demi-fine gold jewelry features 18K gold plating over brass, with genuine crystal accents. Designed for everyday wear with lasting shine.',
  },
  {
    title: 'Materials & Care',
    content:
      '18K gold plated over brass • Hypoallergenic • Nickel-free • Crystal accents. To maintain your jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch. Gently clean with a soft cloth.',
  },
  {
    title: 'Shipping & Returns',
    content:
      'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. Delivery takes 3-7 business days depending on your location. We offer 30-day returns for unworn items in original packaging.',
  },
]

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="divide-y divide-divider">
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-gold"
          >
            <span className="text-sm font-sans font-medium uppercase tracking-wider text-[#1A1A1A]">
              {item.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-taupe transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-taupe leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}