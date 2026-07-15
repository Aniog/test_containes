import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const accordions = [
  {
    title: 'Description',
    content: `Each Velmora piece is designed with intention and crafted with care. Our demi-fine jewelry bridges the gap between everyday accessories and luxury pieces — offering the look and feel of fine jewelry at an accessible price point.

Every item is made from recycled brass and plated with a thick layer of 18K gold, ensuring lasting beauty and a luxurious weight. The result is jewelry that feels substantial, looks expensive, and won't irritate sensitive skin.`,
  },
  {
    title: 'Materials & Care',
    content: `Materials: Recycled brass base with 18K gold plating. Crystal accents are hand-set using lead-free glass.

Care: To maintain the beauty of your jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth to restore shine.

With proper care, your Velmora pieces will maintain their luster for years to come.`,
  },
  {
    title: 'Shipping & Returns',
    content: `Shipping: Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping (2-4 days) available at checkout.

Returns: We offer a 30-day hassle-free return policy. Items must be unworn and in original packaging. Refunds are processed within 5 business days of receiving the return.

Exchanges: Need a different size or style? We're happy to exchange your item — just reach out to our team.`,
  },
]

export default function ProductAccordions() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="mt-12 border-t border-[#E8E4DF]">
      {accordions.map((acc, i) => (
        <div key={i} className="border-b border-[#E8E4DF]">
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span
              className="text-sm tracking-widest uppercase text-[#1A1A1A]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}
            >
              {acc.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#6B6560] transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-[#6B6560] leading-relaxed whitespace-pre-line">
              {acc.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
