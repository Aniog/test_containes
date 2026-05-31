import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, TrendingUp, FileText, Zap, PlusCircle, ArrowRight, Star, Activity } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const mockGrowthData = [
  { month: 'Jan', followers: 12000 },
  { month: 'Feb', followers: 28000 },
  { month: 'Mar', followers: 45000 },
  { month: 'Apr', followers: 67000 },
  { month: 'May', followers: 89000 },
  { month: 'Jun', followers: 124000 },
]

const categoryColors = {
  influencer: 'active',
  musician: 'cyan',
  gamer: 'success',
  fitness: 'warning',
  fashion: 'active',
  tech: 'cyan',
  lifestyle: 'success',
  comedian: 'warning',
  educator: 'active',
  other: 'default',
}

const statusColors = {
  active: 'success',
  draft: 'default',
  paused: 'warning',
  archived: 'danger',
}

const avatarGradients = [
  'from-violet-600 to-pink-500',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-indigo-500 to-violet-600',
]

export default function Dashboard() {
  const [celebrities, setCelebrities] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [celebRes, postRes] = await Promise.all([
          client.from('Virtual Celebrities').select('*').order('created_at', { ascending: false }).limit(6),
          client.from('Content Posts').select('*').order('created_at', { ascending: false }).limit(5),
        ])
        setCelebrities(celebRes?.data?.list ?? [])
        setPosts(postRes?.data?.list ?? [])
      } catch (e) {
        console.error('Dashboard load error:', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const activeCelebs = celebrities.filter(c => c.data?.status === 'active').length
  const totalFollowers = celebrities.reduce((sum, c) => sum + (c.data?.follower_count || 0), 0)
  const totalPosts = posts.length

  const stats = [
    { label: 'Total Celebrities', value: celebrities.length, icon: Users, color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { label: 'Active Celebrities', value: activeCelebs, icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Total Followers', value: totalFollowers >= 1000 ? `${(totalFollowers / 1000).toFixed(1)}K` : totalFollowers, icon: TrendingUp, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { label: 'Content Posts', value: totalPosts, icon: FileText, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  ]

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-900/60 via-[#1a1a2e] to-cyan-900/40 border border-violet-500/20 p-8">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-cyan-500/5" />
        <div className="relative flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-violet-400" />
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">AI Celebrity Studio</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">Welcome to VirtuStar</h1>
            <p className="text-slate-400 max-w-lg">Create, manage, and grow AI-powered virtual celebrities. Define their personality, appearance, and content strategy — all in one place.</p>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/create">
              <Button variant="gradient" size="lg">
                <PlusCircle className="w-5 h-5" />
                Create Celebrity
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <Card key={label} className="hover:border-violet-500/30 transition-all">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-100">{loading ? '—' : value}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              Follower Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={mockGrowthData}>
                <defs>
                  <linearGradient id="followersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
                <Tooltip
                  contentStyle={{ background: '#1a1a2e', border: '1px solid #2a2a3e', borderRadius: '12px', color: '#f1f5f9' }}
                  formatter={v => [`${(v/1000).toFixed(1)}K followers`]}
                />
                <Area type="monotone" dataKey="followers" stroke="#7c3aed" strokeWidth={2} fill="url(#followersGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Posts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-violet-400" />
              Recent Posts
            </CardTitle>
            <Link to="/content">
              <Button variant="ghost" size="sm" className="text-xs">View all <ArrowRight className="w-3 h-3" /></Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {loading ? (
              <div className="text-slate-500 text-sm text-center py-4">Loading...</div>
            ) : posts.length === 0 ? (
              <div className="text-center py-6">
                <FileText className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-slate-500 text-sm">No posts yet</p>
                <Link to="/content"><Button variant="ghost" size="sm" className="mt-2 text-xs">Create first post</Button></Link>
              </div>
            ) : (
              posts.map((post, i) => (
                <div key={post.id} className="flex items-start gap-3 p-3 rounded-xl bg-[#12121a] border border-[#2a2a3e]">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {(post.data?.celebrity_name || 'P')[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-200 font-medium truncate">{post.data?.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="default" className="text-xs">{post.data?.platform}</Badge>
                      <Badge variant={post.data?.status === 'published' ? 'success' : 'default'} className="text-xs">{post.data?.status}</Badge>
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      {/* Celebrity Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
            <Star className="w-5 h-5 text-violet-400" />
            Your Celebrities
          </h2>
          <Link to="/celebrities">
            <Button variant="outline" size="sm">View All <ArrowRight className="w-4 h-4" /></Button>
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#2a2a3e] mb-4" />
                  <div className="h-4 bg-[#2a2a3e] rounded w-3/4 mb-2" />
                  <div className="h-3 bg-[#2a2a3e] rounded w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : celebrities.length === 0 ? (
          <Card className="border-dashed border-violet-500/30">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">No celebrities yet</h3>
              <p className="text-slate-500 text-sm mb-6">Create your first AI-powered virtual celebrity to get started.</p>
              <Link to="/create">
                <Button variant="gradient">
                  <PlusCircle className="w-4 h-4" />
                  Create Your First Celebrity
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {celebrities.map((celeb, i) => {
              const d = celeb.data || {}
              return (
                <Link key={celeb.id} to={`/celebrities/${celeb.id}`}>
                  <Card className="hover:border-violet-500/40 hover:shadow-violet-500/10 transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0`}>
                          {(d.name || '?')[0]}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-slate-100 group-hover:text-violet-300 transition-colors truncate">{d.name}</h3>
                          <p className="text-xs text-slate-500 truncate mt-0.5">{d.tagline || 'No tagline set'}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant={statusColors[d.status] || 'default'}>{d.status}</Badge>
                            <Badge variant={categoryColors[d.category] || 'default'}>{d.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#2a2a3e]">
                        <div className="text-center">
                          <div className="text-sm font-semibold text-slate-200">{d.follower_count >= 1000 ? `${(d.follower_count/1000).toFixed(1)}K` : (d.follower_count || 0)}</div>
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
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
