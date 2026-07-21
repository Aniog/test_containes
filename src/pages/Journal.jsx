import React from 'react'

const Journal = () => {
  return (
    <div className="pt-20 lg:pt-24 bg-cream min-h-screen">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="font-sans text-xs font-semibold tracking-section uppercase text-gold mb-3">
            The Journal
          </h1>
          <p className="font-serif text-4xl md:text-5xl font-medium text-base">
            Stories & Inspiration
          </p>
        </div>

        <div className="text-center py-20">
          <p className="font-serif text-xl text-muted mb-2">Coming Soon</p>
          <p className="font-sans text-sm text-muted/70">We're crafting something beautiful for you.</p>
        </div>
      </div>
    </div>
  )
}

export default Journal
