import { cn } from "@/lib/utils"

export default function Section({
  children,
  className,
  containerClassName,
  as: Tag = "section",
  id,
  ...props
}) {
  return (
    <Tag id={id} className={cn("py-16 md:py-24", className)} {...props}>
      <div className={cn("container-x", containerClassName)}>{children}</div>
    </Tag>
  )
}

export function SectionHeader({ eyebrow, title, description, align = "left", className }) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center"
      : "max-w-2xl"
  return (
    <div className={cn("mb-10 md:mb-14", alignClass, className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      {title && (
        <h2 className="h-section">
          {title}
        </h2>
      )}
      {description && (
        <p className="body-base mt-4">
          {description}
        </p>
      )}
    </div>
  )
}
