import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-amber-200 text-stone-950 hover:bg-amber-100 shadow-[0_20px_40px_rgba(217,119,6,0.18)]',
  secondary:
    'border border-stone-300 bg-transparent text-stone-900 hover:border-amber-300 hover:text-stone-950',
  inverse:
    'bg-stone-950 text-stone-50 hover:bg-stone-800',
  ghost:
    'bg-stone-100 text-stone-900 hover:bg-stone-200',
}

function buttonStyles({ variant = 'primary', className = '' } = {}) {
  return cn(
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-medium uppercase tracking-[0.28em] transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2',
    variants[variant],
    className,
  )
}

export default function Button({
  children,
  className,
  variant,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, className })}
      {...props}
    >
      {children}
    </button>
  )
}
