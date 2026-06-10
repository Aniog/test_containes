import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ServiceCard = ({ icon: Icon, title, description, details }) => {
  const renderDetails = () => {
    if (!details) return null
    if (Array.isArray(details)) {
      return (
        <ul className="text-xs text-slate-500 space-y-1 mt-2">
          {details.map((d, i) => <li key={i}>• {d}</li>)}
        </ul>
      )
    }
    return <p className="text-xs text-slate-500 leading-relaxed mt-2">{details}</p>
  }

  return (
    <Card className="h-full border-slate-200 hover:border-slate-300 transition-colors">
      <CardHeader>
        <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
          {Icon && <Icon className="w-5 h-5 text-blue-700" />}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 text-sm leading-relaxed mb-1">{description}</p>
        {renderDetails()}
      </CardContent>
    </Card>
  )
}

export default ServiceCard
