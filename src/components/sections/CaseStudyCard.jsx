import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const CaseStudyCard = ({ client, industry, challenge, solution, results, product }) => {
  return (
    <Card className="h-full border-slate-200">
      <CardContent className="p-6">
        <div className="text-xs uppercase tracking-widest text-blue-700 font-medium mb-2">{industry}</div>
        <h4 className="font-semibold text-lg mb-1">{client}</h4>
        {product && <div className="text-sm text-slate-500 mb-4">{product}</div>}
        
        <div className="space-y-4 text-sm">
          <div>
            <div className="font-medium text-slate-700 mb-1">Challenge</div>
            <p className="text-slate-600 leading-relaxed">{challenge}</p>
          </div>
          <div>
            <div className="font-medium text-slate-700 mb-1">Solution</div>
            <p className="text-slate-600 leading-relaxed">{solution}</p>
          </div>
          <div>
            <div className="font-medium text-slate-700 mb-1">Results</div>
            <p className="text-slate-600 leading-relaxed">{results}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CaseStudyCard
