const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ImageBackground({
  bgId,
  query,
  ratio = '16x9',
  width = '1600',
  className = '',
  children,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        data-strk-bg-id={bgId}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${PLACEHOLDER}')` }}
      />
      {children}
    </div>
  )
}
