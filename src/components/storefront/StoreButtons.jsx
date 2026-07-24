export function AccentButton({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-full bg-velmora-champagne px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition duration-300 hover:bg-velmora-antique hover:text-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function OutlineButton({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-full border border-velmora-champagne/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cocoa transition duration-300 hover:border-velmora-antique hover:bg-velmora-champagne/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
