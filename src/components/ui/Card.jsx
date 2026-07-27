import { cn } from "@/lib/utils"

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  )
}
