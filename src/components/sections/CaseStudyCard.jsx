import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CaseStudyCard = ({ client, industry, challenge, solution, results, location }) => {
  return (
    <Card className="h-full border-slate-200">
      <CardHeader>
        <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">{industry} • {location}</div>
        <CardTitle className="text-lg leading-tight">{client}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
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
      </CardContent>
    </Card>
  )
}

export default CaseStudyCard