export default function BackgroundSlot({ id, query, ratio = '16x9', width = '1600', className = '', children }) {
  return (
    <div
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  )
}
