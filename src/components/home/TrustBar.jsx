import React from 'react'

export function TrustBar() {
  return (
    <div className="bg-secondary text-secondary-foreground py-4 border-b">
      <div className="container mx-auto px-4 w-full overflow-hidden">
        <ul className="flex items-center justify-between md:justify-center md:space-x-12 text-xs md:text-sm font-medium tracking-widest uppercase overflow-x-auto whitespace-nowrap hide-scrollbar space-x-6">
          <li className="flex-shrink-0">Free Worldwide Shipping</li>
          <li className="hidden md:block flex-shrink-0 opacity-50">&middot;</li>
          <li className="flex-shrink-0">30-Day Returns</li>
          <li className="hidden md:block flex-shrink-0 opacity-50">&middot;</li>
          <li className="flex-shrink-0">18K Gold Plated</li>
          <li className="hidden md:block flex-shrink-0 opacity-50">&middot;</li>
          <li className="flex-shrink-0">Hypoallergenic</li>
        </ul>
      </div>
    </div>
  )
}
