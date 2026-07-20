export function StockBackground({
  id,
  query,
  ratio = '16x9',
  width = 1200,
  className = '',
}) {
  return (
    <div
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    />
  )
}
