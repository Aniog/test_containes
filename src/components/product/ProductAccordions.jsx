import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const accordions = [
  {
    id: 'description',
    title: 'Description',
    content: `Elevate your everyday look with this stunning piece from our demi-fine collection. Each item is carefully crafted with 18K gold plating over recycled brass, ensuring both beauty and sustainability.

The design draws inspiration from natural forms and architectural lines, creating pieces that transition seamlessly from day to night. Lightweight and comfortable for all-day wear.

All Velmora pieces are nickel-free and hypoallergenic, making them suitable for sensitive skin.`,
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: `Materials:
• 18K gold plated over recycled brass
• Nickel-free, hypoallergenic
• Crystal accents (where applicable)

Care Instructions:
• Store in the provided pouch when not wearing
• Avoid contact with water, perfume, and lotions
• Clean gently with a soft, dry cloth
• Remove before swimming, exercising, or sleeping

With proper care, your Velmora piece will maintain its beauty for years to come.`,
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: `Shipping:
• Free worldwide shipping on all orders
• Standard delivery: 5-10 business days
• Express delivery: 2-4 business days (additional cost)
• All orders are carefully packaged in our signature gift box

Returns:
• 30-day hassle-free returns
• Items must be unworn and in original packaging
• Return shipping is free for US orders
• Refunds processed within 5 business days of receipt

Exchanges:
• Need a different size or style? We're happy to help.
• Contact our team for exchange assistance.`,
  },
]

export default function ProductAccordions() {
  const [openId, setOpenId] = useState('description')

  return (
    <div className="space-y-0">
      {accordions.map((accordion) => (
        <div key={accordion.id} className="border-t border-foreground/10">
          <button
            onClick={() => setOpenId(openId === accordion.id ? null : accordion.id)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span className="text-sm uppercase tracking-wider">{accordion.title}</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                openId === accordion.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openId === accordion.id && (
            <div className="pb-6">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {accordion.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
