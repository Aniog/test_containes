import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const ProductCategory = ({ title, items, examples }) => {
  const listItems = Array.isArray(items) ? items : []
  return (
    <Card className="border-slate-200 h-full">
      <CardContent className="p-6">
        <h4 className="font-semibold mb-3 text-slate-900">{title}</h4>
        <ul className="text-sm text-slate-600 space-y-1.5 mb-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {examples && (
          <div className="text-xs text-slate-500 border-t border-slate-100 pt-3">
            Example products: {examples}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ProductCategory
