import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-velmora-accent text-velmora-ink hover:bg-velmora-accent-deep focus-visible:ring-velmora-accent',
  outline:
    'border border-velmora-line bg-transparent text-velmora-ink hover:border-velmora-accent hover:bg-velmora-sand focus-visible:ring-velmora-accent',
  ghost:
    'bg-transparent text-velmora-ink hover:bg-velmora-sand focus-visible:ring-velmora-accent',
}

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm',
  icon: 'h-11 w-11',
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium tracking-[0.18em] uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-velmora-paper disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
