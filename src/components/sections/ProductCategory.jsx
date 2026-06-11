import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const ProductCategory = ({ title, items, description }) => {
  return (
    <Card className="border-slate-200 h-full">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-slate-900">{title}</h3>
        {description && <p className="text-sm text-slate-600 mb-4 leading-relaxed">{description}</p>}
        <ul className="text-sm text-slate-600 space-y-1.5">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 inline-block w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default ProductCategory