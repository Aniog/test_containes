import { cn } from "@/lib/utils"

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full bg-transparent border-b border-velmora-taupe/50 px-0 py-3 text-velmora-espresso placeholder:text-velmora-mocha/60 focus:outline-none focus:border-velmora-gold transition-colors font-sans text-sm",
        className
      )}
      {...props}
    />
  )
}
