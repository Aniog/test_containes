import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const ProblemCard = ({ problem, solution }) => {
  return (
    <Card className="border-slate-200 h-full">
      <CardContent className="p-6">
        <div className="text-sm font-medium text-red-600 mb-2">Common Issue</div>
        <p className="text-slate-700 mb-4 leading-relaxed">{problem}</p>
        <div className="text-sm font-medium text-emerald-700 mb-1.5">How We Help</div>
        <p className="text-sm text-slate-600 leading-relaxed">{solution}</p>
      </CardContent>
    </Card>
  )
}

export default ProblemCard