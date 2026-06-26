import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const CTA = ({ title = "Ready to start sourcing?", subtitle = "Get a free sourcing quote within 24 hours." }) => {
  return (
    <div className="bg-slate-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-lg text-slate-300 mb-8">{subtitle}</p>
        <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
          <Link to="/contact">Get a Free Sourcing Quote</Link>
        </Button>
      </div>
    </div>
  )
}

export default CTA
