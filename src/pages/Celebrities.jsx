import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Users, PlusCircle, Search, Filter, TrendingUp, Activity, Trash2, Edit, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const avatarGradients = [
  'from-violet-600 to-pink-500',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-indigo-500 to-violet-600',
]

const statusColors = { active: 'success', draft: 'default', paused: 'warning', archived: 'danger' }
const categoryColors = { influencer: 'active', musician: 'cyan', gamer: 'success', fitness: 'warning', fashion: 'active', tech: 'cyan', lifestyle: 'success', comedian: 'warning', educator: 'active', other: 'default' }

export default function Celebrities() {
  const [celebrities, setCelebrities] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [deletingId, setDeletingId] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await client.from('Virtual Celebrities').select('*').order('created_at', { ascending: false })
      setCelebrities(res?.data?.list ?? [])
    } catch (e) {
      console.error('Load celebrities error:', e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  const handleDelete = async (celeb) => {
    if (!confirm(`Delete "${celeb.data?.name}"? This cannot be undone.`)) return
    setDeletingId(celeb.id)
    try {
      await client.from('Virtual Celebrities').delete().eq('id', celeb.id).maybeSingle()
      setCelebrities(prev => prev.filter(c => c.id !== celeb.id))
    } catch (e) {
      console.error('Delete error:', e)
    } finally {
      setDeletingId(null)
    }
  }

  const handleStatusChange = async (celeb, newStatus) => {
    try {
      const { data: response } = await client
        .from('Virtual Celebrities')
        .update({ data: { ...celeb.data, status: newStatus } })
        .eq('id', celeb.id)
        .select()
        .single()
      if (response?.data) {
        setCelebrities(prev => prev.map(c => c.id === celeb.id ? response.data : c))
      }
      await load()
    } catch (e) {
      console.error('Status update error:', e)
    }
  }

  const filtered = celebrities.filter(c => {
    const d = c.data || {}
    const matchSearch = !search || (d.name || '').toLowerCase().includes(search.toLowerCase()) || (d.tagline || '').toLowerCase().includes(search.toLowerCase())
    const matchStatus = !filterStatus || d.status === filterStatus
    const matchCategory = !filterCategory || d.category === filterCategory
    return matchSearch && matchStatus && matchCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">My Celebrities</h1>
          <p className="text-slate-500 text-sm mt-1">{celebrities.length} virtual celebrities in your studio</p>
        </div>
        <Link to="/create">
          <Button variant="gradient">
            <PlusCircle className="w-4 h-4" />
            Create New
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or tagline..." className="pl-9" />
        </div>
        <Select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="sm:w-40">
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
          <option value="paused">Paused</option>
          <option value="archived">Archived</option>
        </Select>
        <Select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="sm:w-44">
          <option value="">All Categories</option>
          {['influencer','musician','gamer','fitness','fashion','tech','lifestyle','comedian','educator','other'].map(c => (
            <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
          ))}
        </Select>
      </div>

      {/* Content */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#2a2a3e]" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-[#2a2a3e] rounded w-3/4" />
                    <div className="h-3 bg-[#2a2a3e] rounded w-1/2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <Card className="border-dashed border-violet-500/20">
          <CardContent className="p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-violet-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              {search || filterStatus || filterCategory ? 'No celebrities match your filters' : 'No celebrities yet'}
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              {search || filterStatus || filterCategory ? 'Try adjusting your search or filters.' : 'Create your first AI-powered virtual celebrity.'}
            </p>
            {!search && !filterStatus && !filterCategory && (
              <Link to="/create">
                <Button variant="gradient"><PlusCircle className="w-4 h-4" />Create Celebrity</Button>
              </Link>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((celeb, i) => {
            const d = celeb.data || {}
            return (
              <Card key={celeb.id} className="hover:border-violet-500/30 transition-all group">
                <CardContent className="p-6">
                  {/* Avatar + Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0`}>
                      {(d.name || '?')[0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-slate-100 truncate">{d.name || 'Unnamed'}</h3>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{d.tagline || 'No tagline'}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <Badge variant={statusColors[d.status] || 'default'}>{d.status || 'draft'}</Badge>
                        {d.category && <Badge variant={categoryColors[d.category] || 'default'}>{d.category}</Badge>}
                        {d.avatar_style && <Badge variant="default">{d.avatar_style}</Badge>}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#2a2a3e] mb-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-200">
                        {d.follower_count >= 1000 ? `${(d.follower_count/1000).toFixed(1)}K` : (d.follower_count || 0)}
                      </div>
                      <div className="text-xs text-slate-600">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-200">{d.engagement_rate ? `${d.engagement_rate}%` : '—'}</div>
                      <div className="text-xs text-slate-600">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-200">{d.total_posts || 0}</div>
                      <div className="text-xs text-slate-600">Posts</div>
                    </div>
                  </div>

                  {/* Platforms */}
                  {d.primary_platforms?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {d.primary_platforms.slice(0, 4).map(p => (
                        <span key={p} className="text-xs bg-[#12121a] border border-[#2a2a3e] text-slate-400 px-2 py-0.5 rounded-full">{p}</span>
                      ))}
                      {d.primary_platforms.length > 4 && (
                        <span className="text-xs text-slate-600">+{d.primary_platforms.length - 4}</span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Link to={`/celebrities/${celeb.id}`} className="flex-1">
                      <Button variant="secondary" size="sm" className="w-full">
                        <Eye className="w-3 h-3" />
                        View
                      </Button>
                    </Link>
                    <Link to={`/celebrities/${celeb.id}/edit`}>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(celeb)}
                      disabled={deletingId === celeb.id}
                      className="text-slate-600 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Quick Status Toggle */}
                  {d.status === 'draft' && (
                    <button
                      type="button"
                      onClick={() => handleStatusChange(celeb, 'active')}
                      className="mt-2 w-full text-xs text-center text-emerald-400 hover:text-emerald-300 py-1.5 rounded-lg hover:bg-emerald-500/10 transition-all border border-transparent hover:border-emerald-500/20"
                    >
                      ▶ Activate Celebrity
                    </button>
                  )}
                  {d.status === 'active' && (
                    <button
                      type="button"
                      onClick={() => handleStatusChange(celeb, 'paused')}
                      className="mt-2 w-full text-xs text-center text-amber-400 hover:text-amber-300 py-1.5 rounded-lg hover:bg-amber-500/10 transition-all border border-transparent hover:border-amber-500/20"
                    >
                      ⏸ Pause Celebrity
                    </button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
