const baseClasses =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition duration-300 focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-60'

const variants = {
  solid:
    'bg-velmora-champagne text-velmora-ink shadow-sm hover:bg-velmora-antique hover:text-velmora-porcelain',
  outline:
    'border border-velmora-champagne text-velmora-ink hover:bg-velmora-ink hover:text-velmora-porcelain',
  dark: 'bg-velmora-ink text-velmora-porcelain hover:bg-velmora-espresso',
  ghost:
    'text-velmora-ink hover:bg-velmora-blush hover:text-velmora-espresso',
}

export default function Button({ children, className = '', variant = 'solid', ...props }) {
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
