import { cn } from "@/lib/utils"
import Container from "./Container"

const bgMap = {
  white: "bg-white text-navy-600",
  light: "bg-slate-50 text-navy-600",
  navy: "bg-navy-600 text-white",
  dark: "bg-navy-700 text-white",
  accent: "bg-accent-500 text-white",
}

export default function Section({
  background = "white",
  size = "default",
  className,
  children,
  id,
}) {
  const sizeCls =
    size === "compact" ? "py-12 md:py-16" : "py-16 md:py-20 lg:py-24"
  return (
    <section
      id={id}
      className={cn(bgMap[background], sizeCls, className)}
    >
      <Container>{children}</Container>
    </section>
  )
}
