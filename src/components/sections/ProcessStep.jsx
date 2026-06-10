import React from 'react'

const ProcessStep = ({ number, title, description, items }) => {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-semibold">
          {number}
        </div>
      </div>
      <div className="flex-1 pb-8">
        <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">{description}</p>
        {items && items.length > 0 && (
          <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ProcessStep
