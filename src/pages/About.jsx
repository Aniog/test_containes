import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="section-title mb-6">Our Story</h1>
          <p className="text-brand-muted leading-relaxed mb-6">
            Velmora was born from a belief that fine jewelry should feel accessible, personal, and enduring. 
            Each piece is thoughtfully designed in our London studio, using 18K gold-plated brass and ethically 
            sourced crystals. We create jewelry that moves with you — from morning meetings to evening celebrations.
          </p>
          <p className="text-brand-muted leading-relaxed mb-8">
            Our name comes from the Latin "velum" (veil) and "mora" (pause) — a reminder to slow down and 
            savor the beautiful moments. Every Velmora piece is crafted to be worn, loved, and passed down.
          </p>
          <Link to="/shop">
            <Button className="btn-accent">Shop the Collection <ArrowRight className="w-4 h-4 ml-2" /></Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
