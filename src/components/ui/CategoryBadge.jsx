export default function CategoryBadge({ category }) {
  const styles = {
    news: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    blog: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    review: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    article: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  }
  const labels = {
    news: 'News',
    blog: 'Blog',
    review: 'Review',
    article: 'Article',
  }

  const style = styles[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
  const label = labels[category] || category

  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${style}`}>
      {label}
    </span>
  )
}
