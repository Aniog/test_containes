export function Modal({ open, onClose, title, children, size = 'md' }) {
  if (!open) return null

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative w-full ${sizes[size]} bg-[#131629] border border-[#2a2f52] rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#2a2f52]">
          <h2 className="text-[#e8e4d9] font-bold text-lg">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#5c5870] hover:text-[#e8e4d9] transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
