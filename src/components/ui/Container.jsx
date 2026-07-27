import { cn } from "@/lib/utils"

const Container = ({ children, className, size = "default" }) => {
  const sizes = {
    sm: "max-w-5xl",
    default: "max-w-7xl",
    lg: "max-w-8xl",
  }
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  )
}

export default Container
