import React from 'react'

const Toaster = ({ position = 'bottom-right' }) => {
  return (
    <div className={`fixed ${position.includes('right') ? 'right-4' : 'left-4'} ${position.includes('bottom') ? 'bottom-4' : 'top-4'} z-50 flex flex-col gap-2`}>
      {/* Sonner placeholder - in production, use actual sonner library */}
    </div>
  )
}

export { Toaster }
