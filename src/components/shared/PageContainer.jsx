import { useImageLoader } from "@/hooks/useImageLoader"

export function PageContainer({ children, deps = [] }) {
  const ref = useImageLoader(deps)
  return (
    <div ref={ref} className="min-h-full">
      {children}
    </div>
  )
}
