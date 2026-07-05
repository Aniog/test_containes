import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const accordionItems = [
  {
    title: 'Description',
    contentKey: 'description',
  },
  {
    title: 'Materials & Care',
    contentKey: 'care',
  },
  {
    title: 'Shipping & Returns',
    contentKey: 'shipping',
  },
]

export default function ProductAccordion({ description, material, care }) {
  const [openIndex, setOpenIndex] = useState(0)

  const contentMap = {
    description: description,
    care: (
      <div className="space-y-2">
        <p className="text-velvet-600 text-sm"><strong className="text-velvet-900">Materials:</strong> {material}</p>
        <p className="text-velvet-600 text-sm"><strong className="text-velvet-900">Care:</strong> {care}</p>
      </div>
    ),
    shipping: (
      <div className="space-y-2">
        <p className="text-velvet-600 text-sm">
          Free worldwide shipping on all orders. Orders are processed within 1–2 business days.
          Estimated delivery: 5–10 business days for international, 3–5 for domestic.
        </p>
        <p className="text-velvet-600 text-sm">
          We offer 30-day hassle-free returns. Items must be unworn and in original packaging.
          We cover the return shipping for exchanges.
        </p>
      </div>
    ),
  }

  const labels = [
    { title: 'Description', key: 'description' },
    { title: 'Materials & Care', key: 'care' },
    { title: 'Shipping & Returns', key: 'shipping' },
  ]

  return (
    <div className="space-y-0">
      {labels.map((item, i) => (
        <div key={item.key} className="border-t border-velvet-200/60 first:border-t-0">
          <button
            className="flex items-center justify-between w-full py-4 md:py-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
          >
            <span className="text-xs uppercase tracking-[0.12em] text-velvet-900 font-medium">
              {item.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-velvet-500 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-4 md:pb-5' : 'max-h-0'
            }`}
          >
            <div className="text-velvet-600 text-sm leading-relaxed">
              {contentMap[item.key]}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}