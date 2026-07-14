import React from 'react'

export default function JournalPage() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">Journal</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-10" />
        <p className="text-sm text-stone-500 font-sans">Coming soon — styling guides, care tips, and behind-the-scenes stories.</p>
      </div>
    </div>
  )
}
