import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center font-sans uppercase tracking-widest3 text-xs transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed select-none'

const variants = {
  primary: 'bg-gold text-ivory hover:bg-gold-deep px-8 py-4',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-ivory px-8 py-4',
  outlineLight: 'border border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso px-8 py-4',
  ghost: 'text-ink hover:text-gold-deep px-2 py-1',
  link: 'text-ink underline-offset-4 hover:underline px-0 py-0',
}

export default function Button({ variant = 'primary', className, children, ...props }) {
  return (
    <button className={cn(base, variants[variant] || variants.primary, className)} {...props}>
      {children}
    </button>
  )
}
