export default function CategoryBadge({ category }) {
  const styles = {
    news: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    blog: 'bg-purple-100 text-purple-700 border-purple-300',
    review: 'bg-cyan-100 text-cyan-700 border-cyan-300',
    article: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  }
  const labels = {
    news: 'News',
    blog: 'Blog',
    review: 'Review',
    article: 'Article',
  }

  const style = styles[category] || 'bg-slate-100 text-slate-600 border-slate-300'
  const label = labels[category] || category

  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${style}`}>
      {label}
    </span>
  )
}
