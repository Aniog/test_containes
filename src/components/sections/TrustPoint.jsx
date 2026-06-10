import React from 'react'

const TrustPoint = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-0.5">
        {Icon && <Icon className="w-5 h-5 text-blue-700" />}
      </div>
      <div>
        <div className="font-medium text-slate-900 text-sm mb-1">{title}</div>
        <div className="text-sm text-slate-600 leading-relaxed">{description}</div>
      </div>
    </div>
  )
}

export default TrustPoint
