const STATUS_CONFIG = {
  active:   { label: '活跃',   dot: 'bg-emerald-500', badge: 'text-emerald-700 bg-emerald-50' },
  inactive: { label: '停用',   dot: 'bg-slate-400',   badge: 'text-slate-600 bg-slate-100' },
  pending:  { label: '待审核', dot: 'bg-amber-500',   badge: 'text-amber-700 bg-amber-50' },
}

const BUSINESS_TYPE_LABELS = {
  startup: '初创公司',
  sme: '中小企业',
  enterprise: '大型企业',
  government: '政府机构',
  ngo: '非营利组织',
  other: '其他',
}

export default function EnterpriseCard({ enterprise, onEdit, onDelete }) {
  const d = enterprise?.data ?? {}
  const status = STATUS_CONFIG[d.status] ?? STATUS_CONFIG.pending

  const initials = (d.company_name || '?')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between p-4 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg flex-shrink-0">
            {initials}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-slate-800 text-base leading-tight truncate">{d.company_name}</h3>
            <p className="text-sm text-slate-500 mt-0.5">
              {BUSINESS_TYPE_LABELS[d.business_type] ?? ''}
              {d.business_type && d.industry ? ' · ' : ''}
              {d.industry ?? ''}
            </p>
          </div>
        </div>
        <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${status.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>

      {/* Info rows */}
      <div className="px-4 pb-3 flex flex-col gap-1.5 text-sm text-slate-600">
        {d.contact_email && (
          <div className="flex items-center gap-2">
            <span className="text-slate-400">✉</span>
            <span className="truncate">{d.contact_email}</span>
          </div>
        )}
        {d.contact_phone && (
          <div className="flex items-center gap-2">
            <span className="text-slate-400">☎</span>
            <span>{d.contact_phone}</span>
          </div>
        )}
        {d.contact_person && (
          <div className="flex items-center gap-2">
            <span className="text-slate-400">👤</span>
            <span>{d.contact_person}</span>
          </div>
        )}
        {(d.city || d.country) && (
          <div className="flex items-center gap-2">
            <span className="text-slate-400">📍</span>
            <span>{[d.city, d.country].filter(Boolean).join(', ')}</span>
          </div>
        )}
        {d.company_size && (
          <div className="flex items-center gap-2">
            <span className="text-slate-400">👥</span>
            <span>{d.company_size} 人</span>
          </div>
        )}
        {d.founded_year && (
          <div className="flex items-center gap-2">
            <span className="text-slate-400">📅</span>
            <span>成立于 {d.founded_year} 年</span>
          </div>
        )}
        {d.website && (
          <div className="flex items-center gap-2">
            <span className="text-slate-400">🔗</span>
            <a
              href={d.website}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline truncate"
            >
              {d.website.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
      </div>

      {/* Demands */}
      {d.demands && (
        <div className="mx-4 mb-3 p-3 bg-indigo-50 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-xs font-semibold text-indigo-600">需求</span>
          </div>
          <p className="text-sm text-slate-700 line-clamp-2">{d.demands}</p>
        </div>
      )}

      {/* Description */}
      {d.description && (
        <p className="px-4 pb-3 text-sm text-slate-500 italic line-clamp-2">
          "{d.description}"
        </p>
      )}

      {/* Actions */}
      <div className="flex gap-2 px-4 pb-4 mt-auto pt-2 border-t border-slate-100">
        <button
          onClick={() => onEdit(enterprise)}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition"
        >
          ✏ 编辑
        </button>
        <button
          onClick={() => onDelete(enterprise)}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-sm font-medium text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition"
        >
          🗑 删除
        </button>
      </div>
    </div>
  )
}
