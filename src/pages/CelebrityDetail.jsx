import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Edit, Trash2, Users, TrendingUp, FileText, Target, Brain, MessageSquare, Sparkles, Globe, DollarSign, Activity } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts'

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

const mockEngagementData = [
  { day: 'Mon', likes: 1200, comments: 340, shares: 89 },
  { day: 'Tue', likes: 1800, comments: 520, shares: 145 },
  { day: 'Wed', likes: 900, comments: 210, shares: 67 },
  { day: 'Thu', likes: 2400, comments: 780, shares: 234 },
  { day: 'Fri', likes: 3100, comments: 920, shares: 312 },
  { day: 'Sat', likes: 2700, comments: 640, shares: 198 },
  { day: 'Sun', likes: 1900, comments: 450, shares: 123 },
]

function InfoSection({ icon: Icon, title, children }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-violet-400" />
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default function CelebrityDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [celeb, setCeleb] = useState(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    try {
      const [celebRes, postsRes] = await Promise.all([
        client.from('Virtual Celebrities').select('*').eq('id', id).single(),
        client.from('Content Posts').select('*').eq('celebrity_id', parseInt(id)).order('created_at', { ascending: false }).limit(10),
      ])
      setCeleb(celebRes?.data ?? null)
      setPosts(postsRes?.data?.list ?? [])
    } catch (e) {
      console.error('Load celebrity error:', e)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => { load() }, [load])

  const handleDelete = async () => {
    if (!confirm(`Delete "${celeb?.data?.name}"? This cannot be undone.`)) return
    await client.from('Virtual Celebrities').delete().eq('id', id).maybeSingle()
    navigate('/celebrities')
  }

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-[#1a1a2e] rounded w-48" />
        <div className="h-48 bg-[#1a1a2e] rounded-2xl" />
      </div>
    )
  }

  if (!celeb) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500 mb-4">Celebrity not found.</p>
        <Link to="/celebrities"><Button variant="secondary">Back to Celebrities</Button></Link>
      </div>
    )
  }

  const d = celeb.data || {}
  const gradientIndex = parseInt(id) % avatarGradients.length

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Back */}
      <div className="flex items-center justify-between">
        <Link to="/celebrities">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Celebrities
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <Link to={`/celebrities/${id}/edit`}>
            <Button variant="secondary" size="sm"><Edit className="w-4 h-4" />Edit</Button>
          </Link>
          <Button variant="ghost" size="sm" onClick={handleDelete} className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Hero Card */}
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-violet-900/60 via-[#1a1a2e] to-cyan-900/40 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-cyan-500/10" />
        </div>
        <CardContent className="p-6 -mt-12 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
            <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${avatarGradients[gradientIndex]} flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-[#1a1a2e] flex-shrink-0`}>
              {(d.name || '?')[0]}
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-slate-100">{d.name}</h1>
                <Badge variant={statusColors[d.status] || 'default'}>{d.status}</Badge>
              </div>
              <p className="text-slate-400 text-sm">{d.tagline || 'No tagline set'}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {d.category && <Badge variant="active">{d.category}</Badge>}
                {d.avatar_style && <Badge variant="default">{d.avatar_style}</Badge>}
                {d.age_range && <Badge variant="default">{d.age_range}</Badge>}
                {d.gender_presentation && <Badge variant="default">{d.gender_presentation}</Badge>}
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#2a2a3e]">
            {[
              { label: 'Followers', value: d.follower_count >= 1000 ? `${(d.follower_count/1000).toFixed(1)}K` : (d.follower_count || 0), icon: Users, color: 'text-violet-400' },
              { label: 'Engagement', value: d.engagement_rate ? `${d.engagement_rate}%` : '—', icon: TrendingUp, color: 'text-cyan-400' },
              { label: 'Total Posts', value: d.total_posts || posts.length, icon: FileText, color: 'text-emerald-400' },
              { label: 'Platforms', value: d.primary_platforms?.length || 0, icon: Globe, color: 'text-amber-400' },
            ].map(({ label, value, icon: Icon, color }) => (
              <div key={label} className="text-center">
                <Icon className={`w-5 h-5 ${color} mx-auto mb-1`} />
                <div className="text-xl font-bold text-slate-100">{value}</div>
                <div className="text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Engagement Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                Weekly Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={mockEngagementData}>
                  <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid #2a2a3e', borderRadius: '12px', color: '#f1f5f9' }} />
                  <Bar dataKey="likes" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="comments" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="shares" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Backstory */}
          {d.backstory && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-violet-400" />
                  Backstory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm leading-relaxed">{d.backstory}</p>
              </CardContent>
            </Card>
          )}

          {/* Recent Posts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-violet-400" />
                Recent Posts
              </CardTitle>
              <Link to="/content">
                <Button variant="ghost" size="sm" className="text-xs">View all</Button>
              </Link>
            </CardHeader>
            <CardContent>
              {posts.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-sm">No posts yet</p>
                  <Link to="/content"><Button variant="ghost" size="sm" className="mt-2 text-xs">Create first post</Button></Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {posts.map(post => {
                    const pd = post.data || {}
                    return (
                      <div key={post.id} className="flex items-start gap-3 p-3 rounded-xl bg-[#12121a] border border-[#2a2a3e]">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-slate-200 font-medium truncate">{pd.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="default" className="text-xs">{pd.platform}</Badge>
                            <Badge variant="default" className="text-xs">{pd.content_type}</Badge>
                            <Badge variant={pd.status === 'published' ? 'success' : 'default'} className="text-xs">{pd.status}</Badge>
                          </div>
                        </div>
                        <div className="text-right text-xs text-slate-600 flex-shrink-0">
                          <div>{pd.likes || 0} ♥</div>
                          <div>{pd.comments || 0} 💬</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Bio */}
          {d.bio && (
            <Card>
              <CardHeader><CardTitle className="text-sm">Bio</CardTitle></CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm leading-relaxed">{d.bio}</p>
              </CardContent>
            </Card>
          )}

          {/* Personality */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Brain className="w-4 h-4 text-violet-400" />
                Personality
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {d.personality_traits?.length > 0 && (
                <div>
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Traits</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.personality_traits.map(t => <Badge key={t} variant="active">{t}</Badge>)}
                  </div>
                </div>
              )}
              {d.core_values?.length > 0 && (
                <div>
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Core Values</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.core_values.map(v => <Badge key={v} variant="cyan">{v}</Badge>)}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Communication */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                Communication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {d.communication_tone && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Tone</span>
                  <Badge variant="active">{d.communication_tone}</Badge>
                </div>
              )}
              {d.language_style && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Style</span>
                  <Badge variant="default">{d.language_style}</Badge>
                </div>
              )}
              {d.target_audience && (
                <div>
                  <p className="text-xs text-slate-500 mb-1">Target Audience</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{d.target_audience}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-emerald-400" />
                Content Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {d.primary_platforms?.length > 0 && (
                <div>
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Platforms</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.primary_platforms.map(p => <Badge key={p} variant="success">{p}</Badge>)}
                  </div>
                </div>
              )}
              {d.content_themes?.length > 0 && (
                <div>
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Themes</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.content_themes.map(t => <Badge key={t} variant="default">{t}</Badge>)}
                  </div>
                </div>
              )}
              {d.posting_frequency && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Frequency</span>
                  <Badge variant="warning">{d.posting_frequency}</Badge>
                </div>
              )}
              {d.monetization_strategy?.length > 0 && (
                <div>
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Monetization</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.monetization_strategy.map(m => <Badge key={m} variant="cyan">{m}</Badge>)}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Brand Colors */}
          {(d.primary_color || d.secondary_color) && (
            <Card>
              <CardHeader><CardTitle className="text-sm">Brand Colors</CardTitle></CardHeader>
              <CardContent className="flex gap-3">
                {d.primary_color && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg border border-[#2a2a3e]" style={{ background: d.primary_color }} />
                    <span className="text-xs text-slate-400 font-mono">{d.primary_color}</span>
                  </div>
                )}
                {d.secondary_color && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg border border-[#2a2a3e]" style={{ background: d.secondary_color }} />
                    <span className="text-xs text-slate-400 font-mono">{d.secondary_color}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
