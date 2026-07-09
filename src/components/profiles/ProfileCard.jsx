import { Mail, Phone, Briefcase, Building2, MapPin, Globe, FileText, Edit2, Trash2 } from 'lucide-react'

const STATUS_MAP = {
  active: { label: '活跃', bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  inactive: { label: '停用', bg: 'bg-slate-100', text: 'text-slate-500', dot: 'bg-slate-400' },
  pending: { label: '待审核', bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
}

function InfoRow({ icon: Icon, value }) {
  if (!value) return null
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <Icon className="w-4 h-4 text-slate-400 flex-shrink-0" />
      <span className="truncate">{value}</span>
    </div>
  )
}

function Avatar({ name }) {
  const initials = name
    ? name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase()
    : '?'
  return (
    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
      <span className="text-indigo-600 font-semibold text-base">{initials}</span>
    </div>
  )
}

export default function ProfileCard({ profile, onEdit, onDelete }) {
  const fields = profile.data || {}
  const status = STATUS_MAP[fields.status] || STATUS_MAP.active

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Avatar name={fields.name} />
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-slate-900 truncate">{fields.name}</h3>
            {fields.job_title && (
              <p className="text-sm text-slate-500 truncate">{fields.job_title}</p>
            )}
          </div>
        </div>
        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${status.bg} ${status.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <InfoRow icon={Mail} value={fields.email} />
        <InfoRow icon={Phone} value={fields.phone} />
        <InfoRow icon={Building2} value={fields.company} />
        <InfoRow icon={MapPin} value={fields.location} />
        <InfoRow icon={Globe} value={fields.website} />
      </div>

      {fields.demands && (
        <div className="bg-slate-50 rounded-lg p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">需求</span>
          </div>
          <p className="text-sm text-slate-600 line-clamp-2">{fields.demands}</p>
        </div>
      )}

      {fields.bio && (
        <p className="text-sm text-slate-500 italic line-clamp-2">"{fields.bio}"</p>
      )}

      <div className="flex gap-2 pt-1 border-t border-slate-100">
        <button
          onClick={() => onEdit(profile)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-indigo-600 hover:bg-indigo-50 transition font-medium"
        >
          <Edit2 className="w-3.5 h-3.5" />
          编辑
        </button>
        <button
          onClick={() => onDelete(profile)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-red-500 hover:bg-red-50 transition font-medium"
        >
          <Trash2 className="w-3.5 h-3.5" />
          删除
        </button>
      </div>
    </div>
  )
}
