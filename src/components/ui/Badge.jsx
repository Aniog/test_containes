import { cn } from '@/lib/utils'

const statusMap = {
  pending: { label: '待审核', className: 'bg-amber-100 text-amber-800' },
  approved: { label: '已通过', className: 'bg-green-100 text-green-800' },
  rejected: { label: '已拒绝', className: 'bg-red-100 text-red-800' },
  paid: { label: '已缴费', className: 'bg-blue-100 text-blue-800' },
  free: { label: '免费', className: 'bg-slate-100 text-slate-700' },
  confirmed: { label: '已确认', className: 'bg-green-100 text-green-800' },
  published: { label: '已发布', className: 'bg-green-100 text-green-800' },
  draft: { label: '草稿', className: 'bg-slate-100 text-slate-700' },
  cancelled: { label: '已取消', className: 'bg-red-100 text-red-800' },
  completed: { label: '已结束', className: 'bg-slate-100 text-slate-700' },
  registered: { label: '已报名', className: 'bg-blue-100 text-blue-800' },
  attended: { label: '已参加', className: 'bg-green-100 text-green-800' },
  refunded: { label: '已退款', className: 'bg-orange-100 text-orange-800' },
}

export function Badge({ status, label, className }) {
  const config = statusMap[status] || { label: status, className: 'bg-slate-100 text-slate-700' }
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', config.className, className)}>
      {label || config.label}
    </span>
  )
}
